import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import Hero from "../components/common/Hero";
import Features from "../components/FeatureLists";
import Invitation from "../components/Invitation";
import Reviews from "../components/Reviews";


function Home() {
  return (
    <main className="">
      <NavBar />
      <Hero />
      <Features />
      <Invitation />
      <Reviews />
      <Footer />
    </main>
  );
}
export default Home;
