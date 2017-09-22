$(function(){
  $('#form').on("submit", function(e){
    e.preventDefault();
    var $this = $(this);
    var formData = new FormData(this);
    var $text = $this.find('#message-form').val();
    var $text_field = $(this).find('#message-form');
    $text_field.val('');
    $.ajax({
      url: 'messages',
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    }).done(function(data){
      if($text === ""){
        console.log('無記入やで');
        return ;
      }
      $('#message-area').append(renderMyMessageHTML(data));
      $('.message__contents__talking__messages-space').animate({
        scrollTop: $('.message__contents__talking__messages-space')[0].scrollHeight}, 'fast');
    }).fail(function(){
      alert('メッセージを入力してください');
    });
    this.reset();
    return false;
  });



// -------- ここからカメラのマークにマウスオーバーした時の挙動 --------

  $('.fa-camera').hover(function(){
    setTimeout(function(){
      $('.image-upload-balloon').fadeIn();
    }, 500);
  }, function(){
    $('.image-upload-balloon').fadeOut();
  });

// -------- ここまでがカメラのマークにマウスオーバーした時の挙動 --------



// --------- ここからがページが読み込まれた時にトーク画面が自動で一番下までスクロールされるための実装 --------

  $('.message').ready(function(){

    if(window.location.href.indexOf("message") === -1){
        return;
      }

    $('.message__contents__talking__messages-space').scrollTop($(".message__contents__talking__messages-space")[0].scrollHeight);

  });

  // --------- ここまでがページが読み込まれた時にトーク画面が自動で一番下までスクロールされるための実装 --------



// ここからが画像をアップロードした矢先にDBに保存されてビューに反映される機能

  $('.image-upload').on('change', function(){
    $.ajax({
      url: 'messages',
      type: 'POST',
      data: new FormData($('#form')[0]),
      dataType: 'json',
      cache: false,
      processData: false,
      contentType: false
    }).done(function(data){
      $('#message-area').append(renderMyMessageHTML(data));
      $('.message__contents__talking__messages-space').animate({
        scrollTop: $('.message__contents__talking__messages-space')[0].scrollHeight}, 'fast');
      $('.image-upload').val('');
    }).fail(function(){
      alert('画像をアップロードできませんでした');
    });
  });

// ここまでが画像をアップロードした矢先にDBに保存されてビューに反映される機能



  function renderMyMessageHTML(message){
     var message_image = message.image ? '<div class="message__contents__talking__messages-space__content" data-message-id="' + message.id + '">'
                 + '<div class="message__contents__talking__messages-space__content__image">'
                 + '<div id="right-content-image">'
                 + '<image src= "' + message.image + '" >'
                 + '</div>'
                 + '</div>'
                 + '</div>' : "";

     var message_body = message.body ? '<div class="message__contents__talking__messages-space__content" data-message-id="' + message.id + '">'
                 +'<div class="message__contents__talking__messages-space__content__body">'
                 +'<p class="right">'
                 + message.body
                 +'</p>'
                 +'</div>'
                 +'</div>' : "";

        var html = message_body
                 + message_image ;
                  return html;
  }



  function renderYourMessageHTML(message){
     var message_image = message.image ? '<div class="message__contents__talking__messages-space__content" data-message-id="' + message.id + '">'
                 + '<div class="message__contents__talking__messages-space__content__image">'
                 + '<div id="left-content-image">'
                 + '<div class="messge-user-avatar" style="background-image: url(' + message.main_image + ')", id: "user-avatar" >'
                 + '<image src= "' + message.image + '" >'
                 + '</div>'
                 + '</div>'
                 + '</div>' : "";

     var message_body = message.body ? '<div class="message__contents__talking__messages-space__content" data-message-id="' + message.id + '">'
                 +'<div class="message__contents__talking__messages-space__content__body">'
                 +'<p class="left">'
                 + '<div class="messge-user-avatar" style="background-image: url(' + message.main_image + ')", id: "user-avatar" >'
                 + message.body
                 +'</p>'
                 +'</div>'
                 +'</div>' : "";

        var html = message_body
                 + message_image ;
                  return html;
  }



  function autoScroll(){
    console.log('u');
    $('.message__contents__talking__messages-space').animate({
      scrollTop: $('.message__contents__talking__messages-space')[0].scrollHeight}, 4000);
  }



  setInterval(function(){
    if(window.location.href.indexOf("message") === -1){
      return;
    }
    var $messages = $(".message__contents__talking__messages-space__content").last();
    var id = $messages.data("message-id");
    console.log("最後のメッセージのidは" + id);
    $.ajax({
      type: 'GET',
      url: window.location.href,
      dataType: 'json',
    })
    .done(function(data){
     $.each(data, function(index, message){
       if(message.id > id){
        console.log("更新!");
        $('#message-area').append(renderYourMessageHTML(message));
        autoScroll();
       }
     });
    }).fail(function(data){
      console.log('エラー！！');
    })

  }, 4000);



});
