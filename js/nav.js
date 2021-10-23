var BtnBars = document.getElementById('bars');
var BtnCross = document.getElementById('times');
var NavUl = document.getElementById('NavUl');

function navactive() {
  BtnCross.classList.add("active");
  NavUl.classList.add("active");
}
function nav() {
  BtnCross.classList.remove("active");
  NavUl.classList.remove("active");
}
