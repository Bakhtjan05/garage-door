const dropdown = document.getElementById('dropdown');
const dropdownText = document.getElementById('dropdown-placeholder')

function toggleDropdown(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the window
    dropdown.classList.toggle('hidden');
}

function selectItem(choice) {
    dropdownText.innerHTML = choice;
    // Hide the dropdown after selecting an item
    dropdown.classList.add('hidden');


}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.closest('.relative')) {
        dropdown.classList.add('hidden');
    }
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
    } else if (e.target.classList.contains('third')){
      slides.style.transform = 'translateX(-212%)';
      e.target.classList.add('active');
    }
  }
});


