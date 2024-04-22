import { Hero } from "../components/common";
import { FeatureLists, Invitation, Reviews } from "../components";

function Home() {
  return (
    <main className=''>
      <Hero />
      <FeatureLists />
      <Invitation />
      <Reviews />
    </main>
  );
}
export default Home;
