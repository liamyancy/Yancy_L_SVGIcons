(() => {

	console.log("some message - from JavaScript");
	
	const	svgImage1 = document.querySelector('#svg-img1'),
			svgImage2 = document.querySelector('#svg-img2'),
			svgImage3 = document.querySelector('#svg-img3'),
			svgImage4 = document.querySelector('#svg-img4'),
			svgImage5 = document.querySelector('#svg-img5'),
			svgImage6 = document.querySelector('#svg-img6'),
			svgImage7 = document.querySelector('#svg-img7'),
			svgImage8 = document.querySelector('#svg-img8'),
			svgImage9 = document.querySelector('#svg-img9'),
			svgImage10 = document.querySelector('#svg-img10');

	function logoSVG() {
		this.classList.toggle("selected");
	}

	svgImage1.addEventListener("click", logoSVG);
	svgImage2.addEventListener("click", logoSVG);
	svgImage3.addEventListener("click", logoSVG);
	svgImage4.addEventListener("click", logoSVG);
	svgImage5.addEventListener("click", logoSVG);
	svgImage6.addEventListener("click", logoSVG);
	svgImage7.addEventListener("click", logoSVG);
	svgImage8.addEventListener("click", logoSVG);
	svgImage9.addEventListener("click", logoSVG);
	svgImage10.addEventListener("click", logoSVG);

})();
