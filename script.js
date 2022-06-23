const faq = document.querySelectorAll(".faq_qa");

faq.forEach(targetDetail => {
	targetDetail.addEventListener("click", () => {
		const arrow = targetDetail.querySelector("#arrowImg");
		faq.forEach(detail => {
			if (detail !== targetDetail) {
				detail.removeAttribute("open");
				arrow.classList.remove("rotate");
			}
			if (!targetDetail.open) {
				arrow.classList.add("rotate");
			}
		});
	});
});
