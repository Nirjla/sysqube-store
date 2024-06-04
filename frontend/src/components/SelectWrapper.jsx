import { useField, useFormikContext } from "formik";
import { useState, useEffect } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SelectWrapper = ({ label, name, data }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const [selected, setSelected] = useState(data.find(item => item.id === field.value) || data[0]);

  useEffect(() => {
    setFieldValue(name, selected.id);
  }, [selected, setFieldValue, name]);

  const handleChange = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Listbox value={selected} onChange={handleChange} className="mt-2">
        {({ open }) => (
          <div>
            <label
              htmlFor={name}
              className="block text-sm font-medium leading text-gray-700"
            >
              {label}
            </label>
            <div className="relative">
              <ListboxButton className="relative cursor-default mt-2 block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <span className="flex items-center">
                  <span className="ml-3 block truncate">{selected.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </ListboxButton>

              <Transition
                show={open}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {data.map((item) => (
                    <ListboxOption
                      key={item.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-primary text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block truncate"
                              )}
                            >
                              {item.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 right-0 flex items-center pr-4"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </div>
            {meta.touched && meta.error ? (
              <div className="text-red-500 text-sm mt-1">{meta.error}</div>
            ) : null}
          </div>
        )}
      </Listbox>
    </>
  );
};

export default SelectWrapper;
