// Select the new product button regardless of its location
const newProductButton = document.querySelector('.new-product');
const newProductModal = document.getElementById('new-product-modal');
const closeModalButton = document.querySelector('.modal-close');

const mainContent = document.querySelector('main');

mainContent.addEventListener('click', (event) => {
  if (event.target.classList.contains('new-product')) {
    // Button clicked, open modal
    newProductModal.style.display = 'block';
  }
});

newProductButton.addEventListener('click', () => {
  newProductModal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  newProductModal.style.display = 'none';
});

// Add functionality for form submission and validation (if needed)
