const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-20 bg-gradient-to-b from-black/50 to-transparents">
      <div className="m-5 flex flex-row items-center justify-between mx-20">
        <div className="flex flex-row items-center justify-center cursor-pointer">
            {/* <div className="w-10 h-10 bg-blue-mid rounded-full"></div> */}
            <div className="text-2xl font-bold text-white">Data</div>
            <div className="text-2xl font-bold text-black px-1 ml-1 bg-blue-mid rounded-lg">Hub</div>
        </div>
        <div className="text-lg text-white font-normal flex flex-row items-center justify-between gap-8">
          <h3 className="hover:text-blue-dark cursor-pointer">About Us</h3>
          <h3 className="hover:text-blue-dark cursor-pointer">Train Model</h3>
          <h3 className="hover:text-blue-dark cursor-pointer">Contribute Data</h3>
          <h3 className="px-4 py-2 cursor-pointer hover:bg-blue-dark rounded-full bg-blue-mid text-white font-bold">Connect Wallet</h3>
        </div>
      </div>
    </div>
  )
}

export default Navbar