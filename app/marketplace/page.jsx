"use client"
import Image from "next/image"
import bg from "@assets/background.png"
import Navbar from "@components/Navbar"
import { useState, useEffect } from "react"
import Web3 from "web3";
import { useAccount, useConnect, useDisconnect } from "wagmi";

  const web3 = new Web3(window.ethereum);

var contract = null;


const Marketplace = () => {

  
  // const [dataArray, setDataArray] = useState([
  //   {
  //     id: 1,
  //     image: "",
  //     title: "title",
  //     description: "description",
  //     tags: ["hello", "hiie", "wow"],
  //     price: 10
  //   },
  //   {
  //     id: 1,
  //     image: "",
  //     title: "title",
  //     description: "description",
  //     tags: ["hello", "hoooo", "wow"],
  //     price: 10
  //   },

  //   {
  //     id: 1,
  //     image: "",
  //     title: "title",
  //     description: "description",
  //     tags: ["hello", "hiie", "wow"],
  //     price: 10
  //   },
  //   {
  //     id: 1,
  //     image: "",
  //     title: "title",
  //     description: "description",
  //     tags: ["hello", "hoooo", "wow"],
  //     price: 10
  //   },
  //   {
  //     id: 1,
  //     image: "",
  //     title: "title",
  //     description: "description",
  //     tags: ["hello", "hiie", "wow"],
  //     price: 10
  //   },
  //   {
  //     id: 1,
  //     image: "",
  //     title: "title",
  //     description: "description",
  //     tags: ["hello", "hiie", "wow"],
  //     price: 10
  //   },
  //   {
  //     id: 1,
  //     image: "",
  //     title: "title",
  //     description: "description",
  //     tags: ["hello", "hiie", "wow"],
  //     price: 10
  //   },
  //   {
  //     id: 1,
  //     image: "",
  //     title: "title",
  //     description: "description",
  //     tags: ["hello", "hiie", "wow"],
  //     price: 10
  //   },

  // ]);

  const [dataArray, setDataArray] = useState();

  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState([]);
  const[account, setAccount] = useState("");
  const [isConnect, setConnect] = useState(false);
  const [size, setSize] = useState(null);

  const { address, isConnecting, isDisconnected } = useAccount({
    onConnect: ({ address, isReconnected, connector: activeConnector }) => {
      setAccount(address);
      setConnect(true);

    },
    onDisconnect() {
      setAccount(null);
      setConnect(false);
    },
  });

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

contract = new web3.eth.Contract(ABI, ADDRESS);
console.log("OUTSIDE", account);
async function displayNFTs(){
  console.log("Contract", contract);
  console.log("ACCOUNT", account);
  var balance;
  
  if (isConnect){
    balance = await contract.methods.balanceOf(account)?.call();
  }
  console.log("BALANCE", balance);

  const tempData = [];

  for (let i = 0; i < balance; i++) {
    const userMintedId = parseInt(
      await contract.methods.tokenOfOwnerByIndex(account, i)?.call()
    );
    const tokenURI = await contract.methods.tokenURI(userMintedId)?.call();
    const metadata = `https://ipfs.io/ipfs/${tokenURI.substr(7)}`;
    const meta = await fetch(metadata);
    
    const json = await meta.json();
    const title = json["name"];
    const hash = json["image"].substr(39);
    const image = "https://ipfs.io/ipfs/"+hash;
    console.log("IMAE FILEEEEEE:", image);
    const description = json["description"];
    var arraytags= json["attributes"][0]["value"];
    arraytags = arraytags.replace(/'/g, '"')
    var tags = JSON.parse(arraytags);

    tempData.push({ userMintedId, title, description, tags, image });
    
  }
  console.log("TEMPDATA",tempData);
  const length = tempData.length;
  setSize(length);
  setDataArray(tempData);
  console.log("DATA ARRAY", dataArray);
}
  
  const handleDataBasket = () => {
    console.log("data added to basket")
  }

  const filterObjectsByTags = () => {
    if (!dataArray || dataArray.length === 0 || !tags || tags.length === 0) {
      return dataArray || [];
    }
  
    const filteredArray = dataArray.filter(data =>
      data.tags.some(tag => tags.includes(tag))
    );
  
    return filteredArray;
  };

  useEffect(()=>{
    displayNFTs();
  },[isConnect])

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center gap-4 z-[-9999]">
        <Image
          src={bg}
          alt="bg"
          width={1920}
          className="w-screen h-screen object-cover"
        />
      </div>

      {/* Navbar */}
      <Navbar type={"mkt"}/>
      
      {/* Code Here Manila */}
      <main className="pt-20 overflow-hidden w-screen h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-blue-dark text-center text-4xl font-semibold mb-5">Pick training data for model</h1>
          <div className="flex flex-row w-[80%] gap-4">
            <input onChange={(e) => setNewTag(e.target.value)} value={newTag} placeholder="Search for tags here" type="text" className=" flex-grow w-full placeholder:text-blue-light/30 mb-5 outline-none focus:outline outline-blue-mid outline-[1px] px-5 text-blue-light text-xl focus:bg-blue-mid/10 h-12 rounded-lg border-blue-mid bg-black/20" />
            <button onClick={()=>{
              setTags((prev) => [...prev, newTag]);
              setNewTag("");
            }} className="w-40 h-12 bg-blue-mid hover:bg-blue-dark rounded-lg font-semibold text-white">Add Tag</button>
            <button onClick={()=>{
              setTags((prev) => []);
              setNewTag("");
            }} className="w-40 h-12 bg-blue-mid hover:bg-blue-dark rounded-lg font-semibold text-white">Clear Tags</button>
          </div>
          <div className="flex flex-row w-[80%] text-blue-mid text-lg justify-between items-center mb-4">
              <div className="flex flex-row gap-2">Data with tag:  {tags.map((tag, index)=>(
                tag && <span className="text-white px-2 py-1 bg-blue-dark rounded-full text-sm">
                  {tag}
                </span>
              ))}  
              </div>
              <div className="flex flex-row items-center justify-center gap-5">
              <h2>Total data items: <span className="text-white"> {filterObjectsByTags().length} / {size}  </span></h2>
              <button onClick={()=>{
                handleDataBasket()
            }} className="px-4 text-base h-12 bg-blue-mid hover:bg-blue-dark rounded-lg font-semibold text-white">Add Data to Basket</button>
            </div>
            </div>
          
          <div className="flex flex-row py-5 flex-wrap outline outline-blue-mid h-[600px] overflow-hidden items-start justify-center gap-5 outline-[1px] px-5 text-blue-light text-xl w-[80%] rounded-lg border-blue-mid bg-black/20">
            
            
           
            <div className="flex flex-row flex-wrap gap-4">
            {filterObjectsByTags()?.map((data, index)=>(
              <div key={index} className="border-blue-mid border-[1px] rounded p-3 w-48">
                {console.log("Hi")}
                
                {/* <h2 className="text-blue-light font-semibold text-center text-lg mb-5 ">{data?.image}</h2> */}
                <div className="w-full rounded h-32 bg-blue-mid/40 mb-2 overflow-hidden flex items-center justify-center ">
                <Image src={data.image} width="175" height="175"></Image>
                </div>
                <h2 className="text-blue-mid font-semibold text-lg ">{data?.title}</h2>
                <h2 className="text-blue-light text-sm mb-5 ">{data?.description}</h2>
             <h2 className="relative left-[8.5rem] bottom-[3.5rem]">{data.price}</h2>

                <div className="flex flex-row flex-wrap gap-1">
                {
                  data?.tags.map((tag, index)=>(
                    <span key={index} className="text-black bg-blue-mid rounded-full px-2 py-0.5 font-semibold text-center text-xs">{tag}</span>
                  ))
                }
                  
                </div>
                <div className="bg-blue-mid text-center rounded-lg my-3 py-3 font-bold text-white"><p>Use</p></div>
              </div>
              ))
            }
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Marketplace