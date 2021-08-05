document.querySelector('#capture').addEventListener("click", () => {
	$('.ui.basic.modal').modal('show');
	save2img()
	document.querySelector('.modal img')
})

console.log('start')

document.querySelector('main').addEventListener('wheel', function(e) {
	if (e.wheelDelta === 120) {
		R += 10;
	}
	else {
		if (R > 10)
		R -= 10;
	}
});