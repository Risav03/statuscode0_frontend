"use client";
import Image from "next/image";
import bg from "@assets/background.png";
import Navbar from "@components/Navbar";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import Web3 from "web3";
import axios from "axios";
import { useAccount, useConnect, useDisconnect } from "wagmi";


  const web3 = new Web3(window?.ethereum);




var contract = null;

const Upload = () => {
  const [newTag, setNewTag] = useState();
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [hash, setHash] = useState("");
  const [account, setAccount] = useState("");

  const { address, isConnecting, isDisconnected } = useAccount({
    onConnect: ({ address, isReconnected, connector: activeConnector }) => {
      setAccount(address);

    },
    onDisconnect() {
      setAccount(null);

    },
  });

  const getGasPrice = async () => {
    let gb = await web3.eth.getGasPrice().then();
    gb = parseInt(gb);
    gb = gb + 100000000000;
    return gb;
  };

  async function ipfsbackend(uploadData){
    let url = "https://972c-103-2-135-35.ngrok.io/api/datasetData/uploadData"
    console.log("Sending data:", uploadData);
   const response = await axios.post(url, uploadData);
   console.log(response);
  }
   


  //axios call and after ipfs response do mint

  const mint = async (account, uri) => {
    const ADDRESS = "0x1617C0CE2899cD8189dF26a9DF798e8bEbC87ed7";
    const ABI = [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_fromTokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_toTokenId",
            "type": "uint256"
          }
        ],
        "name": "BatchMetadataUpdate",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "MetadataUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "uri",
            "type": "string"
          }
        ],
        "name": "safeMint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ];
    let gas = await getGasPrice();


    contract = new web3.eth.Contract(ABI, ADDRESS);

    contract?.methods.safeMint(account, uri).send({from: account, gasPrice: gas}).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
    
  }

  const [featureList, setFeatureList] = useState([]);

  useEffect(()=>{
    console.log(account);
    axios.get("https://54f3-103-2-135-35.ngrok.io/api/datasetData/remaining_data").then((res)=>{
        console.log(res);
        setFeatureList(res);
    }).catch((err)=>{
      console.log("err remdat:", err);
    })
  }, [])

  const [imageStr, setImageStr ] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    handleFileInputChange()

    if(name===""){
      setError("Name is required");
      return;
    }
    if(description===""){
      setError("Description is required");
      return;
    }
    if(imageStr===null){
      setError("Image is loading, press upload again!");
      return;
    }
    if(image===null){
      setError("Image is required");
      return;
    }
    if(tags.length===0){
      setError("Tags are required");
      return;
    }



    const uploadData = {
      img: imageStr,
      metadata: {
        name: name,
        description: description,
        tags: tags,
      },
      remaining_data: featureList?.data || []
    }

    console.log("upData: ", uploadData);

    const res = await axios.post("https://a182-2401-4900-7086-3f6-9836-967e-70e9-46e8.ngrok-free.app/api/isSimilar", uploadData)
    console.log("HHHH", res)
    const imgLink = res?.data?.image;
    const nftMetadata = "ipfs://"+res?.data?.nftMetadata;
    
    console.log("imaaaag:", imgLink);
    console.log("meeetaa:", nftMetadata);

