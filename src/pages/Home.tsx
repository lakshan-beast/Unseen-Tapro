import Hero from "../components/layout/Hero";
import Categories from "./Categories";
// import Weather from "../components/ui/Weather";
// import BentoWidgets from "../components/ui/BentoWidgets";
import ContributorsSlider from "../components/layout/ContributorsSlider";
import CommunityBanner from "../components/layout/CommunityBanner";
import TrustFeatures from "../components/layout/TrustFeatures";



export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#01030f] text-white overflow-hidden font-body">
      <Hero />

      {/* <div className="flex md:hidden items-center gap-4 bg-zinc-900/50 border border-white/5 p-5 mx-6 rounded-3xl backdrop-blur-md mt-6">
        <Weather />
      </div> */}
     
      <TrustFeatures />

      <CommunityBanner />

      {/* <BentoWidgets /> */}

      <Categories />

      <ContributorsSlider />
    </div>
  );
}
