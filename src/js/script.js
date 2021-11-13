
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.page-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // ヘッダー
  $(window).on('scroll', function () {
    if ($('.slider1').height() < $(this).scrollTop()) {
      $('.header').css('background', 'rgba(17,17,17,1)');
    } else {
      $('.header').css('background', 'rgba(17,17,17,0.5)');
    }
  });

  //セレクタ(js-header-height)部分にpaddingが聞いているので、メソッドにinnerHeightを使っています。
  $(window).on('scroll', function () {
    if ($('.js-header-height').innerHeight() < $(this).scrollTop()){
         $('.l-header').css('background', 'rgba(17,17,17,1)');
    } else {
      $('.l-header').css('background', 'rgba(17,17,17,0.5)');
    }
  });
  
  // $(window).on('scroll', function() {
  //   // let ans = $('.c-underlayer-top').height();
  //   if($('c-underlayer-top').height() < $(this).scrollTop()){
  //     alert('取得できてます。');
  //   }
  // });

  // $(window).on('scroll', function() {
  //   if($('.c-underlayer-top').height() < $(this).scrollTop()) {
  //     $('.l-header').css('background', 'rgba(17,17,17,1)');
  //   }else{
  //     $('l-header').css('background', 'rgba(17,17,17,0.5');
  //   }
  // });


  // //ドロワーメニュー
  // $('.navbar_toggle').on('click', function () {
  //   $(this).toggleClass('open');
  //   $('.menu').toggleClass('open');
  // });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });
});



jQuery('.p-header__drawer').on('click', function (e) {
  e.preventDefault();
  jQuery('.p-header__drawer').toggleClass('open');
  jQuery('.p-header__sp-nav').toggleClass('open');
  jQuery('.p-drawer-background').toggleClass('open');
  return false;
});


//ドロワーメニューのaタグをクリックすると、ドロワメニューが左にはける。
jQuery('.p-sp-nav__item a').on('click' ,function(e){
  e.preventDefault();
  jQuery('.p-header__drawer').removeClass('open');
  jQuery('.p-header__sp-nav').removeClass('open');
  jQuery('.p-drawer-background').removeClass('open');
  return false;
})



jQuery('.related-message').hover(function(){
  $(this).toggleClass("is-hover-bg");
  $(this).children(".p-related-message__title").toggleClass("is-hover-color");
  $(this).children(".p-related-message__text ").toggleClass("is-hover-color");
  $(this).find(".p-related-unit__date").toggleClass("is-hover-color");
});



