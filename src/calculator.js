function add(number1, number2){
	return number1 + number2;
}

function addService(){ 
  var num1 = Number(document.getElementById("inputNum1").value);
  var num2 = Number(document.getElementById("inputNum2").value); 
  document.getElementById('result').innerHTML=add(num1, num2);
}
function subtract(number1, number2){
	return number1 - number2;
}


function subService(){
	var num1 = Number(document.getElementById("inputNum1").value);
	var num2 = Number(document.getElementById("inputNum2").value);
	document.getElementById('result').innerHTML=subtract(num1, num2);
}

function divide(number1, number2){
	return number1 / number2;
}

function divService(){
	var num1 = Number(document.getElementById("inputNum1").value);
	var num2 = Number(document.getElementById("inputNum2").value);
	document.getElementById('result').innerHTML=divide(num1, num2);
}