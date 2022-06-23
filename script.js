const faqQa = Array.from(document.querySelectorAll(".faq_qa"));

console.log(faqQa);

faqQa.forEach(faq => {
	faq.addEventListener("click", e => {
		faq.children[1].classList.toggle("show");
		const test = faq.children[0];
		const arrow = test.querySelector("#arrowImg");
		if (faq.children[1].classList.contains("show")) {
			arrow.style.transform = `rotate(180deg)`;
		} else {
			arrow.style.transform = `rotate(0deg)`;
		}
	});
});
