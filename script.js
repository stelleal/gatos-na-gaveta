const imgsCat = document.querySelectorAll('.panel');

function activePanel() {
	imgsCat.forEach((img) => {
		img.classList.remove('active');
	});
	this.classList.add('active');
}

imgsCat.forEach((img) => {
	img.addEventListener('click', activePanel);
});
