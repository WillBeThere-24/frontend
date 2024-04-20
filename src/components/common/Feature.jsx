function Feature({title, description, imageSrc, invert}) {
  return (
    <div className="lg:flex block justify-between gap-12 lg:w-[80%] ml-auto mr-auto items-center mt-12">
      <div className={`text-wybt-primary lg:w-1/2 ${invert && "order-2"}`}>
         <h1 className="font-bold lg:text-4xl text-3xl mb-4 lg:mb-8 ">{title}</h1>
         <p className="text-md lg:text-lg ">{description}</p>
      </div>
      <div className="lg:h-[25rem] h-[18rem] border border-red-50 mt-8 lg:w-[40%]">
         <img className="rounded-md w-full h-full object-cover" src={imageSrc} alt="" />
      </div>
    </div>
  )
}
export default Feature