import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import TablePro from '@/components/TablePro';

import { cloudsearch } from '@/api';
const Search = () => {
  // 使用useSearchParams钩子获取搜索参数
  const [searchParams] = useSearchParams();
  // 通过get方法获取指定的搜索参数值
  const keywords = searchParams.get('keywords');

  const [songs, setSongs] = useState([]);
  useEffect(() => {
    cloudsearch({
      kw: keywords as string,
    }).then(({ result }) => {
      console.log(result);
      setSongs(result.songs);
    });
  }, [keywords]);

  function query(pageNum: number) {
    console.log(pageNum);
  }
  return (
    <>
      <TablePro SongsData={songs} query={query} />
    </>
  );
};

export default Search;
