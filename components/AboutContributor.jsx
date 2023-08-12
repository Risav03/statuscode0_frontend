import React from "react";
import Image from "next/image";
import contributor from "@assets/data.png"

const AboutContributor = () => {
  return (
    <div className="w-[80%] mx-auto h-[100vh] flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-blue-mid font-bold text-4xl mt-20">Want to be a Contributor?</h1>
      <div className="text-[1rem] grid grid-flow-col grid-col-2 mt-32">
        <div className="w-[80%] relative left-[10%]">
          <p className="text-left mt-24">Most AI models are trained on copyrighted data without the permission of the creator.<br/><br></br>
          Here you can help train AI models with your own datasets.<br/><br></br>
          Upload and own your data in form of Non-Fungible Tokens.<br/><br></br>
          Every time someone uses your data to train their model you get rewarded with our native currency token.</p>
        </div>
        <div>
          <Image src={contributor} className="mx-auto w-[85%]"/>
        </div>
      </div>
    </div>
  );
};

export default AboutContributor;
