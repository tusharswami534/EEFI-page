const navmenu = () => {
  document.getElementById("mobile_view").classList.toggle("max-lg:top-0");
  document
    .getElementById("mobile_view")
    .classList.toggle("max-lg:right-0");
  document.getElementById("nav_line_1").classList.toggle("rotate-45");
  document.getElementById("nav_line_2").classList.toggle("-rotate-45");
  document
    .getElementById("nav_line_out_side")
    .classList.toggle("translate-x-6");
  document.body.classList.toggle("overflow-hidden");
};
let mybutton = document.getElementById("back-to-top");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}