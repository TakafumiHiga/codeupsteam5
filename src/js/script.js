jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $(".page-top");
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
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  // ヘッダー
  $(window).on("scroll", function () {
    if ($(".slider1").height() < $(this).scrollTop()) {
      $(".header").css("background", "rgba(17,17,17,1)");
    } else {
      $(".header").css("background", "rgba(17,17,17,0.5)");
    }
  });

  //ドロワーメニュー
  $(".navbar_toggle").on("click", function () {
    $(this).toggleClass("open");
    $(".menu").toggleClass("open");
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });
});

//swiper

//メイン
var slider = new Swiper(".gallery-slider", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 8, //スライドの枚数と同じ値を指定
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//サムネイル
var thumbs = new Swiper(".gallery-thumbs", {
  slidesPerView: 1.5,

  breakpoints: {
    768: {
      slidesPerView: 5.5,
    },
  },
  spaceBetween: 8,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
});

//4系～
//メインとサムネイルを紐づける
slider.controller.control = thumbs;
thumbs.controller.control = slider;
