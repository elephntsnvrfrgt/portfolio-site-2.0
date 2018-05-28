$(document).ready(function(){
	var 	navContent = $('.nav-content'),
				logoMark = $('#logo-mark'),
				socialLinks = $('.social'),
				//logoType = $('#logo-type'),
				socialContainer = $('#social-container'),
				content = $('.content-container'),
				heroTMO = $('#hero-tmo'),
				tlFadeIn = new TimelineMax();
				tlMarkHover = new TimelineMax();

	tlFadeIn
				.set(socialLinks, {autoAlpha:0})
				.from(navContent, 1, {autoAlpha:0})
				//.from(logoMark, 1, {autoAlpha:0}, 0)
				//.from(socialLinks, 1, {autoAlpha:0}, 1)
				.from(content, 2.75, {autoAlpha:0, ease: Power1.easeInOut}, 0);

	$(logoMark).mouseenter(
		function(){
			tlMarkHover
					.staggerFromTo(socialLinks, 1,
						{x:-10, autoAlpha:0},
						{x:0, autoAlpha:1, ease: Power3.easeOut},
						0.09);
		}
	);

	$(socialContainer).mouseleave(
		function(){
			tlMarkHover
				.staggerFromTo(socialLinks, 0.75,
					{autoAlpha:1},
					{autoAlpha:0, ease: Power3.easeOut},
					0.09);
			}
	);




});
