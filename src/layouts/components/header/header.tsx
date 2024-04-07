import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
import { useShallow } from 'zustand/react/shallow';

import LoginPopup from '@/components/loginPopup';

import DropDown from './Dropdown';

import { LoginPopupHandles } from '@/interface/LoginPopup';
const Header = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const LoginPopupRef = useRef<LoginPopupHandles>(null);

  const { isLoggedIn, userInfo } = userStore(
    useShallow((state) => ({
      isLoggedIn: state.isLoggedIn,
      userInfo: state.userInfo,
    })),
  );

  function toSearch(params: any) {
    if (params.key == 'Enter' && keyword) {
      navigate(`/search/${keyword}`);
    }
  }

  return (
    <>
      {/* Header */}
      <Navbar className="bg-transparent" maxWidth="full" isBlurred={false}>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <div className="flex items-center shrink-0 w-full">
              <h1 className="relative flex items-center text-4xl font-bold text-gray-800 dark:text-white dark:opacity-80 transition-colors">
                Yxcr
                <span className="ml-1 rounded-xl bg-current p-2 text-[0.7em] leading-none">
                  <span className="text-white dark:text-black">Music</span>
                </span>
              </h1>
              <div className="pl-16">
                <Icon icon="ic:round-arrow-back-ios" className="cursor-pointer" onClick={() => navigate(-1)} />
              </div>
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
            value={keyword}
            onChange={(val) => setKeyword(val.target.value)}
            startContent={<Icon icon="charm:search" />}
            type="search"
            onKeyDown={toSearch}
          />
          {isLoggedIn ? (
            <Tooltip placement="bottom" content={<DropDown />}>
              <Avatar
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src={userInfo?.avatarUrl}
              />
            </Tooltip>
          ) : (
            <Button
              variant="shadow"
              color="secondary"
              startContent={<Icon icon="material-symbols:account-circle-full" />}
              onPress={() => LoginPopupRef.current?.openModal()}
            >
              Login
            </Button>
          )}
        </NavbarContent>
      </Navbar>
      <LoginPopup ref={LoginPopupRef} />
    </>
  );
};

export default Header;
