const InfoWrapper = ({ label, input }) => {
  return (
    <>
      <p className="mb-2">
        <span className="font-medium text-gray-700">{label}:</span> {input}
      </p>
    </>
  );
};

export default InfoWrapper;
