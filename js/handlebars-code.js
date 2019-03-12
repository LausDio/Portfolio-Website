//handlebars code
var template = document.getElementById("review-item-template").innerHTML;
var interpretator = Handlebars.compile(template);
var resultHTML = interpretator({
  array: [{
      ImageName: "1",
      AltText: "Selfportrait"
    },
    {
      ImageName: "2",
      AltText: "My sister"
    },
    {
      ImageName: "3",
      AltText: "Asian woman"
    },
    {
      ImageName: "4",
      AltText: "Angel"
    },
    {
      ImageName: "5",
      AltText: "Cool girl"
    },
    {
      ImageName: "6",
      AltText: "Rooster Astronaut"
    },
    {
      ImageName: "7",
      AltText: "Ukrainian girl"
    },
    {
      ImageName: "8",
      AltText: "Invisible boy"
    },
    {
      ImageName: "9",
      AltText: "Tired scientist"
    }

  ]
});
document.querySelector("div.modal  div.modal-content").innerHTML += resultHTML;
