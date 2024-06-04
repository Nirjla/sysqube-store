const InfoWrapper = ({ label, input }) => {
  return (
    <>
      <p className="mb-2 text-gray-700 font-semibold">
        <span className="font-medium text-accent">{label}:</span> {input}
      </p>
    </>
  );
};

export default InfoWrapper;
