$(document).ready(function(){

	var 	navContent = $('.nav-content'),
				logoMark = $('#logo-mark'),
				social = $('.social'),
				socialLinks = $(".social-links"),
				logoType = $('#logo-type'),
				close = $('#closeInfo'),
				infoContainer = $('.info-container'),
				infoFade = $('.info-fade'),
				socialContainer = $('#social-container'),
				// heroTMO = $('#hero-tmo'),
				// heroVW = $('#hero-vw'),
				// heroODI = $('#hero-odi'),
				// heroCMHF = $('#hero-cmhf'),
				// descTMO = $('#tmo-description'),
				// descVW = $('#vw-description'),
				// descODI = $('#odi-description'),
				// descCMHF = $('#cmhf-description'),
				// contentTMO = $('#tmo-content'),
				// contentVW = $('#vw-content'),
				// contentODI = $('#odi-content'),
				// contentCMHF = $('#cmhf-content'),
			 	open = false,
				tlMax = new TimelineMax();


	logoMark.mouseover(
		function(){
			tlMax
					.staggerFromTo(social, 1,
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

//info drawer animation

	function openInfo() {
		tlMax
			.to(infoContainer, 1,
				{x:375, ease: Power3.easeOut}
			)
			.staggerFromTo(infoFade, .75,
				{y:10, autoAlpha:0},
				{	y:-10, autoAlpha:1,
					ease: Power3.easeOut
				},0.09,
				'-=.5'
			)
	    logoType.one("click", closeInfo);
	}

	function closeInfo() {
		tlMax
			.to(infoFade, .5,
				{autoAlpha:0}
			)
			.to(infoContainer, 1,
				{x:-375, ease:Power3.easeIn},
			'-=.5');
	    logoType.one("click", openInfo);
	}
	close.click(closeInfo);
	logoType.one("click", openInfo);




	// logoType.on('click', function () {
	//     $(this).toggleClass('active');
	//     if (open) {
	//       timeline.reverse();
	//       open = false;
	//     } else {
	//       timeline.play();
	//       open = true;
	//     }
	//   });


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



});
