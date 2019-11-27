<<<<<<< HEAD
=======
var images= ["images/icapp1.jpg", "images/icapp2.jpg", "images/icapp3.jpg"];
var texts= ["This is a Cappuccino", "THis is a Cappuccino 2", "This is a Cappuccino 3"];
>>>>>>> branch 'master' of https://github.com/dryuen/ist5313-f19-group1.git
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
