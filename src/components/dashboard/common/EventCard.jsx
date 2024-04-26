import { Link } from "react-router-dom";



function EventCard({image, attending, missing, title, eventID}) {
  return (
    <Link to={`/dashboard/events/${eventID}`} className="cursor-pointer h-[15rem] min-w-[18rem] relative ">
      <img className="block h-full w-full object-cover rounded-xl cursor-pointer" src={image || "/images/pattern-event.png"}  alt="" />
      <div className="absolute w-[90%] py-3 px-5 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 shadow-xl bg-white rounded-md">
         <h2 className="text-center font-bold text-md mb-2">{title}</h2>
         <div className="flex justify-between items-center">
            <div>
               <p className="font-bold text-center text-gray-500">24</p>
               <span className="text-green-600 text-sm">Attending</span>
            </div>
            <span className="h-5 w-[1px] bg-gray-400 block"></span>
            <div>
               <p className="font-bold text-center text-gray-500">24</p>
               <span className="text-red-600 text-sm">Missing</span>
            </div>
         </div>
      </div>
    </Link>
  )
}
export default EventCard