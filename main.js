

var calvulator ={
add:function(num1, num2) {
	return num1 + num2
},




subtract:function(num1, num2) {
	return num1 - num2
},




multiply:function(num1, num2) {
	return num1 * num2
},




divide:function(num1, num2) {
	return num1 / num2
},


exp:function(num1, num2) {
	var result = 1;
	for (var i = 0; i ,num2; i++) {
		result= result * num1;
	}
	return result;
}
}
