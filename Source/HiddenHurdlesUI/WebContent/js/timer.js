/**
 * Created by Manasa
 */

var time = 1000;
var initialOffset = '210';
var i = 1

/* Need initial run as interval hasn't yet occured... */
$('.circle_animation').css('stroke-dashoffset', initialOffset-(1*(initialOffset/time)));

var interval = setInterval(function() {
		$('h2').text(i);
		if (i == time) {  	
      clearInterval(interval);
			return;
    }
    $('.circle_animation').css('stroke-dashoffset', initialOffset-((i+1)*(initialOffset/time)));
    i++;  
}, 1000);