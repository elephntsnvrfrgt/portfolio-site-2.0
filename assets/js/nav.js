function toggleClassMenu() {
	myInfo.classList.add("info-container-animatable");
	if(!myInfo.classList.contains("info-container-active")) {
		myInfo.classList.add("info-container-active");
	} else {
		myInfo.classList.remove('info-container-active');
	}

  var i;
  for (i = 0; i < infoContent.length; i++){
    infoContent[i].classList.add("info-content-animatable");
  	if(!infoContent[i].classList.contains("info-content-active")) {
  		infoContent[i].classList.add("info-content-active");
  	} else {
  		infoContent[i].classList.remove('info-content-active');
  	}
  }

  contentContainer.classList.add("content-container-animatable");
  if(!contentContainer.classList.contains("content-container-active")) {
    contentContainer.classList.add("content-container-active");
  } else {
    contentContainer.classList.remove('content-container-active');
  }
}

function OnTransitionEnd() {
	myInfo.classList.remove("info-container-animatable");
  var i;
  for (i = 0; i< infoContent.length; i++){
    infoContent[i].classList.remove("info-content-animatable");
  }
  contentContainer.classList.remove("content-container-animatable");
}

var myInfo = document.querySelector(".info-container");
var openInfo = document.querySelector("#logo-type");
var infoContent = document.querySelectorAll(".info-content");
var contentContainer = document.querySelector(".content-container");


myInfo.addEventListener("transitionend", OnTransitionEnd, false);
openInfo.addEventListener("click", toggleClassMenu, false);
contentContainer.addEventListener("click", toggleClassMenu, false);
