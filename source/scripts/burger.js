(function(){
  const burger = document?.querySelector('.button-open');
  const close = document?.querySelector('.button-close');
  const menu = document?.querySelector('.main-header__menu');

  burger?.addEventListener('click', () => {
    menu.classList.add('is-active');
  });

  close?.addEventListener('click', () => {
    menu.classList.remove('is-active');
  });
})();
