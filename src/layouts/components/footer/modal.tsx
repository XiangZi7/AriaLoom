import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Avatar,
  ScrollShadow,
} from "@nextui-org/react";
import {
  MouseEventHandler,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";
import { Icon } from "@iconify/react";
import "./modal.scss";

const PlayerModal = forwardRef((props, ref) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  // 通过useImperativeHandle暴露特定的方法给父组件
  useImperativeHandle(ref, () => ({
    isOpen,
    onOpen,
    onOpenChange,
    onClose,
  }));

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <Modal
        hideCloseButton
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="full"
      >
        <ModalContent>
          {(onClose: MouseEventHandler<SVGSVGElement> | undefined) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <Icon
                    icon="material-symbols:arrow-back-ios"
                    className="cursor-pointer"
                    onClick={onClose}
                  />
                  <div className="flex gap-2 items-center">
                    <Icon
                      icon="material-symbols:bluetooth"
                      className="text-lg"
                    />
                    <Icon icon="material-symbols:wifi" className="text-lg" />
                    <Icon
                      icon="ic:baseline-battery-charging-80"
                      className="text-lg"
                    />
                    <Avatar
                      className="transition-transform"
                      color="secondary"
                      name="Jason Hughes"
                      size="sm"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-1 items-center justify-center">
                  <div className="flex-[50%] max-w-[50%]">
                    <div className="items-center justify-center flex">
                      <div
                        className={`music-player-container ${
                          isPlaying ? "is-playing" : ""
                        }`}
                      >
                        <div className="album">
                          <div className="album-art"></div>
                          <div className="vinyl"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[50%] max-w-[50%] md:flex hidden">
                    <ScrollShadow
                      hideScrollBar
                      offset={100}
                      className="h-[600px] w-full text-center"
                    >
                      <ul>
                        <li>123456</li>
                        <li>123456</li>
                      </ul>
                    </ScrollShadow>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={handlePlay}>
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
});

export default PlayerModal;
