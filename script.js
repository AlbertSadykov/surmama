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
  slidesPerView: 6, 
  spaceBetween: 20,
  loop: false,
  navigation: {
    nextEl: '.team__nav .swiper-button-next',
    prevEl: '.team__nav .swiper-button-prev'
  },
  speed: 600,
  grabCursor: true,
  breakpoints: {
    1600: { slidesPerView: 6 },  
    1200: { slidesPerView: 6 },
    880: { slidesPerView: 5 },
    600: { slidesPerView: 3 },
    0: { slidesPerView: 2},
  },
});



let mobileSwiper;

function initFeaturesSwiper() {
  const grid = document.querySelector('.features-grid');

  if (window.innerWidth < 768 && !mobileSwiper) {

    grid.classList.add('swiper');
    grid.querySelectorAll('.features-card').forEach(card => card.classList.add('swiper-slide'));


    if (!grid.querySelector('.swiper-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.classList.add('swiper-wrapper');
      while (grid.firstChild) {
        wrapper.appendChild(grid.firstChild);
      }
      grid.appendChild(wrapper);
    }

  
    mobileSwiper = new Swiper('.features-grid.swiper', {
      slidesPerView: 1,
      spaceBetween: 15,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else if (window.innerWidth >= 768 && mobileSwiper) {

    mobileSwiper.destroy(true, true);
    mobileSwiper = undefined;

    const wrapper = grid.querySelector('.swiper-wrapper');
    if (wrapper) {
  
      while (wrapper.firstChild) {
        grid.appendChild(wrapper.firstChild);
      }
      wrapper.remove();
    }

   
    grid.classList.remove('swiper');
    grid.querySelectorAll('.features-card').forEach(card => card.classList.remove('swiper-slide'));
  }
}


window.addEventListener('load', initFeaturesSwiper);
window.addEventListener('resize', initFeaturesSwiper);




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



const offset = 80; 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});



const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

document.querySelectorAll('.about__toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const card = toggle.closest('.about__card');
    card.classList.toggle('hover');
  });
});

// Скрыть меню после перехода по ссылке
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('active');
    nav.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});






document.querySelectorAll('.validate-form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    
    let valid = true;

    if (emailInput) {
      if (!validator.isEmail(emailInput.value)) {
        alert('Неверный email');
        valid = false;
      }
    }

    if (phoneInput) {
      // Простая проверка, только цифры и длина >= 10
      const phone = phoneInput.value.replace(/\D/g,'');
      if (!validator.isLength(phone, { min: 10 })) {
        alert('Неверный телефон');
        valid = false;
      }
    }

    if (valid) {
      alert('Форма валидна! Можно отправлять');
      form.submit(); // если нужно реальное отправление
    }
  });
});
