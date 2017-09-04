$(function(){

// ----- プロフィール画像の登録を促すバルーンメッセージの表示の挙動 -----

  $('.header').ready(function(){
    setTimeout(function(){
      $('.balloon').fadeIn();
      $('.fa-times').fadeIn();
    }, 1500);
  });

// ----- プロフィール画像の登録を促すバルーンメッセージの表示の挙動 -----


$('.fa-times').click(function(){
  $('.balloon').hide();
  $('.fa-times').hide();
  return false;
})


});
