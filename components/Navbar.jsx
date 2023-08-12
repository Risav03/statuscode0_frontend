"use client"
import Link from "next/link"
import Button from "./button"

const Navbar = ({type}) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-20 z-[999] bg-gradient-to-b from-black/50 to-transparents">
      <div className="m-5 flex flex-row items-center justify-between mx-20">
        <Link href="/" className="flex flex-row items-center justify-center cursor-pointer">
            {/* <div className="w-10 h-10 bg-blue-mid rounded-full"></div> */}
            <div className="text-2xl font-bold text-white">Data</div>
            <div className="text-2xl font-bold text-black px-1 ml-1 bg-blue-mid rounded-lg">Verse</div>
        </Link>
        <div className="text-lg text-white font-normal flex flex-row items-center justify-between gap-8">
          {!(type==="mkt") && <h3 className="hover:text-blue-dark cursor-pointer">About Us</h3>}
          {!(type==="mkt") &&<h3 className="hover:text-blue-dark cursor-pointer">Train Model</h3>}
          {!(type==="mkt") &&<Link href="/marketplace" className="hover:text-blue-dark cursor-pointer">Data Market</Link>}
          {!(type==="mkt") &&<Link href="/upload" className="hover:text-blue-dark cursor-pointer">Contribute Data</Link>}

          <Button/>
        </div>
      </div>
    </div>
  )
}

export default Navbar