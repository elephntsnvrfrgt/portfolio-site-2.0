$(document).ready(function(){
$(window).on("load", function(){

// OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
window.requestAnimationFrame(function() {

	var 	navContent = $('.nav-content'),
				logoMark = $('#logo-mark'),
				social = $('.social'),
				socialLinks = $(".social-links"),
				//info = $('#info'),
				infoBtn = $('#about'),
				close = $('#closeInfo'),
				infoContainer = $('.info-container'),
				infoFade = $('.info-fade'),
				socialContainer = $('#social-container'),
				container = $('.container'),
				overlay = $('#overlay'),
				menuBtn = $('#menu-btn'),
				menuContainer = $('#menu-container'),
				menuLi = $('.menuListItem'),
				open = false,
				tlMax = new TimelineMax();


//–––––––––––––––––––––––––––––––––––––––––––
//plugins



	// $(".content").fitVids();





//–––––––––––––––––––––––––––––––––––––––––––
//nav animations

	logoMark.mouseover(
		function(){
			tlMax
					.staggerFromTo(social,
						1,
						{x:-10, autoAlpha:0},
						{x:0, autoAlpha:1, ease: Power3.easeOut},
						0.09
					);
		}
	);

	socialContainer.mouseleave(
		function(){
			tlMax
				.staggerTo(social, 0.75,
					{autoAlpha:0, ease: Power3.easeOut},
					0.09
				);
		}
	);



//–––––––––––––––––––––––––––––––––––––––––––
//info drawer animation

	function openInfo() {
		tlMax
			.to(
				infoContainer,
				1,
				{x:375, ease: Power3.easeOut}
			)
			.staggerFromTo(
				infoFade,
				.75,
				{y:10, autoAlpha:0},
				{	y:-10, autoAlpha:1, ease: Power3.easeOut},
				0.09,
				'-=.5'
			)
	}

	function closeInfo() {
		tlMax
			.to(
				infoFade,
				.5,
				{autoAlpha:0}
			)
			.to(
				infoContainer,
				1,
				{x:-375, ease:Power2.easeInOut},
				'-=.5'
			)

		// //change from close to isaac
		// $('#info').fadeOut("slow", function(){
		//    var infoText = $("<div class='small' id='info'>Isaac Martin</div>").hide();
		//    $(this).replaceWith(infoText);
		//    $('#info').fadeIn("slow");
		// });
	}

	infoBtn.click(openInfo);
	close.click(closeInfo);




//–––––––––––––––––––––––––––––––––––––––––––
//menu trigger and animation

	const targetElement = document.querySelector("#menu-container");

	function openMenu() {
		tlMax
			.to(
				menuContainer,
				.4,
				{autoAlpha:1, ease: Power3.easeOut}
			)
			.staggerFromTo(
				menuLi,
				1.5,
				{y:15, autoAlpha:0},
				{y:-15, autoAlpha:1, ease: Power3.easeOut},
				0.1
			)
			.to(
				$('#menuText'),
				0,
				{text:"Never mind", ease:Power3.easeIn},
				'-=2.1'
			)

			menuBtn.one("click", closeMenu);

			//change menu text
			// $("#menuText").fadeOut(400, function(){
			//    var menuText = $("<div class='small' id='menuText'>Never mind</div>").hide();
			//    $(this).replaceWith(menuText);
			//    $("#menuText").fadeIn(400);
			// });

			bodyScrollLock.disableBodyScroll(targetElement);
	}

	function closeMenu() {
		tlMax

			.to(
				menuLi,
				.5,
				{autoAlpha:0}
			)
			.to(
				menuContainer, .5,
				{autoAlpha:0},
				'-=.2'
			)
			.to(
				$('#menuText'),
				0,
				{text:"Other work", ease:Power3.easeIn},
				'-=.2'
			)
			menuBtn.one("click", openMenu);

			bodyScrollLock.enableBodyScroll(targetElement);

			//change menu text
			// $('#menuText').fadeOut(400, function(){
			//    var menuText = $("<div class='small' id='menuText'>Other work</div>").hide();
			//    $(this).replaceWith(menuText);
			//    $('#menuText').fadeIn(400);
			// });
	}
	menuBtn.one("click", openMenu);


//menu hamburger svg animation

	var menuToggle = new TimelineMax({paused:true, reversed:true});
	var menuTime = .5;
	var delayMenu = .3;

	menuToggle
	  .set('', {className:"-=closemenu"})
	  .set('', {className:"+=openmenu"})
	  .to(' .top', menuTime, {y:'-12px', transformOrigin: '50% 50%', fill:'white',  ease: Power3.ease}, delayMenu, 'burg')
	  .to(' .bot', menuTime, {y:'12px', transformOrigin: '50% 50%', fill:'white', ease: Power3.ease}, delayMenu, 'burg')
	  .to(' .mid', menuTime, {scale:0, transformOrigin: '50% 50%', stroke:'white', ease: Power3.ease}, delayMenu, 'burg')
	  .add('rotate')
	  .to(' .top', menuTime, {y:'8', ease: Power3.ease}, delayMenu, 'rotate')
	  .to(' .bot', menuTime, {y:'-8', ease: Power3.ease}, delayMenu, 'rotate')
	  .to(' .top', menuTime, {rotationZ:45, transformOrigin: '50% 50%', ease: Power3.ease}, delayMenu, 'rotate')
	  .to(' .bot', menuTime, {rotationZ:-45, transformOrigin: '50% 50%', ease: Power3.ease}, delayMenu, 'rotate')

	 // .set('#burger .mid', {opacity:0})//temp fix for stupid iOS rotate y bug

	menuBtn.click(function () {
	  menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
	});


	//–––––––––––––––––––––––––––––––––––––––––––
	//tile hover effect

		$('.tile').each(function(index,element){
			var tlMax = new TimelineMax({paused:true}),
					duration = .6,
					prjtTileInfo = ".prjtNo, .prjtTitle";
			tlMax
				.to($(element).find(prjtTileInfo), duration, {opacity:1, ease: Power1.easeInOut})
				.to($(element), duration, {zIndex:10, filter:"opacity(1) grayscale(0)", boxShadow:"0 12px 16px -12px rgba(0,0,0,0.10), 0 20px 100px -13px rgba(0,0,0,0.25)", ease: Power1.easeInOut},'-=.6')

			element.animation = tlMax;
		})

		$('.tile').hover(over, out);

		function over(){
			this.animation.play();
		}

		function out(){
			this.animation.reverse();
		}



//–––––––––––––––––––––––––––––––––––––––––––
//hero text animations

	var heroBg = ".intro",
			duration = 1.5;

	tlMax
			.staggerFromTo(".content-hero .fadeInMove",
			duration,
			{y:80, autoAlpha:0},
			{y:0, autoAlpha:1, ease: Power3.easeOut},
			0.15)

			.fromTo(heroBg,
			duration,
			{y:40,autoAlpha:0},
			{y:0, autoAlpha:1, ease: Power2.easeOut},
			'-=1.5'
			)




//–––––––––––––––––––––––––––––––––––––––––––
//ScrollMagic

	if ($(window).width() >= 960) {

		//Init ScrollMagic
		var controller = new ScrollMagic.Controller();


		//Fade in Move scroll reveal
		$('.trigger').each(function(){

			var tween = TweenMax
										.staggerFrom(
											$(".fadeInMove", this),
											1,
											{y:65, autoAlpha:0, ease: Power1.easeOut},
											0.15
										)
									;

			var sceneReveal = new ScrollMagic.Scene({
						triggerElement: this,
						triggerHook: .6,
						reverse:false

					})

					.setTween(tween)
					//.addIndicators() //remove for production
					.addTo(controller);
		});


		//Parallax Hero
		$('.parallaxH').each(function(){

			var tween = new TimelineMax ()
				.add([
					TweenMax.fromTo($(".parallaxH"), 1, {y: 0}, {y: -80, ease: Linear.easeNone})
			]);

			var sceneParallaxH = new ScrollMagic.Scene({
						triggerElement: this,
						duration:'100%'
					})

					.setTween(tween)
					.addTo(controller);
			});


			//Parallax Vertical Section Title

			$('.parallaxST').each(function(){

				tlMax
						.set($(this),{y:0})

				var tween = TweenMax
											.to(
												$(this),
												1,
												{y: 250, ease: Linear.easeNone}
											)
										;

				var sceneParallaxST = new ScrollMagic.Scene({
							triggerElement: this,
							triggerHook:1,
							duration:'300%'
						})

						.setTween(tween)
						.addTo(controller);
			});


			//Parallax Section Divider imgs
			$('.parallaxSD').each(function(){

				var tween = TweenMax
											.fromTo(
												$(this),
												1,
												{y:-200},
												{y: 200, ease: Linear.easeNone}
											)
										;

				var sceneParallaxSD = new ScrollMagic.Scene({
							triggerElement: this,
							triggerHook:1,
							duration:'200%'
						})

						.setTween(tween)
						.addTo(controller);
			});


		} else {

			//Init new Controller for smaller screens
			var controller = new ScrollMagic.Controller();

			//Fade in Move scroll reveal multiple items via parent trigger
			$('.trigger-s').each(function(){

				var tween = TweenMax
											.staggerFrom(
												$(".fadeInMove", this),
												1,
												{y:65, autoAlpha:0, ease: Power1.easeOut},
												0.15
											)
										;

				var sceneRevealMultiSm = new ScrollMagic.Scene({
							triggerElement: this,
							triggerHook: .8,
							reverse:false

						})

						.setTween(tween)
						//.addIndicators() //remove for production
						.addTo(controller);
			});

			//Fade in Move scroll reveal multiple items via parent trigger
			$('.fadeInMove-s').each(function(){

				var tween = TweenMax
											.staggerFrom(
												$(this),
												1,
												{y:65, autoAlpha:0, ease: Power1.easeOut},
												0.15
											)
										;

				var sceneRevealSingleSm = new ScrollMagic.Scene({
							triggerElement: this,
							triggerHook: .8,
							reverse:false

						})

						.setTween(tween)
						//.addIndicators() //remove for production
						.addTo(controller);
			});


			//Parallax Hero
			$('.parallaxH').each(function(){

				var tween = new TimelineMax ()
					.add([
						TweenMax.fromTo($(".parallaxH"), 1, {y: 0}, {y: -80, ease: Linear.easeNone})
				]);

				var sceneParallaxHSm = new ScrollMagic.Scene({
							triggerElement: this,
							duration:'150%'
						})

						.setTween(tween)
						// .addIndicators(
						// 	{name: "H"}
						// ) //remove for production
						.addTo(controller);
				});

				$('.parallaxST').each(function(){

					tlMax
							.set($(this),{y:0})

					var tween = TweenMax
												.to(
													$(this),
													1,
													{y: 250, ease: Linear.easeNone}
												)
											;

					var sceneParallaxSTSm = new ScrollMagic.Scene({
								triggerElement: this,
								triggerHook:1,
								duration:'300%'
							})

							.setTween(tween)
							.addTo(controller);
				});

				//Parallax Section Divider imgs
				$('.parallaxSD').each(function(){

					var tween = TweenMax
												.fromTo(
													$(this),
													1,
													{y:-100},
													{y: 100, ease: Linear.easeNone}
												)
											;

					var sceneParallaxSD = new ScrollMagic.Scene({
								triggerElement: this,
								triggerHook:1,
								duration:'200%'
							})

							.setTween(tween)
							// .addIndicators({
							// 	name: "SD",
							// 	colorStart: "#000000",
							// 	colorEnd: "#000000",
							// 	colorTrigger: "#000000",
							// 	indent: 100
							// }) //remove for production
							.addTo(controller);
				});


		}

});
});
});
