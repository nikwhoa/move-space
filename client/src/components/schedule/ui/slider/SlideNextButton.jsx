import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button type='button' onClick={() => swiper.slideNext()}>
      <svg
        width='8'
        height='22'
        viewBox='0 0 8 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0 20.0333L1.21337 22L8 11L1.21337 0L0 1.96667L5.57327 11L0 20.0333H0Z'
          fill='#CACACA'
        />
      </svg>
    </button>
  );
}
