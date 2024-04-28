import { Card } from "../components/rsvp";
import { useLoaderData } from "react-router-dom";

const Rsvp = () => {
  const receivedData = useLoaderData();
  const { data } = receivedData;
  console.log("data from rsvp page", data);
  const { guest, event } = data;

  return (
    <div className='bg-wybt-white px-5 flex justify-center items-center min-h-screen'>
      <Card guest={guest} event={event} />
    </div>
  );
};
export default Rsvp;
