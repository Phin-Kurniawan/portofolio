const carousel = document.querySelector('.portofolio-carousel');
const items = carousel.querySelectorAll('.carousel-item');
const captions = carousel.querySelectorAll('.carousel-caption'); // Select all captions

const prev = document.createElement('button');
const next = document.createElement('button');
prev.classList.add('prev');
next.classList.add('next');
prev.textContent = '❮';
next.textContent = '❯';
carousel.appendChild(prev);
carousel.appendChild(next);

const itemWidth = items[0].offsetWidth; 
const carouselWidth = carousel.offsetWidth;
function showSlide(n) {
  currentIndex = (n + items.length) % items.length;
  
//   currentIndex = Math.floor(items.length / 2);
  items.forEach((item, index) => {
    const translateX = -(currentIndex) *100; // Translate by percentages
    item.style.transform = `translateX(${translateX}%)`;
    captions[index].style.display = index === currentIndex ? 'block' : 'none';
  });
}

prev.addEventListener('click', () => {
  showSlide(currentIndex - 1);
  
});

next.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

// Tampilkan slide pertama secara default
showSlide(0);