import { useState } from "react";
import FriendInputs from "./FriendInputs";
import { Button } from "../common";
// import { usePost } from "../../utils/hooks";

const Card = () => {
  //   const { postData, data, loading, error } = usePost();
  //   if(error){
  //     toast.error('There was an error posting your response. Please try again!')
  //   }
  const [friends, setFriends] = useState([]);
  const [option, setOption] = useState("yes");

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
    if (option === "no") {
      // post attending to false
      //   postData(import.meta.env.VITE_BASE_URL + "/events/rsvp/:id?guest=guest", {
      // attending:false
      // })
      //  toast.success('Your response has been saved successfully');

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
      //   postData(import.meta.env.VITE_BASE_URL + "/events/rsvp/:id?guest=guest", {
      // attending:true, plus_ones: friends
      // })
      //   toast.success('Your response has been saved successfully');
      console.log(friends);
    }
  };

  return (
    <main className='flex flex-col gap-8 my-8 md:my-16 font-montserrat'>
      <div className='bg-wybt-primary text-white py-12 px-6 md:py-16 md:px-8 flex flex-col gap-8 '>
        <h4 className='text-center font-bold text-2xl md:text-4xl '>RSVP</h4>
        <p className='text-center font-light text-base md:text-xl'>
          Kindly respond before XXXX 2024. We look forward to celebrating with
          you.
        </p>
        <p className='text-center text-3xl md:text-5xl font-caveat'>
          Will You Be There?
        </p>
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
        // disabled={isLoading}
      >
        Next
      </Button>
    </main>
  );
};
export default Card;
