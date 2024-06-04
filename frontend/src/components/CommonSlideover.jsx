
const CommonSlideover = ({ isOpen, toggleOpen, children }) => {
  return (
    <>
      <div
        id="slideover"
        className={`fixed inset-0 bg-gray-900 z-10  bg-opacity-50 duration-300 ease-out transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-98 bg-white h-full absolute z-[100] right-0 duration-300 ease-out transition-transform transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll bg-white ">
              {children && children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonSlideover;
