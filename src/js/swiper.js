import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});