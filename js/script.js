$(function(){
    $('.p1').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
        arrows:true,
          prevArrow: '<i class="fas fa-angle-left prv_arrl"></i>',
        nextArrow: '<i class="fas fa-angle-right nxt_arrr"></i>',
});
	
        $('.banner_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
        arrows:true,
          prevArrow: '<i class="fas fa-angle-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-angle-right nxt_arr"></i>',
    
    });
    
});


