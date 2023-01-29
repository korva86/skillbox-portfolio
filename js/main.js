document.addEventListener("DOMContentLoaded", function () {
	const popupButtons = document.querySelectorAll(".button");
	const popupContainer = document.querySelector(".popup-container");

	popupButtons.forEach((el) => el.addEventListener('click', function () {
		popupContainer.style.display = "flex";
	}))

	popupContainer.addEventListener('click', function(event){
		if(event.target === popupContainer) {
			popupContainer.style.display = 'none';
		}
	});
})