var index = 0; 
	$( document ).ready( function() {
	slideshow();
	} );

// this function will start the slideshow
function slideshow()
{
	$( ".slideshowimage" ).hide();
	$( ".slideshowimage" ).eq( index ).show();
	index = index + 1;
	if( index == $( ".slideshowimage" ).length )
{
	index = 0;
}
// the initial time is 3 seconds (3000 milliseconds), but you can change this number
setTimeout( slideshow, 3000 );		
}
