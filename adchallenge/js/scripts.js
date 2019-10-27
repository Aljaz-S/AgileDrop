window.onscroll = function() {myFunction()};

var header = document.getElementById("block-adchallenge-main-menu");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}