import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate, useParams } from 'react-router-dom';

import { Icon } from '@iconify/react';
import { Button, Avatar, AvatarGroup } from '@nextui-org/react';

import { formatMillisecondsToTime } from '@/utils/format.ts';

import { commentMV, mvDetail, mvUrl, simiMV } from '@/api';
import { CommentsList, MVDetail, SimiMV } from '@/model/interface/MV';

export default function PlayMV() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [mvSrc, setMVsrc] = useState('');
  const [mvInfo, setMVInfo] = useState<MVDetail>({} as MVDetail);
  const [commentsList, setCommentsList] = useState<CommentsList>(
    {} as CommentsList,
  );
  const [simiMVList, setSimiMV] = useState<SimiMV[]>([]);

  useEffect(() => {
    if (!id) return;
    Promise.all([mvUrl(id), mvDetail(id), commentMV({ id }), simiMV(id)]).then(
      (res) => {
        setMVsrc(res[0].data.url);
        setMVInfo(res[1].data);
        // @ts-ignore
        setCommentsList(res[2]);
        // @ts-ignore
        setSimiMV(res[3].mvs);
      },
    );
  }, [id]);
  return (
    <div className="w-full px-4 mx-auto grid grid-rows-[auto_1fr_auto] gap-4 md:gap-6 pb-10">
      <main className="grid md:grid-cols-6 gap-10 items-start">
        <div className="col-span-4 grid gap-4">
          <div className="grid gap-2">
            {/* MV */}
            <div className="rounded-xl overflow-hidden aspect-video">
              <ReactPlayer url={mvSrc} controls width="100%" height="100%" />
            </div>
            {/* 标题 */}
            <div className="py-2 grid gap-2">
              <h1 className="text-xl font-semibold line-clamp-2">
                {mvInfo?.name}
              </h1>
              <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center">
                  <AvatarGroup isBordered>
                    {mvInfo?.artists?.map((item) => (
                      <Avatar key={item.id} src={item.img1v1Url} />
                    ))}
                  </AvatarGroup>
                  <div className="text-sm">
                    <div className="font-semibold">
                      {mvInfo?.artists?.map((item) => item.name).join(' ')}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      70K subscribers
                    </div>
                  </div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <Button size="sm" variant="shadow">
                    <Icon icon="ph:play-circle-bold" />
                    Play
                  </Button>
                  <Button size="sm" variant="shadow">
                    <Icon icon="tabler:heart-filled" />
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid gap-2 text-base leading-relaxed">
              <p>{mvInfo.desc}</p>
            </div>
          </div>
          {/* 评论 */}
          <div className="grid gap-6">
            <h2 className="font-semibold text-xl">
              {commentsList?.total} Comments
            </h2>

            {commentsList?.comments?.map((item) => (
              <div
                key={item.commentId}
                className="text-sm flex items-start gap-4  w-full"
              >
                <Avatar
                  src={item.user.avatarUrl + '?param=60y60'}
                  className="w-10 h-10 border"
                ></Avatar>
                <div className="grid gap-1.5 w-full">
                  <div className="flex gap-1 flex-col ">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{item.user.nickname}</div>
                      <div>{item.ipLocation.location}</div>
                    </div>
                    <div className="text-gray-500 text-xs dark:text-gray-400">
                      {item.timeStr}
                    </div>
                  </div>
                  <div>{item.content} </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 右边栏 */}
        <div className="col-span-2 grid gap-4">
          {simiMVList?.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 relative cursor-pointer"
              onClick={() => navigate(`/playmv/${item.id}`)}
            >
              <img
                alt="Thumbnail"
                className="aspect-video rounded-lg object-cover"
                height={94}
                src={item.cover}
                width={168}
              />
              <div className="text-sm">
                <div className="font-medium line-clamp-2">{item.name}</div>
                <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                  {item.artistName}
                </div>
                <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
                  {formatMillisecondsToTime(item.duration)}
                  <div className="flex gap-1 items-center">
                    <Icon icon="material-symbols:play-circle" />{' '}
                    {item.playCount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
