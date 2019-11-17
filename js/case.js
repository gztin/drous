$(document).ready(function() {
		$('a[href^="#"]').click(function(event) {
			var id = $(this).attr("href"), 
				$content = $('.content'),
				$ele = $(id);
			
			var offset = 60;
			var target = $ele.offset().top + $content.scrollTop() - offset;
			scroller.nanoScroller({scrollTop: target});
			event.preventDefault();
		});
});