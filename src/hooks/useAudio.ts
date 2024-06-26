import { useEffect, useState, useRef } from 'react';

import { lyric } from '@/api';
import { PlayMode } from '@/model/enum/PlayMode';
import { LyricData } from '@/model/interface/player';
export function useMusicPlayer() {
  const audioRef = useRef(new Audio());
  const { trackList, currentIndex, updateCurrentIndex } = audioStore(
    (state) => ({
      trackList: state.trackList,
      currentIndex: state.currentIndex,
      updateCurrentIndex: state.updateCurrentIndex,
    }),
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  // 播放模式状态;
  const [playMode, setPlayMode] = useState<PlayMode>(PlayMode.Normal);
  // 初始化音量为最大值
  const [volume, setVolume] = useState(0.7);
  // 歌词
  // @ts-ignore
  const [lyrics, setLyrics] = useState<LyricData>({} || undefined);
  const [activeLyricIndex, setActiveLyricIndex] = useState(0);

  // 歌词滚动
  useEffect(() => {
    const findActiveLyricIndex = () => {
      if (lyrics && lyrics.lines) {
        const activeIndex = lyrics.lines.findIndex((line, index, array) => {
          return (
            index === array.length - 1 ||
            (line.time <= currentTime && array[index + 1].time > currentTime)
          );
        });
        if (activeIndex !== -1) {
          setActiveLyricIndex(activeIndex);
        }
      }
    };

    findActiveLyricIndex();
  }, [currentTime, lyrics]);

  // 加载当前歌曲和歌词
  useEffect(() => {
    if (trackList.length > 0) {
      audioRef.current.src = trackList[currentIndex].source;
      setIsPlaying(true);
      // 这里获取并设置歌词
      lyric(trackList[currentIndex].id)
        .then((result) => {
          // 解析并合并原文和翻译
          const mergedLyrics = parseAndMergeLyrics(result);
          setLyrics(mergedLyrics); // 更新歌词状态
        })
        .catch((err) => {
          console.error('获取歌词失败:', err);
          // @ts-ignore
          setLyrics(undefined); // 出错时，重置歌词
        });
    }
  }, [currentIndex]);

  // 修改音量
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  // 控制播放和暂停
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // 更新当前播放时间
  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(audioRef.current.currentTime * 1000); // 转换为毫秒
    };
    audioRef.current.addEventListener('timeupdate', updateCurrentTime);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      audioRef.current.removeEventListener('timeupdate', updateCurrentTime);
    };
  }, []);

  // 更改音频声音大小
  const changeVolume = (newVolume: number) => {
    setVolume(newVolume);
  };
  // 播放/暂停 切换
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  // 随机选择下一个索引的方法
  const getRandomIndex = () => {
    let index = Math.floor(Math.random() * trackList.length);
    while (index === currentIndex) {
      // 确保新的随机索引不等于当前的播放索引
      index = Math.floor(Math.random() * trackList.length);
    }
    return index;
  };
  // 下一首
  const nextTrack = () => {
    let nextIndex = currentIndex;

    if (playMode === PlayMode.Shuffle) {
      nextIndex = getRandomIndex();
    } else if (playMode === PlayMode.Normal) {
      nextIndex = currentIndex + 1 >= trackList.length ? 0 : currentIndex + 1;
    }
    // 对于单曲循环（PlayMode.Repeat），不需要更改index，因为要重复当前歌曲
    updateCurrentIndex(nextIndex); // 确保有更新currentIndex的逻辑
    audioRef.current.src = trackList[nextIndex].source;
    audioRef.current.play().catch((err) => console.error('播放失败:', err));
  };

  // 上一首
  // 通常不需要在前一首歌曲上实现随机和单曲循环模式;
  const prevTrack = () => {
    const prevIndex =
      currentIndex - 1 < 0 ? trackList.length - 1 : currentIndex - 1;
    updateCurrentIndex(prevIndex);
    audioRef.current.src = trackList[prevIndex].source;
    setIsPlaying(true); // 自动播放前一首
  };
  // 切换播放模式
  const togglePlayMode = () => {
    switch (playMode) {
      case PlayMode.Normal:
        setPlayMode(PlayMode.Repeat);
        break;
      case PlayMode.Repeat:
        setPlayMode(PlayMode.Shuffle);
        break;
      case PlayMode.Shuffle:
        setPlayMode(PlayMode.Normal);
        break;
      default:
        setPlayMode(PlayMode.Normal);
    }
  };
  // 设置当前歌曲到指定时间
  const seek = (time: number) => {
    audioRef.current.currentTime = time / 1000; // 将毫秒转换为秒
  };

  return {
    isPlaying,
    track: trackList[currentIndex],
    currentIndex,
    currentTime,
    duration: trackList.length > 0 ? trackList[currentIndex].time : 0,
    playMode,
    volume,
    lyrics,
    activeLyricIndex,
    togglePlayPause,
    nextTrack,
    prevTrack,
    seek,
    togglePlayMode,
    changeVolume,
  };
}
