var serElem = document.getElementById("services"),
  worElem = document.getElementById("works"),
  skiElem = document.getElementById("skills"),
  aboElem = document.getElementById("about_me"),
  conElem = document.getElementById("contact");
var s = "services_conte";
var w = "works_conte";
var sk = "skills_conte";
var p = "profile_conte";
var c = "contact_conte";

serElem.addEventListener("click", function () {
  scrollTo(0, et(s));
});

worElem.addEventListener("click", function () {
  scrollTo(0, et(w));
});

skiElem.addEventListener("click", function () {
  scrollTo(0, et(sk));
});

aboElem.addEventListener("click", function () {
  scrollTo(0, et(p));
});

conElem.addEventListener("click", function () {
  scrollTo(0, et(c));
});

function et(what) {
  var yElem = document.getElementById(what);
  var rect = yElem.getBoundingClientRect();
  var elemtop = rect.top + window.pageYOffset - 150;
  return elemtop;
}

addEventListener("scroll", function () {
  var y = window.pageYOffset;
  if (y <= et(w) && y > et(s)) {
    var element = document.getElementById("h2_s");
    element.classList.add("main_anime");
  } else if (y <= et(sk) && y > et(w)) {
    var element = document.getElementById("h2_w");
    element.classList.add("main_anime");
  } else if (y <= et(p) && y > et(sk)) {
    var element = document.getElementById("h2_ss");
    var element1 = document.getElementsByClassName("html");
    var element2 = document.getElementsByClassName("css");
    var element3 = document.getElementsByClassName("js");
    var element4 = document.getElementsByClassName("gp");
    var element5 = document.getElementsByClassName("rr");
    element.classList.add("main_anime");
    element1[0].classList.add("bar_anime4");
    element2[0].classList.add("bar_anime3");
    element3[0].classList.add("bar_anime3");
    element4[0].classList.add("bar_anime3");
    element5[0].classList.add("bar_anime2");
  } else if (y <= et(c) && y > et(p)) {
    var element = document.getElementById("h2_p");
    element.classList.add("main_anime");
  } else if (y > et(c)) {
    var element = document.getElementById("h2_c");
    element.classList.add("main_anime");
  } else {
    return 0;
  }
});

function skillSet() {
  var barInfo = document.getElementsByClassName("bar-info");
  total = barInfo.data("total");
  barInfo.css("width", total + "pt");

  var barValue = document.getElementsByClassName("bar_value");
  function each() {
    for (let counter = 0; counter < 10; counter++) {}
  }
}
