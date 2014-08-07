$(function(){
			$(window).resize(function() {
				resize();
			});
			function resize() {
				var viewportWidth = $(window).width();
				var viewportHeight = $(window).height();
				var backgroundWidth = $('#background').width();
				var backgroundHeight = $('#background').height();
				var viewportRatio = viewportWidth / viewportHeight;
				var backgroundRatio = backgroundWidth / backgroundHeight;
				var leftOffset = -(backgroundWidth / 2);
				if (viewportRatio >= backgroundRatio) {
					$('#background').css('width', '100%');
					$('#background').css('height', 'auto');
					$('#background').css('left', '0');
					$('#background').css('margin-left', '0');
				}
				else {
					$('#background').css('width', 'auto');
					$('#background').css('height', '100%');
				}
				$('#background').css('left', '50%');
				$('#background').css('margin-left', leftOffset);
			}
			resize();

			$('.icon-menu').on('click', function(){
				if ($(this).hasClass('active')) {
					$('nav').animate({ left: "0" }, 250, function() { /* Animation complete. */ });
					$('#menu').animate({ left: "-25%" }, 250, function() { /* Animation complete. */ });
					$(this).removeClass('active');
				}
				else {
					$('nav').animate({ left: "25%" }, 250, function() { /* Animation complete. */ });
				$('#menu').animate({ left: "0" }, 250, function() { /* Animation complete. */ });
					$(this).addClass('active');
				}
			});

			//H1 Handler
			var date = new Date
			var hours = date.getHours();
			if (hours >= 0 && hours < 12) {
				$('h1.home').html('Good Morning!');
			}
			if (hours >= 12 && hours < 17) {
				$('h1.home').html('Good Afternoon!');
			}
			if (hours >= 17 && hours <=23) {
				$('h1.home').html('Good Evening!');
			}
		});