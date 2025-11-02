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
