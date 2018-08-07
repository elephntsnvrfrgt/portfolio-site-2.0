$(document).ready(function(){

	$(".content").fitVids();

	var 	navContent = $('.nav-content'),
				logoMark = $('#logo-mark'),
				social = $('.social'),
				socialLinks = $(".social-links"),
				info = $('#info'),
				close = $('#closeInfo'),
				infoContainer = $('.info-container'),
				infoFade = $('.info-fade'),
				socialContainer = $('#social-container'),
				container = $('.container'),
				menuBtn = $('#menu-btn'),
				menuContainer = $('#menu-container'),
				menuLi = $('.menuListItem'),
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



//–––––––––––––––––––––––––––––––––––––––––––
//nav animations

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
			);
	    info.one("click", closeInfo);
			close.click(closeInfo);

	}

	function closeInfo() {
		tlMax
			.to(
				infoFade, .5,
				{autoAlpha:0}
			)
			.to(infoContainer,
				1,
				{x:-375, ease:Power3.easeIn},
				'-=.5'
			);
	    info.one("click", openInfo);
			close.click(closeInfo)
	}

	info.one("click", openInfo)
	close.click(closeInfo)




//–––––––––––––––––––––––––––––––––––––––––––
//menu trigger and animation

	function openMenu() {
		tlMax
			.to(
				menuContainer,
				.75,
				{autoAlpha:1}
			)
			.staggerFromTo(
				menuLi,
				.75,
				{y:10, autoAlpha:0},
				{y:-10, autoAlpha:1, ease: Power3.easeOut},
				0.09,
				'-=.5'
			)
			.set(
				container,
				{visibility:'hidden'}
			);
			menuBtn.one("click", closeMenu);
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
			);
			menuBtn.one("click", openMenu);
	}
	menuBtn.one("click", openMenu);



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



});
