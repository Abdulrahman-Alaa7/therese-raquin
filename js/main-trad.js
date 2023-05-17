let tabs = document.querySelectorAll(".tabs li ");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

// console.log(divsArray);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    // console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});

// change icon on click

// One

const spanOne = document.querySelector(".span-one");

const audioOne = document.querySelector(".audio-one");

const stopAudioOne = document.querySelector(".span-stop-one");

spanOne.addEventListener("click", function () {
  audioOne.play();
});
stopAudioOne.addEventListener("click", function () {
  audioOne.load();
});

// Two

const spanTwo = document.querySelector(".span-two");

const audioTwo = document.querySelector(".audio-two");

const stopAudioTwo = document.querySelector(".span-stop-two");

spanTwo.addEventListener("click", function () {
  audioTwo.play();
});

stopAudioTwo.addEventListener("click", function () {
  audioTwo.load();
});

//Three

const spanThree = document.querySelector(".span-three");

const audioThree = document.querySelector(".audio-three");

const stopAudioThree = document.querySelector(".span-stop-three");

spanThree.addEventListener("click", function () {
  audioThree.play();
});

stopAudioThree.addEventListener("click", function () {
  audioThree.load();
});

// Four

const spanFour = document.querySelector(".span-four");

const audioFour = document.querySelector(".audio-four");

const stopAudioFour = document.querySelector(".span-stop-four");

spanFour.addEventListener("click", function () {
  audioFour.play();
});

stopAudioFour.addEventListener("click", function () {
  audioFour.load();
});

// Five
const spanFive = document.querySelector(".span-five");

const audioFive = document.querySelector(".audio-five");

const stopAudioFive = document.querySelector(".span-stop-five");

spanFive.addEventListener("click", function () {
  audioFive.play();
});

stopAudioFive.addEventListener("click", function () {
  audioFive.load();
});
//Six
const spanSix = document.querySelector(".span-six");

const audioSix = document.querySelector(".audio-six");

const stopAudioSix = document.querySelector(".span-stop-six");

spanSix.addEventListener("click", function () {
  audioSix.play();
});

stopAudioSix.addEventListener("click", function () {
  audioSix.load();
});
//Seven
const spanSeven = document.querySelector(".span-seven");

const audioSeven = document.querySelector(".audio-seven");

const stopAudioSeven = document.querySelector(".span-stop-seven");

spanSeven.addEventListener("click", function () {
  audioSeven.play();
});

stopAudioSeven.addEventListener("click", function () {
  audioSeven.load();
});
//Eight
const spanEight = document.querySelector(".span-eight");

const audioEight = document.querySelector(".audio-eight");

const stopAudioEight = document.querySelector(".span-stop-eight");

spanEight.addEventListener("click", function () {
  audioEight.play();
});

stopAudioEight.addEventListener("click", function () {
  audioEight.load();
});

//Nine
const spanNine = document.querySelector(".span-nine");

const audioNine = document.querySelector(".audio-nine");

const stopAudioNine = document.querySelector(".span-stop-nine");

spanNine.addEventListener("click", function () {
  audioNine.play();
});

stopAudioNine.addEventListener("click", function () {
  audioNine.load();
});
//Ten
const spanTen = document.querySelector(".span-ten");

const audioTen = document.querySelector(".audio-ten");

const stopAudioTen = document.querySelector(".span-stop-ten");

spanTen.addEventListener("click", function () {
  audioTen.play();
});

stopAudioTen.addEventListener("click", function () {
  audioTen.load();
});

//Eleven
const spanEleven = document.querySelector(".span-eleven");

const audioEleven = document.querySelector(".audio-eleven");

const stopAudioEleven = document.querySelector(".span-stop-eleven");

spanEleven.addEventListener("click", function () {
  audioEleven.play();
});

stopAudioEleven.addEventListener("click", function () {
  audioEleven.load();
});

//Twelve
const spanTwelve = document.querySelector(".span-twelve");

const audioTwelve = document.querySelector(".audio-twelve");

const stopAudioTwelve = document.querySelector(".span-stop-twelve");

spanTwelve.addEventListener("click", function () {
  audioTwelve.play();
});

stopAudioTwelve.addEventListener("click", function () {
  audioTwelve.load();
});

//Thirteen
const spanThirteen = document.querySelector(".span-thirteen");

const audioThirteen = document.querySelector(".audio-thirteen");

const stopAudioThirteen = document.querySelector(".span-stop-thirteen");

spanThirteen.addEventListener("click", function () {
  audioThirteen.play();
});

stopAudioThirteen.addEventListener("click", function () {
  audioThirteen.load();
});

//Fourteen
const spanFourteen = document.querySelector(".span-fourteen");

const audioFourteen = document.querySelector(".audio-fourteen");

const stopAudioFourteen = document.querySelector(".span-stop-fourteen");

spanFourteen.addEventListener("click", function () {
  audioFourteen.play();
});

stopAudioFourteen.addEventListener("click", function () {
  audioFourteen.load();
});
//Fifteen
const spanFifteen = document.querySelector(".span-fifteen");

const audioFifteen = document.querySelector(".audio-fifteen");

const stopAudioFifteen = document.querySelector(".span-stop-fifteen");

spanFifteen.addEventListener("click", function () {
  audioFifteen.play();
});

stopAudioFifteen.addEventListener("click", function () {
  audioFifteen.load();
});
//Sixteen
const spanSixteen = document.querySelector(".span-sixteen");

const audioSixteen = document.querySelector(".audio-sixteen");

const stopAudioSixteen = document.querySelector(".span-stop-sixteen");

spanSixteen.addEventListener("click", function () {
  audioSixteen.play();
});

stopAudioSixteen.addEventListener("click", function () {
  audioSixteen.load();
});

// top button

let span = document.querySelector(".up");

window.onscroll = function () {
  myFunction();

  this.scrollY >= 400
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Scroll Progress

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
