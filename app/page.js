import Image from "next/image";
import bg from "@assets/background.png"
import Navbar from "@components/Navbar";
import Summary from "@components/Summary";
import AboutContributor from "@components/AboutContributor";
import AboutTrainer from "@components/AboutTrainer";
import AboutUs from "@components/AboutUs";
import Landing from "@components/Landing";

export default function Home() {
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
      <Navbar/>
      

      {/* Code Here Manila */}
      <main className=" overflow-x-hidden w-screen h-screen">
        <Landing/>
        <AboutContributor/>
        <AboutTrainer/>
        <Summary/>
        <AboutUs/>
      </main>
    </>
  );
}
