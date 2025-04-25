import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import TherapistsSection from "./components/TherapistsSection";
import FeaturesSection from "./components/FeaturesSection";
import SelfHelpSection from "./components/SelfHelpSection";

export default function Home() {
  return (
    <>
      <header>
     
        <Navbar />
      </header>

      <main>
        <HeroSection />
        <FeaturesSection />
        <TherapistsSection />
        <SelfHelpSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
