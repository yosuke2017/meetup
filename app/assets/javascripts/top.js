$(function(){


$('.top__center-content__message').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
          console.log("sa");
      } else {
          console.log("su");
      }
  });


  $('.top__center-content__session-btn-left').hide();
  $('.top__center-content__session-btn-right').hide();


  $('.button--border').removeClass('in');


  $('.top__center-content__message').bind('inview', function(){
    console.log('inviewいけてるよ');
    setTimeout(function() {
      $('.top__center-content__session-btn-left').slideToggle();
      $('.top__center-content__session-btn-right').slideToggle();
      setTimeout(function() {
        $('.button--border').addClass('in');
          setTimeout(function() {
            $('.button--border').addClass('ready');
          },500)
      },1000)
    }, 800)
    });


  // $('.button--border').removeClass('in');

  // $(document).ready(function() {
  //   setTimeout(function() {
  //     $('.button--border').addClass('in');
  //       setTimeout(function() {
  //         $('.button--border').addClass('ready');
  //       },500)
  //   },1000)
  // });

  $('.document').ready(function() {
    console.log("readyおけ");
    setTimeout(function() {
      $('.top__hide-content').fadeIn(600);
      setTimeout(function(){
        $('.top__center-content__message').slideToggle();
      },600);
    },700);
  })

});

