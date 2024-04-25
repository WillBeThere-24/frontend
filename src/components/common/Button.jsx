import { cn } from "../../utils/cn";

const Button = (props) => {
  const { children, className, onClick, type, disabled } = props;
  return (
    <button
      className={cn("px-6 py-3 text-center cursor-pointer max-w-64", className)}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
