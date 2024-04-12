import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Link,
} from '@nextui-org/react';

export default function App() {
  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={importImage('github_avatar.png')}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              XiangZi7
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              793923048@qq.com
            </h5>
          </div>
        </div>
        <Button
          href="https://github.com/XiangZi7"
          as={Link}
          isExternal
          color="primary"
          radius="full"
          size="sm"
          variant="solid"
        >
          Follow
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          AriaLoom -
          “Aria”（咏叹调）和“Loom”（织布机）结合，传递出编织音乐丝线，创造美妙旋律的概念。
          本项目用于巩固练习用，代码比较简洁，适用于对react18入门的同学。技术栈采用Vite5
          、React18、TS。 觉得项目对你有所帮助，请一键三连！ ❤
        </p>
        <span className="pt-2">
          #React18
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">19</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">star</p>
        </div>
      </CardFooter>
    </Card>
  );
}
