function parallaxInit() {
	mgsjQuery('.parallax').parallax("30%", 0.1);
}

function initSlider(el,number,aplay,stophv,nav,pag){
	mgsjQuery("#"+el).owlCarousel({
		items : number,
		lazyLoad : true,
		navigation : nav,
		pagination : pag,
		autoPlay: aplay,
		stopOnHover: stophv,
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop: [1199,number],
		itemsDesktopSmall: [970,number],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile: [480,1],
		itemsCustom: false
	}); 
}
function dinitSlider(el,number,aplay,stophv,nav,pag){
	mgsjQuery("#"+el).owlCarousel({
		items : number,
		lazyLoad : true,
		navigation : nav,
		pagination : pag,
		autoPlay: aplay,
		stopOnHover: stophv,
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop: [1199,number],
		itemsDesktopSmall: [991,2],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile: [480,1],
		itemsCustom: false
	}); 
}
function initSliderProduct(el,number,aplay,stophv,nav,pag){
	mgsjQuery("#"+el).owlCarousel({
		items : number,
		lazyLoad : true,
		navigation : nav,
		pagination : pag,
		autoPlay: aplay,
		stopOnHover: stophv,
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop: [1199,number],
		itemsDesktopSmall: [970,number],
		itemsTablet: [767,2],
		itemsTabletSmall: false,
		itemsMobile: [480,2],
		itemsCustom: false
	}); 
}
function initSliderFeaturedBrand(el,number,aplay,stophv,nav,pag){
	mgsjQuery("#"+el).owlCarousel({
		items : number,
		lazyLoad : true,
		navigation : nav,
		pagination : pag,
		autoPlay: aplay,
		stopOnHover: stophv,
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop: [1199,number],
		itemsDesktopSmall: [970,number],
		itemsTablet: [768,3],
		itemsTabletSmall: false,
		itemsMobile: [480,2],
		itemsCustom: false
	}); 
}
function initSliderTestimonials(el,number,aplay,stophv,nav,pag){
	mgsjQuery("#"+el).owlCarousel({
		items : number,
		lazyLoad : true,
		navigation : nav,
		pagination : pag,
		autoPlay: aplay,
		stopOnHover: stophv,
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [970,1],
		itemsTablet: [768,1],
		itemsTabletSmall: false,
		itemsMobile: [480,1],
		itemsCustom: false
	}); 
}
function toggleEl(el){
	//mgsjQuery('.toggle-el').hide();
	mgsjQuery('#'+el).slideToggle('fast');
}

function initThemeJs(){
	// init tooltip
	mgsjQuery('.tooltip-links').tooltip({
		selector: "[data-toggle=tooltip]",
		container: "body"
	});
	
	// init height for product info box
	/* if(mgsjQuery(window).width() > 991) {
		mgsjQuery(".product-info-box").css("min-height", "auto");
		mgsjQuery(".products-grid").each(function() {
			var wrapper = $(this);
			var minBoxHeight = 0;
			mgsjQuery(".product-info-box", wrapper).each(function() {
				if(mgsjQuery(this).height() > minBoxHeight)
					minBoxHeight = mgsjQuery(this).height();
			});
			mgsjQuery(".product-info-box", wrapper).height(minBoxHeight);
		});
	} else {
		mgsjQuery(".product-info-box").css("min-height", "auto");
	} */
}

