$(function(){



  // ---- ここからマイページのサブイメージにマウスオーバーした時のメインイメージの挙動 ----

  $('.user__contents--image__sub-image-show').hover(function(){
    avatar = $('.user__contents--image__avatar-show').css("background-image");
    // ↑↑変更される前のavatar画像のURLを取得している。hoverファンクションの第二引数で使いたいため、あえてグローバススコープでの変数宣言。

    var sub_image = $(this).css('background-image');
    $('.user__contents--image__avatar-show').css("background-image", sub_image);

  },function(){
    $('.user__contents--image__avatar-show').css("background-image", avatar);
  });

  // ---- ここまでがマイページのサブイメージにマウスオーバーした時のメインイメージの挙動 ----



// --- ここからもしサブイメージがなかった場合、３つの要素のうち一番後ろまで回り込ませている ---

  var sub_image1 = $('#s1').attr('data-img');
  var sub_image2 = $('#s2').attr('data-img');
  var sub_image3 = $('#s3').attr('data-img');

  console.log(sub_image1);

  if(sub_image1 === ""){
    $('#s1').insertAfter($('.user__contents--image__sub--image')[2]);
  }

  if(sub_image2 === ""){
    $('#s2').insertAfter($('.user__contents--image__sub--image')[2]);
  }

  if(sub_image3 === ""){
    $('#s3').insertAfter($('.user__contents--image__sub--image')[2]);
  }

// --- ここまでもしサブイメージがなかった場合、３つの要素のうち一番後ろまで回り込ませている ---



// ---- ここから画像がアップロードされた時サムネイル用の要素に切り替える実装 ----

  $('.avatar-input').change(function(){
    $('.user__contents-avatar').removeClass('active');
    $('.user__contents-avatar-edit').addClass('active');
  });

// ---- ここまでが画像がアップロードされた時サムネイル用の要素に切り替える実装 ----



// ------ ここから画像がアップロードされた時のサムネイルの表示場所の実装 ------

  $('input').uploadThumbs({
    position :'.user__contents-avatar-edit'
  });

// ------ ここまでが画像がアップロードされた時のサムネイルの表示場所の実装 ------



});
