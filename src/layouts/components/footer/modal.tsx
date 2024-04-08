import { useEffect, MouseEventHandler, useRef, forwardRef, useImperativeHandle, CSSProperties, useState } from 'react';

import { Icon } from '@iconify/react';
// eslint-disable-next-line import/order
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Avatar,
  ScrollShadow,
  Switch,
  Slider,
} from '@nextui-org/react';

import './modal.scss';
import { useShallow } from 'zustand/react/shallow';

import { useSharedMusicPlayer } from '@/components/musicPlayerContext';

const PlayerModal = forwardRef((_props, ref) => {
  const {
    isPlaying,
    currentTime,
    togglePlayPause,
    duration,
    lyrics,
    track,
    activeLyricIndex,
    seek,
    nextTrack,
    prevTrack,
  } = useSharedMusicPlayer();
  // 使用类型断言创建包含自定义CSS变量的样式对象
  const albumArtStyle: CSSProperties = {
    '--track-cover-url': `url(${track.cover})`,
  } as CSSProperties;
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  // 通过useImperativeHandle暴露特定的方法给父组件
  useImperativeHandle(ref, () => ({
    isOpen,
    onOpen,
    onOpenChange,
    onClose,
  }));

  const [isTranslation, setIsTranslation] = useState(true);
  const [isRomaLrc, setIsRomalrc] = useState(false);
  const lyricsContainerRef = useRef<HTMLDivElement>(null); // 用于引用歌词容器
  const activeLyricRef = useRef<HTMLLIElement>(null); // 用于引用当前活动的歌词行

  const { userInfo } = userStore(
    useShallow((state) => ({
      userInfo: state.userInfo,
    })),
  );
  // 监听活动歌词索引的变化
  useEffect(() => {
    if (activeLyricRef.current && lyricsContainerRef.current) {
      const containerHeight = lyricsContainerRef.current.offsetHeight;
      const activeLyricHeight = activeLyricRef.current.offsetHeight;
      const activeLyricTop = activeLyricRef.current.offsetTop;

      const scrollTo = activeLyricTop - containerHeight / 2 + activeLyricHeight / 2;
      lyricsContainerRef.current.scrollTo({
        top: scrollTo,
        behavior: 'smooth', // 平滑滚动
      });
    }
  }, [activeLyricIndex]);

  return (
    <>
      <Modal hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange} size="full">
        <ModalContent>
          {(onClose: MouseEventHandler<SVGSVGElement> | undefined) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <Icon icon="material-symbols:arrow-back-ios" className="cursor-pointer" onClick={onClose} />
                  <div className="flex gap-2 items-center">
                    <Icon icon="material-symbols:bluetooth" className="text-lg" />
                    <Icon icon="material-symbols:wifi" className="text-lg" />
                    <Icon icon="ic:baseline-battery-charging-80" className="text-lg" />
                    <Avatar
                      className="transition-transform"
                      color="secondary"
                      name="Jason Hughes"
                      size="sm"
                      src={userInfo?.avatarUrl}
                    />
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-1 items-center justify-center">
                  <div className="flex-[50%] max-w-[50%]  md:flex hidden   h-full items-center justify-center">
                    <div className="items-center justify-center flex flex-col h-full w-full">
                      <div className={`music-player-container ${isPlaying ? 'is-playing' : ''}`}>
                        <div className="album">
                          <div className="album-art" style={albumArtStyle} />
                          <div
                            className="vinyl"
                            style={{ ...albumArtStyle, animationPlayState: isPlaying ? 'running' : 'paused' }}
                          />
                        </div>
                      </div>
                      {/*controller*/}
                      <div className="flex flex-col items-center w-96 mt-5">
                        <div className="flex gap-2 items-center justify-center">
                          {/* 上一首 */}
                          <Button
                            isIconOnly
                            className="hover:bg-foreground/10"
                            radius="full"
                            variant="light"
                            onPress={prevTrack}
                          >
                            <Icon icon="solar:skip-previous-bold" className="text-xl" />
                          </Button>
                          {/* 暂停、播放 */}
                          <Button
                            isIconOnly
                            className="w-auto h-auto hover:bg-foreground/10"
                            radius="full"
                            variant="light"
                            onClick={togglePlayPause}
                          >
                            <Icon
                              icon={isPlaying ? 'ic:round-pause-circle' : 'ic:round-play-circle'}
                              className="text-4xl"
                            />
                          </Button>
                          {/* 下一首 */}
                          <Button
                            isIconOnly
                            className="hover:bg-foreground/10"
                            radius="full"
                            variant="light"
                            onPress={nextTrack}
                          >
                            <Icon icon="solar:skip-previous-bold" className="transform scale-x-[-1] text-xl" />
                          </Button>
                        </div>
                        {/* 进度条 */}
                        <div className="flex gap-2 w-full items-center">
                          <span className="text-small w-10 text-foreground/50">
                            {formatMillisecondsToTime(currentTime)}
                          </span>
                          <Slider
                            aria-label="Music progress"
                            classNames={{
                              track: 'bg-default-500/30',
                              thumb: 'w-4 h-4 after:w-2 after:h-2 after:bg-foreground',
                            }}
                            color="foreground"
                            value={currentTime}
                            maxValue={duration}
                            onChange={(val) => seek(val as number)}
                            size="sm"
                          />
                          <span className="text-small w-10 text-foreground/50">
                            {formatMillisecondsToTime(duration)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-[50%] max-w-[50%] h-full items-center justify-center ">
                    <div className="items-center justify-center flex h-full">
                      <ScrollShadow hideScrollBar className="h-[600px] w-full text-center " ref={lyricsContainerRef}>
                        <ul className="transform ease-in-out">
                          {lyrics &&
                            lyrics.lines &&
                            lyrics.lines.map((line, index) => (
                              <li
                                ref={index === activeLyricIndex ? activeLyricRef : null}
                                className={`text-small py-1 transition-all duration-300 ease-in-out ${index === activeLyricIndex ? ' scale-105 font-semibold' : 'text-foreground/50'} font-body`}
                                key={line.time}
                              >
                                <p>{line.text}</p>
                                {isTranslation && line.translation && (
                                  <p className="text-xs text-foreground/70">{line.translation}</p>
                                )}
                                {isRomaLrc && line.romaLrc && (
                                  <p className="text-xs text-foreground/70">{line.romaLrc}</p>
                                )}
                              </li>
                            ))}
                        </ul>
                      </ScrollShadow>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Switch size="sm" isSelected={isTranslation} onValueChange={setIsTranslation} color="primary">
                  翻译
                </Switch>
                <Switch size="sm" isSelected={isRomaLrc} onValueChange={setIsRomalrc} color="primary">
                  罗马音
                </Switch>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
});

PlayerModal.displayName = 'PlayerModal';

export default PlayerModal;
