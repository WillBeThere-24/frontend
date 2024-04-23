import { cn } from "../../utils/cn";
import PropTypes from "prop-types";

export const Harmburger = ({ className, handleClick }) => {
  return (
    <span onClick={handleClick}>
      <svg
        fill='#000000'
        className={cn(className)}
        width='60px'
        height='44px'
        viewBox='-1.6 -1.6 19.20 19.20'
        xmlns='http://www.w3.org/2000/svg'
        stroke='#000000'
        strokeWidth='0.272'
      >
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></g>
        <g id='SVGRepo_iconCarrier'>
          <path d='M.5 7.42h15v1.25H.5zm0 3.6h15v1.25H.5zm0-7.29h15v1.25H.5z'></path>
        </g>
      </svg>
    </span>
  );
};

Harmburger.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

export const CloseMenuBtn = ({ className, handleClick }) => {
  return (
    <span onClick={handleClick}>
      <svg
        viewBox='-2.4 -2.4 28.80 28.80'
        fill='none'
        className={cn(className)}
        width='70px'
        height='74px'
        xmlns='http://www.w3.org/2000/svg'
        stroke='#000000'
        strokeWidth='1.2'
      >
        <g
          id='SVGRepo_bgCarrier'
          strokeWidth='0'
          transform='translate(0,0), scale(1)'
        >
          <rect
            x='-2.4'
            y='-2.4'
            width='28.80'
            height='28.80'
            rx='14.4'
            fill='#E5A4CB'
            strokeWidth='0'
          ></rect>
        </g>
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
          stroke='#CCCCCC'
          strokeWidth='1.152'
        ></g>
        <g id='SVGRepo_iconCarrier'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z'
            fill='#000000'
          ></path>
        </g>
      </svg>
    </span>
  );
};

CloseMenuBtn.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

export const OpenedEye = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill=' none'
      className={cn(className)}
      width='20px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {" "}
        <path
          d='M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z'
          stroke='#838383'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>{" "}
        <path
          d='M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z'
          stroke='#838383'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>{" "}
      </g>
    </svg>
  );
};

OpenedEye.propTypes = {
  className: PropTypes.string,
};

export const ClosedEye = ({ className }) => {
  return (
    <svg
      viewBox='0 0 24 24'
      width='20px'
      fill='none'
      className={cn(className)}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          d='M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5'
          stroke='#838383'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>
      </g>
    </svg>
  );
};

ClosedEye.propTypes = {
  className: PropTypes.string,
};

export const ArrowRightIcon = ({ className }) => {
  return (
    <svg
      className={cn(className)}
      width='25px'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {" "}
        <path
          d='M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
          stroke='#000000'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>{" "}
      </g>
    </svg>
  );
};

ArrowRightIcon.propTypes = {
  className: PropTypes.string,
};
export const ArrowLeftIcon = ({ className }) => {
  return (
<<<<<<< HEAD
    <svg svg
      viewBox="0 0 24 24"
      width="25px"

      className={cn(className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 9L8 12M8 12L11 15M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg >
  )
}

ArrowLeftIcon.propTypes = {
  className: PropTypes.string
}

export const MenuAlt = ({ className }) => {

  return (
    <svg
      width="30px"
      className={cn(className)}
      // height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path>
      </g>
    </svg>)
}

MenuAlt.propTypes = {
  className: PropTypes.string
}
=======
    <svg
      viewBox='0 0 24 24'
      width='25px'
      className={cn(className)}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {" "}
        <path
          d='M11 9L8 12M8 12L11 15M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z'
          stroke='#000000'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></path>{" "}
      </g>
    </svg>
  );
};

ArrowLeftIcon.propTypes = {
  className: PropTypes.string,
};
>>>>>>> 20fb1a6947d45855be0dd7c36ff30d38513ebcbf
