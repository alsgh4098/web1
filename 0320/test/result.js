var result = "";

function func(){
	result += "1";
}
func();
var func = function(){
	result += "2";
}
func();
function func(){
	result += "3";
}
func();
console.log(result);

// 결과는 322
// 함수 hoisting에 의해서
// 맨 위에 func()가 호출될때 맨 밑에 선언된 func()가 맨 위로 올라간다.
// var func = function(){}는 함수의 선언이 아니라 함수를 정의하고 변수에 담은것이기 때문에
// hoisting되지 않는다.


// 결과적으로 아래와 같은 순서로 작동하기 때문에
// 322라는 결과가 나오게 된다.

//var result = "";
//
//function func(){
//	result += "1";
//}
//function func(){
//	result += "3";
//}
//func();
//var func = function(){
//	result += "2";
//}
//func();
//func();
//alert(result);

var won1 = '이것은 1000원';
var won2 = '1000원';
console.log(parseInt(won1)+2000);
console.log(parseInt(won2)+2000);
// 결과는 NaN과 3000
// parseInt함수는 문자형 숫자로 시작하는 값을 받아야하고 
// 문자형 숫자뒤에 숫자가 아닌 값이 나오기 전까지 입력받고 숫자로 변환한다.

var a;
var b = 0;
var c = null;
var d = "";
console.log(Boolean(a));
console.log(Boolean(b));
console.log(Boolean(c));
console.log(Boolean(d));

var cb = cal(10,2);
console.log(cb("+"));
console.log(cb("-"));
console.log(cb("*"));
console.log(cb("/"));

function cal(num1,num2){
	
	return function(string){
		if(string=="+"){
			return num1+num2;
		}
		if(string=="-"){
			return num1-num2;
		}
		if(string=="*"){
			return num1*num2;
		}
		if(string=="/"){
			return num1/num2;
		}
	}

	
};

var sum = 0;
for (var k = 0; k < 5; k++) {
	sum += k;
}

