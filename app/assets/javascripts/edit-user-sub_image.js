$(function(){


// ------ すでにカラムに保存されているsub_imageの数だけ配列に要素を入れている ------

  sub_image_array = new Array();

  var data1 = $('#ex1').attr('data-image');

  var data2 = $('#ex2').attr('data-image');

  var data3 = $('#ex3').attr('data-image');

    //***** カラムに値が入っていればそれを表示するための要素を表示。入っていなければ要素ごと一番後ろに回す ******

  if(data1 !== ""){
    sub_image_array.push("0");
    $('#ex1').show();
  }else{
    $('#ex1').insertAfter($('.user-edit__contents__sub-image__existing__field')[2]);
  }

  if(data2 !== ""){
    sub_image_array.push("0");
    $('#ex2').show();
  }else{
    $('#ex2').insertAfter($('.user-edit__contents__sub-image__existing__field')[2]);
  }

  if(data3 !== ""){
    sub_image_array.push("0")
    $('#ex3').show();
  }else{
    $('#ex3').insertAfter($('.user-edit__contents__sub-image__existing__field')[2]);
  }

  console.log(sub_image_array.length);

    //***** カラムに値が入っていればそれを表示するための要素を表示。入っていなければ要素ごと一番後ろに回す ******

// ------ すでにカラムに保存されているsub_imageの数だけ配列に要素を入れている ------



// ---- 最初からカラムに値が入っている場合、最初にどのfile_fieldを表示するか ----

  if(sub_image_array.length === 1){

    if(data1 !== ""){
      $('.active').removeClass('active');
      $('#input2').addClass('active size2');
    }

    if(data2 !== ""){
      $('.active').removeClass('active');
      $('#input1').addClass('active size2');
    }

    if(data3 !== ""){
      $('.active').removeClass('active');
      $('#input1').addClass('active size2');
    }

  } else if(sub_image_array.length === 2){

    if(data1 !== "" && data2 !== ""){
      $('.active').removeClass('active');
      $('#input3').addClass('active size3');
    }

    if(data1 !== "" && data3 !== ""){
      $('.active').removeClass('active');
      $('#input2').addClass('active size3');
    }

    if(data2 !== "" && data3 !== ""){
      $('.active').removeClass('active');
      $('#input1').addClass('active size3');
    }

  } else if(sub_image_array.length === 3){

    $('.active').removeClass('active');

  }

// ---- 最初からカラムに値が入っている場合、最初にどのfile_fieldを表示するか ----



// ------ ここから画像をアップロードした時の「file_field」の挙動 ------

   $('.file-input').change(function(){

      sub_image_array.push('0');

      console.log(sub_image_array.length);

      $(this).parent().removeClass('active');

      if(sub_image_array.length == 1){
        nextFileFiled1();
      }else if(sub_image_array.length == 2){
        nextFileFiled2();
      }else{
        $(this).parent().removeClass('size1 size2 size3');
      }

    });

// ------ ここまでが画像をアップロードした時の「file_field」の挙動  ------



// ------ 画像を挿入した時に次に表示するファイルフィールドを指定する機能2つ ------

   function nextFileFiled1(){

    var allFields = $('.user-edit__contents__sub-image__container');

    var emptyField;

      $.each(allFields, function(index, field){

        console.log(field);

        var id = $(field).attr('class').split(" ")[0];

        if($(field).find('.file-input').val().length == 0 && $('#' + id).attr('data-image') == ''){
          emptyField = $(field);
          return false;
        }

      });

    emptyField.removeClass('size1 size2 size3');

    emptyField.addClass('active');

    emptyField.addClass('size2');

   }


   function nextFileFiled2(){

    var allFields = $('.user-edit__contents__sub-image__container');

    var emptyField;


      $.each(allFields, function(index, field){

        console.log(field);

        var id = $(field).attr('class').split(" ")[0];

        if($(field).find('.file-input').val().length == 0 && $('#' + id).attr('data-image') == ''){
          emptyField = $(field);
          return false;
        }

      });

    emptyField.removeClass('size1 size2 size3');

    emptyField.addClass('active');

    emptyField.addClass('size3');

   }

// ------ 画像を挿入した時に次に表示するファイルフィールドを指定する機能2つ ------



// ------ ここから画像をアップロードした時にプレビューを表示するための実装 ------

    $('#sub1').uploadThumbs({
      position : $('.user-edit__contents__sub-image__preview__field').eq(0),
    });

    $('#sub2').uploadThumbs({
      position : $('.user-edit__contents__sub-image__preview__field').eq(1),
    });

    $('#sub3').uploadThumbs({
      position : $('.user-edit__contents__sub-image__preview__field').eq(2),
    });

// ------ ここまでが画像をアップロードした時にプレビューを表示するための実装 ------



// -------- ここから「削除」ボタンを押した時の実装 -------

  $('.preview-delete').click(function(){

    if(sub_image_array.length === 1){

      $('.active').removeClass('active');

      $(this).parent().hide();

      if( $(this).attr('data-id') == "preview" ){
        $('.sub1').insertAfter($('.user-edit__contents__sub-image__preview__field')[0]);
        $('.sub2').insertAfter($('.user-edit__contents__sub-image__preview__field')[1]);
        $('.sub3').insertAfter($('.user-edit__contents__sub-image__preview__field')[2]);
        // 画像が全てなくなった時は、プレビュー要素の並びを1、2、3に戻している

       }else {
        $('.sub1').insertAfter($('.user-edit__contents__sub-image__preview__field')[0]);
        $('.sub2').insertAfter($('.user-edit__contents__sub-image__preview__field')[1]);
        $('.sub3').insertAfter($('.user-edit__contents__sub-image__preview__field')[2]);
        // 画像が全てなくなった時は、プレビュー要素の並びを1、2、3に戻している

        var imageNum = $(this).attr('data-delete');
        $('#' + imageNum).prop("checked", true);
        // 最初から表示されているプレビューを消した時、そのデータをカラムからも消すためのチェックを入れる

      }

      var previewClassName = $(this).parent().attr('class').split(" ")[0];
      // 「input1」「input2」「input3」などが入っている

      $('#input1').removeClass('size1 size2 size3');
      // 一応全てのfile_fieldから一旦全てのsizeクラスを消去している

      $('#input1').addClass('active size1');
      // 画像が全てなくなった時は、一番最初の#sub1のfile_fieldを表示している

      $('#' + previewClassName).find('.file-input').val('');
      //削除した時「input」の中身を空にしている

      $(this).parent().attr('data-image','');
      // data-imageの値も空にしている

      sub_image_array.pop();

    } else if(sub_image_array.length === 2){

      $('.active').removeClass('active');

      $(this).parent().hide();

      if( $(this).attr('data-id') == "preview" ){
        $(this).parent().insertAfter($('.user-edit__contents__sub-image__preview__field').eq(1));
        // 消したプレビューの表示場所を2番目の表示位置に回している
       }else {
        var dataId = $(this).attr('data-id');
        $('.' + dataId).insertAfter($('.user-edit__contents__sub-image__preview__field').eq(1));
        // 消したexisting_fieldの場所にあるはずだったプレビュー要素を2番目の表示位置に回している

        var imageNum = $(this).attr('data-delete');
        $('#' + imageNum).prop("checked", true);
        // 最初から表示されているプレビューを消した時、そのデータをカラムからも消すためのチェックを入れる

      }

      var previewClassName = $(this).parent().attr('class').split(" ")[0];
      // 「input1」「input2」「input3」などが入っている

      $('#' + previewClassName).removeClass('size1 size2 size3');

      $('#' + previewClassName).addClass('active size2');

      $('#' + previewClassName).find('.file-input').val('');
      //削除した時「input」の中身を空にしている

      $(this).parent().attr('data-image','');
      // data-imageの値も空にしている

      sub_image_array.pop();


    }else if(sub_image_array.length === 3){

      $('.active').removeClass('active');

      $(this).parent().hide();


      if( $(this).attr('data-id') == "preview" ){
        $(this).parent().insertAfter($('.user-edit__contents__sub-image__preview__field').eq(2));
        // 消したプレビューの表示場所を2番目の表示位置に回している
       }else {
        var dataId = $(this).attr('data-id');
        $('.' + dataId).insertAfter($('.user-edit__contents__sub-image__preview__field').eq(2));
        // 消したexisting_fieldの場所にあるはずだったプレビュー要素を2番目の表示位置に回している

        var imageNum = $(this).attr('data-delete');
        $('#' + imageNum).prop("checked", true);
        // 最初から表示されているプレビューを消した時、そのデータをカラムからも消すためのチェックを入れる

      }

      var previewClassName = $(this).parent().attr('class').split(" ")[0];
      // 「input1」「input2」「input3」などが入っている

      $('#' + previewClassName).removeClass('size1 size2 size3');

      $('#' + previewClassName).addClass('active size3');

      $('#' + previewClassName).find('.file-input').val('');
      //削除した時「input」の中身を空にしている

      $(this).parent().attr('data-image','');
      // data-imageの値も空にしている

      sub_image_array.pop();

    }

  });

// -------- ここまでが「削除」ボタンを押した時の実装 -------



});
