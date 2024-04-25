import React from "react";

const Upload = ({ handleNext, handleChange, eventFormData }) => {
  return (
    <section className="gap-3 mb-6">
      <label htmlFor="" className="text-wybt-primary font-semibold">
        Upload Image
      </label>
      <input
        type="file"
        image
        name="eventImage"
        value={eventFormData.eventImage}
        onChange={handleChange}
        className="border-wybt-primary border rounded-md p-4 w-full"
      />

      <button className="bg-wybt-primary py-4  px-8 rounded-md w-full text-white mt-3">
        Next
      </button>
    </section>
  );
};

export default Upload;
