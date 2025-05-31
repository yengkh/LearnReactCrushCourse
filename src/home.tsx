import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HomeCard from "./components/HomeCard";
import BrowsJobs from "./components/BrowsJobs";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection
        title="Become a React Dev"
        subTitle="Find the React Job that fits your skills and needs"
      />
      <HomeCard />
      <BrowsJobs />
    </>
  );
};

export default HomePage;
