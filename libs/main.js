$(document).ready(function(){
  $('.rev_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
  {
  		breakpoint: 850,
  		settings: {
  		infinite: true,
  		slidesToShow: 2,
  		slidesToScroll: 2,
  			}
},
{
  		breakpoint: 550,
  		settings: {
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  			}

  }
  ]
})

});
	