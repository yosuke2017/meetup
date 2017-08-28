$(function(){



  // ------ ここからマイページのサブイメージにマウスオーバーした時のメインイメージの挙動 ------

  $('.user__contents__sub-image-show').hover(function(){

    avatar = $('.user__contents-avatar').children('.user__contents__sub-image-show').css("background-image");

    // ↑↑変更される前のavatar画像のURLを取得している。hoverファンクションの第二引数で使いたいため、あえてグローバススコープでの変数宣言。

    var sub_image = $(this).css('background-image');

    $('.user__contents-avatar').children('.user__contents__sub-image-show').css("background-image", sub_image);

  },function(){

    $('.user__contents-avatar').children('.user__contents__sub-image-show').css("background-image", avatar);

  });

  // ------ ここまでがマイページのサブイメージにマウスオーバーした時のメインイメージの挙動 ------



// -------- ここからcurrent_userが自分のマイページを見ている時のヘッダーのcssの挙動 -------

   // var showingPageId = $('.header__right-btns').attr('data-id');

   // var currentuserId = $('.header__right-btns').attr('data-user_id');

   // if(showingPageId == currentuserId){

   //  console.log('onazidayo');

   //  $('.header__right-btns').css('left', '80.6%');

   // } else{

   //  $('.header__right-btns').css('left', '75%');
   // }

// ------  ここまでがcurrent_userが自分のマイページを見ている時のヘッダーのcssの挙動------




// ------ ここから画像がアップロードされた時サムネイル用の要素に切り替える実装 ------

   $('.avatar-input').change(function(){

    $('.user__contents-avatar').removeClass('active');

    $('.user__contents-avatar-edit').addClass('active');

   });

// ------ ここまでが画像がアップロードされた時サムネイル用の要素に切り替える実装 ------




// ------ ここから画像がアップロードされた時のサムネイルの表示場所の実装 ------

   $('input').uploadThumbs({

    position :'.user__contents-avatar-edit'


   });

// ------ ここまでが画像がアップロードされた時のサムネイルの表示場所の実装 ------



});
