import { Link } from "react-router-dom";

const CommonButton = ({ link, label, toggle, isValid, dirty, isBackButton }) => {
  const isDisabled = !isBackButton && !(isValid && dirty);
  return (
    <div>
      {isDisabled ? (
        <button
          type="button"
          className="w-full flex items-center justify-center rounded-md border border-transparent
          px-6 py-3 text-base font-medium text-white shadow-sm bg-gray-300 cursor-not-allowed"
          disabled
        >
          {label}
        </button>
      ) : (
        <Link
          to={link}
          className={`flex items-center justify-center rounded-md border border-transparent
          px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-accent
          ${isBackButton ? "bg-primary" : isValid && dirty ? "bg-primary" : "bg-gray-300 cursor-not-allowed"}`}
          onClick={toggle}
        >
          {label}
        </Link>
      )}
    </div>
  );
};

export default CommonButton;