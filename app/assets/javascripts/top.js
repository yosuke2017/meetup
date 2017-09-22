$(function(){

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

  $(window).on('load', function() {
    console.log("readyおけ");
    setTimeout(function() {
      $('.top__hide-content').fadeIn(800);
      setTimeout(function(){
        $('.top__center-content__message').fadeIn();
      },1000);
    },900);
  });

});

