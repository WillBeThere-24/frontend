import { useEffect, useRef, useState } from "react";
import { DashNavBar, SidebarContainer } from "../components/dashboard";
import { Footer } from "../components/common";
import EventName from "../components/event-form/EventName";
import EventTime from "../components/event-form/EventTime";
import EventLocation from "../components/event-form/EventLocation";
import Upload from "../components/event-form/Upload";
import Url from "../components/event-form/Url";
const FormBuilder = () => {
  const [currentForm, setCurrentForm] = useState(1);
  const [eventFormData, setEventFormData] = useState({
    eventName: "",
    eventStartTime: "",
    eventStartDate: "",
    eventEndTime: "",
    eventEndDate: "",
    eventLocation: "",
    eventImage: "",
  });
  console.log(eventFormData);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // eslint-disable-next-line no-unused-vars
  const handleNext = (e) => {
    // e.preventDefault()
    setCurrentForm((prev) => prev + 1);
  };
  // eslint-disable-next-line no-unused-vars
  const handlePrevious = (e) => {
    // e.preventDefault()
    setCurrentForm((prev) => prev - 1);
  };

  // const formButtonsRef = useRef([]);
  // const currentFormButtonRef = useRef(null);

  // useEffect(() => {
  //   if (currentFormButtonRef.current) {
  //     currentFormButtonRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       inline: "center",
  //     });
  //   }
  // }, [currentForm]);
  return (
    <main>
      <div className="flex gap-12 z-0">
        <SidebarContainer />
        <div className="w-full md:pr-24 pr-6 gap-5 flex flex-col items-center ">
          <div className="flex gap-4 md:justify-center mb-8 overflow-x-scroll md:overflow-x-auto whitespace-nowrap w-[75vw]  md:w-full p-4 mr-4 md:mr-0">
            <button
              className={`${
                currentForm === 1
                  ? "font-semibold border-b border-wybt-primary   text-wybt-primary p-1"
                  : "text-wybt-light-gray"
              } `}
              // ref={(el) => (formButtonsRef.current[1] = el)}
              onClick={() => setCurrentForm(1)}
            >
              Event Name
            </button>
            <button
              className={`${
                currentForm === 2
                  ? "font-semibold border-b border-wybt-primary  text-wybt-primary p-1"
                  : "text-wybt-light-gray"
              }`}
              onClick={() => setCurrentForm(2)}
            >
              Event Date
            </button>
            <button
              className={`${
                currentForm === 3
                  ? "font-semibold border-b border-wybt-primary  text-wybt-primary p-1"
                  : " text-wybt-light-gray"
              }`}
              onClick={() => setCurrentForm(3)}
            >
              Event Location
            </button>
            <button
              className={`${
                currentForm === 4
                  ? "font-semibold border-b border-wybt-primary text-wybt-primary p-1"
                  : " text-wybt-light-gray"
              }`}
              onClick={() => setCurrentForm(4)}
            >
              Upload Image
            </button>
            <button>Preview</button>
            <button
              className={`${
                currentForm === 6
                  ? "font-semibold border-b border-wybt-primary text-wybt-primary p-1"
                  : "text-wybt-light-gray"
              }`}
              onClick={() => setCurrentForm(6)}
              // ref={(el) => (formButtonsRef.current[6] = el)}
            >
              URL
            </button>
          </div>
          <form className="w-full">
            {currentForm === 1 && (
              <>
                <h2 className="text-wybt-primary text-2xl font-bold mb-4">
                  What's the name of your event?
                </h2>
                <EventName
                  handleNext={handleNext}
                  eventFormData={eventFormData}
                  handleChange={handleChange}
                />
              </>
            )}
            {currentForm === 2 && (
              <>
                <h2 className="text-wybt-primary text-2xl font-bold mb-4">
                  When is your event?
                </h2>
                <EventTime
                  handleNext={handleNext}
                  eventFormData={eventFormData}
                  handleChange={handleChange}
                />
              </>
            )}
            {currentForm === 3 && (
              <>
                <h2 className="text-wybt-primary text-2xl font-bold mb-4">
                  Where is your event taking place?
                </h2>
                <EventLocation
                  handleNext={handleNext}
                  eventFormData={eventFormData}
                  handleChange={handleChange}
                />
              </>
            )}
            {currentForm === 4 && (
              <>
                <h2 className="text-wybt-primary text-2xl font-bold mb-4">
                  Upload PNG/JPG
                </h2>
                <Upload
                  handleNext={handleNext}
                  eventFormData={eventFormData}
                  handleChange={handleChange}
                />
              </>
            )}
          </form>
          {currentForm === 6 && (
            <>
              <h2 className="text-wybt-primary text-2xl font-bold mb-4">
                URL{" "}
              </h2>
              <Url
                handleNext={handleNext}
                eventFormData={eventFormData}
                handleChange={handleChange}
              />
            </>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default FormBuilder;
