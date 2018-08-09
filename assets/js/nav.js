$(document).ready(function(){



	$(".content").fitVids();

	var 	navContent = $('.nav-content'),
				logoMark = $('#logo-mark'),
				social = $('.social'),
				socialLinks = $(".social-links"),
				info = $('#info'),
				infoBtn = $('#nameinfo'),
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
//page content fade in

	tlMax
		.to(
			$('.fadein'),
			1.5,
			{opacity:1, ease: Power3.easeOut}
		)
		.staggerFromTo(
			$('.herotext'),
			1,
			{y:10, autoAlpha:0},
			{y:0, autoAlpha:1, ease: Power3.easeOut},
			0.2,
			"-=1.5"
		);


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
			// //overlay to disable scrolling
			// .set(
			// 	overlay,
			// 	{visibility:'visible'},
			// 	'-=1'
			// )
			// .to(
			// 	overlay,
			// 	1,
			// 	{opacity:.05, ease: Power3.easeOut},
			// 	'-=1'
			// )


		infoBtn.one("click", closeInfo);

		//change from isaac to close
		$('#info').fadeOut("slow", function(){
		   var infoText = $("<div class='small' id='info'>Close</div>").hide();
		   $(this).replaceWith(infoText);
		   $('#info').fadeIn("slow");
		});
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
				{x:-375, ease:Power3.easeIn},
				'-=.5'
			)
			.to(
				info,
				.5,
				{autoAlpha:0}
			)
			// //overlay to disable scrolling
			// .to(
			// 	overlay,
			// 	1,
			// 	{opacity:0, ease: Power3.easeOut},
			// 	'-=1'
			// )
			// .set(
			// 	overlay,
			// 	{visibility:'hidden'}
			// )


		infoBtn.one("click", openInfo);

		//change from close to isaac
		$('#info').fadeOut("slow", function(){
		   var infoText = $("<div class='small' id='info'>Isaac Martin</div>").hide();
		   $(this).replaceWith(infoText);
		   $('#info').fadeIn("slow");
		});
	}

	infoBtn.one("click", openInfo);




//–––––––––––––––––––––––––––––––––––––––––––
//menu trigger and animation

	function openMenu() {
		tlMax
			.to(
				menuContainer,
				.5,
				{autoAlpha:1}
			)
			.staggerFromTo(
				menuLi,
				1.5,
				{y:15, autoAlpha:0},
				{y:-15, autoAlpha:1, ease: Power3.easeOut},
				0.2,
				'+=.25'
			)
			.set(
				container,
				{visibility:'hidden'}
			)
			menuBtn.one("click", closeMenu);

			//change menu text
			$('#menuText').fadeOut("slow", function(){
			   var menuText = $("<div class='small' id='menuText'>Never mind</div>").hide();
			   $(this).replaceWith(menuText);
			   $('#menuText').fadeIn("slow");
			});
	}

	function closeMenu() {
		tlMax
			.set(
				container,
				{visibility:'visible',}
			)
			.to(
				menuLi,
				.5,
				{autoAlpha:0}
			)
			.to(
				menuContainer, .5,
				{autoAlpha:0}
			)
			menuBtn.one("click", openMenu);

			//change menu text
			$('#menuText').fadeOut("slow", function(){
			   var menuText = $("<div class='small' id='menuText'>Selected works</div>").hide();
			   $(this).replaceWith(menuText);
			   $('#menuText').fadeIn("slow");
			});
	}
	menuBtn.one("click", openMenu);


//menu hamburger svg animation

	var menuToggle = new TimelineMax({paused:true, reversed:true});
	var menuTime = .3;
	var delayMenu = .25;

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
				prjtTileInfo = ".prjtNo, .prjtTitle";
		tlMax.to($(element).find(prjtTileInfo), 1, {opacity:1})
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
//scroll reveal




//–––––––––––––––––––––––––––––––––––––––––––
//parallax scrolling






});
