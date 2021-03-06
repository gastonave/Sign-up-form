// JavaScript Document

const form = document.querySelector('.form-container');
const inputs = document.querySelectorAll('.form-input');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	inputs.forEach((input) => {
		if (!input.value) {
			input.parentElement.classList.add('error');
		} else {
			input.parentElement.classList.remove('error');
		}
	})
});
