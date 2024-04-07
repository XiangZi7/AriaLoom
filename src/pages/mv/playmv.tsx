import ReactPlayer from 'react-player';

import { Icon } from '@iconify/react';
import { Button, Avatar, Link } from '@nextui-org/react';

export default function PlayMV() {
  return (
    <div className="w-full px-4 mx-auto grid grid-rows-[auto_1fr_auto] gap-4 md:gap-6 pb-10">
      <main className="grid md:grid-cols-6 gap-10 items-start">
        <div className="col-span-4 grid gap-4">
          <div className="grid gap-2">
            {/* MV */}
            <div className="rounded-xl overflow-hidden aspect-video">
              <ReactPlayer
                url="http://vodkgeyttp8.vod.126.net/cloudmusic/afb8/core/7fda/fb3b6118c19140fe634c6350cb648856.mp4?wsSecret=b3048f7652ca9a285d875a633b194e1c&wsTime=1712128242"
                controls
                width="100%"
                height="100%"
              />
            </div>
            {/* 标题 */}
            <div className="py-2 grid gap-2">
              <h1 className="text-xl font-semibold line-clamp-2">
                Vercel Ship Keynote: Introducing the frontend cloud
              </h1>
              <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center">
                  <img
                    alt="Thumbnail"
                    className="rounded-full object-cover aspect-square border"
                    height={40}
                    src="/placeholder.svg"
                    width={40}
                  />
                  <div className="text-sm">
                    <div className="font-semibold">Vercel</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">70K subscribers</div>
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
              <p>
                Today, introducing the frontend cloud, where frontend developers build, test, and deploy high-quality
                web applications efficiently and quickly, all on Vercel.
              </p>
            </div>
          </div>
          {/* 评论 */}
          <div className="grid gap-6">
            <h2 className="font-semibold text-xl">110 Comments</h2>

            <div className="text-sm flex items-start gap-4">
              <Avatar className="w-10 h-10 border"></Avatar>
              <div className="grid gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">@HackSoft</div>
                  <div className="text-gray-500 text-xs dark:text-gray-400">2 months ago</div>
                </div>
                <div>
                  We are more than excited to leverage all the new stuff, building better products for our clients ✨
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 右边栏 */}
        <div className="col-span-2 grid gap-4">
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168}
            />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">Introducing v0: Generative UI</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Vercel</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">300K views · 5 days ago</div>
            </div>
          </div>
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168}
            />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">Introducing the frontend cloud</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Vercel</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">1.2M views · 2 months ago</div>
            </div>
          </div>
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168}
            />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">Using Vercel KV with Svelte</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Lee Robinson</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">21K views · 1 week ago</div>
            </div>
          </div>
          <div className="flex items-start gap-4 relative">
            <Link className="absolute inset-0" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt="Thumbnail"
              className="aspect-video rounded-lg object-cover"
              height={94}
              src="/placeholder.svg"
              width={168}
            />
            <div className="text-sm">
              <div className="font-medium line-clamp-2">Loading UI with Next.js 13</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">Delba</div>
              <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">12K views · 10 days ago</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
