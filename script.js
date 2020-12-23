$(function(){
 

    /* ページ内リンク */
    $('header a').click(function(){
      let id = $(this).attr('href');
      let postion = $(id).offset().top;
      if(window.innerWidth < 560){
        postion -= 50;
      }
      $('body,html').animate({scrollTop:postion},500)
    });
  
    /* ヘッダーハンバーガーメニュー */
    $('.fa-bars').click(function(){
      $(this).prev('ul').slideToggle();
    });
  
    /* タイピング文字 */
    $(".typed").typed({
      strings:["Welcome to My Portfolio."],
      typeSpeed:100,
      startDelay:1000,
      showCursor:false,
    });
  
    /* ポートフォリオ選択時イベント */
    $(".works-content-img").hover(function(){
      $(this).find(".works-content-cover").fadeIn();
    },function(){
      $(this).find(".works-content-cover").fadeOut();
    });
  
    /* フェイドイン */
    $(window).scroll(function(){
      $('.fadein').each(function(){
        var elemPos=$(this).offset().top;
        var scroll=$(window).scrollTop();
        var windowHeight=$(window).height();
        if(scroll > elemPos - windowHeight + 200){
          $(this).addClass('scrollin');
        }
      });
    });

    /* モーダル表示 */
    $(".works-content-img").click(function(){
      $(".modal-bg").show();
      $(".modal").show();
      let getImg = $(this).find('img').clone();
      $(".modal-img").append(getImg);
    });
  
    /* モーダル非表示 */
    $('.modal-bg').click(function(){
      $(".modal-bg").hide();
      $(".modal").hide();
      $(".modal-img").find('img').remove();
    });
    $('.close-btn').click(function(){
      $(".modal-bg").hide();
      $(".modal").hide();
      $(".modal-img").find('img').remove();
    });

    /* トップへ戻るボタン */
    $('header h1,.return-button').click(function(){
      $('body,html').animate({scrollTop:0},500);
    });

  });