import { useState } from "react";
import { Button } from "../common";
import { cn } from "../../utils/cn";
import { useNavigate } from "react-router-dom";

const Modal = ({ data, isOpen, setIsOpen }) => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const addIndex = () => {
    if (index > data.length) {
      setIsOpen(false);
      return;
    }
    setIndex((prev) => prev + 1);
  };

  const reduceIndex = () => {
    setIndex((prev) => {
      return prev - 1;
    });
  };

  if (!isOpen) return null;
  const onClose = () => {
    setIsOpen(false);
  };

  const exitModal = () => {
    setIsOpen(false);
    navigate("/");
  };
  return (
    <div className='fixed inset-0 z-50 overflow-y-auto transition-opacity duration-1000'>
      <div className='flex flex-col gap-6 items-center justify-center min-h-screen'>
        <div className='fixed inset-0 transition-opacity' onClick={onClose}>
          <div className='absolute inset-0 bg-black opacity-50'></div>
        </div>
        <div
          className={cn(
            "relative rounded-3xl shadow-lg z-20 w-[90%] md:w-[75%] lg:w-[50%] h-[50vh]  flex justify-center items-center overflow-hidden text-wybt-primary",
            data[index]?.parentClassName
          )}
        >
          {data[index]?.children}
        </div>
        <div className='flex gap-6  w-[90%] justify-center z-20  md:w-[75%] lg:w-[50%]'>
          <Button
            className='text-base md:text-xl bg-wybt-white w-full rounded-lg text-wybt-primary max-w-none'
            onClick={() => (index === 0 ? exitModal() : reduceIndex())}
          >
            Previous
          </Button>
          <Button
            className='text-base md:text-xl bg-wybt-white w-full rounded-lg text-wybt-primary max-w-none'
            onClick={() =>
              index === data?.length - 1 ? exitModal() : addIndex()
            }
          >
            {index === data?.length - 1 ? "Exit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
