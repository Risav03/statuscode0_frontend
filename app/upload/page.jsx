"use client";
import Image from "next/image";
import bg from "@assets/background.png";
import Navbar from "@components/Navbar";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Upload = () => {
  const [newTag, setNewTag] = useState();
  const [tags, setTags] = useState([]);
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
                <div className="w-full flex items-center justify-start placeholder:text-blue-light/30 mb-5 outline-none focus:outline outline-blue-mid outline-[1px] px-5 text-blue-light text-base focus:bg-blue-mid/10 h-12 rounded-lg border-blue-mid bg-black/20">
                  <input
                    type="file"
                    name="image_file"
                    accept="image/*"
                    multiple
                    className=""
                  />
                </div>
              </div>

              <div>
                <h2 className="mt-6 text-blue-dark font-semibold mb-6 text-xl">
                  Name
                </h2>
                <input
                  placeholder="Name your Data..."
                  type=""
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
                        minLength={5}
                        className="w-full flex items-center justify-start placeholder:text-blue-light/30 mb-5 outline-none focus:outline outline-blue-mid outline-[1px] px-5 text-blue-light text-base focus:bg-blue-mid/10 h-12 rounded-lg border-blue-mid bg-black/20"
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
                      <span className="bg-blue-mid hover:bg-blue-dark py-2 px-4 text-white font-semibold rounded-full text-xl">Add</span>
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

              <button className="bg-blue-mid hover:bg-blue-dark py-2 px-4 text-white font-semibold rounded-full text-xl">
                <input type="submit" value="Upload" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
