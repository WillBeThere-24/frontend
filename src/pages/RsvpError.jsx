import { useRouteError } from "react-router-dom";
import Error from "./Error";

const RsvpError = () => {
  const error = useRouteError();
  console.error("error from rsvp error", error);
  if (error.response.status === 401) {
    return (
      <Error
        error='401'
        title='Attendance Already Confirmed'
        text='To modify your RSVP response, please register to the application.'
        path='/register'
        pathText='Register'
      />
    );
  }
  if (error.response.status === 400) {
    return (
      <Error
        error='404'
        title='UH OH! You are lost.'
        text='The page you are looking for does not exist. How you got here is a
      mystery. But you can click the button below to go back to the
      homepage.'
        path='/'
        pathText='Return Home'
      />
    );
  }
  if (error.response.status === 405) {
    return (
      <Error
        error='405'
        title='UH OH! You are late.'
        text="The event you're trying to access has already started. Time flies, doesn't it? Don't worry, you can still catch up next time. Click the button below to return to the main page."
        path='/'
        pathText='Return Home'
      />
    );
  }

  return (
    <Error
      error='500'
      title='Internal Server Error'
      text='"Oops! Something went wrong on our end. The tech gremlins are at it again. Click the button below to return to safety at the homepage."'
      path='/'
      pathText='Return Home'
    />
  );
};
export default RsvpError;
