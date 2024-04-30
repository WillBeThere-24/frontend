import { useRouteError } from "react-router-dom";

const RsvpError = () => {
  const error = useRouteError();
  console.error("error from rsvp error", error);

  return <div>RsvpError</div>;
};
export default RsvpError;
