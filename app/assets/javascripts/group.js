$(function() {
  console.log('unko');

  $('#country-select-field').change(function(){

    var selectedCountry = $('#country-select-field').val();

    console.log(selectedCountry);

    $('.active').attr('disabled','');

    $('.active').removeClass('active');

    $("#" + selectedCountry).addClass('active');

    $("#" + selectedCountry).removeAttr('disabled');

  });






  $('.region-select-field').change(function(){

    var selectedRegion = $('.region-select-field.active').val();

    console.log(selectedRegion);

  });


});


