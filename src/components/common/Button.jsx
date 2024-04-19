import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

const Button = (props) => {
  const { children, className, onClick } = props;
  return (
    <button
      className={cn("px-6 py-3 text-center cursor-pointer max-w-64", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
