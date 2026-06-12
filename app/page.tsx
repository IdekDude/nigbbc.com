import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CigarCollection from "./components/CigarCollection";
import Heritage from "./components/Heritage";
import Process from "./components/Process";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CigarCollection />
        <Heritage />
        <Process />
        <Shop />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
