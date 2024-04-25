import React, { useRef } from "react";

const EventTime = ({ handleNext, handleChange, eventFormData }) => {

  return (
    <section className="fl gap-3 mb-6 w-full">
      <label htmlFor="" className="text-wybt-primary font-semibold">
        Event Start
      </label>
      <div className="flex gap-2 flex-col md:flex-row w-full ">
        <input
          ref={setRef}
          type="date"
          placeholder="Date"
          name="eventStartDate"
          value={eventFormData.eventStartDate}
          onChange={handleChange}
          className="border-wybt-primary border rounded-md p-4 md:w-1/2"
        />
        <input
          type="time"
          name="eventStartTime"
          value={eventFormData.eventStartTime}
          onChange={handleChange}
          placeholder="Time"
          className="border-wybt-primary border rounded-md p-4 md:w-1/2"
        />
      </div>

      <label htmlFor="" className="text-wybt-primary font-semibold">
        Event End
      </label>
      <div className="flex gap-2 flex-col md:flex-row">
        <input
          type="date"
          name="eventEndDate"
          value={eventFormData.eventEndDate}
          onChange={handleChange}
          placeholder=""
          className="border-wybt-primary border rounded-md p-4 md:w-1/2"
        />
        <input
          type="time"
          name="eventEndTime"
          value={eventFormData.eventEndTime}
          onChange={handleChange}
          className="border-wybt-primary border rounded-md p-4 md:w-1/2"
        />
      </div>
      <label htmlFor="" className="text-wybt-primary font-semibold">
        Time Zone
      </label>
      <div className="flex gap-2 flex-col md:fle-x-row">
        <input
          type="selection"
          placeholder=""
          className="border-wybt-primary border rounded-md p-4 "
        />
      </div>

      <button
        onClick={handleNext}
        className="bg-wybt-primary py-4 w-full px-8 rounded-md text-white mt-2"
      >
        Next
      </button>
    </section>
  );
};

export default EventTime;
