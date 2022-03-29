const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement; //ensures that document. returns a value
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number, num2: number) { // setting types
	return num1 + num2;
}

button.addEventListener('click', function () {
	console.log(add(+input1.value, +input2.value));
});
