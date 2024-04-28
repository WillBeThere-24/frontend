import { Card } from "../components/rsvp";
// import { useSearchParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
const Rsvp = () => {
  // const [searchParams] = useSearchParams();
  // const data = Object.fromEntries([...searchParams]);
  // console.log(data.guest);
  const receivedData = useLoaderData();
  const { data } = receivedData;
  console.log("data from rsvp page", data);

  return (
    <div className='bg-wybt-white px-5 flex justify-center h-screen'>
      <Card />
    </div>
  );
};
export default Rsvp;
