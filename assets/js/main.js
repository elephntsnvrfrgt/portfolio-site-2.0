$(document).ready(function(){

$(window).on("load", function(){

// OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)




window.requestAnimationFrame(function() {


	var 	navContainer = $('#index #nav-container'),
				navContent = $('.nav-content'),
				logoTypeAnim = $('.nameanimation')
				logoType = $('#name'),
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
	//reveal animations




		//container reveal
		tlMax
			.set(container,
				{autoAlpha:0}
			)

			.staggerFromTo($('.blinkreveal'),
				1.25,
				{autoAlpha:0},
				{autoAlpha:1, ease: Bounce.easeIn},
				.3
			)

			.to($(".load"),
				1.5,
				{autoAlpha:0, ease:Power2.easeInOut},
				"+=1.25"
			)
			.fromTo(container,
				1.25,
				{autoAlpha:0},
				{autoAlpha:1, ease: Power2.easeInOut}
			)

		//–––––––––––––––––––––––––––––––––––––––––––
		//hero text animations

			var heroBg = ".intro",
					duration = 1.5;

			tlMax
					.staggerFromTo(".content-hero .fadeInMove",
						duration,
						{y:80, autoAlpha:0},
						{y:0, autoAlpha:1, ease: Power3.easeOut},
						0.15,
						'-=1.25'
					)

					.fromTo(heroBg,
						duration,
						{y:40,autoAlpha:0},
						{y:0, autoAlpha:1, ease: Power2.easeOut},
						'-=1.5'
					)

					.fromTo(".errorgif",
						duration,
						{y:40,autoAlpha:0},
						{y:0, autoAlpha:1, ease: Power2.easeOut},
						'-=1.55'
					)

	//–––––––––––––––––––––––––––––––––––––––––––
	//nav animations



		function socialReveal(){
			tlMax
					.staggerFromTo(social,
						1,
						{x:-10, autoAlpha:0},
						{x:0, autoAlpha:1, ease: Power3.easeOut},
						0.09
					)
		}

		function socialHide(){
			tlMax
				.staggerTo(social, 0.75,
					{autoAlpha:0, ease: Power3.easeOut},
					0.09
				)
		}

		logoMark.mouseover(socialReveal);
		socialContainer.mouseleave(socialHide);



	//–––––––––––––––––––––––––––––––––––––––––––
	//info drawer animation

		function openInfo() {
			tlMax
				.to(
					infoContainer,
					1,
					{x:435, ease: Power3.easeOut}
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
					{x:-435, ease:Power2.easeInOut},
					'-=.5'
				)
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


		// tlMax
		// 		.staggerFromTo(".errorintro .fadeInMove",
		// 		duration,
		// 		{y:80, autoAlpha:0},
		// 		{y:0, autoAlpha:1, ease: Power3.easeOut},
		// 		0.15)




	//–––––––––––––––––––––––––––––––––––––––––––
	//ScrollMagic
		//For devices larger than or equal to 960px
		if ($(window).width() >= 960) {


			//Progress bar
			scrollProgress();

			$(window).resize(function(){
				scrollProgress();
			});

			function scrollProgress() {

				var controller = new ScrollMagic.Controller(),
						windowsize = $(window).height(),
						containersize = $('.container').height(),
						duration = (containersize-windowsize),
						getId = $('.barba-container').attr('id'),
						color = (function color(){
							switch(getId){
								case "tmo":
									return "#e20074";
								case "vw":
									return "#009DDC";
								case "cmhf":
									return "#E9C378";
								case "odi":
									return "#7251DB";
								case "404":
									return "inherit"
								case "500":
									return "inherit"
								default:
									return "#0FBFFF";
							}
							getId; //get the ID and then run against the cases
						}),
						tweenScrollProgress = TweenMax
													.fromTo(
														$("#scroll-progress"),
														1,
														{height:0, backgroundColor:color},
														{height:"100%", ease:Linear.easeNone}
													)
												;

						var sceneScrollProgress = new ScrollMagic.Scene({
									triggerElement:".container",
									triggerHook:0,
									duration:duration
						})

								.setTween(tweenScrollProgress)
								.addTo(controller);

			}


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

			//For devices less than 960px---------------------
			} else {

				//Init new Controller for smaller screens
				var controller = new ScrollMagic.Controller();

				//Fade in Move scroll reveal multiple items via parent trigger
				$('.trigger-s').each(function(){

					var tween = TweenMax
												.staggerFrom(
													$(".fadeInMove", this),
													1,
													{y:55, autoAlpha:0, ease: Power1.easeOut},
													0.15
												)
											;

					var sceneRevealMultiSm = new ScrollMagic.Scene({
								triggerElement: this,
								triggerHook: .8,
								reverse:false

							})

							.setTween(tween)
							.addTo(controller);
				});

				//Fade in Move scroll reveal multiple items via parent trigger
				$('.fadeInMove-s').each(function(){

					var tween = TweenMax
												.staggerFrom(
													$(this),
													1,
													{y:50, autoAlpha:0, ease: Power1.easeOut},
													0.15
												)
											;

					var sceneRevealSingleSm = new ScrollMagic.Scene({
								triggerElement: this,
								triggerHook: .8,
								reverse:false

							})

							.setTween(tween)
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
								triggerHook:.6,
								duration:'150%'
							})

							.setTween(tween)
							.addTo(controller);
					});

					$('.parallaxST').each(function(){

						var tween = TweenMax
													.to(
														$(this),
														1,
														{y: 150, ease: Linear.easeNone}
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
														{y:-75},
														{y: 75, ease: Linear.easeNone}
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

			}



//–––––––––––––––––––––––––––––––––––––––––––
//Barba

	Barba.Pjax.start();
	Barba.Prefetch.init();

	var FadeTransition = Barba.BaseTransition.extend({
	start: function() {
		/**
		 * This function is automatically called as soon the Transition starts
		 * this.newContainerLoading is a Promise for the loading of the new container
		 * (Barba.js also comes with an handy Promise polyfill!)
		 */

		// As soon the loading is finished and the old page is faded out, let's fade the new page
		Promise
			.all([this.newContainerLoading, this.fadeOut()])
			.then(this.fadeIn.bind(this));
	},

	fadeOut: function() {
		/**
		 * this.oldContainer is the HTMLElement of the old Container
		 */
		 return $(this.oldContainer).animate({ opacity: 0 }).promise();
	},

	fadeIn: function() {
		/**
		 * this.newContainer is the HTMLElement of the new Container
		 * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
		 * Please note, newContainer is available just after newContainerLoading is resolved!
		 */

		var _this = this;
		var $el = $(this.newContainer);

		$(this.oldContainer).hide();
		$(window).scrollTop(0);
		bodyScrollLock.clearAllBodyScrollLocks();

			tlMax
				.set($el,
					{autoAlpha:0}
				)


			 var heroBg = ".intro",
					 duration = 1.5;

	//–––––––––––––––––––––––––––––––––––––––––––
	//container reveal

			 tlMax
			 	.to($el,
					duration,
					{autoAlpha:1, ease: Power2.easeInOut},
					"=0"
				)
			 	.fromTo($('#index #circle, #index #name'),
					duration,
					{autoAlpha:0},
					{autoAlpha:1, ease: Power2.easeInOut}
				)
				.fromTo(container,
					duration,
					{autoAlpha:0},
					{autoAlpha:1, ease: Power2.easeInOut},
					'-=1.55'
				)

			//hero text animations––––––––––––––––––––

				.staggerFromTo(".content-hero .fadeInMove",
					duration,
					{y:80, autoAlpha:0},
					{y:0, autoAlpha:1, ease: Power3.easeOut},
					0.15,
					'-=2.75'
				)
				.fromTo(heroBg,
					duration,
					{y:40,autoAlpha:0},
					{y:0, autoAlpha:1, ease: Power2.easeOut},
					'-=2.65'
				)




			_this.done();

			//–––––––––––––––––––––––––––––––––––––––––––
			//General functionality

					//menu trigger and animation

						const targetElement = document.querySelector("#menu-container");

						var overlay = $('#overlay'),
								menuBtn = $('#menu-btn'),
								menuContainer = $('#menu-container'),
								menuLi = $('.menuListItem'),
								open = false;

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
		//ScrollMagic

				//For devices larger than or equal to 960px

					if ($(window).width() >= 960) {


						//Progress bar
						scrollProgress();

						$(window).resize(function(){
							scrollProgress();
						});

						function scrollProgress() {

							var controller = new ScrollMagic.Controller(),
									windowsize = $(window).height(),
									containersize = $('.container').height(),
									duration = (containersize-windowsize),
									getId = $('.barba-container').attr('id'),
									color = (function color(){
										switch(getId){
											case "tmo":
												return "#e20074";
											case "vw":
												return "#009DDC";
											case "cmhf":
												return "#E9C378";
											case "odi":
												return "#7251DB";
											case "404":
												return "inherit"
											case "500":
												return "inherit"
											default:
												return "#0FBFFF";
										}
										getId; //get the ID and then run against the cases
									}),
									tweenScrollProgress = TweenMax
																.fromTo(
																	$("#scroll-progress"),
																	1,
																	{height:0, backgroundColor:color},
																	{height:"100%", ease:Linear.easeNone}
																)
															;

									var sceneScrollProgress = new ScrollMagic.Scene({
												triggerElement:".container",
												triggerHook:0,
												duration:duration
									})

											.setTween(tweenScrollProgress)
											.addTo(controller);

						}


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

				//For devices less than 960px---------------------
						} else {

					//Init new Controller for smaller screens
							var controller = new ScrollMagic.Controller();

					//Fade in Move scroll reveal multiple items via parent trigger
							$('.trigger-s').each(function(){

								var tween = TweenMax
															.staggerFrom(
																$(".fadeInMove", this),
																1,
																{y:55, autoAlpha:0, ease: Power1.easeOut},
																0.15
															)
														;

								var sceneRevealMultiSm = new ScrollMagic.Scene({
											triggerElement: this,
											triggerHook: .8,
											reverse:false

										})

										.setTween(tween)
										.addTo(controller);
							});

					//Fade in Move scroll reveal multiple items via parent trigger
							$('.fadeInMove-s').each(function(){

								var tween = TweenMax
															.staggerFrom(
																$(this),
																1,
																{y:50, autoAlpha:0, ease: Power1.easeOut},
																0.15
															)
														;

								var sceneRevealSingleSm = new ScrollMagic.Scene({
											triggerElement: this,
											triggerHook: .8,
											reverse:false

										})

										.setTween(tween)
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
											triggerHook:.6,
											duration:'150%'
										})

										.setTween(tween)
										.addTo(controller);
								});

								$('.parallaxST').each(function(){

									var tween = TweenMax
																.to(
																	$(this),
																	1,
																	{y: 150, ease: Linear.easeNone}
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
																	{y:-75},
																	{y: 75, ease: Linear.easeNone}
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

						}//end ScrollMagic

	}
	});

	/**
	* Next step, you have to tell Barba to use the new Transition
	*/

	Barba.Pjax.getTransition = function() {
	/**
	 * Here you can use your own logic!
	 * For example you can use different Transition based on the current page or link...
	 */



	return FadeTransition;
	};








});//window.requestAnimationFrame
});//$(window).on
});//$(document).ready
