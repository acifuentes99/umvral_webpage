$(document).ready(function() {
		var mainOffset = $("#header").offset().top;
		$("#link_inicio").click(function(){
			$('html, body').animate({
					scrollTop: $("#home").offset().top - 111		}, 600);
		});
		$("#link_quees").click(function(){
			$('html, body').animate({
					scrollTop: $("#que_es").offset().top - 111
			}, 600);
		});
		$("#link_equipo").click(function(){
			$('html, body').animate({
					scrollTop: $("#equipo").offset().top - 111
			}, 600);
		});
		$("#link_contacto").click(function(){
			$('html, body').animate({
					scrollTop: $("#contacto").offset().top - 111
			}, 600);
		});

		$("#home-btn").click(function(){
			$('html, body').animate({
					scrollTop: $("#que_es").offset().top - 111
			}, 600);
			//$("#video-umvral")[0].src += "&autoplay=1";
		});


});

var myvid = document.getElementById('myvideo');
var myvids = [
  "./assets/video/VR-Time.mp4", 
  "./assets/video/White-Board.mp4"
  ];
var activeVideo = 0;

myvid.addEventListener('ended', function(e) {
  // update the new active video index
  activeVideo = (++activeVideo) % myvids.length;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
});




  // jQuery is required to run this code
  $( document ).ready(function() {
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
      scaleVideoContainer();
      scaleBannerVideoSize('.video-container .poster img');
      scaleBannerVideoSize('.video-container .filter');
      scaleBannerVideoSize('.video-container video');
    });
  });

  function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
  }

  function initBannerVideoSize(element){
    $(element).each(function(){
      $(this).data('height', $(this).height());
      $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);
  }

  function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
      var videoAspectRatio = $(this).data('height')/$(this).data('width');

      $(this).width(windowWidth);

      if(windowWidth < 1000){
          videoHeight = windowHeight;
          videoWidth = videoHeight / videoAspectRatio;
          $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

          $(this).width(videoWidth).height(videoHeight);
      }

      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
  }
/*
function resize() {
    $("body").css({
			//width:  $(window).width(),
			width:  window.innerWidth,
	});
}
 resize();
$(window).resize(function(){
 resize();
});
*/
