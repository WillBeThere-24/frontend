import { useState } from "react";
import FriendInputs from "./FriendInputs";
import { Button } from "../common";
import Modal from "./Modal";
import toast from "react-hot-toast";
import { usePost } from "../../utils/hooks";
const noData = [
  {
    children: (
      <p className='text-3xl  font-extrabold  font-caveat md:text-6xl text-center'>
        Next Time Hopefully!
      </p>
    ),
    parentClassName: "bg-wybt-white",
  },
];

const Card = ({ guest, event }) => {
  const [friends, setFriends] = useState([]);
  const [option, setOption] = useState("yes");
  const [modalData, setModalData] = useState([]);
  const [isOpened, setIsOpened] = useState(false);
  const [myself, setMyself] = useState({
    firstName: "",
    lastName: "",
    email: "",
    congratulatoryMessage: "",
  });
  const yesData = [
    {
      children: (
        <div className=' flex flex-col gap-4 md:gap-6 justify-center items-center'>
          <p className='text-3xl font-extrabold  font-caveat md:text-6xl text-center'>
            Woo-hoo!
          </p>
          <p>Thanks for confirming your spot</p>
        </div>
      ),
      parentClassName: "bg-yes-modal bg-no-repeat bg-cover bg-center",
    },
    {
      children: (
        <div className='absolute bottom-0 bg-wybt-primary w-full h-[50%] flex flex-col gap-4 justify-center items-center text-3xl  font-extrabold  font-caveat md:text-6xl text-center text-white'>
          <p>{event.location}</p>
        </div>
      ),
      parentClassName: "bg-yes-modal bg-no-repeat bg-cover ",
    },
    {
      children: (
        <p className='text-3xl  font-extrabold font-caveat md:text-6xl text-center'>
          See you there
        </p>
      ),
      parentClassName: "bg-yes-modal bg-no-repeat bg-cover bg-center",
    },
  ];
  const handleMyselfChange = (e) => {
    const { name, value } = e.target;
    setMyself((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const { postData, data } = usePost();
  const handleAddFriend = () => {
    setFriends((previousFriends) => [
      ...previousFriends,
      { firstName: "", lastName: "", email: "" },
    ]);
  };

  const handleRemoveFriend = () => {
    setFriends((previousFriends) => previousFriends.slice(0, -1));
  };

  const handleInputsChange = (index, key, value) => {
    const newFriends = [...friends];
    newFriends[index] = { ...newFriends[index], [key]: value };
    setFriends(newFriends);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (option === "no") {
        // post attending to false
        postData(
          import.meta.env.VITE_BASE_URL + "/events/rsvp/:id?guest=guest",
          {
            attending: false,
          }
        );
        if (data) {
          setModalData(noData);
          setIsOpened(true);
          toast.success("Your response has been saved successfully");
        }

        return;
      }
      let isValid = true;
      friends.map((_, index) => {
        const form = document.getElementById(`form-${index}`);
        if (!form.checkValidity()) {
          isValid = false;
          form.reportValidity();
          return;
        }
      });

      if (isValid) {
        // post attending to true and list of friends if any in an array
        postData(
          import.meta.env.VITE_BASE_URL + "/events/rsvp/:id?guest=guest",
          {
            attending: true,
            plus_ones: friends,
          }
        );
        if (!data) {
          setModalData(yesData);
          setIsOpened(true);
          toast.success("Your response has been saved successfully");
        }
      }
    } catch (error) {
      toast.error(
        "There was an error posting your response. Please try again!"
      );
    }
  };

  const time = new Date(event.end);
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();

  return (
    <main className='flex flex-col gap-8 my-8 md:my-16 font-montserrat w-full md:w-[75%] lg:w-[50%]'>
      <div className='bg-wybt-primary text-white py-12 px-6 md:py-16 md:px-8 flex flex-col gap-8 '>
        <h4 className='text-center font-bold text-2xl md:text-4xl '>RSVP</h4>
        <p className='text-center font-light text-base md:text-xl'>
          Kindly respond before{" "}
          {`${hours} : ${minutes} on ${day} / ${month} / ${year}`}. We look
          forward to celebrating with you.
        </p>
        <p className='text-center text-3xl md:text-5xl font-caveat'>
          Will You Be There?
        </p>
        {guest && (
          <p className='text-center font-bold text-3xl   '>{guest.name}</p>
        )}{" "}
        {guest && (
          <div className='flex flex-col gap-3'>
            <label
              htmlFor='congratulatoryMessage'
              className='text-lg md:text-xl '
            >
              Congratulatory message
            </label>
            <input
              type='text'
              name='congratulatoryMessage'
              id='congratulatoryMessage'
              placeholder='Congratulatory messages'
              className='px-4 py-3 rounded-lg bg-wybt-white w-full focus:outline-none  text-wybt-primary'
              value={myself.congratulatoryMessage}
              onChange={(e) => handleMyselfChange(e)}
            />
          </div>
        )}
        <div className='flex gap-4 justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <input
              type='checkbox'
              name='yes'
              id='yes'
              className='cursor-pointer size-5'
              checked={option === "yes"}
              onChange={() => setOption("yes")}
            />
            <label
              htmlFor='yes'
              className='cursor-pointer text-base md:text-xl'
              onChange={() => setOption("yes")}
            >
              Yes, I&apos;ll be there
            </label>
          </div>
          <div className='flex gap-3 items-center'>
            <Button
              className='p-0 text-4xl disabled:cursor-not-allowed disabled:text-wybt-light-gray'
              onClick={handleRemoveFriend}
              disabled={option === "no"}
            >
              -
            </Button>
            <div
              className={`${
                option === "no" ? "text-wybt-light-gray" : "text-wybt-primary"
              } bg-wybt-white  text-4xl px-4 py-2 font-bold `}
            >
              {friends.length}
            </div>
            <Button
              className='p-0 text-4xl disabled:cursor-not-allowed disabled:text-wybt-light-gray'
              onClick={handleAddFriend}
              disabled={option === "no"}
            >
              +
            </Button>
          </div>
        </div>
        {!guest && (
          <FriendInputs
            friend={myself}
            handleMyselfChange={handleMyselfChange}
            text='Invited'
            id={0}
          />
        )}
        <div className='flex flex-col gap-6'>
          {friends.map((friend, id) => (
            <FriendInputs
              key={id}
              friend={friend}
              id={id}
              handleInputsChange={handleInputsChange}
            />
          ))}
        </div>
        <div className='flex gap-2 items-center'>
          <input
            type='checkbox'
            name='no'
            id='no'
            className='cursor-pointer size-5'
            checked={option === "no"}
            onChange={() => {
              setOption("no");
              setFriends([]);
            }}
          />
          <label
            htmlFor='no'
            className='cursor-pointer text-base md:text-xl'
            onChange={() => {
              setOption("no");
              setFriends([]);
            }}
          >
            No, sorry
          </label>
        </div>
      </div>
      <Button
        type='submit'
        className='bg-wybt-primary self-center text-wybt-white w-full md:w-[75%] lg:w-[50%]'
        onClick={handleSubmit}
        // disabled={loading}
      >
        Next
      </Button>
      {isOpened && (
        <Modal isOpen={isOpened} setIsOpen={setIsOpened} data={modalData} />
      )}
    </main>
  );
};
export default Card;
