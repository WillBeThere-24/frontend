const FriendInputs = ({
  friend,
  id,
  handleInputsChange,
  text = "Plus",
  handleMyselfChange,
}) => {
  return (
    <form
      id={`form-${id && id}`}
      className='flex flex-col gap-3 text-wybt-primary'
    >
      <p className='text-white text-lg md:text-xl '>
        {text} {id !== "0" && id + 1}
      </p>
      <div className='flex flex-col md:flex-row gap-3 w-full text-wybt-primary'>
        <input
          type='text'
          name='firstName'
          id='firstName'
          placeholder='First name'
          className='px-4 py-3 rounded-lg bg-wybt-white w-full focus:outline-none'
          value={friend.firstName}
          onChange={(e) => {
            handleInputsChange
              ? handleInputsChange(0, "firstName", e.target.value)
              : handleMyselfChange(e);
          }}
          required
        />
        <input
          type='text'
          name='lastName'
          id='lastName'
          placeholder='Last Name'
          className='px-4 py-3 rounded-lg bg-wybt-white w-full focus:outline-none'
          value={friend.lastName}
          onChange={(e) => {
            handleInputsChange
              ? handleInputsChange(0, "firstName", e.target.value)
              : handleMyselfChange(e);
          }}
          required
        />
      </div>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='E-mail'
        className='px-4 py-3 rounded-lg bg-wybt-white w-full focus:outline-none'
        value={friend.email}
        onChange={(e) => {
          handleInputsChange
            ? handleInputsChange(0, "firstName", e.target.value)
            : handleMyselfChange(e);
        }}
        required
      />
    </form>
  );
};
export default FriendInputs;
