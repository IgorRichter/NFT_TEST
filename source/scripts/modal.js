(function(){
  const buttonModalOpen = document?.querySelector('.button-modal-open');
  const buttonModalClose = document?.querySelector('.button-modal-close');
  const modal = document?.querySelector('.modal');
  
  buttonModalOpen?.addEventListener('click', () => {
    modal.classList.remove('is-not-active')
  })

  buttonModalClose?.addEventListener('click', () => {
    modal.classList.add('is-not-active')
  })
})();