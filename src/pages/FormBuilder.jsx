import { useState } from "react";
import { DashNavBar } from "../components/dashboard";
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
  // const setRef = useRef("");

  const focusInput = () => {
    setRef.current.focus();
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
    // focusInput();
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
      <div className="flex gap-12">
        <div className="w-full md:pr-24 gap-5 flex flex-col items-center">
          <div className="flex gap-4 justify-center mb-8">
            <button className={`${currentForm === 1 ? "font-semibold" : ""}`}>
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
                  focusInput={focusInput}
                  // setRef={setRef}
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
