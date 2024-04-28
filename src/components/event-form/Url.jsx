import React, { useEffect, useState } from "react";

const Url = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);

    try {
      setCopied(true);
    } catch (error) {
      console.error("Error: Failed to copy", error);
    }
  };
  useEffect(() => {
    setTimeout(() => setCopied(false), 800);
  }, [copied]);
  return (
    <section className="w-full relative mt-0 mb-6">
      {" "}
      <label htmlFor="" className="text-wybt-primary font-semibold">
        URL Link
      </label>
      <input
        type="text"
        value="willbethere.netlify.com/"
        placeholder=" "
        className="border-wybt-primary border rounded-md p-4 w-full relative"
        readOnly
        disabled
      />
      <button
        onClick={handleCopy}
        className="absolute top-7 right-4 py-[2px] px-2 border border-white bg-wybt-primary text-wybt-white rounded-md "
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </section>
  );
};

export default Url;
