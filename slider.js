const slide = [
  "villa1.jpg",
  "villa2.jpg",
  "villa3.jpg",
  "villa4.jpeg",
  "villa5.jpg",
  "villa6.jpg",
  "villa7.jpg",
  "villa8.jpg",
  "villa9.jpg",
  "villa10.jpg",
  "villa11.jpg",
  "villa12.jpg",
  "villa13.jpg",
  "villa14.jpg",
  "villa15.jpg",
];
let number = 0;

function ChangeSlide(sens) {
  number = number + sens;

  if (number > 14) number = 0;

  if (number < 0) number = 14;

  document.getElementById("slide").src = "img/" + slide[number];
}
setInterval("ChangeSlide(1)", 2000);
