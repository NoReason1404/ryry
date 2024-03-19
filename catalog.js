document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      portfolioItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const imgList = document.querySelectorAll('.portfolio-image');
  const closeModal = document.querySelector('.close');

  imgList.forEach(img => {
    img.addEventListener('click', e => {
      modal.style.display = 'block';
      modalImg.src = e.target.dataset.src; // Восстановили эту строку, чтобы использовать data-src для lazy loading
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Инициализация LazyLoad после загрузки страницы
  const lazyLoadInstance = new LazyLoad({
    elements_selector: '.portfolio-image',
    threshold: 300
  });
});
