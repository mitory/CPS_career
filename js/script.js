$(document).ready(function(){
	$('.specials__items').slick({
		dots: false,
		slidesToShow: 3,
		speed: 350,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});


$(document).ready(function(){
	$('.for-students__paths').slick({
		dots: false,
		arrows: false,
		slidesToShow: 3,
		speed: 350,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});

let isVacancy = false

function set_vacancy(){
	console.log('yes')
	if(!isVacancy){
	$(document).ready(function(){
	$('.for-professional__paths').slick({
		dots: false,
		arrows: false,
		slidesToShow: 3,
		speed: 350,
		responsive:[
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});
isVacancy = true
}
}
