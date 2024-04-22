import { Feature } from "./common";

const featureData = [
  {
    title: "Create An Event",
    imageSrc: "/images/feature-1.jfif",
    description:
      "Sign up on our platform and create your event. Provide essential details like date, time, location, and event type.Enter your contact information for RSVP responses and event updates",
  },
  {
    title: "Effortless Guest Management",
    imageSrc: "/images/feature-2.png",
    description:
      "Invite guests by sending personalized invitations through our app, either via email or a unique link. Guests receive the invitation, view event details, and RSVP directly on our app by indicating their attendance status.",
  },
  {
    title: "Streamlined Event Coordination",
    imageSrc: "/images/feature-3.png",
    description:
      "Manage your guest list, track RSVP responses, and send out event reminders or updates as needed. Guests receive event notifications and updates, attend the event, and check-in upon arrival using our app if applicable.",
  },
];

function FeatureList() {
  return (
    <div className='md:px-24 px-4'>
      <h1 className='font-montserrat font-bold text-[#1F1F1F] text-center uppercase lg:text-4xl text-3xl mt-8'>
        How it works
      </h1>
      <div>
        {featureData.map((item, i) => (
          <Feature
            key={i}
            imageSrc={item.imageSrc}
            invert={(i + 1) % 2 == 0}
            description={item.description}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
export default FeatureList;
