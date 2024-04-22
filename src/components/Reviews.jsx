import { UserReview } from "./common";

const userReviews = [
  {
    name: "Tomisin Olaniyan",
    title: "Event Coordinator",
    imageUrl: "/images/user-1.png",
    review:
      "This site has transformed event planning. The RSVP feature is a game-changer, and the reminders are a lifesaver!",
  },

  {
    name: "Oluwaseun Adebayo",
    title: "Wedding Planner",
    imageUrl: "/images/user-2.png",
    review:
      "An indispensable tool for sending personalized invitations and tracking RSVPs. The guest management features are top-notch.",
  },
  {
    name: "Adeola Oshinaike",
    title: "Project Manager",
    imageUrl: "/images/user-3.jpg",
    review:
      "User-friendly interface and intuitive features streamlined my entire process. Highly recommend for creating invitations and managing guest lists.",
  },
];

function Reviews() {
  return (
    <section>
      <h1 className='font-montserrat font-bold text-[#1F1F1F] text-center  lg:text-4xl text-3xl mt-8'>
        User Reviews
      </h1>
      <div className='lg:flex justify-center items-center gap-12 my-20 px-8 '>
        {userReviews.map((item, i) => (
          <UserReview
            key={i}
            name={item.name}
            title={item.title}
            review={item.review}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
export default Reviews;
