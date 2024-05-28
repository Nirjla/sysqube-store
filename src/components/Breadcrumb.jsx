import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center ">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 dark:hover:text-accent"
          >
            Home
          </Link>
          <MdKeyboardArrowRight  className="text-gray-700 ml-2"/>
        </li>

        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && <MdKeyboardArrowRight className="text-gray-700 mr-2" />}
            {index === items.length - 1 ? (
              <span className="inline-flex items-center text-sm font-medium text-primary">
                {item.label}
              </span>
            ) : (
              <div className="flex items-center justify-center">
                <Link
                  to={item.link}
                  className="inline-flex items-center text-sm font-medium text-secondary hover:text-blue-600 dark:hover:text-accent"
                >
                  {item.label}
                </Link>
              </div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