mgsjQuery(window).load(function() {
	mgsjQuery(window).bind('body', function() {
		parallaxInit();
	});
	
	var $container = mgsjQuery('.masonry-grid');
	// initialize
	$container.masonry({
	  itemSelector: '.item'
	});
	
	initThemeJs();
	
	if(mgsjQuery('.scroll-to-top').length){
		mgsjQuery(window).scroll(function(){
			if (mgsjQuery(this).scrollTop() > 1) {
				mgsjQuery('.scroll-to-top').css({bottom:"25px"});
			} else {
				mgsjQuery('.scroll-to-top').css({bottom:"-100px"});
			}
		});

		mgsjQuery('.scroll-to-top').click(function(){
			mgsjQuery('html, body').animate({scrollTop: '0px'}, 800);
			return false;
		});
	}
	
});
mgsjQuery(document).ready(function() {
	
	mgsjQuery('.block-layered-nav .configurable-swatch-list li a.has-image').parent().addClass('configurable-swatch-image');
	/* Megamenu */
	
	mgsjQuery('.mega-menu-item ul.dropdown-menu .level1 .toggle-menu .fa-plus').click(function(){
		mgsjQuery(this).parent().siblings('ul').slideDown('fade');		
		mgsjQuery(this).addClass('hide-plus');
		mgsjQuery(this).siblings('.fa-minus').addClass('show-minus');
	});
	
	mgsjQuery('.mega-menu-item ul.dropdown-menu .level1 .toggle-menu .fa-minus').click(function(){
		mgsjQuery(this).parent().siblings('ul').slideUp('fade');
		mgsjQuery(this).siblings('.fa-plus').removeClass('hide-plus');
		mgsjQuery(this).removeClass('show-minus');
	});
	
	mgsjQuery('.static-menu .dropdown-submenu .toggle-menu .fa-plus').click(function(){
		mgsjQuery(this).parent().siblings('ul').slideDown('fade');
		mgsjQuery(this).addClass('hide-plus');
		mgsjQuery(this).siblings('.fa-minus').addClass('show-minus');
	});
	
	mgsjQuery('.static-menu .dropdown-submenu .toggle-menu .fa-minus').click(function(){
		mgsjQuery(this).parent().siblings('ul').slideUp('fade');
		mgsjQuery(this).siblings('.fa-plus').removeClass('hide-plus');
		mgsjQuery(this).removeClass('show-minus');
	});
	/* end */
	
	mgsjQuery('.product-top').click(function(){
		mgsjQuery('.product-top').removeClass('hide-cover');
		mgsjQuery(this).addClass('hide-cover');
	})
	
	mgsjQuery('.product-content .wl-item .no-active').mouseover(function(){
		mgsjQuery(this).find('.fa').addClass('fa-heart');
		mgsjQuery(this).find('.fa').removeClass('fa-heart-o');
	});
	mgsjQuery('.product-content .wl-item .no-active').mouseout(function(){
		mgsjQuery(this).find('.fa').addClass('fa-heart-o');
		mgsjQuery(this).find('.fa').removeClass('fa-heart');
	});
	if(mgsjQuery('body').find('counter')) {
		mgsjQuery('.counter').counterUp({
			delay: 20,
			time: 700
		});
	}
	if(mgsjQuery("body").hasClass('cms-index-index')){
		if(!mgsjQuery("body").hasClass('page-builder')){
			if(mgsjQuery("body").find('.one-page-slider')){ 
				mgsjQuery('.one-page-slider > div').addClass('relative-scroll');
				mgsjQuery('.one-page-slider > div').fsvs();
			}
		}
	}
	mgsjQuery('.products-grid .product-content .product-desc').each(function(i, obj) {
		if(!mgsjQuery(this).find('.icon-links li').hasClass('wl-item')){
			mgsjQuery(this).find('.cate-name').addClass('no-wl');
		}
		if(!mgsjQuery(this).find('.icon-links li button').hasClass('btn-compare')){
			mgsjQuery(this).find('.cate-name').addClass('no-wl');
		}
		if(!mgsjQuery(this).find('.icon-links li button').hasClass('btn-compare') && !mgsjQuery(this).find('.icon-links li').hasClass('wl-item')){
			mgsjQuery(this).find('.cate-name').addClass('no-all');
		}
		if(!mgsjQuery(this).find('.bottom-desc > div').hasClass('add-cart-item')){
			mgsjQuery(this).find('.price-box').addClass('no-effect');
			mgsjQuery(this).find('.ratings').addClass('no-effect');
		}
		if(mgsjQuery(this).find('.add-cart-item > span').hasClass('text-soul')){
			mgsjQuery(this).find('.add-cart-item').css('bottom','23px');
		}
	});
	mgsjQuery('.product-list-block .product-content .product-details .top-desc').each(function(i, obj) {
		if(!mgsjQuery(this).find('> div').hasClass('controls')){
			mgsjQuery(this).find('.cate-name').addClass('no-all');
		}
	});
	mgsjQuery(".product-essential .product-shop .go-rate").click(function (event) {
        event.preventDefault();
        mgsjQuery("#product_tabs .tab-content .active").removeClass("active");
        mgsjQuery("#product_tabs .nav-tabs .active").removeClass("active");
        mgsjQuery("#product_tabs #box-reviews").addClass("active");
        mgsjQuery("#product_tabs #reviews-tab").addClass("active");
        mgsjQuery('html, body').animate({
            scrollTop: mgsjQuery("#product_tabs").offset().top
        }, 1000);
    });
	mgsjQuery(".onepage-pagination a").on("click", function (e) {
			e.preventDefault();
		});
	mgsjQuery( ".question-list .item" ).click(function() {
		if(mgsjQuery(this).hasClass('active')){
			mgsjQuery(this).find('.fa').removeClass( "fa-chevron-down" );
			mgsjQuery(this).find('.fa').addClass( "fa-chevron-up" );
		}else{
			mgsjQuery(this).find('.fa').removeClass( "fa-chevron-up" );
			mgsjQuery(this).find('.fa').addClass( "fa-chevron-down" );
		}
	});
	if(mgsjQuery(window).width() >= 992){
		mgsjQuery('.vertical-menu li').hover(function(){
		var $width_ct = mgsjQuery('.container').width();
		var $width = Math.round(75*$width_ct/100);
		mgsjQuery('.vertical-menu .mega-content-wrap').css('width',$width+12+'px');
		mgsjQuery('.vertical-menu .mega-content-wrap').css('height',mgsjQuery('.rev_slider_wrapper').height()+'px');
		});
	}
	mgsjQuery( '.sidebar .block-layered-nav .title-block').click(function() {
			mgsjQuery(this).parent().find('.vertical-menu').slideToggle('fast');
			if(mgsjQuery(this).hasClass('show')){
				mgsjQuery(this).removeClass('show');
			}else{
				mgsjQuery(this).addClass('show');
			}
		});
	
	if(mgsjQuery(window).width() < 992){
		mgsjQuery( ".sidebar .block .title-block" ).click(function() {
			mgsjQuery(this).parent().find('.block-content').slideToggle('fast');
			if(mgsjQuery(this).hasClass('is-show')){
				mgsjQuery(this).removeClass('is-show');
			}else{
				mgsjQuery(this).addClass('is-show');
			}
		});
	}
	
	mgsjQuery( ".block-cart-header .block-title" ).click(function() {
		mgsjQuery(this).parent().find('.block-content').slideToggle('fast');
	});
	mgsjQuery( ".top-bar .topSearch > a" ).click(function() {
		mgsjQuery(this).parent().find('.topsearch-content').slideToggle('fast');
	});
	if(mgsjQuery(window).width() < 767){
		mgsjQuery( '.middle-block .block-title').click(function() {
			mgsjQuery(this).parent().find('.block-content').slideToggle('fast');
			if(mgsjQuery(this).hasClass('is-show')){
				mgsjQuery(this).removeClass('is-show');
			}else{
				mgsjQuery(this).addClass('is-show');
			}
		});
	mgsjQuery('.header-v4').addClass('position-relative');
	}
	var $width_sidebar = mgsjQuery('.sidebar').width();
	var $width_blog_desc = $width_sidebar -71;
	mgsjQuery( ".sidebar .block-recent-blog .menu-recent .blog-desc" ).each(function( index ) {
		mgsjQuery(this).css("width", $width_blog_desc+"px"); 
	});
	mgsjQuery(window).scroll(function(){
		if(mgsjQuery(this).scrollTop() > 200 && mgsjQuery(this).width() > 991){
			mgsjQuery('.sticky-menu .top-content').addClass('sticky-content');
			mgsjQuery('.sticky-menu .block-cart-header').addClass('sticky-element');
			mgsjQuery('.sticky-menu .nav-main-collapse').addClass('sticky-menu');
		}else{
			mgsjQuery('.sticky-menu .top-content').removeClass('sticky-content');
			mgsjQuery('.sticky-menu .block-cart-header').removeClass('sticky-element');
			mgsjQuery('.sticky-menu .nav-main-collapse').removeClass('sticky-menu');
		}
	});
	mgsjQuery(".category-tabs .tab-products li a").click(function(){
		mgsjQuery(this).parent().parent().parent().find('.tab-pane').removeClass("ready");
		var numberClick = mgsjQuery(this).attr("data-number");
		for (i = 1; i < numberClick; i++) {
			if(i == numberClick){
				return false;
			}
			mgsjQuery(this).parent().parent().parent().find('.tab-pane'+i).addClass("ready");
		}
	});
	
	mgsjQuery('.btn-responsive-nav').click(function(){
		mgsjQuery('.nav-main').addClass('show-menu');
	});
	mgsjQuery('nav.nav-main .fa-times').click(function(){
		mgsjQuery('.nav-main').removeClass('show-menu');
	});
	if(mgsjQuery(window).width() <= 991){		
		mgsjQuery('.vertical-title').click(function(){			
			if(mgsjQuery('.vertical-menu-content').hasClass('reponsive-vertical')){
				mgsjQuery('.vertical-menu-content').removeClass('reponsive-vertical');
				
			}else{
				mgsjQuery('.vertical-menu-content').addClass('reponsive-vertical');
			}
		});
		mgsjQuery('.header-v4').addClass('position-relative');
	}
	
	if(!mgsjQuery('body').hasClass('cms-index-index')){
		mgsjQuery('.vertical-menu-content').hide();
		mgsjQuery('.section-headertop').addClass('border-bt');	
		mgsjQuery('.header-v4').addClass('position-relative');
		mgsjQuery('.header-v7').addClass('position-relative');
		mgsjQuery('.vertical-menu-home').addClass('hidden-vertical');
		mgsjQuery('.vertical-title').click(function(){			
			/* if(mgsjQuery('.vertical-menu-home').hasClass('hidden-vertical')){
				mgsjQuery('.vertical-menu-home').addClass('block-vertical');
				mgsjQuery('.vertical-menu-home').removeClass('hidden-vertical');
			}else{
				mgsjQuery('.vertical-menu-home').removeClass('block-vertical');
				mgsjQuery('.vertical-menu-home').addClass('hidden-vertical');
			} */
			mgsjQuery('.vertical-menu-content').slideToggle();
			mgsjQuery(this).toggleClass('active');
		
		});
	}
	mgsjQuery(".category-tabs .tab-products li a").click(function(){
		mgsjQuery(this).parent().parent().parent().find('.tab-pane').removeClass("ready");
		var numberClick = mgsjQuery(this).attr("data-number");
		for (i = 1; i < numberClick; i++) {
			if(i == numberClick){
				return false;
			}
			mgsjQuery(this).parent().parent().parent().find('.tab-pane'+i).addClass("ready");
		}
	});
	mgsjQuery('.cate-best .tab-pane1').addClass('active');
	mgsjQuery('.cate-best > div').each(function(){
		mgsjQuery(this).click(function(){
			mgsjQuery('.cate-best > div').removeClass('active');
			mgsjQuery('.cate-tabs').find('.tab-pane').removeClass("ready");
			var numberClick = mgsjQuery(this).attr("data-number");
			for (i = 1; i < numberClick; i++) {
				if(i == numberClick){
					return false;
				}
				mgsjQuery('.cate-tabs').find('.tab-pane'+i).addClass("ready");
			}
			var value = mgsjQuery(this).attr('class');
			mgsjQuery('.cate-tabs .tab-pane').removeClass('active');
			mgsjQuery('.cate-tabs .'+value).addClass('active');
			mgsjQuery(this).addClass('active');
		})
	});
	//owl slider medical
	mgsjQuery('.home-medical-slider').owlCarousel({
		items : 1,
		lazyLoad : true,
		navigation : false,
		pagination : true,
		autoPlay: true,
		stopOnHover: true,
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [970,1],
		itemsTablet: [768,1],
		itemsTabletSmall: false,
		itemsMobile: [480,1],
		itemsCustom: false
	});
});

