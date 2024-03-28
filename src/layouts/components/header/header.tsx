import { Icon } from '@iconify/react';
import {
  Input,
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Tooltip,
} from '@nextui-org/react';

import DropDown from './Dropdown';

const header = () => {
  return (
    <>
      {/* Header */}
      <Navbar className="bg-transparent" maxWidth="full" isBlurred={false}>
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
              <Button
                href="https://github.com/XiangZi7/AriaLoom"
                as={Link}
                showAnchorIcon
                variant="shadow"
                isExternal
                className="bg-default-400/20 dark:bg-default-500/30"
                startContent={<Icon icon="devicon:github" />}
              >
                Repository
              </Button>
            </NavbarItem>
            <NavbarItem isActive>
              <Button
                href="https://github.com/XiangZi7"
                as={Link}
                isExternal
                showAnchorIcon
                variant="shadow"
                className="bg-default-400/20 dark:bg-default-500/30"
                startContent={<Icon icon="devicon:github" />}
              >
                About me
              </Button>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
        <NavbarContent as="div" className="items-center" justify="end">
          <div className="flex items-center gap-1">
            <Icon icon="fluent:weather-hail-day-20-regular" className="text-lg" />
            27°
          </div>
          <Icon icon="material-symbols:bluetooth" className="text-lg" />
          <Icon icon="material-symbols:wifi" className="text-lg" />
          <Icon icon="ic:baseline-battery-charging-80" className="text-lg" />
          <Input
            classNames={{
              base: 'max-w-full sm:max-w-[15rem] h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper: 'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
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
