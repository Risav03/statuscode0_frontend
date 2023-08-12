"use client"
import { useState } from "react";
import {RxCross2} from "react-icons/rx"

const Upload = () => {

  const [newTag, setNewTag] = useState();
  const [tags, setTags] = useState([]);
  return (
    <div className="bg-slate-900">
      <div className="w-[70%] mx-auto py-28">
        <h2 className="text-white font-semibold text-4xl">Upload your Data</h2>

        <div>
          

       <form>

        <div>
          <h2 className="mt-6 text-slate-500 font-semibold text-xl">Upload an image</h2>
          <div className="w-[80%] h-56 my-10 border-2 border-slate-700 bg-slate-800 rounded-3xl mx-auto">
            <input type="file"name="image_file" accept="image/*" multiple className="" />
          </div>
       </div>
       

        <div>
            <h2 className="mt-6 text-slate-500 font-semibold mb-6 text-xl">Name</h2>
            <input placeholder="Name your Data..." type="" className="block w-[100%] bg-slate-800 border-2 border-slate-700 rounded-xl text-[1rem] py-2 px-4 text-white"/>
        </div>

        <div>
            <h2 className="mt-6 text-slate-500 font-semibold mb-6 text-xl">Description</h2>
            <textarea placeholder="Write a Description..." style={{resize:"none"}} rows="8" type="textarea" className="w-[100%] bg-slate-800 border-2 border-slate-700 rounded-xl text-[1rem] py-2 px-4 text-white" name="description"/>
        </div>


        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <h2
                className=" tracking-wide text-slate-500 text-xl font-semibold mt-6 mb-6"
              >
                Tags
              </h2>
              <div className="flex items-start text-sm space-x-2">
                <div className="w-full">
                  <input
                    id="input2"
                    minLength={5}
                    className="appearance-none block w-full bg-slate-800 text-white border-2 border-slate-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white peer text-[1rem]"
                    type="text"
                    placeholder="Min 5 characters"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                  />
                  <p className="text-red-500 text-xs italic hidden peer-invalid:block">
                    less than 5 characters
                  </p>
                </div>
                <div
                  className="text-center py-3 px-8 text-md font-medium bg-peach-dark text-gray-100 rounded-2xl cursor-pointer sm:w-min hover:bg-peach hover:text-gray-50 fundo-button hover:opacity-90"
                  onClick={() => {
                    if (newTag.length >= 5) {
                      setTags((prev) => [...prev, newTag]);
                      setNewTag("");
                    }
                  }}
                >
                  <span>Add</span>
                </div>
              </div>
              <div className="flex flex-wrap -mx-1 overflow-hidden">
                {tags?.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className="my-1 px-1 w-max overflow-hidden"
                    >
                      <div className="flex items-center justify-between px-2 py-1 bg-gray-200 rounded-full">
                        <span className="text-sm p-1 font-semibold text-gray-500">
                          {tag}
                        </span>
                        <button
                          className="text-gray-500 hover:text-gray-600 hover:opacity-70"
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
          
        <button className="bg-blue-mid hover:bg-blue-dark py-2 px-4 text-white font-semibold rounded-2xl text-xl">
          <input type="submit" value="Upload"/>
        </button>




       </form>
          
        </div>
      </div>

    </div>
  )
}

export default Upload