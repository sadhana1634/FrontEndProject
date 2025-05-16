function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

window.onscroll = function() { 
  scrollFunction(); 
};

function scrollFunction() {
  var element = document.getElementById("header");
  if (document.documentElement.scrollTop > 50) {
      element.classList.add("scroll");
  } else {
      element.classList.remove("scroll");
  }
}