document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq__item').forEach(item => {
    const btn = item.querySelector('.faq__question');
    btn.addEventListener('click', function () {
      item.classList.toggle('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var toggles = document.querySelectorAll('.about__toggle');

  toggles.forEach(function(btn){
    btn.addEventListener('click', function () {
      var card = btn.closest('.about__card');
      if(!card) return;

      var isOpen = card.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const slider = new Swiper('.quotes__carousel', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: '.quotes__nav .swiper-button-next',
      prevEl: '.quotes__nav .swiper-button-prev'
    },
    speed: 600,
    grabCursor: true,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 12 },
      700: { slidesPerView: 1, spaceBetween: 16 },
      1024: { slidesPerView: 2, spaceBetween: 20 }
    }
  });

  document.querySelectorAll('.card-toggle').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const card = btn.closest('.quotes__card');
      const expanded = card.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  });


const teamSwiper = new Swiper('.team__carousel', {
  slidesPerView: 6, // для самых больших экранов
  spaceBetween: 20,
  loop: false,
  navigation: {
    nextEl: '.team__nav .swiper-button-next',
    prevEl: '.team__nav .swiper-button-prev'
  },
  speed: 600,
  grabCursor: true,
  breakpoints: {
    1600: { slidesPerView: 6 },  // экраны 1600px+
    1200: { slidesPerView: 6 },
    880: { slidesPerView: 5 },
    600: { slidesPerView: 3 },
    0: { slidesPerView: 2},
  },
});


});



document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.quotes__card');

  cards.forEach(card => {
    const toggle = card.querySelector('.card-toggle');

    toggle.addEventListener('click', () => {
      card.classList.toggle('active');

  
      toggle.textContent = card.classList.contains('active') ? '-' : '+';
    });
  });
});


