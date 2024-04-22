import { useState } from "react";
import { SignUp, Login } from "./";

const Tabs = () => {
  const [visibleTab, setVisibleTab] = useState("signup");
  const handleTabChange = (tab) => {
    if (visibleTab !== tab) {
      setVisibleTab(tab);
    }
  };
  return (
    <div>
      <div className='gap-3 flex'>
        <button
          onClick={() => {
            handleTabChange("signup");
          }}
          className={`${
            visibleTab === "signup"
              ? "font-bold text-wybt-primary"
              : "text-wybt-light-gray"
          } text-2xl md:text-3xl`}
        >
          Sign Up
        </button>
        <button
          onClick={() => {
            handleTabChange("login");
          }}
          className={`${
            visibleTab === "login"
              ? "font-bold text-wybt-primary"
              : "text-wybt-light-gray"
          } text-2xl md:text-3xl`}
        >
          {" "}
          Log In
        </button>
      </div>
      {visibleTab === "signup" ? (
        <SignUp handleTabChange={handleTabChange} />
      ) : (
        <Login handleTabChange={handleTabChange} />
      )}
      <div>
        {/* {visibleTab === 'signup' ? <div>
                    <p>Already have an account?<span onClick={handleTabChange('login')}>Log In</span></p>
                </div> : <div>
                    <p>Doesn't have an account <span onClick={handleTabChange('signup')}>Sign Up</span></p>
                </div>} */}
      </div>
    </div>
  );
};

export default Tabs;
