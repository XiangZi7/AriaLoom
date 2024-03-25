import { Button, Image } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="p-2">
      <div className="container mx-auto px-6 flex justify-between items-center h-full">
        <div className="space-y-6 max-w-lg">
          <h1 className="text-6xl font-bold leading-tight">
            <span className="block">Theme</span>
            <span className="block bg-[#bd1e59] text-white px-2 inline-block">
              Week
            </span>
            <span className="block">Animation</span>
            <span className="block bg-orange-500 text-white px-2 inline-block">
              Information
            </span>
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
          <Button className="bg-orange-500 text-white">View album</Button>
          <div className="flex space-x-4">
            <Image isZoomed isBlurred width={100} src="src/assets/home6.jpg" />
            <Image isZoomed isBlurred width={100} src="src/assets/home5.jpg" />
            <Image isZoomed isBlurred width={100} src="src/assets/home4.jpg" />
            <Image isZoomed isBlurred width={100} src="src/assets/home7.jpg" />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center gap-4">
          <div className="flex flex-col gap-4">
            <Image isBlurred isZoomed width={240} src="src/assets/home2.png" />
            <Image isBlurred isZoomed width={240} src="src/assets/home3.png" />
          </div>
          <div className="h-auto max-w-md">
            <Image isBlurred isZoomed src="src/assets/home1.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
