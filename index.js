window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    document.querySelectorAll("button")[2].classList.add("form-control");
    document.querySelector("#working div").classList.add("info");
  }
  if (window.innerWidth >= 768) {
    document.querySelectorAll("button")[2].classList.remove("form-control");
  }
  if (window.innerWidth >= 768 && window.innerWidth <= 992) {
    document.querySelector("#contact").classList.add("text-right");
    document.querySelector("#links").classList.add("text-right");
  }
  else if (window.innerWidth < 768 || window.innerWidth > 992) {
    document.querySelector("#contact").classList.remove("text-right");
    document.querySelector("#links").classList.remove("text-right");
  }
});

if (window.innerWidth >= 768 && window.innerWidth <= 992) {
  document.querySelector("#contact").classList.add("text-right")
  document.querySelector("#links").classList.add("text-right")
}
