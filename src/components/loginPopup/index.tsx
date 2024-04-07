import { forwardRef, useImperativeHandle } from 'react';

import { Icon } from '@iconify/react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
  Avatar,
} from '@nextui-org/react';

import { LoginPopupHandles } from '@/model/interface/loginPopup';
const LoginPopup = forwardRef<LoginPopupHandles, object>((props, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { qrImgUrl, qrStatus } = useLoginPopup(closeLoginModal, isOpen);

  // 获取完用户数据就关闭登录窗口
  function closeLoginModal() {
    onClose();
  }

  // 使用 useImperativeHandle 钩子暴露特定的属性和方法给父组件
  useImperativeHandle(ref, () => ({
    openModal: onOpen,
    closeModal: onClose,
  }));
  return (
    <>
      <Modal size="md" isOpen={isOpen} onClose={closeLoginModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-lg font-bold leading-none">二维码</h2>
                <p className="text-sm leading-none text-[#666666]">请将二维码放在扫描区域内</p>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-48 h-48 rounded-lg border border-dashed border-gray-200 flex items-center justify-center">
                    <Image src={qrImgUrl} />
                    {/* <Icon icon="mdi:qrcode" className="text-2xl" /> */}
                  </div>

                  {/* 扫码状态 */}
                  {qrStatus?.message && (
                    <div className="flex items-center gap-2">
                      <Icon icon="ion:scan-outline" />
                      <span className="text-sm font-medium">{qrStatus?.message}</span>
                    </div>
                  )}

                  {/* 当前授权用户 */}
                  {qrStatus?.message != '等待扫码' && qrStatus?.message && (
                    <div className="text-sm font-medium flex gap-2 items-center">
                      <Avatar src={qrStatus?.avatarUrl} />
                      <span>{qrStatus?.nickname}</span>
                    </div>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
});
LoginPopup.displayName = 'LoginPopup';

export default LoginPopup;
