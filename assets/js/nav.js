$(document).ready(function(){
	var 	navContent = $('.nav-content'),
				logoMark = $('#logo-mark'),
				socialLinks = $('.social'),
				//logoType = $('#logo-type'),
				socialContainer = $('#social-container'),
				content = $('.content-container'),
				heroTMO = $('#hero-tmo'),
				heroVW = $('#hero-vw'),
				heroODI = $('#hero-odi'),
				heroCMHF = $('#hero-cmhf'),
				descTMO = $('#tmo-description'),
				descVW = $('#vw-description'),
				descODI = $('#odi-description'),
				descCMHF = $('#cmhf-description'),
				contentTMO = $('#tmo-content'),
				contentVW = $('#vw-content'),
				contentODI = $('#odi-content'),
				contentCMHF = $('#cmhf-content'),
				junkTMO = ['#tmo-description', '#tmo-content', '#close'],
				junkVW = ['#vw-description', '#vw-content', '#close'],
				junkODI = ['#odi-description', '#odi-content', '#close'],
				junkCMHF = ['#cmhf-description', '#cmhf-content', '#close'],
				notTMO = ['#hero-vw, #hero-odi, #hero-cmhf'],
				hidden = $('.hidden'),
				subContent = $('.subcontent-container'),
				subClose = $('#close'),
				tlMax = new TimelineMax();


	tlMax
				.set(socialLinks, {autoAlpha:0})
				.from(navContent, 1, {autoAlpha:0})
				//.from(logoMark, 1, {autoAlpha:0}, 0)
				//.from(socialLinks, 1, {autoAlpha:0}, 1)
				.from(content, 2, {autoAlpha:0, ease: Power1.easeInOut}, 0);

	$(logoMark).mouseenter(
		function(){
			tlMax
					.staggerFromTo(socialLinks, 1,
						{x:-10, autoAlpha:0},
						{x:0, autoAlpha:1, ease: Power3.easeOut},
						0.09);
		}
	);

	$(socialContainer).mouseleave(
		function(){
			tlMax
				.staggerFromTo(socialLinks, 0.75,
					{autoAlpha:1},
					{autoAlpha:0, ease: Power3.easeOut},
					0.09);
		}
	);

	//revealing subcontent

	//first attempt
	// $(heroTMO).click(
	// 	function(){
	// 		$("#tmo-content, #tmo-description, #close").fadeToggle()
	// 	}
	// );
	//
	// $("#hero-vw").click(
	// 	function(){
  // 		$("#vw-content, #vw-description, #close").fadeToggle()
	// 	}
	// );
	//
	// $("#close").click(
	// 	function(){
  // 		$( "#tmo-content:visible, #tmo-description:visible, #vw-content:visible, #vw-description:visible, #close:visible" ).fadeToggle();
	// 		$('.content-container').animate({
  //       scrollTop: $("#hero-tmo").offset().top
  //   }, 1000);
	// 	}
	// );

	//second attempt jquery
	// $(heroTMO).click(
	// 	function(){
	// 		$("#tmo-content, #tmo-description, #close").animate(
	// 			{
  //       	opacity: '1',
	// 				top: '-=40px',
  //   		},
	// 			1000
	// 		);
	// 	}
	// );

	//third attempt gsap
	$(heroTMO).click(
		function(){
			tlMax
					.set(junkTMO, {display:'block'})
					.staggerTo(junkTMO, 1.25, {y:-20, autoAlpha:1, ease: Power3.easeOut},0.2)
					//turn other heroes invisible
					.to(notTMO, 1, {autoAlpha:0, display:'none', ease: Power3.easeOut});
		}
	);

	$(subClose).click(
		function(){
			tlMax
					.to(junkTMO, 1,	{autoAlpha:0, ease: Power3.easeOut})
					//turn other heroes back on
					.to(notTMO, 1.25, {autoAlpha:1, display:'block', ease: Power3.easeOut})
					.set(junkTMO, {y:+20, display:'none'});
		}
	);




	// attempt at ajax
	// $("#hero-vw").click(function(){
  //       $("body" ).load("vw.html .content-container")
  //   });


	//scroll reveal
	var reveals = document.querySelectorAll('.reveal');

	var config = {
	  threshold: 0.4
	};

	var observer = new IntersectionObserver(function (entries, self) {
	  entries.forEach(function (entry) {
	    if (entry.isIntersecting) {
	      var overlap = '-=0.3';

	      if (!tlMax.isActive()) {
	        overlap = '+=0';
	      }

	      tlMax.fromTo(entry.target, 1.25, {y:60, autoAlpha:0},{y:0, autoAlpha: 1, ease: Power3.easeOut});
	      self.unobserve(entry.target);
	    }
	  });
	}, config);

	reveals.forEach(function (reveal) {
	  observer.observe(reveal);
	});



});
