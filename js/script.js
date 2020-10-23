let menuToggle = document.querySelector('#menu-toggle'),
	menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', (e) => {
	e.preventDefault()
	menu.classList.toggle('visible')
})
console.log('Pikadu!!!!!!!!!!!!!!!')
