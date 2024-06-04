const SimpleButton = ({ label, setIsDialogOpen }) => {
  return (
    <>
      <button
        className="font-semibold text-sm text-primary"
        onClick={() => {
          setIsDialogOpen(true);
        }}
      >
        {label}
      </button>
    </>
  );
};

export default SimpleButton;
