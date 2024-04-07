import { useNavigate } from 'react-router-dom';

import { Icon } from '@iconify/react';
import { Card, Image, CardFooter, ScrollShadow } from '@nextui-org/react';

import TablePro from '@/components/TablePro';

const Music = () => {
  const navigate = useNavigate();
  const songs = [
    {
      id: 1,
      title: 'Song 1',
      artist: 'Artist 1',
      cover: 'http://p1.music.126.net/WCgIIIid62Q3QSV8OrRNbw==/7953867116260442.jpg?param=500y500',
    },
    {
      id: 2,
      title: 'Song 2',
      artist: 'Artist 2',
      cover: 'http://p1.music.126.net/PZyKenujsOMIuVQjkQP6AQ==/5830710162141432.jpg?param=500y500',
    },
    {
      id: 2,
      title: 'Song 2',
      artist: 'Artist 2',
      cover: 'http://p1.music.126.net/PZyKenujsOMIuVQjkQP6AQ==/5830710162141432.jpg?param=500y500',
    },
    {
      id: 2,
      title: 'Song 2',
      artist: 'Artist 2',
      cover: 'http://p1.music.126.net/PZyKenujsOMIuVQjkQP6AQ==/5830710162141432.jpg?param=500y500',
    },
    {
      id: 2,
      title: 'Song 2',
      artist: 'Artist 2',
      cover: 'http://p1.music.126.net/PZyKenujsOMIuVQjkQP6AQ==/5830710162141432.jpg?param=500y500',
    },
    {
      id: 2,
      title: 'Song 2',
      artist: 'Artist 2',
      cover: 'http://p1.music.126.net/PZyKenujsOMIuVQjkQP6AQ==/5830710162141432.jpg?param=500y500',
    },
    {
      id: 2,
      title: 'Song 2',
      artist: 'Artist 2',
      cover: 'http://p1.music.126.net/PZyKenujsOMIuVQjkQP6AQ==/5830710162141432.jpg?param=500y500',
    },
    {
      id: 2,
      title: 'Song 2',
      artist: 'Artist 2',
      cover: 'http://p1.music.126.net/PZyKenujsOMIuVQjkQP6AQ==/5830710162141432.jpg?param=500y500',
    },
    {
      id: 2,
      title: 'Song 2',
      artist: 'Artist 2',
      cover: 'http://p1.music.126.net/PZyKenujsOMIuVQjkQP6AQ==/5830710162141432.jpg?param=500y500',
    },
  ];
  return (
    <>
      <div className="bg-line">
        {/* banner */}
        <div className="flex justify-between w-full h-full relative items-center justify-center">
          <div className="w-2/4 p-3 gap-1 flex flex-col ">
            <h2 className="flex items-center gap-1 text-white">
              <Icon icon="icon-park-solid:vip-one" />
              境界的彼方
            </h2>
            <p className="text-sm text-ellipsis overflow-hidden text-white">
              《境界的彼方》是由鸟居奈古梦著作、鸭居知世插画的轻小说，于2012年6月9日，由KAESUMA文库文库（京都动画）发行。小说曾获得第2回京都动画大赏（小说部门）奖励赏。
              改编自小说的同名电视动画已于2013年10月至12月播出。
            </p>
          </div>
          <div className="w-2/4 h-full ">
            <img className="absolute w-[420px] bottom-0 right-0" src="src/assets/danceMk.png" alt="Playlist cover" />
          </div>
        </div>
      </div>
      {/* 歌单 */}
      <ScrollShadow orientation="horizontal">
        <div className="flex gap-4 my-5">
          {songs.map((song, idx) => (
            <div
              key={idx}
              className="min-w-max inline-block my-2"
              onClick={() => navigate(`/playlistDetail/${song.id}`)}
            >
              <Card isFooterBlurred className="w-full h-[200px] col-span-12 sm:col-span-5">
                <Image
                  removeWrapper
                  src={song.cover}
                  alt={song.title}
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <p className="text-black text-tiny text-center w-full">境界的彼方</p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </ScrollShadow>
      {/* 单曲 */}
      <TablePro className="mt-3" />
    </>
  );
};

export default Music;
