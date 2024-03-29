import { useCallback, useRef } from "react";

const useInfinityScroll = (increasePageNo, isFetching) => {
  const observer = useRef();
  const listRef = useCallback(
    (node) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          increasePageNo();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isFetching, increasePageNo]
  );
  return listRef;
};

export default useInfinityScroll;
