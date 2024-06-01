// 
var mixer = mixitup('.project-img', {
    selectors: {
        target: '.mixit_item'
    },
    animation: {
        duration: 300
    }
  });
  $(function(){
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'albumLabel':"Image %1 of %2",
      'fitImagesInViewport':true,
      'imageFadeDuration':500,
      'showImageNumberLabel':true,

    })
    
    //counter up
  $('.counter').counterUp({
    delay: 10,
    time: 2000
});

$('.xyz').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
		

});
//slick

