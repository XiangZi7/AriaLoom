import { Icon } from '@iconify/react';
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';

import { logout } from '@/api';
const DropDown = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const refreshLoginStatus = userStore((state) => state.refreshLoginStatus);

  async function userLogOut() {
    await logout();
    refreshLoginStatus();
    onClose();
  }
  return (
    <>
      <div className="duration-300 ease-in-out">
        <ul>
          <li className="px-5 py-2 ">
            如果项目对你有帮助，请一键三连哦{' '}
            <span className="text-red-500">❤</span>{' '}
          </li>
          <li
            className="px-5 py-2 transition-colors duration-300 ease-linear hover:bg-default-200 cursor-pointer rounded-lg flex gap-1 items-center"
            onClick={onOpen}
          >
            <Icon icon="octicon:sign-out" />
            Log out
          </li>
        </ul>
      </div>
      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <p>Are you sure you want to log out?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={userLogOut}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default DropDown;
