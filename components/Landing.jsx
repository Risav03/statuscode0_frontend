import React from "react";

const Landing = () => {
  return (
    <div className="w-screen h-[100vh] flex flex-col items-center justify-center text-center text-white">
      <div className="grid grid-flow-col grid-col-2 mt-40">
        <div className="text-[2.7rem] leading-relaxed relative right-[80px] mt-10">
          <h1 className="text-blue-dark font-bold ">Own your Data </h1>
          <h1 className="text-blue-mid font-bold">Be in Control</h1>
          <h1 className="text-blue-light font-bold ">Start Earning</h1>
        </div>
        <div className="relative left-[130px] border border-blue-mid text-[1.2rem] rounded-xl px-24 bg-black/20 ">
          <h2 className="text-blue-mid my-5"><b>Don't</b> <span className="text-white"> let</span> giants sell your data</h2>
          <h2 className="text-blue-mid my-5">Upload <span className="text-white">your data and</span> own it <span className="text-white">in <br/>form of</span> <b>NFTs</b></h2>
          <h2 className="text-blue-mid my-5">Help train AI Models <span className="text-white">using your<br/> data and</span> <b>earn</b></h2>
          <button className="bg-blue-mid hover:bg-blue-dark rounded-3xl p-2 px-4 font-bold mb-5">Connect Wallet</button>
        </div>
      </div>
      <div className="pt-32">
        <h3 className="text-blue-light font-bold">We Provide:</h3>
        <h3 className="text-blue-light text-xs">Decentralized Sourcing of AI Training data</h3>
      </div>
    </div>
  );
};

export default Landing;
