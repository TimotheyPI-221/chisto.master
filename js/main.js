document.addEventListener('DOMContentLoaded', function () {

  const burgerMenu = document.getElementById('burger-menu')
  const burgerLinks = document.getElementById('burger-nav')
  const firstLine = document.querySelector('.line-1')
  const secondLine = document.querySelector('.line-2')
  const thirdLine = document.querySelector('.line-3')
  const black = document.querySelector('.black')

  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const service = document.getElementById('service'); 
    const example = document.getElementById('example'); 
  
    const rect = service.getBoundingClientRect();
    const rect2 = example.getBoundingClientRect();

    const offset = window.innerHeight * 0.8;
  
    if (rect.top <= window.innerHeight - offset && rect.bottom >= -200) {
      header.classList.add('scrolled'); 
    } else {
      header.classList.remove('scrolled'); 
    }
    if (rect2.top <= window.innerHeight - offset && rect2.bottom >= -1110) {
      header.classList.add('scrolled-2'); 
    } else {
      header.classList.remove('scrolled-2'); 
    }
  });

  burgerMenu.addEventListener('click', (event) => {
    event.stopPropagation()
    burgerLinks.classList.toggle('active')
    firstLine.classList.toggle('active')
    secondLine.classList.toggle('active')
    thirdLine.classList.toggle('active')
    black.classList.toggle('active')
  })

  document.addEventListener('click', (event) => {
    const clickInside = burgerLinks.contains(event.target)

    if (!clickInside && burgerLinks.classList.contains('active')) {
      burgerLinks.classList.remove('active')
    black.classList.remove('active')

    }
  })

  burgerLinks.addEventListener('click', (event) => {
    event.stopPropagation(); 
  });

const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  // centeredSlides: true,
  // slidesPerView: 'auto',
  coverflowEffect: {
    rotate: -1,   // Угол поворота слайдов
    stretch: 0,   // Расстояние между слайдами
    depth: 150,   // Глубина эффекта
    modifier: 6,  // Интенсивность эффекта
    slideShadows: true, // Тени на слайдах
  },
  direction: 'horizontal',
  loop: true,
  loopAdditionalSlides: 2, // Добавляем дополнительные слайды для зацикливания
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500, 
    disableOnInteraction: false, 
  },
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    600: {
      slidesPerView: 1.3, 
      slidesPerGroup: 1,
      centeredSlides: true,
    },
    1000: {
      slidesPerView: 2,  
      spaceBetween: 10, 
      slidesPerGroup: 2,
      centeredSlides: false,
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
})