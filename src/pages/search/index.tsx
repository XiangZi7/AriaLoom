import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { Icon } from '@iconify/react';
import { Image, Pagination, Tab, Tabs } from '@nextui-org/react';

import TablePro from '@/components/TablePro';

import { cloudsearch } from '@/api';
import { SongListState } from '@/model/interface/song';
const Search = () => {
  const Navigate = useNavigate();
  // 使用useSearchParams钩子获取搜索参数
  const [searchParams] = useSearchParams();
  // 通过get方法获取指定的搜索参数值
  const keywords = searchParams.get('keywords');

  const [songs, setSongs] = useState([]);
  const [songsList, setSongsList] = useState<SongListState[]>([]);
  const [total, setTotal] = useState(0);
  const [initialPage, setInitialPage] = useState(1);
  const [selectedKey, setSelectedKey] = useState<string>('Songs');

  function onChange(pageNum: number) {
    setInitialPage(pageNum);
    getData(pageNum);
  }

  useEffect(() => {
    getData();
  }, [keywords]);

  function selectChange(key: string) {
    getData(1, key);
    setSelectedKey(key);
  }

  function getData(pageNum?: number, type?: string) {
    cloudsearch({
      kw: keywords as string,
      type: type == 'SongList' ? 1000 : 1,
      offset: pageNum,
    }).then(({ result }) => {
      if (type == 'SongList') {
        setSongsList(result.playlists);
        setTotal(result.playlistCount);
      } else {
        setSongs(result.songs);
        setTotal(result.songCount);
      }
    });
  }

  return (
    <>
      <Tabs
        variant="bordered"
        aria-label="Options"
        selectedKey={selectedKey}
        onSelectionChange={(key) => selectChange(key.toString())}
      >
        <Tab
          key="Songs"
          title={
            <div className="flex items-center space-x-2">
              <Icon
                icon="material-symbols:android-now-playing"
                className="text-xl"
              />{' '}
              <span>Songs</span>
            </div>
          }
        />
        <Tab
          key="SongList"
          title={
            <div className="flex items-center space-x-2">
              <Icon
                icon="streamline:music-folder-song-solid"
                className="text-xl"
              />{' '}
              <span>SongList</span>
            </div>
          }
        />
      </Tabs>
      {selectedKey == 'Songs' && (
        <div>
          <TablePro SongsData={songs} className="mt-3" />
          <div className="flex items-center justify-center w-full">
            <Pagination total={total} page={initialPage} onChange={onChange} />
          </div>
        </div>
      )}
      {selectedKey == 'SongList' && (
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4 mt-3">
          {songsList.map((song) => (
            <div
              key={song.id}
              className="rounded-lg shadow-md transform hover:scale-105 transition duration-500 ease-in-out my-0 mx-auto"
              onClick={() => Navigate(`/playListDetail/${song.id}`)}
            >
              <Image
                src={song.coverImgUrl + '?param=300y300'}
                alt={song.name}
                className=""
              />
              <div className="text-sm text-center mt-2">{song.name}</div>
              <p className="text-center text-default-500 text-xs">
                {song.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
