var numberButtons = document.querySelectorAll(".number"),
	operationButtons = document.querySelectorAll(".operation"),
	clearButtons = document.querySelectorAll(".clear"),
	decimalButton = document.getElementById("decimal"),
	display = document.getElementById("display"),
	currentNumber = 0,
	newNumber = false,
	lastOperation = "";

for (var i = 0; i < numberButtons.length; i++) {
	var numberButton = numberButtons[i];
	numberButton.addEventListener("click", function(e){
		number(e.target.textContent);
	});
};

for (var i = 0; i < operationButtons.length; i++) {
	var operationButton = operationButtons[i];
	operationButton.addEventListener("click", function(e){
		operation(e.target.textContent);
	});
};

decimalButton.addEventListener("click", function(e){
	decimal(e.target.textContent);
});

for (var i = 0; i < clearButtons.length; i++) {
	var clearButton = clearButtons[i];
	clearButton.addEventListener("click", function(e){
		clear(e.target.id);
	});
};



function number(numberButton){
	if (newNumber) {
		display.value = numberButton;
		newNumber = false;
	} else {
		if (display.value === "0") {
			display.value = numberButton;
		} else {
			display.value += numberButton;
		};
	};
};

function operation(op){
	var currentOperation = display.value;

	if (newNumber && lastOperation !== "=") {
		display.value = currentNumber;
	} else {
		newNumber = true;
		if (lastOperation === "+") {
			currentNumber += parseFloat(currentOperation);
		} else if (lastOperation === "-") {
			currentNumber -= parseFloat(currentOperation);
		} else if (lastOperation === "*") {
			currentNumber *= parseFloat(currentOperation);
		} else if (lastOperation === "/") {
			currentNumber /= parseFloat(currentOperation);
		} else {
			currentNumber = parseFloat(currentOperation);
		};

		display.value = currentNumber;
		lastOperation = op;
	};	
};

function decimal(arg){
	var currentDecimal = display.value;

	if (newNumber) {
		currentDecimal = "0.";
		newNumber = false;
	} else {
		if (currentDecimal.indexOf(".") === -1) {
			currentDecimal += ".";
		};
	};

	display.value = currentDecimal;
};

function clear(id) {
	if (id === "ce") {
		display.value = "0";
		newNumber = true;
	} else if (id === "c") {
		display.value = "0";
		currentNumber = 0,
		newNumber = false,
		lastOperation = "";
	} else if (id === "backspace") {
		if (!newNumber) {
			var currentValue = display.value;
			display.value = currentValue.substr(0, currentValue.length - 1);
		};
	};
};
