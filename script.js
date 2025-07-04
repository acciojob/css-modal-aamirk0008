//your JS code here. If required.
const openBtn = document.getElementById('openModal');
  const modal = document.getElementById('modal1');
  const closeBtn = modal.querySelector('.close-modal');

  // Open modal function
  openBtn.addEventListener('click', () => {
    modal.classList.add('show');
    openBtn.setAttribute('aria-expanded', 'true');
    // Focus first focusable element inside modal for accessibility
    closeBtn.focus();
  });

  // Close modal function
  function closeModal() {
    modal.classList.remove('show');
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus();
  }

  // Close modal when clicking close button
  closeBtn.addEventListener('click', closeModal);

  // Close modal when clicking outside modal-content
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal on pressing Escape key for accessibility
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });