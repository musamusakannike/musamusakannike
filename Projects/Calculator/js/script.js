let currentInput = "";
let result;
let clearBtn = document.querySelector("body > main > div > div.special > button.symbol.btn.btn-danger");

function clear() {
	currentInput = '';
	document.getElementById('result').value = currentInput;
}

function appendNum(num) {
	currentInput += num;
	document.getElementById('result').value = currentInput;
}

function appendOperation(operator) {
	currentInput += operator;
	document.getElementById('result').value = currentInput;
}

function calculate() {
	result =eval(currentInput);
	document.getElementById('result').value = result;
	currentInput = "";
}

$(document).ready(function () {
	$('.btn-danger').click(function () {
		clear();
	});
});