mint(account, nftMetadata);

    // .then((res)=>{
    //   console.log("Is similar:"+ res)})
    //   const imgLink = res;
    //   console.log("image Link: ", imgLink);
    

    // ipfsbackend(uploadData);
  }

  function handleFileInputChange() {

    const file = image;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {

      const base64String = reader.result.split(",")[1].trim();
      // console.log(base64String);

      setImageStr(base64String);
    };
    reader.onerror = () => {
      setError('Error occurred while reading the file.');
      console.error('Error occurred while reading the file.');
    };
  }

  return (
    <>
      <Navbar type={"mkt"} />

      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center gap-4 z-[-9999]">
        <Image
          src={bg}
          alt="bg"
          width={1920}
          className="w-screen h-screen object-cover"
        />
      </div>

      <div className="">
        <div className="w-[70%] mx-auto py-28">
          <h2 className="text-blue-mid font-semibold text-4xl">
            Upload your Data
          </h2>

          <div>
            <form>
              <div>
                <h2 className="mt-2 mb-4 text-blue-dark font-semibold text-xl">
                  Upload an image
                </h2>
                {/* <div className="w-full flex items-center justify-start placeholder:text-blue-light/30 mb-5 outline-none focus:outline outline-blue-mid outline-[1px] px-5 text-blue-light text-base focus:bg-blue-mid/10 h-12 rounded-lg border-blue-mid bg-black/20">
                  <input
                    type="file"
                    name="image_file"
                    accept="image/*"
                    multiple
                    className=""
                  />
                </div> */}
                <div className="flex items-center justify-center w-full">
                {image ? (
                  <div className="relative w-full h-80">
                    <img
                      className="w-full h-full object-cover rounded-xl"
                      src={URL.createObjectURL(image)}
                      alt="Image"
                    />
                    <button
                      className="absolute top-2 right-2 w-6 h-6 bg-blue-mid rounded-full flex items-center justify-center"
                      onClick={() => setImage(null)}
                    >
                      <RxCross2 className="w-4 h-4 text-blue-mid" />
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full border-2 border-blue-mid border-dashed rounded-lg cursor-pointer bg-blue-mid/10 hover:bg-blue-dark/30"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-10 h-10 mb-3 text-blue-light"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className="mb-2 text-sm text-blue-mid">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-blue-light">
                        SVG, PNG, JPG or Webp
                      </p>
                    </div>
                    <input
                      onChange={(e) => {
                        if (e.target.files) {
                          setImage(e.target.files[0]);
                        }
                      }}
                      id="dropzone-file"
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              </div>

              <div>
                <h2 className="mt-6 text-blue-dark font-semibold mb-6 text-xl">
                  Name
                </h2>
                <input
                  placeholder="Name your Data..."
                  type=""
                  value={name}
                  onChange={(e)=>{
                    setName(e.target.value)
                  }}
                  className="w-full flex items-center justify-start placeholder:text-blue-light/30 mb-5 outline-none focus:outline outline-blue-mid outline-[1px] px-5 text-blue-light text-base focus:bg-blue-mid/10 h-12 rounded-lg border-blue-mid bg-black/20"
                />
              </div>

              <div>
                <h2 className="mt-6 text-blue-dark font-semibold mb-6 text-xl">
                  Description
                </h2>
                <textarea
                  placeholder="Write a Description..."
                  style={{ resize: "none" }}
                  rows="8"
                  type="textarea"
                  value={description}
                  onChange={(e)=>{
                    setDescription(e.target.value)
                  }}
                  className="w-full flex items-center justify-start placeholder:text-blue-light/30 mb-5 outline-none focus:outline outline-blue-mid outline-[1px] px-5 text-blue-light text-base focus:bg-blue-mid/10 pt-5 rounded-lg border-blue-mid bg-black/20"
                  name="description"
                />
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <h2 className=" tracking-wide text-blue-dark text-xl font-semibold mt-6 mb-6">
                    Tags
                  </h2>
                  <div className="flex items-start text-sm space-x-2">
                    <div className="w-full">
                      <input
                        id="input2"
                        minLength={2}
                        className="w-full flex items-center justify-start placeholder:text-blue-light/30 mb-5 outline-none focus:outline outline-blue-mid outline-[1px] px-5 text-blue-light text-base focus:bg-blue-mid/10 h-12 rounded-lg border-blue-mid bg-black/20"
                        type="text"
                        placeholder="Min 2 characters"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                      />
                     
                    </div>
                    <div
                      className="text-center py-3 px-8 text-md font-medium bg-peach-dark text-gray-100 rounded-2xl cursor-pointer sm:w-min hover:bg-peach hover:text-gray-50 fundo-button hover:opacity-90"
                      onClick={() => {
                        if (newTag.length >= 2) {
                          setTags((prev) => [...prev, newTag]);
                          setNewTag("");
                        }
                      }}
                    >
                      <span className="bg-blue-mid hover:bg-blue-dark py-2 px-4 text-white font-semibold rounded-full text-xl">Add</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-1 overflow-hidden">
                    {tags?.map((tag, index) => {
                      return (
                        <div
                          className="my-1 px-1 w-max overflow-hidden"
                        >
                          <div className="flex items-center justify-between px-2 py-1 bg-gray-200 rounded-full">
                            <span className="text-sm p-1 font-semibold text-gray-500">
                              {tag}
                            </span>
                            <button
                              className="text-blue-mid hover:text-blue-dark hover:opacity-70"
                              onClick={() => {
                                setTags((prev) =>
                                  prev.filter((t, i) => i !== index)
                                );
                              }}
                            >
                              <RxCross2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {error && <h2 className="mt-2 mb-4 text-red-500 text-base">
            {error}
          </h2>}


              <button type="button" onClick={handleUpload} className="bg-blue-mid hover:bg-blue-dark py-2 px-4 text-white font-semibold rounded-full text-xl">
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
