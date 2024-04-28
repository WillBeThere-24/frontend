import React from "react";

const EventLocation = ({ handleNext, eventFormData, handleChange }) => {
  return (
    <section className=" gap-3 mb-6">
      <label htmlFor="" className="text-wybt-primary font-semibold">
        Event Location
      </label>

      <input
        type="text"
        name="eventLocation"
        value={eventFormData.eventLocation}
        onChange={handleChange}
        className="border-wybt-primary border rounded-md p-4 w-full"
      />
      <button
        onClick={handleNext}
        className="bg-wybt-primary py-4  px-8 rounded-md w-full text-white mt-3"
      >
        Next
      </button>
    </section>
  ); 
};

export default EventLocation;
