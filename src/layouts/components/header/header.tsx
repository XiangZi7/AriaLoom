import {
  Input,
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Tooltip,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import DropDown from "./Dropdown";

const header = () => {
  return (
    <>
      {/* Header */}
      <Navbar
        className="bg-transparent border-b border-gray-100 dark:border-default-100"
        maxWidth="full"
        isBlurred={false}
      >
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <div className="flex items-center gap-4 shrink-0 w-36">
              <h1 className="relative flex items-center text-4xl font-bold text-gray-800 dark:text-white dark:opacity-80 transition-colors">
                Yxcr
                <span className="ml-1 rounded-xl bg-current p-2 text-[0.7em] leading-none">
                  <span className="text-white dark:text-black">Music</span>
                </span>
              </h1>
            </div>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" color="secondary">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            startContent={<Icon icon="charm:search" />}
            type="search"
          />
          <Tooltip placement="bottom" content={<DropDown />}>
            <Avatar
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </Tooltip>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default header;
