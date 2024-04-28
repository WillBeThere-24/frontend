import { useState } from "react";
import { Button } from "../common";
import FriendInputs from "../rsvp/FriendInputs";
import toast from "react-hot-toast";
import { usePost } from "../../utils/hooks";

const InviteModal = ({ isOpen, setIsOpen, id }) => {
  const [friends, setFriends] = useState([
    { firstName: "", lastName: "", email: "" },
  ]);
  const { postData, loading } = usePost();

  if (!isOpen) return null;
  const onClose = () => {
    setIsOpen(false);
  };

  const handleInputsChange = (index, key, value) => {
    const newFriends = [...friends];
    newFriends[index] = { ...newFriends[index], [key]: value };
    setFriends(newFriends);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
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
        const friendPost = {
          name: `${friends[0].firstName} ${friends[0].lastName}`,
          email: friends[0].email.toLowerCase(),
        };

        const data = await postData(
          import.meta.env.VITE_BASE_URL + `/events/${id}/invite`,
          friendPost
        );

        if (data) {
          toast.success("Invite sent successfully!");
          onClose();
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto transition-opacity duration-1000'>
      <div className='flex flex-col gap-6 items-center justify-center min-h-screen'>
        <div className='fixed inset-0 transition-opacity' onClick={onClose}>
          <div className='absolute inset-0 bg-black opacity-50'></div>
        </div>
        {/* here is the main thing */}
        <div className='scrollbar-hide max-h-[90vh] md:max-h-[70vh] overflow-y-auto z-20 flex flex-col gap-8 my-8 md:my-16 font-montserrat w-full md:w-[75%] lg:w-[50%]'>
          <div className='bg-wybt-primary text-white py-12 px-6 md:py-16 md:px-8 flex flex-col gap-8 '>
            <h4 className='text-center font-bold text-2xl md:text-4xl '>
              Send Invite
            </h4>

            <div className='flex flex-col gap-6'>
              {friends.map((friend, id) => (
                <FriendInputs
                  key={id}
                  id={`${id}`}
                  friend={friend}
                  text='Guest'
                  handleInputsChange={handleInputsChange}
                />
              ))}
            </div>
            <Button
              type='submit'
              className='bg-wybt-white text-wybt-primary self-center w-full md:w-[75%] lg:w-[50%]'
              onClick={handleSubmit}
              disabled={loading}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InviteModal;
