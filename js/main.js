//- Nested Accordion - http://tympanus.net/codrops/2013/03/29/nested-accordion/
//- Select2 - https://select2.github.io/examples.html
//- Magnific Popup - http://dimsemenov.com/plugins/magnific-popup/



$( function() {

//=========================================
// MODAL - jquery.magnific-popup.min.js 
//=========================================

	$('.modal-open').magnificPopup({
	  type:'inline',
	  showCloseBtn: false,
	  midClick: true,
	  mainClass: 'animate-modal' //add class on display
	});

	$('.modal-close').click(function(e) {
		$.magnificPopup.close();
		e.preventDefault();
	});

} );