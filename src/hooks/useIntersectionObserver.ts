import { useEffect, useState, RefObject } from 'react';

interface Options {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  pageSize: number;
  initialPageNum?: number;
}

type Callback = (pageNum: number, pageSize: number) => void;

export function useIntersectionObserver(
  elementRef: RefObject<Element | Element[]>,
  { threshold = 0.1, root = null, rootMargin = '0px', pageSize, initialPageNum = 1 }: Options,
  callback: Callback,
) {
  const [pageNum, setPageNum] = useState(initialPageNum);

  useEffect(
    () => {
      // 页面中引用的元素若不存在时，直接返回
      if (!elementRef.current) return;

      const isLastElementMap = new Map<Element, boolean>();
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const element = entry.target;
            if (entry.isIntersecting) {
              //   element.classList.remove('opaque');
              //   element.classList.add('come-in');

              const isLastElement = isLastElementMap.get(element) || false;
              if (isLastElement) {
                callback(pageNum, pageSize);
                setPageNum((prevPageNum) => prevPageNum + 1);
                observer.unobserve(element);
              }
            }
          });
        },
        { threshold, root, rootMargin },
      );

      const elements = Array.isArray(elementRef.current) ? elementRef.current : [elementRef.current];
      const lastElementIndex = elements.length - 1;

      elements.forEach((el, index) => {
        if (el) {
          //   el.classList.add('opaque');
          observer.observe(el);
          isLastElementMap.set(el, index === lastElementIndex);
        }
      });

      // 清理函数
      return () => {
        observer.disconnect();
        isLastElementMap.clear();
      };
    },
    // 添加elementRef作为依赖项，确保当Referrence更新时重新运行effect
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [elementRef],
  );

  return { pageNum };
}
