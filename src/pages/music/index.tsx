import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Icon } from '@iconify/react';
import { Card, Image, CardFooter, ScrollShadow } from '@nextui-org/react';

import TablePro from '@/components/TablePro';

import { importImage } from '@/utils/hrefIamge.ts';

import { cloudsearch } from '@/api';
import { songListState, songState } from '@/model/interface/search';

const Music = () => {
  const navigate = useNavigate();
  const [songs, setSongs] = useState<songState[]>([]);
  const [SongList, setSongsList] = useState<songListState[]>([]);

  useEffect(() => {
    cloudsearch({ kw: '境界的彼方' }).then(({ result }) => {
      setSongs(result.songs);
    });
    cloudsearch({ kw: '境界的彼方', type: 1000 }).then(({ result }) => {
      setSongsList(result.playlists);
    });
  }, []);

  return (
    <>
      <div className="bg-line">
        {/* banner */}
        <div className="flex justify-between w-full h-full relative items-center">
          <div className="flex-[60%] max-w-[60%] p-3 gap-1 flex-col md:flex hidden">
            <h2 className="flex items-center gap-1 text-white">
              <Icon icon="icon-park-solid:vip-one" />
              境界的彼方
            </h2>
            <p className="text-sm text-ellipsis overflow-hidden text-white">
              《境界的彼方》是由鸟居奈古梦著作、鸭居知世插画的轻小说，于2012年6月9日，由KAESUMA文库（京都动画）发行。小说曾获得第2回京都动画大赏（小说部门）奖励赏。
              改编自小说的同名电视动画已于2013年10月至12月播出。
            </p>
          </div>
          <div className="flex-[40%] max-w-[40%] h-full ">
            <img
              className="absolute w-[420px] bottom-0 right-0"
              src={importImage('danceMk.png')}
              alt="Playlist cover"
            />
          </div>
        </div>
      </div>
      {/* 歌单 */}
      <ScrollShadow orientation="horizontal">
        <div className="flex gap-4 my-5">
          {SongList.map((song, idx) => (
            <div
              key={idx}
              className="min-w-max inline-block my-2"
              onClick={() => navigate(`/playlistDetail/${song.id}`)}
            >
              <Card isFooterBlurred className="w-full h-[200px] col-span-12 sm:col-span-5">
                <Image
                  removeWrapper
                  src={song.coverImgUrl + '?param=350y350'}
                  alt={song.name}
                  className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                  <p className="text-black text-tiny text-center truncate w-full">{song.name}</p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </ScrollShadow>
      {/* 单曲 */}
      <TablePro className="mt-3" SongsData={songs} />
    </>
  );
};

export default Music;
