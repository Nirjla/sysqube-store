/* eslint-disable react/prop-types */
const Headline = ({ title, highlight }) => {
  return (
    <div className="  lg:text-[25px] md:text-[24px] sm:text-[22px]  font-semibold text-secondary capitalize leading-[1] py-5 ">
      <h2>
        {title}
        <span className="text-primary ml-2">{highlight}</span>
      </h2>
    </div>
  );
};

export default Headline;
