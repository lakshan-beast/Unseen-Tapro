import Hero from "../components/layout/Hero";
import TrustFeatures from "../components/layout/TrustFeatures";
import CommunityBanner from "../components/layout/CommunityBanner";
import Categories from "../components/layout/Categories";
import ContributorsSlider from "../components/layout/ContributorsSlider";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#01030f] text-white overflow-hidden font-body">
      <Hero />

      <TrustFeatures />

      <CommunityBanner />

      <Categories />

      <ContributorsSlider />
    </div>
  );
}
