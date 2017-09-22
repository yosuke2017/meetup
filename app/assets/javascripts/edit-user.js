$(function(){



// ------ ここからメイン画像をアップロードした時にプレビューを表示するための実装 ------

  $('.main-input').uploadThumbs({
    position : '#main-preview',
  });

// ------ ここまでメイン画像をアップロードした時にプレビューを表示するための実装 ------



// --- ここから最初に表示した時に、メイン画像が登録されているか否かで要素の表示を分ける実装 ---

  var main_image_data = $('.user-edit__contents__main-image').attr('data-image');

    if(main_image_data == ""){
      $('#main-image-show').hide();
      $('.upload').addClass('valid');
    }else{
      $('.preview').addClass('valid');
    }

// --- ここまで最初に表示した時に、メイン画像が登録されているか否かで要素の表示を分ける実装 ---



// ----- ここからメイン画像をアップロードした時の要素の表示・非表示の実装 -----

  $('.main-input').change(function(){

    $('.valid').removeClass('valid');
    $('.preview').addClass('valid');

  });

// -----　ここまでメイン画像をアップロードした時の要素の表示・非表示の実装 -----



// ----- ここからメイン画像の削除ボタンを押した時の要素の表示・非表示の実装 -----

  $('#main-preview-delete').click(function(){

    console.log("消した");

    $('.valid').removeClass('valid');
    $('.upload').addClass('valid');
    $('#main-image-show').hide();
    console.log($('#main-check').attr('name'));

    $('#main-check').prop("checked", true);
    $('.main-input').val('');

  });

// -----　ここまでメイン画像の削除ボタンを押した時の要素の表示・非表示の実装 -----



  // ------ ここからedit画面でメイン画像をアップロードした瞬間に画像が切り替わる実装 ------

  $('#avatar-delete').click(function(){
    $('.avatar-upload').val(null);
  })

 // ------ ここまでがedit画面でメイン画像をアップロードした瞬間に画像が切り替わる実装 ------



// ------ ここからプロフィール編集の各ドロップダウンを選択された状態にしておく実装 ------

  var selected_age = $('.user-edit__contents__profile-age').attr('data-age');

  $('#age-select-field').val(selected_age);

  var selected_height = $('.user-edit__contents__profile-height').attr('data-height');

  $('#height-select-field').val(selected_height);

  var selected_background = $('.user-edit__contents__profile-background').attr('data-background');

  $('#background-select-field').val(selected_background);

  var selected_job = $('.user-edit__contents__profile-job').attr('data-job');

  $('#job-select-field').val(selected_job);

// ----- ここまでがプロフィール編集の各ドロップダウンを選択された状態にしておく実装 ------



});
