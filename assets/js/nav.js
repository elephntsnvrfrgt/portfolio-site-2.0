//var $navContainer = $('#nav-container');

//TweenLite.from($navContainer, 1, {width:'0vh'});

var 	navContent = $('.nav-content'),
			logoMark = $('#logo-mark'),
			socialLinks = $('.social'),
			//logoType = $('#logo-type'),
			socialContainer = $('#social-container'),
			tl = new TimelineMax();

tl
			.from(navContent, 1, {autoAlpha:0})
			//.from(logoMark, 1, {autoAlpha:0}, 0)
			//.from(socialLinks, 1, {autoAlpha:0}, 1)
			.staggerFrom(socialLinks, 1.25, {x:-10, autoAlpha:0, ease: Power3.easeOut}, 0.07);
