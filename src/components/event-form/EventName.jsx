import React from "react";

const EventName = ({
  handleNext,
  eventFormData,
  handleChange,
  focusInput,
  setRef,
}) => {
  return (
    <section className="flex flex-col md:flex-rw gap-3 w-full mb-6">
      <input
        type="text"
        className="border-wybt-primary border rounded-md p-4 "
        name="eventName"
        value={eventFormData.eventName}
        onChange={handleChange}
        // ref={setRef}
      />
      <button
        className="bg-wybt-primary py-4  px-8 rounded-md text-white"
        onClick={handleNext}
      >
        Next
      </button>
    </section>
  );
};

export default EventName;
