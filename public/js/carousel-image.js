const carousel = document.querySelector('.portofolio-carousel');
const items = carousel.querySelectorAll('.carousel-item');
const captions = carousel.querySelectorAll('.carousel-caption');

const prev = document.createElement('button');
const next = document.createElement('button');
prev.classList.add('prev');
next.classList.add('next');
prev.textContent = '❮';
next.textContent = '❯';
carousel.appendChild(prev);
carousel.appendChild(next);

let currentIndex = 0;

function showSlide(n) {
  currentIndex = (n + items.length) % items.length;
  items.forEach((item, index) => {
    const translateX = -(currentIndex) * 100; 
    item.style.transform = `translateX(${translateX}%)`;
    if (index === currentIndex) {
      captions[index].style.display = 'block';
      // Mengatur lebar caption sesuai dengan lebar gambar
      captions[index].style.width = item.querySelector('img').offsetWidth + 'px';
    } else {
      captions[index].style.display = 'none';
    }
  });
}

prev.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

next.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

showSlide(0);