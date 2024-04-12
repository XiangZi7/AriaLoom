import { Button, Image } from '@nextui-org/react';

import ProFile from '@/components/profile';

import { importImage } from '@/utils/hrefIamge';

export default function Home() {
  return (
    <div className="p-2">
      <div className="container mx-auto px-6 flex justify-between items-center h-full">
        <div className="space-y-6 max-w-lg">
          <h1 className="text-6xl font-bold leading-tight">
            <span className="block">Theme</span>
            <span className="block text-[#E730CA] px-2 ">Week</span>
            <span className="block">Animation</span>
            <span className="block text-[#E730CA]  px-2 ">Information！</span>
          </h1>
          <p className="dark:text-gray-300 text-gray-500 text-base">
            Beyond the Boundary (Japanese: 境界の彼方, Hepburn: Kyōkai no
            Kanata) is a Japanese light novel series written by Nagomu Torii,
            with illustrations by Tomoyo Kamoi. The work won an honorable
            mention in the Kyoto Animation Award competition in 2011. Kyoto
            Animation has published three volumes since June 2012. Set in
            Kashihara, Nara, the story follows a young boy named Akihito Kanbara
            who is an immortal being and half a spirit. After Akihito saves a
            girl named Mirai Kuriyama from committing suicide, he learns that
            she is a spirit world warrior and their lives become intertwined.
          </p>
          <div className="space-x-2">
            <Button className="bg-[#E730CA] xl:w-40 py-2.5 font-semibold leading-6 text-sm xl:text-base  hover:text-white text-center transition-colors text-white">
              View album
            </Button>
            <Button
              className="border-[#E730CA] hover:border-[#E730CA]/30 bg-transparent  w-32 xl:w-40 py-2.5 font-semibold leading-6 text-sm xl:text-base text-[#E730CA] hover:text-white text-center transition-colors"
              variant="ghost"
            >
              View album
            </Button>
          </div>
          <div className="flex space-x-4">
            <Image
              isZoomed
              isBlurred
              width={100}
              src={importImage('home6.jpg')}
            />
            <Image
              isZoomed
              isBlurred
              width={100}
              src={importImage('home5.jpg')}
            />
            <Image
              isZoomed
              isBlurred
              width={100}
              src={importImage('home4.jpg')}
            />
            <Image
              isZoomed
              isBlurred
              width={100}
              src={importImage('home7.jpg')}
            />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center gap-4">
          <div className="flex flex-col gap-4 motion-safe:animate-float">
            <Image
              isBlurred
              isZoomed
              width={240}
              src={importImage('home2.png')}
            />
            <Image
              isBlurred
              isZoomed
              width={240}
              src={importImage('home3.png')}
            />
          </div>
          <div className="h-auto max-w-md motion-safe:animate-float space-y-5">
            <ProFile />
            <Image
              width={340}
              isBlurred
              isZoomed
              src={importImage('home1.png')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
