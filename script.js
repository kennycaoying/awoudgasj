document.addEventListener("scroll", function(){
  document.querySelector(".scrolling-text").style.left = Math.max(100 - 0.2 * window.scrollY, 1) + "vw";
});