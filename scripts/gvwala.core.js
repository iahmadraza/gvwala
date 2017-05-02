(function ( $ ) {
	
	//scroll top
	$( 'body' ).on( 'click', 'a.gotop, div.company-logo>a', function ( e ) {
		$( 'html, body' ).animate( { scrollTop: 0 }, 500 );
	});


	$( window ).on( 'scroll', function ( e ) {
		// var gl = $( 'body' ).offset().top;
		visibleButtonGoTop();
	});

	$( 'body' ).on( 'resize', function ( e ) {
		navVisibility();
		// $( 'div.global-navigation>a.btn-nav' ).removeClass( 'nav-true' );
		// $( 'div.global-navigation ul.lst-global-nav' ).removeClass( 'nav-active' ).removeAttr( 'style' );
	});

	$( 'body' ).on( 'click', 'div.global-navigation>ul.lst-global-nav>li>a', function ( e ) {
		//if ( ! $( this ).hasClass( 'btn-highlight' ) ) {
			var thisElem = $( this ).attr( 'class' );
			//var currentClass = thisElem.substring( thisElem.lastIndexOf( 'a-' ) + 2 );
			var currentClass = thisElem.substring( 2, thisElem.length );
			//alert( 'currentClass = ' + currentClass );
			gotoSection( '.' + currentClass );
			navVisibility();
			//$( 'div.global-navigation>a.btn-nav' ).trigger( 'click' );
		//}
	});

	$( 'body' ).on( 'click', 'div.global-navigation>a.btn-nav', function ( e ) {
		if ( ! $( this ).hasClass( 'nav-true' ) ) {
			$( this ).addClass( 'nav-true' );
			$( this ).siblings( 'ul.lst-global-nav' ).addClass( 'nav-active' ).slideDown();
		} else {
			$( this ).removeClass( 'nav-true' );
			$( this ).siblings( 'ul.lst-global-nav' ).removeClass( 'nav-active' ).slideUp();
		}
	});


	$( 'body' ).on( 'click', 'div.voucher-categories>ul.lst-voucher-categories>li>a', function ( e ) {
		if ( ! $( this ).hasClass( 'item-active' ) ) {
			var itemIndex = $( this ).parent( 'li' ).index();
			$( 'ul.lst-voucher-categories>li>a' ).removeClass( 'item-active' );
			$( this ).addClass( 'item-active' );
			$( 'div.voucher-list section.vouchers' ).removeClass( 'vocuhers-list-active' );
			$( 'div.voucher-list section.vouchers' ).eq( itemIndex ).addClass( 'vocuhers-list-active' );
			//console.log('itemIndex : ' + itemIndex);
		} else {
			// $( 'ul.lst-voucher-categories>li>a' ).removeClass( 'item-active' );
		}
	});

})( jQuery );

function navVisibility () {
	if ( $( window ).width() < 668 ) {
		//alert('called- if 668 LESS');
		$( 'div.global-navigation>a.btn-nav' ).removeClass( 'nav-true' );
		$( 'div.global-navigation ul.lst-global-nav' ).removeClass( 'nav-active' ).removeAttr( 'style' );
	}
}

function visibleButtonGoTop() {
	if ( $( window ).scrollTop() >= 400 )
		$( 'a.gotop' ).addClass( 'active' );
	else 
		$( 'a.gotop' ).removeClass( 'active' );
};

function gotoSection ( sectionClass ) {
	var goSection = $(sectionClass).offset().top - 80;
	$('html, body').animate({ scrollTop: goSection }, 'slow');
}
