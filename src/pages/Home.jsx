import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import Hero from "../components/common/Hero";
import Features from "../components/FeatureLists";


function Home() {
  return (
    <main className='w-screen h-screen justify-between flex flex-col gap-16 md:gap-32 bg-wybt-white'>
      <NavBar />
      <Hero />
      <Features />
      <p className='text-5xl'>Will Be There</p>
      <Footer />
    </main>
  );
}
export default Home;
