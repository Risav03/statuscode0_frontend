import React from "react";
import Image from "next/image";
import trainer from "@assets/ai.png"

const AboutTrainer = () => {
  return (
    <div className="w-screen h-[100vh] flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-blue-mid font-bold text-4xl mt-60">Searching for Training Data?</h1>
      <div className="text-[1rem] grid grid-flow-col grid-col-2 mt-32">
      <div>
         <Image src={trainer} className="relative left-[220px] w-[60%]"/>
      </div>
      <div className="w-[60%] relative left-[200px]">
        <p className="text-right mt-12">Finding legal data for training data is quite a sensitive issue in the current world.<br/>
        <br/>
        What if people willingly provided their data to train you models.<br/>
        <br/>
        You get a varied range of data for free and data providers get rewarded every time you download their data or share data.</p>
      </div>
      </div>
    </div>
  );
};

export default AboutTrainer;
