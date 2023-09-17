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

document.querySelector(".buttonclick").addEventListener("click", 
function(e){

	const name = document.getElementById('name').value;
	const email = document.getElementById('emailMethodInput').value;
	const tel = document.getElementById('telMethodInput').value;
	const text = document.getElementById('aboutPerson').value;

	alert(name)

	e.preventDefault();
})


function changeMethod() {
	if(document.getElementById('emailMethod').checked) {
		document.getElementById('emailMethodInputBlock').classList.remove('d-none');
		document.getElementById('telMethodInputBlock').classList.add('d-none');
	}else if(document.getElementById('phoneMethod').checked) {
		document.getElementById('emailMethodInputBlock').classList.add('d-none');
		document.getElementById('telMethodInputBlock').classList.remove('d-none');
	}
}

