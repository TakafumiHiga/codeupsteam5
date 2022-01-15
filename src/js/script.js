jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $(".c-page-top");
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

  // //ドロワーメニュー
  // $('.navbar_toggle').on('click', function () {
  //   $(this).toggleClass('open');
  //   $('.menu').toggleClass('open');
  // });

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

jQuery(".p-header__drawer").on("click", function (e) {
  e.preventDefault();
  jQuery(".p-header__drawer").toggleClass("open");
  jQuery(".p-header__sp-nav").toggleClass("open");
  jQuery(".p-drawer-background").toggleClass("open");
  return false;
});

jQuery(".related-message").hover(function () {
  $(this).toggleClass("is-hover-bg");
  $(this).children(".p-related-message__title").toggleClass("is-hover-color");
  $(this).children(".p-related-message__text ").toggleClass("is-hover-color");
  $(this).find(".p-related-unit__date").toggleClass("is-hover-color");
});

//swiper

//メイン
var slider = new Swiper(".js-gallery-slider", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 6, //スライドの枚数と同じ値を指定
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

//サムネイル
var thumbs = new Swiper(".js-gallery-thumbs", {
  slidesPerView: "auto",
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
});

//4系～
//メインとサムネイルを紐づける
slider.controller.control = thumbs;
thumbs.controller.control = slider;

const swiperWorks = new Swiper('.swiperWorks', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  centeredSlides: true,
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });