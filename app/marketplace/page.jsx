"use client"
import Image from "next/image"
import bg from "@assets/background.png"
import Navbar from "@components/Navbar"
import { useState } from "react"

const Marketplace = () => {

  const [dataArray, setDataArray] = useState([
    {
      id: 1,
      image: "",
      title: "title",
      description: "description",
      tags: ["hello", "hiie", "wow"]
    },
    {
      id: 1,
      image: "",
      title: "title",
      description: "description",
      tags: ["hello", "hoooo", "wow"]
    },

    {
      id: 1,
      image: "",
      title: "title",
      description: "description",
      tags: ["hello", "hiie", "wow"]
    },
    {
      id: 1,
      image: "",
      title: "title",
      description: "description",
      tags: ["hello", "hoooo", "wow"]
    },
    {
      id: 1,
      image: "",
      title: "title",
      description: "description",
      tags: ["hello", "hiie", "wow"]
    },
    {
      id: 1,
      image: "",
      title: "title",
      description: "description",
      tags: ["hello", "hiie", "wow"]
    },
    {
      id: 1,
      image: "",
      title: "title",
      description: "description",
      tags: ["hello", "hiie", "wow"]
    },
    {
      id: 1,
      image: "",
      title: "title",
      description: "description",
      tags: ["hello", "hiie", "wow"]
    },

  ]);

  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState([]);

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
              <h2>Total data items: <span className="text-white"> {"1285"}  </span></h2>
              <button onClick={()=>{
                handleDataBasket()
            }} className="px-4 text-base h-12 bg-blue-mid hover:bg-blue-dark rounded-lg font-semibold text-white">Add Data to Basket</button>
            </div>
            </div>
          
          <div className="flex flex-row py-5 flex-wrap outline outline-blue-mid h-[600px] overflow-hidden items-start justify-center gap-5 outline-[1px] px-5 text-blue-light text-xl w-[80%] rounded-lg border-blue-mid bg-black/20">
            
            
            
            <div className="flex flex-row flex-wrap gap-4">
            {filterObjectsByTags()?.map((data, index)=>(
              <div key={data?.id} className="border-blue-mid border-[1px] rounded p-3">
                {/* <h2 className="text-blue-light font-semibold text-center text-lg mb-5 ">{data?.image}</h2> */}
                <div className="w-full rounded h-32 bg-blue-mid/40 mb-2 "></div>
                <h2 className="text-blue-mid font-semibold text-lg ">{data?.title}</h2>
                <h2 className="text-blue-light text-sm mb-5 ">{data?.description}</h2>

                <div className="flex flex-row flex-wrap gap-1">
                {
                  data?.tags?.map((tag, index)=>(
                    <span key={index} className="text-black bg-blue-mid rounded-full px-2 py-0.5 font-semibold text-center text-xs">{tag}</span>
                  ))
                }
                </div>
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