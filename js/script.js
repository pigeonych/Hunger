"use strict";

document.addEventListener("DOMContentLoaded", () => {
	const popupTrigger = document.querySelectorAll("[data-modal]"),
		popup = document.querySelector(".popup"),
		popupBody = popup.querySelector(".popup__body"),
		popupClose = popup.querySelector("[data-close]");

	function togglePopup() {
		popup.classList.toggle("open");
	}
	popupTrigger.forEach(item => {
		item.addEventListener("click", (e) => {
			e.preventDefault();
			togglePopup();
		});
	});

	popupClose.addEventListener("click", (e) => {
		e.preventDefault();
		togglePopup();
	});

	popupBody.addEventListener("click", (e) => {
		if (e.target === popupBody) {
			togglePopup();
		}
	});

	document.addEventListener("keydown", (e) => {
		if (e.code === "Escape" && popup.classList.contains("open")) {
			togglePopup();
		}
	});
});