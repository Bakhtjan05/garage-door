
const dropdown = document.getElementById('dropdown');
const dropdownText = document.getElementById('dropdown-placeholder')


function toggleDropdown() {
  event.stopPropagation();
  dropdown.classList.toggle('hidden');
 
}



function selectItem(choice) {
  event.stopPropagation();
  dropdownText.innerHTML = choice;
  
  dropdown.classList.add('hidden');

  
}


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {

  dropdown.classList.add('hidden');

}


const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-110%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')) {
      slides.style.transform = 'translateX(-212%)';
      e.target.classList.add('active');
    }
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const indicators = document.querySelectorAll('.indicator');
  const carousel = document.querySelector('.carousel');
  const totalItems = document.querySelectorAll('.carousel-item').length;
  let currentIndex = 0;
  let startX = 0;
  let endX = 0;

  const showSlide = (index) => {
    const slideWidth = 100 / (window.innerWidth <= 768 ? 1 : 3);
    const offset = -index * slideWidth;
    carousel.style.transform = `translateX(${offset}%)`;
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index);
    });
  };

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  // Handle touch events for swipe
  carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
  });

  carousel.addEventListener('touchend', () => {
    const threshold = 50; // Минимальное расстояние для распознавания свайпа
    if (startX - endX > threshold) {
      currentIndex = Math.min(currentIndex + 1, totalItems - 1); // Свайп влево
    } else if (endX - startX > threshold) {
      currentIndex = Math.max(currentIndex - 1, 0); // Свайп вправо
    }
    showSlide(currentIndex);
  });

  // Initial display
  showSlide(currentIndex);

  // Handle window resize
  window.addEventListener('resize', () => {
    showSlide(currentIndex);
  });
});


