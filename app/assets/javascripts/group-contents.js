$(function(){


// ------ ここからがそれぞれのグループのhover時の挙動 ------

  $('.group__each-content').hover(function(){
    $(this).children('.group__each-content__hide').fadeIn(500);

      // var Name = $(this).attr('data-name');
      // var Outline = $(this).attr('data-outline');
      // var CountryCode = $(this).attr('data-country');
      // var RegionCode = $(this).attr('data-region');
      // var CreatedAt = $(this).attr('data-date');
      // console.log(Name);
      // console.log(Outline);
      // console.log(CountryCode);
      // console.log(RegionCode);
      // console.log(CreatedAt);

    // $(this).children('.group__each-content__date').slideToggle();
    // $(this).children('.group__each-content__name').slideToggle();

  },function(){
    $(this).children('.group__each-content__hide').fadeOut(500);
  });

// ------ ここまでがそれぞれのグループのhover時の挙動 ------




  // ------ ここから 国 を選択した時の挙動 ------

  $('#country-select-field').change(function(){

    var selectedCountry = $('#country-select-field').val();

    $('.group__each-content').fadeOut();

    countrySelect();

    if(selectedCountry === ""){
      $('.group__each-content').fadeIn(700);
    }

  });

  // ------ ここまでが 国 を選択した時の挙動 ------




  // ------ ここからが 地域 を選択した時の挙動 ------

  $('.region-select-field').change(function(){

    var selectedRegion = $(this).val();

    $('.group__each-content').fadeOut();

    $.each($('.group__each-content'), function(){

      var eachRegion = $(this).attr('data-region');

      if(eachRegion === selectedRegion){
        $(this).fadeIn(700);
      }
    });

    if(selectedRegion === ""){

      var selectedCountry = $('#country-select-field').val();

      countrySelect();

    }
  });

  // ------ ここまでが 地域 を選択した時の挙動 ------




  function countrySelect(){

    var selectedCountry = $('#country-select-field').val();

    $.each($('.group__each-content'), function(){

      console.log('unko');

      var eachCountry = $(this).attr('data-country');

      if(eachCountry === selectedCountry){
        $(this).fadeIn(700);
      }
    });
  }

});

