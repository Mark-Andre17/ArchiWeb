document.querySelectorAll(".burger").forEach(function(button) {
    button.addEventListener("click", function() {
      // Добавляем/удаляем класс "active" ко всем элементам с классом "myElement"
      document.querySelectorAll(".header-nav").forEach(function(element) {
        element.classList.toggle("show");
      });
      document.querySelectorAll(".burger .burger-menu:nth-child(1)").forEach(function(element) {
        element.classList.toggle("first");
      });
      document.querySelectorAll(".burger .burger-menu:nth-child(2)").forEach(function(element) {
        element.classList.toggle("second");
      });
      document.querySelectorAll(".burger .burger-menu:nth-child(3)").forEach(function(element) {
        element.classList.toggle("third");
      });
      document.querySelectorAll(".burger").forEach(function(element) {
        element.classList.toggle("active");
      });
      document.querySelectorAll(".main").forEach(function(element) {
        element.classList.toggle("activate");
      });
    });
  });
// слайдер галереи + точки слайдера галереи
let buttonNext = document.querySelector(".gallery-next");
let buttonPrev = document.querySelector(".gallery-prev");
let gallerySlider = document.querySelector(".gallery-slider");
let gallerySliderLine = document.querySelector('.projects-gallery');
let galleryItems = document.querySelectorAll(".projects-gallery-item");
let galleryDots = document.querySelectorAll(".dot-slider");
let galleryOffset = 0;
let count = 0;
buttonNext.addEventListener("click", function() {
  if(count < galleryItems.length - 1) {
    count += 1;
    gallerySlider.scrollLeft += gallerySlider.offsetWidth;
    galleryDots[count].classList.add("active-dot");
    galleryDots[count - 1].classList.remove("active-dot");
  }else{
    count = 0;
    gallerySlider.scrollLeft = 0;
    galleryDots[count].classList.add("active-dot");
    galleryDots[galleryItems.length - 1].classList.remove("active-dot");
  }
});
buttonPrev.addEventListener("click", function() {
  if(count > 0) {
    count -= 1;
    gallerySlider.scrollLeft -= gallerySlider.offsetWidth;
    galleryDots[count].classList.add("active-dot");
    galleryDots[count + 1].classList.remove("active-dot");
  }else{
    count = galleryItems.length - 1;
    gallerySlider.scrollLeft = gallerySliderLine.offsetWidth - gallerySlider.offsetWidth;
    galleryDots[count].classList.add("active-dot");
    galleryDots[0].classList.remove("active-dot");
  }
});
// слайдер персонала автоматический
let testimonialSlider = document.querySelector(".testimonial-slider");
let testimonialSliderLine = document.querySelector('.testimonial-wrapper');
console.log(testimonialSlider);
console.log(testimonialSliderLine.offsetWidth);

function autoSlider() {
  let offset = 0;
  setInterval(function() {
    offset = offset + testimonialSlider.offsetWidth;
    testimonialSliderLine.style.transform = "translateX(-" + offset + "px)";
    if(offset > (testimonialSliderLine.offsetWidth - testimonialSlider.offsetWidth)) {
      offset = 0;
      testimonialSliderLine.style.transform = "translateX(-" + offset + "px)";
    }
  },5000)
}
autoSlider();