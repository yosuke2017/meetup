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
     var message_image = message.image ? '<div class="message__contents__talking__messages-space__image">'
                 + '<div id="right-content-image">'
                 + '<image src= "' + message.image + '" >'
                 + '</div>'
                 + '</div>' : "";

     var message_body = message.body ? '<div class="message__contents__talking__messages-space__content">'
                 +'<p class="right">'
                 + message.body
                 +'</p>'
                 +'</div>' : "";

        var html = message_body
                 + message_image ;
                  return html;
  }



  function renderYourMessageHTML(message){
     var message_image = message.image ? '<div class="message__contents__talking__messages-space__image">'
                 + '<div id="left-content-image">'
                 + '<image src= "' + message.image + '" >'
                 + '</div>'
                 + '</div>' : "";

     var message_body = message.body ? '<div class="message__contents__talking__messages-space__content">'
                 +'<p class="left">'
                 + message.body
                 +'</p>'
                 +'</div>' : "";

        var html ='<% if message.user.id == current_user.id %>'
                 + message_body
                 +'<% end %>'
                 + message_image ;
                  return html;
  }



  function autoScroll(){
    $('.message__contents__talking').animate({
      scrollTop: $('.message__contents__talking')[0].scrollHeight}, 4000);
  }



  // setInterval(function(){
  //   if(window.location.href.indexOf("message") === -1){
  //     return;
  //   }
  //   var $messages = $(".content__right__under__message__content").last();
  //   var id = $messages.data("message-id");
  //   console.log(id)
  //   $.ajax({
  //     type: 'GET',
  //     url: window.location.href,
  //     dataType: 'json',
  //   })
  //   .done(function(data){
  //    $.each(data, function(index, message){
  //      if(message.id > id){
  //       console.log("sss");
  //       $('#message_area').append(renderMessageHTML(message));
  //       autoScroll();
  //      }
  //    });
  //   }).fail(function(data){
  //     alert("エラー");
  //   })

  // }, 4000);
});
