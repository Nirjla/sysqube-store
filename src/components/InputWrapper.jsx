const InputWrapper = ({ label, type = "text", name, placeholder }) => {
  return (
    <div className="input-field">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium leading text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
};

export default InputWrapper;
