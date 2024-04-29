import {  useNavigate } from "react-router-dom";
import useEvents from "../../../utils/store/useEvents";
import handleCopy from "../../../utils/handleCopy";



function EventCard({event}) {
   const setCurrentEvent = useEvents(state => state.setCurrentEvent);
   const navigate = useNavigate();
   const handleCurrentEvent =()=> {
      setCurrentEvent(event);
      navigate(`/dashboard/events/${event._id}`)
   }
   
  return (
    <div onClick={handleCurrentEvent} className="cursor-pointer h-[15rem] min-w-[18rem] relative ">
      <button title="copy event link" className="flex justify-center items-center gap-3 bg-white absolute top-4 right-3 rounded-lg w-10 h-10 p-2 shadow-lg active:scale-[.9] z-10" onClick={(e)=>handleCopy(e, "linktorsvp")}>
         <img className="w-full h-full block" src="/icons/copy.svg" alt="" />
         {/* <p className="text-sm">copy link</p> */}
      </button>
      <img className="block h-full w-full object-cover rounded-xl cursor-pointer brightness-90" src={event.image || "/images/default-event-image.jpg"}  alt="" />
      <div className="absolute w-[90%] py-3 px-5 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 shadow-xl bg-white rounded-md">
         <h2 className="text-center font-bold text-md mb-2 text-gray-600">{event.name}</h2>
         <div className="flex justify-between items-center">
            <div>
               <p className="font-bold text-center text-gray-500">{event.attendingGuestCount}</p>
               <span className="text-green-600 text-sm">Attending</span>
            </div>
            <span className="h-5 w-[1px] bg-gray-400 block"></span>
            <div>
               <p className="font-bold text-center text-gray-500">{event.notAttendingGuestCount}</p>
               <span className="text-red-600 text-sm">Absent</span>
            </div>
         </div>
      </div>
    </div>
  )
}
export default EventCard