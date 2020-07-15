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

var element = document.getElementById("h2_s");
var outputElement = document.getElementById("output");
addEventListener("scroll", function () {
  var y = window.pageYOffset;
  outputElement.innerHTML = "y=" + y + " et(s)=" + et(s);
  if (y > et(s)) {
    element.classList.add("main_anime");
  } else {
    return 0;
  }
});
