$(function() {

  // ------ ここから'国'が選択された時の'地域選択リスト'などの挙動 ------

  $('#country-select-field').change(function(){

    var selectedCountry = $('#country-select-field').val();

    console.log(selectedCountry);

    $('.active').attr('disabled','');

    $('.active').removeClass('active');

    $("#" + selectedCountry).addClass('active');

    $("#" + selectedCountry).removeAttr('disabled');

    if(selectedCountry === ""){
      $('.region-angle').css('display', 'none');
      $('#initial-state').addClass('active');
    }else if(selectedCountry === "otherwise"){
      $('#initial-state').addClass('active');
    }else{
      $('.region-angle').css('display', 'block');
    }

  });

// ------ ここまで'国'が選択された時の'地域選択リスト'などの挙動 ------




// ------ここから下がエラーメッセージの実装------

  $('#appeal_form').submit(function(){
    var num = 0;
    var nameForm = $('.appeal-new__form-name').val();
    var outlineForm = $('.appeal-new__form-outline').val();
    var countryForm = $('#country-select-field').val();

    if(nameForm === ""){
      $('.appeal-new__form-name').next().text('入力してください');
      num = num + 1;
    }else{
      $('.appeal-new__form-name').next().text('');
    }

    if(outlineForm === ""){
      $('.appeal-new__form-outline').next().text('入力してください');
      num = num + 1;
    }else{
      $('.appeal-new__form-outline').next().text('');
    }

    if(countryForm === ""){
      $('#under-country-select-message').text('選んでください');
      num = num + 1;
    }else{
      $('#under-country-select-message').text('');
    }

    if(num >= 1){
      return false;
    }
  });

//   ------ここまでがエラーメッセージの実装------








  $('.region-select-field').change(function(){

    var selectedRegion = $('.region-select-field.active').val();

    console.log(selectedRegion);

  });


});


