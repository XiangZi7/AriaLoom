/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';

import { useShallow } from 'zustand/react/shallow';

import { loginQrKey, loginQrCreate, loginQrCheck } from '@/api';
import { ResLoginStatus, QrCallback } from '@/model/interface/loginPopup';

function useLoginQr(qrCallback: QrCallback, isOpen: boolean) {
  const [qrKey, setQrKey] = useState('');
  const [qrImgUrl, setQrImgUrl] = useState('');
  const [qrStatus, setQrStatus] = useState<ResLoginStatus | null>(null);
  const intervalId = useRef<number | null>(null);

  const { refreshLoginStatus } = userStore(
    useShallow((state) => ({
      refreshLoginStatus: state.refreshLoginStatus,
    })),
  );

  const fetchQrKey = async () => {
    try {
      const response = await loginQrKey();
      setQrKey(response.data.unikey);
      return response.data.unikey;
    } catch (error) {
      console.error('获取二维码 key 失败:', error);
    }
  };

  const createQrCode = async () => {
    try {
      const key = await fetchQrKey();
      const response = await loginQrCreate(key);
      setQrImgUrl(response.data.qrimg);
    } catch (error) {
      console.error('创建二维码失败:', error);
    }
  };

  const checkQrStatus = async () => {
    try {
      const response = await loginQrCheck(qrKey);
      setQrStatus(response);

      if (response.code === 800) {
        if (intervalId.current !== null) {
          window.clearInterval(intervalId.current);
          intervalId.current = null;
        }
        await createQrCode();
        startPolling();
      } else if (response.code === 803) {
        stopPolling();
        // 刷新用户状态
        refreshLoginStatus();
        setQrStatus({});
        setQrImgUrl('');
        setQrKey('');
        qrCallback(true);
      }
    } catch (error) {
      console.error('检查二维码状态失败:', error);
    }
  };

  const startPolling = () => {
    stopPolling();
    intervalId.current = window.setInterval(
      checkQrStatus,
      3000,
    ) as unknown as number;
  };

  const stopPolling = () => {
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  useEffect(() => {
    (async () => {
      if (!isOpen) return;
      await createQrCode();
    })();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    startPolling();
    return () => {
      stopPolling();
    };
  }, [qrKey]);

  return { qrKey, qrImgUrl, qrStatus, stopPolling };
}

export default useLoginQr;
