import { React } from 'react';
import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button type='button' onClick={() => swiper.slidePrev()}>
      <svg
        width='8'
        height='22'
        viewBox='0 0 8 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8 20.0333L6.78663 22L0 11L6.78663 0L8 1.96667L2.42673 11L8 20.0333H8Z'
          fill='#CACACA'
        />
      </svg>
    </button>
  );
}
