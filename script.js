const openModalBtn = document.getElementById('openModal');
        const modal = document.getElementById('modal');
        const closeModalBtn = document.getElementById('closeModal');

        // Open modal
        openModalBtn.addEventListener('click', () => {
            modal.classList.add('show');
        });

        // Close modal when clicking close button
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        // Close modal when clicking outside modal content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                modal.classList.remove('show');
            }
        });