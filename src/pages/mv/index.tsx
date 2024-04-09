import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Image, Pagination, Select, SelectItem } from '@nextui-org/react';

import { areaData, orderData } from './data';

import { allMV } from '@/api';
import { MVParams } from '@/api/interface.ts';
import { MVListState } from '@/model/interface/song';
const MVList = () => {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [initialPage, setInitialPage] = useState(1);
  const [selectedOrderKeys, setSelectedOrderKeys] = useState(new Set(['上升最快']));
  const [selectedAreaKeys, setSelectedAreaKeys] = useState(new Set(['全部']));
  const [MVList, setMVPList] = useState<MVListState[]>([]);

  function getMVData(pageNum: number, orderKeys?: Set<string>, areaKeys?: Set<string>) {
    // 如果orderKeys或areaKeys为undefined，则使用空Set作为默认值
    const safeOrderKeys = orderKeys ? [...orderKeys] : [];
    const safeAreaKeys = areaKeys ? [...areaKeys] : [];

    const obj: MVParams = {
      order: safeOrderKeys[0], // 如果safeOrderKeys为空数组，则结果为undefined
      area: safeAreaKeys[0], // 如果safeAreaKeys为空数组，则结果为undefined
      offset: pageNum,
    };

    allMV(obj).then((res) => {
      if (res.code == 400) return;
      setMVPList(res.data);
      if (res.count) {
        setTotal(res.count as number);
      }
    });
  }

  useEffect(() => {
    getMVData(initialPage, selectedOrderKeys, selectedAreaKeys);
  }, [selectedOrderKeys, selectedAreaKeys, initialPage]); // 依赖项数组中包含状态
  function onChange(pageNum: number) {
    setInitialPage(pageNum);
    getMVData(pageNum);
  }
  return (
    <>
      <div className="flex space-x-2 mb-4">
        <Select
          label="Order"
          className="max-w-xs"
          selectedKeys={selectedOrderKeys}
          // @ts-ignore
          onSelectionChange={setSelectedOrderKeys}
        >
          {orderData.map((order) => (
            <SelectItem key={order} value={order}>
              {order}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Area"
          className="max-w-xs"
          selectedKeys={selectedAreaKeys}
          // @ts-ignore
          onSelectionChange={setSelectedAreaKeys}
        >
          {areaData.map((area) => (
            <SelectItem key={area} value={area}>
              {area}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {MVList.map((mv) => (
          <div
            onClick={() => navigate(`/playmv/${mv.id}`)}
            key={mv.id}
            className="my-0 mx-auto rounded-lg hover:shadow-2xl transition duration-200 ease-in-out transform hover:scale-105"
          >
            <Image src={mv.cover + '?param=300y200'} alt={mv.title} />
            <div className="p-4 w-full">
              <h2 className="text-sm font-semibold">{mv.name}</h2>
              <p className="text-xs text-gray-600">{mv.artistName}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full">
        <Pagination total={total} page={initialPage} onChange={onChange} />
      </div>
    </>
  );
};

export default MVList;
