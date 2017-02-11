
var arr = [];

for (var i = 0; i < 5; i++) {

arr.push(prompt("введите имя", ''));

} 

var checkName = prompt("введите логин: ", '');

function check(){

	for (var item in arr) {

		if (arr[item] == checkName){

			return true;

		}

	}
	
	return false;
}


if (check()) {

	alert(checkName + ', вы успешно вошли')

} else{

	alert('sorry, user ' + checkName + ' not in database');
}