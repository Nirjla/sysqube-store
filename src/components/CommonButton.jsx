import { Link } from "react-router-dom";

const CommonButton = ({ link, label }) => {
  return (
    <div>
      <Link
        to={link}
        className="flex items-center justify-center rounded-md border border-transparent bg-primary  px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-accent"
      >
        {label}
      </Link>
    </div>
  );
};

export default CommonButton;
