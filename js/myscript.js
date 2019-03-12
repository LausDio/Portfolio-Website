// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}
//handlebars code
var template = document.getElementById("review-item-template").innerHTML;
var interpretator = Handlebars.compile(template);
var resultHTML = interpretator({
  array: [{
      ImageName: "1",
      AltText: "Alt"
    },
    {
      ImageName: "2",
      AltText: "Alt"
    },
    {
      ImageName: "3",
      AltText: "Alt"
    },
    {
      ImageName: "4",
      AltText: "Alt"
    },
    {
      ImageName: "5",
      AltText: "Alt"
    },
    {
      ImageName: "6",
      AltText: "Alt"
    },
    {
      ImageName: "7",
      AltText: "Alt"
    },
    {
      ImageName: "8",
      AltText: "Alt"
    },
    {
      ImageName: "9",
      AltText: "Alt"
    }

  ]
});
document.querySelector("div.content  div.board").innerHTML += resultHTML;