// init gmap
function initGmap(address, html, image){
	mgsjQuery.ajax({
		type: "GET",
		dataType: "json",
		url: "http://maps.googleapis.com/maps/api/geocode/json",
		data: {'address': address,'sensor':false},
		success: function(data){
			if(data.results.length){
				latitude = data.results[0].geometry.location.lat;
				longitude = data.results[0].geometry.location.lng;
				
				var locations = [
			[html, latitude, longitude, 2]
			];
		
			var map = new google.maps.Map(document.getElementById('map'), {
			  zoom: 14,
				scrollwheel: false,
				navigationControl: true,
				mapTypeControl: false,
				scaleControl: false,
				draggable: true,
				center: new google.maps.LatLng(latitude, longitude),
			  mapTypeId: google.maps.MapTypeId.ROADMAP
			});
		
			var infowindow = new google.maps.InfoWindow();
		
			var marker, i;
		
			for (i = 0; i < locations.length; i++) {  
		  
				marker = new google.maps.Marker({ 
				position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
				map: map ,
				icon: image
				});
		
		
			  google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
				  infowindow.setContent(locations[i][0]);
				  infowindow.open(map, marker);
				}
			  })(marker, i));
			}
			}
		}
	});
}

var newCount = 2;
var hotCount = 2;
var featuredCount = 2;
var saleCount = 2;

