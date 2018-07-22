$(document).ready(function(){

	var 	navContent = $('.nav-content'),
				logoMark = $('#logo-mark'),
				socialLinks = $('.social'),
				//logoType = $('#logo-type'),
				socialContainer = $('#social-container'),
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
				tlMax = new TimelineMax();


	$(logoMark).mouseover(
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
