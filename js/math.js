define(["myLib"],function(myLib){
	
	var add = function(x,y){
		return x+y;
	}

	function foo(){
		myLib.doSomething();
	}

	return {
		add: add,
		foo: foo
	};
});