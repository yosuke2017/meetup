$(function(){


// ------ ここからがそれぞれのグループのhover時の挙動 ------

  $('.appeal__each-content').hover(function(){
    $(this).children('.appeal__each-content__hide').fadeIn(400);

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

    // $(this).children('.appeal__each-content__date').slideToggle();
    // $(this).children('.appeal__each-content__name').slideToggle();

  },function(){
    $(this).children('.appeal__each-content__hide').fadeOut(400);
  });

// ------ ここまでがそれぞれのグループのhover時の挙動 ------




// ------ ここからトップ画面のそれぞれのグループ要素の表示の挙動 ------

$('.appeal__each-content').on('inview', function(){
  $(this).animate({
    'opacity':'1'
  }, 100)
});

// ------ ここまでトップ画面のそれぞれのグループ要素の表示の挙動 ------





  // ------ ここから 国 を選択した時の挙動 ------

  $('#country-select-field').change(function(){

    var selectedCountry = $('#country-select-field').val();

    $('.appeal__each-content').fadeOut();

    countrySelect();

    if(selectedCountry === ""){
      $('.appeal__each-content').fadeIn(700);
    }

  });

  // ------ ここまでが 国 を選択した時の挙動 ------




  // ------ ここからが 地域 を選択した時の挙動 ------

  $('.region-select-field').change(function(){

    var selectedRegion = $(this).val();

    $('.appeal__each-content').fadeOut();

    $.each($('.appeal__each-content'), function(){

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





// ------ ここから画面TOPへ戻るボタンの実装 ------

  var showFlag = false;
  var topBtn = $('#page-top');
  topBtn.css('bottom', '-100px');
  var showFlag = false;
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      if (showFlag == false) {
          showFlag = true;
          topBtn.stop().animate({'bottom' : '20px'}, 350);
      }
    } else {
      if (showFlag) {
          showFlag = false;
          topBtn.stop().animate({'bottom' : '-100px'}, 350);
      }
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 300);
    return false;
  });

// ------ ここまでが画面TOPへ戻るボタンの実装 ------





  function countrySelect(){

    var selectedCountry = $('#country-select-field').val();

    $.each($('.appeal__each-content'), function(){

      console.log('unko');

      var eachCountry = $(this).attr('data-country');

      if(eachCountry === selectedCountry){
        $(this).fadeIn(700);
      }
    });
  }

});

