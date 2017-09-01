$(function(){

  var tabs =  $(".tabs li a");

  tabs.click(function() {
    var content = this.hash.replace('/','');
    tabs.removeClass("active");
    $(this).addClass("active");
    $("#content").find('p').hide();
    $(content).fadeIn(200);
  });

  $('#talk-history').click(function(){
    $('.log__group-tab-space__each-appeal').hide();
    $('.log__group-tab-space__each-group-log').show();
  })

  $('#report').click(function(){
    $('.log__group-tab-space__each-group-log').hide();
    $('.log__group-tab-space__each-appeal').show();
  });


})


