const SidebarItem = ({ title, children, showText }) => {
  return (
    <div className='gap-4 flex flex-col'>
      {showText && (
        <h2
          className={`text-3xl font-bold text-wybt-primary  ${
            showText ? "" : ""
          } mb-1 mt-7 first:mt-0`}
        >
          {title}
        </h2>
      )}
      <ul className='md:gap-7 gap-4 flex flex-col'>{children}</ul>
    </div>
  );
};

export default SidebarItem;
