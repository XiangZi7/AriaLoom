import { Icon } from "@iconify/react";

const DropDown = () => {
  return (
    <>
      <div className="duration-300 ease-in-out">
        <ul>
          <li className="px-5 py-2 transition-colors duration-300 ease-linear hover:bg-default-200 cursor-pointer rounded-lg flex gap-1 items-center">
            <Icon icon="ic:baseline-account-circle" />
            Item 1
          </li>
          <li className="px-5 py-2 transition-colors duration-300 ease-linear hover:bg-default-200 cursor-pointer rounded-lg flex gap-1 items-center">
            <Icon icon="ic:baseline-account-circle" />
            Item 2
          </li>
        </ul>
      </div>
    </>
  );
};
export default DropDown;