function add(number1, number2){
	return number1 + number2;
}

function addService(){ 
  var num1 = Number(document.getElementById("inputNum1").value);
  var num2 = Number(document.getElementById("inputNum2").value); 
  document.getElementById('result').innerHTML=add(num1, num2);
}