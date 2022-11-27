import { useEffect, RefObject } from 'react';

const RIPPLING_TIME = 600;

export default function useRipple(ref: RefObject<HTMLElement | null>, ripplingTime: number = RIPPLING_TIME) {
  useEffect(() => {
    const handleClick = () => {
      !!ref.current && ref.current.classList.add('rippling');

      setTimeout(() => {
        ref.current && ref.current.classList.remove('rippling');
      }, ripplingTime);
    };

    !!ref.current && ref.current.addEventListener('click', handleClick);

    return () => {
      ref.current && ref.current.removeEventListener('click', handleClick);
    };
  }, [ref]);
}
