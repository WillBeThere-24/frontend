import { Card } from "../components/rsvp";
import { useLoaderData } from "react-router-dom";

const Rsvp = () => {
  const receivedData = useLoaderData();
  const { data } = receivedData;

  return (
    <div className='bg-wybt-white px-5 flex justify-center items-center min-h-screen'>
      <Card data={data} />
    </div>
  );
};
export default Rsvp;
