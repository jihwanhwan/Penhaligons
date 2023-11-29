$(document).ready(function(){

  $('#hamburger').click(function(){
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
});

  // 
  media();
  function media(){
    const ww = $(window).width();

    if(ww >= 960){
          // 배너 스와이퍼
    var swiper = new Swiper(".firstSwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });

  // sec-1 스와이퍼
    var swiper = new Swiper(".secondSwiper", {
      // slidesPerView: 4,
      // spaceBetween: 24,
      // slidesPerGroup:1,
      loop:true,
      speed : 1000,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },


      breakpoints:{
        1200:{
          slidesPerView: 4,
          spaceBetween: 24,
          slidesPerGroup:1,
        },
        960:{
          slidesPerView: 3,
          spaceBetween: 20,
          slidesPerGroup:1,
        },
      }
    });

          // sec-3 스와이퍼
          var swiper = new Swiper(".thirdSwiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup:1,
            loop:true,
            speed : 1000,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });

                // sec-5 스와이퍼 
      var swiper = new Swiper(".fourSwiper", {
        // slidesPerView: 2.5,
        // spaceBetween: 20,
        // slidesPerGroup:1,
        loop:true,
        speed : 1000,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        
        breakpoints:{
          1200:{
            slidesPerView: 2.5,
            spaceBetween: 20,
            slidesPerGroup:1,
          },

          960:{
            slidesPerView: 1.7,
            spaceBetween: 16,
            slidesPerGroup:1,
          },
        }
      });
    }else{
      
    }
  

  };








  $(window).scroll(function(){
    const sct = $(window).scrollTop();

    console.log(sct);
    if(sct >= 1000){
        $('.header-area').addClass('active')
        $('.header-area .header-logo').addClass('active')
        $('.header-area .header-menu .menu li').addClass('active')
        $('.header-area .header-right .menu li').addClass('active')

        $('.header-area #hamburger span').addClass('active')

        $('.sub-menu-box').mouseleave(function(){
          // 서브메뉴 박스 안보이게
          $(this).removeClass('active');
      
      
          // 헤더 색상 원래대로
          $('.header-area .header-logo').addClass('active');
          $('.header-area .header-menu .menu li').addClass('active');
          $('.header-area .header-right .menu li').addClass('active');
        }); 
      
    }else{

      $('.header-area').removeClass('active')
      $('.header-area .header-logo').removeClass('active')
      $('.header-area .header-menu .menu li').removeClass('active')
      $('.header-area .header-right .menu li').removeClass('active')

      $('.header-area #hamburger span').removeClass('active')


      $('.sub-menu-box').mouseleave(function(){
        // 서브메뉴 박스 안보이게
        $(this).removeClass('active');
    
    
        // 헤더 색상 원래대로
        $('.header-area .header-logo').removeClass('active');
        $('.header-area .header-menu .menu li').removeClass('active');
        $('.header-area .header-right .menu li').removeClass('active');
      }); 
    
    }

  });

  // 서브메뉴 연결
  $('.header-menu li').mouseenter(function(){
    let result = $(this).attr('data-alt');
    $('.sub-menu').removeClass('active');
    $(`#${result}`).addClass('active');

    // 서브메뉴 박스 보이게 처리
    $('.sub-menu-box').addClass('active');

    // 헤더 active
    $('.header-area .header-logo').addClass('active');
    $('.header-area .header-menu .menu li').addClass('active');
    $('.header-area .header-right .menu li').addClass('active');
  });

  
  $('.gifting').mouseenter(function(){
    $('.sub-menu-box').removeClass('active');
    $('.header-area .header-logo').removeClass('active');
    $('.header-area .header-menu .menu li').removeClass('active');
    $('.header-area .header-right .menu li').removeClass('active');
  });
    




      // sec-2 aos
      AOS.init({
        disable: window.innerWidth < 900
      });
      
      


      // sec-3 타이머
              // 디데이 날짜 설정 (년, 월(0부터 시작), 일, 시, 분, 초)
              const dDayDate = new Date(2024, 10, 14, 16, 59, 59).getTime();

              // 이 부분이 디데이의 날짜를 설정하는 부분
              // 이 부분에서 년도, 월, 일, 시간, 분, 초를 설정할 수 있음
      
              // new Date(2023, 0, 1, 0, 0, 0)은 2023년 1월 1일 00시 00분 00초
      
              // 만약 다른 디데이 날짜를 설정하려면 이 부분을 원하는 날짜와 시간으로 변경하면 됨. 예를 들어, 2023년 12월 31일 23시 59분 59초로 설정하려면 
              // const dDayDate = new Date(2023, 12, 31, 23, 59, 59).getTime();
              // 이렇게 변경
      
              const totalMilliseconds = dDayDate - new Date().getTime();
      
              function formatTime(time) {
                  return time < 10 ? '0' + time : time;
              }
              // 시간을 두자리 숫자로 설정하기
      
              function updateTimer() {
                  const currentDate = new Date().getTime();
                  const timeDifference = dDayDate - currentDate;
      
                  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                  const hours = formatTime(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                  const minutes = formatTime(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
                  const seconds = formatTime(Math.floor((timeDifference % (1000 * 60)) / 1000));
                  // Math.floor는 소수점을 날려서 정수만 표현함
      
                  $('#timer').html(`${days}Day ${hours}:${minutes}:${seconds}`);
                  // 타이머 문구 바꿔줌
      
                  // 디데이가 지났을 경우 D-Day입니다! 출력하기
                  if (timeDifference < 0) {
                      $('#timer').html('D-Day입니다!');
                      $('#progress-bar').css('width', '100%');
                  } else {
                      const progressPercentage = ((totalMilliseconds - timeDifference) / totalMilliseconds) * 100;
                      $('#progress-bar').css('width', `${progressPercentage}%`);
                  }        
              }
      
              // 초기화 및 1초마다 업데이트
              setInterval(updateTimer, 1000);
      
              // 페이지 로딩시 초기 업데이트
              updateTimer();


      // sec-4 
      
      $('.sec-4 .btn-box li').click(function(){
        let result = $(this).attr('data-alt');
        $(this).attr('data-alt')
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.sec-4 .box').removeClass('active');
        $(`#${result}`).addClass('active');
        $(`#${result}`).siblings().removeClass('active');
      });







    // 탑버튼
    const btn = $('.top-btn');
    $(window).scroll(function(){
      if($(window).scrollTop() > 300){
          btn.fadeIn();
      }else{
          btn.fadeOut();
      }
  });
  btn.on('click',function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop:0
    },100);
});

}); //end