// load more products
function loadMore(count, type, productCount, perRow){
	mgsjQuery('#'+type+'_loadmore_button .loading').show();
	var request = new Ajax.Request(WEB_URL+'mpanel/loadmore/'+type+'?perrow='+perRow+'&p='+count+'&limit='+productCount, {
		onSuccess: function(response) {
			result = response.responseText;
			mgsjQuery('#'+type+'_product_container').append(result);
			mgsjQuery('#'+type+'_loadmore_button .loading').hide();
			
			initThemeJs();
		}
	});
}

// open overlay popup
function openOverlay(){
	mgsjQuery('#theme-popup').show();
}

// close overlay popup
function closeOverlay(){
	mgsjQuery('#theme-popup').hide();
}

var active = false;
var data = "";

// Price slider
function sliderAjax(url) {
	if (!active) {
		active = true;
		openOverlay();		
		oldUrl = url;
		try {
			mgsjQuery.ajax({
				url: url,
				dataType: 'json',
				type: 'post',
				data: data,
				success: function(data) {
					if (data.leftcontent) {
						if (mgsjQuery('.block-layered-nav')) {
							mgsjQuery('.block-layered-nav').empty();
							mgsjQuery('.block-layered-nav').append(data.leftcontent);
						}
					}
					if (data.maincontent) {
						mgsjQuery('#product-list-container').empty();
						mgsjQuery('#product-list-container').append(data.maincontent);
					}
					var hist = url.split('?');
					if(window.history && window.history.pushState){
						window.history.pushState('GET', data.title, url);
					}
					initThemeJs();
					closeOverlay();
				}
			});
		} catch (e) {}

		active = false;
	}
	return false;
}


