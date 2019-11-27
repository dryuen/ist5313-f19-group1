var images= ["images/ilatte1.jpg", "images/ilatte2.jpg", "images/ilatte3.jpg"];
var texts= ["This is a latte", "THis is a latte 2", "This is a latte 3"];
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
