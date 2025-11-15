let x = 42;
function big() {
	function sub1() {
		let x = 7;
		sub2();
	}
	function sub2() {
		x = 100;
	}
	sub1();
	console.log("x in big(): ", x);
}

big();
console.log("x in global scope: ", x);
