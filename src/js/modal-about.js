(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-about]'),
    // openModalBtn2: document.querySelector('[data-modal-open-about2]'),
    closeModalBtn: document.querySelector('[data-modal-close-about]'),
    modal: document.querySelector('[data-modal-about]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  // refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      refs.modal.classList.add('is-hidden');
    }
  });
})();
