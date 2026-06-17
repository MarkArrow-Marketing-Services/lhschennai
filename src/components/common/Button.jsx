/* src/components/common/Button.jsx */
import { Link } from "react-router-dom";

export default function Button({ children, to, onClick, variant = "primary", className = "", type = "button", ...props }) {
  const btnClass = `btn btn-${variant} ${className}`;

  if (to) {
    return (
      <Link to={to} className={btnClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={btnClass} {...props}>
      {children}
    </button>
  );
}
