function playAudio() {
    let x = document.getElementById("myAudio");
    x.play();
}
function pauseAudio() {
    let x = document.getElementById("myAudio");
    x.pause();
}       
</script>
<body>
<h3>Controlando audio com JS</h3>
<audio id="myAudio" controls>
    <source src="smurf.mp3" type="audio/mpeg">
    Seu navegador não possui suporte ao elemento audio
</audio><br><br>
<button onclick="playAudio()">Play</button>
<button onclick="pauseAudio()">Pause</button>
</body>
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});