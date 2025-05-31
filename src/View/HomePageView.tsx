import BrowsJobs from "@/components/BrowsJobs";
import HeroSection from "@/components/HeroSection";
import HomeCard from "@/components/HomeCard";

const HomePageView = () => {
  return (
    <>
      <HeroSection
        title="Become a React Dev"
        subTitle="Find the React Job that fits your skills and needs"
      />
      <HomeCard />
      <BrowsJobs />
    </>
  );
};

export default HomePageView;
