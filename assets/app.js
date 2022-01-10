const bars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".nav-links");
const closingBtn = document.querySelector(".fa-times");

bars.addEventListener("click", ()=>{
    sidebar.classList.toggle("show-sidebar");
});
closingBtn.addEventListener("click", ()=>{
    sidebar.classList.remove("show-sidebar")
})

function myFunction() {
  document.getElementById("myDropdown").style.display = "block";
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

