(function($){
  function init(){
    $('.wow').each(function(){
      $(this).css('visibility','hidden');
      $(this).css('animation-name','none');
    });
  }

  function wowing(){
    var st=window.pageYOffset
          ||document.documentElement.scrollTop
          ||document.body.scrollTop
          ||0;
    var ct=document.documentElement.clientHeight;
    $('.wow').each(function(){
      if($(this).hasClass('animated')) return;
      var myTop;
      var myOffset=$(this).offset();
      myTop=myOffset.top;
      if(st+ct>=myTop){
        $(this).addClass('animated');
        $(this).css('visibility','visible');
        $(this).css('animation-name','');
      }
    });
  }
  init();
  wowing();

  $(window).on('scroll',wowing);

})(jQuery);
