function toggleClassMenu() {
	//slides the .info-container into view
	myInfo.classList.add("info-container-animatable");
	if(!myInfo.classList.contains("info-container-active")) {
		myInfo.classList.add("info-container-active");
	} else {
		myInfo.classList.remove('info-container-active');
	}

	//fades in the #close
	close.classList.add("close-animatable");
	if(!close.classList.contains("close-active")) {
		close.classList.add("close-active");
	} else {
		close.classList.remove('close-active');
	}

	//fades in all the .info-content blocks
  var i;
  for (i = 0; i < infoContent.length; i++){
    infoContent[i].classList.add("info-content-animatable");
  	if(!infoContent[i].classList.contains("info-content-active")) {
  		infoContent[i].classList.add("info-content-active");
  	} else {
  		infoContent[i].classList.remove('info-content-active');
  	}
  }

	//makes the .content-container not scrollable
  contentContainer.classList.add("content-container-animatable");
  if(!contentContainer.classList.contains("content-container-active")) {
    contentContainer.classList.add("content-container-active");
  } else {
    contentContainer.classList.remove('content-container-active');
  }
}

//removes the ...animatable class
function OnTransitionEnd() {
	myInfo.classList.remove("info-container-animatable");
  var i;
  for (i = 0; i< infoContent.length; i++){
    infoContent[i].classList.remove("info-content-animatable");
  }
  contentContainer.classList.remove("content-container-animatable");
	close.classList.remove("close-animatable");
}

function OnAnimationEnd() {
	close.classList.remove("close-animatable");

}


//variables
var openInfo = document.querySelector("#logo-type");
var close = document.querySelector(".close");
var myInfo = document.querySelector(".info-container");
var infoContent = document.querySelectorAll(".info-content");
var contentContainer = document.querySelector(".content-container");

//event listeners
myInfo.addEventListener("transitionend", OnTransitionEnd, false);
close.addEventListener("animationend", OnAnimationEnd, false);
openInfo.addEventListener("click", toggleClassMenu, false);
close.addEventListener("click", toggleClassMenu, false);


//contentContainer.addEventListener("DOMContentLoaded", fadeIn, false);
//closeInfo.addEventListener("click", toggleClassMenu, false);


//fadein content
//document.addEventListener('DOMContentLoaded', function toggleClassMenu() {
//   contentContainer.classList.add("show");
// });
