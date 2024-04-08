import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Avatar, Chip } from '@nextui-org/react';

import TablePro from '@/components/TablePro';

import { playlistDetail } from '@/api';
import { playListState } from '@/model/interface/playListDetail';

function PlaylistDetailJZ() {
  const { id } = useParams();
  const [playlistData, setPlaylistData] = useState<playListState | undefined>(undefined);
  useEffect(() => {
    playlistDetail(Number(id) || 0).then(({ playlist }) => {
      setPlaylistData(playlist);
    });
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex mb-8">
        <div className="flex-none w-72 h-72">
          <div className="relative shadow-black/5 shadow-none rounded-large">
            <img
              className="relative z-10 shadow-black/5 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
              src={playlistData?.coverImgUrl}
              alt="Playlist cover"
            />
            <img
              className="absolute z-0 inset-0 w-full h-full object-cover filter blur-lg scale-105 saturate-150 opacity-30 translate-y-1 rounded-large"
              src={playlistData?.coverImgUrl}
              alt="Playlist cover"
            />
          </div>
        </div>
        <div className="flex-grow ml-4 flex gap-3 flex-col">
          <h1 className="text-xl font-bold mb-2">{playlistData?.name}</h1>
          {/* 用户信息 */}
          <div className="flex items-center mb-2 gap-2">
            {playlistData?.creator && (
              <>
                <Avatar src={playlistData?.creator.avatarUrl} alt="用户头像" />
                <span className="text-sm">{playlistData?.creator.nickname}</span>
              </>
            )}
          </div>

          {/* 标签 */}
          {playlistData?.tags && playlistData?.tags.length > 0 && (
            <div className="flex flex-wrap mb-2 gap-2">
              {playlistData?.tags.map((tag, index) => (
                <Chip color="secondary" variant="shadow" key={index}>
                  {tag}
                </Chip>
              ))}
            </div>
          )}
          {/*描述*/}
          <p className="text-small">{playlistData?.description}</p>

          {/* 创建时间 */}
          <div className="text-sm mt-auto ">
            创建时间:{new Date(playlistData?.createTime ?? 0).toLocaleDateString()}
          </div>
        </div>
      </div>

      <div className="song-list">
        <h2 className="text-2xl font-semibold mb-4">Songs</h2>
        <TablePro SongsData={playlistData?.tracks} />
      </div>
    </div>
  );
}

export default PlaylistDetailJZ;
