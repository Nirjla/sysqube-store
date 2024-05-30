import { Link } from "react-router-dom";

const CommonButton = ({ link, label, toggle }) => {
  return (
    <div>
      <Link
        // role="button"
        to={link}
        className="flex items-center justify-center rounded-md border border-transparent bg-primary  px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-accent"
        onClick={toggle}
      >
        {label}
      </Link>
    </div>
  );
};

export default CommonButton;
