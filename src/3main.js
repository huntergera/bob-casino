;(function($){

//Run parallax	
	$('.plaxify').plaxify();
	$.plax.enable();

	var array_registration = $(".registration-item");
	for (var i = array_registration.length - 1; i >= 0; i--) {
		array_registration.eq(i).css("transition-delay",500*i+"ms");
	}

	var array_advantages = $(".left-block_item");
	for (var i = array_advantages.length - 1; i >= 0; i--) {
		array_advantages.eq(i).css("animation-delay",500*i+"ms");
	}	
	
})(jQuery);

function show(){
  if(showEl.length > 0){
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var scrolled_n = scrolled + window.innerHeight-(window.innerHeight/4);
    
    for (var i = 0; i < showEl.length; i++) {
      if(scrolled_n > showEl[i].getBoundingClientRect().top + scrolled ){
        showEl[i].classList.add('visible');
        showEl.splice(i,1);
      }
    }
  }
}

var shows = document.getElementsByClassName('show_on_scroll');

var showEl = new Array();
for (var i = shows.length - 1; i >= 0; i--) {
   showEl.push(shows[i]);
}

window.onscroll = function() {
 show();
}

show();


// SMOKE

  var left = document.getElementById('smoke_left');
  var right = document.getElementById('smoke_right');
  for (var i = 0; i < 20; i++) {
    var span = document.createElement('span');
    span.style.animationDelay = i*120+'ms';
    span.style.animationDuration = Math.random()*2+1+'s';
    span.style.marginLeft = (Math.random()*10 - 5)+'px';
    var span1 = document.createElement('span');
    span1.style.marginLeft = (Math.random()*10 - 5)+'px';
    span1.style.animationDuration = Math.random()*2+1+'s';
    span1.style.animationDelay = i*120+'ms';
    left.appendChild(span1);
    right.appendChild(span);
  }