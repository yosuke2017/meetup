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
      $('#initial-state').addClass('active');
    }else if(selectedCountry === "otherwise"){
      $('#initial-state').addClass('active');
    }

  });

// ------ ここまで'国'が選択された時の'地域選択リスト'などの挙動 ------



// ------ここから下がエラーメッセージの実装------

  $('#group_form').submit(function(){
    var num = 0;
    var nameForm = $('.group-new__form-name').val();
    var outlineForm = $('.group-new__form-outline').val();
    var countryForm = $('#country-select-field').val();

    if(nameForm === ""){
      $('.group-new__form-name').next().text('入力してください');
      num = num + 1;
    }else{
      $('.group-new__form-name').next().text('');
    }

    if(outlineForm === ""){
      $('.group-new__form-outline').next().text('入力してください');
      num = num + 1;
    }else{
      $('.group-new__form-outline').next().text('');
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