// Ajax catalog load
function shopMore(url) {
	oldHtml = mgsjQuery('.category-products ul.products-grid').html();
	openOverlay();
	oldUrl = url;
	try {
		mgsjQuery.ajax({
			url: url,
			dataType: 'json',
			type: 'post',
			data: data,
			success: function(data) {
				if (data.leftcontent) {
					if (mgsjQuery('.block-layered-nav')) {
						mgsjQuery('.block-layered-nav').empty();
						mgsjQuery('.block-layered-nav').append(data.leftcontent);
					}
				}
				if (data.maincontent) {
					mgsjQuery('#product-list-container').empty();
					mgsjQuery('#product-list-container').append(data.maincontent);
					mgsjQuery('.category-products ul.products-grid').prepend(oldHtml);
				}
				initThemeJs();
				closeOverlay();
			}
		});
	} catch (e) {}
}

function setTabBackground(url){
	$('tab-background').setStyle({backgroundImage: 'url('+url+')'});
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 

function dontShowPopup(el){
	if($(el).checked==true){
		var d = new Date();
		d.setTime(d.getTime() + (24*60*60*1000*365));
		var expires = "expires="+d.toUTCString();
		document.cookie = 'newsletterpopup' + "=" + 'nevershow' + "; " + expires;
	}else{
		document.cookie = 'newsletterpopup' + "= ''; -1";
	}
	
	
}
function closeMgs() {
	mgsjQuery.magnificPopup.close();
}