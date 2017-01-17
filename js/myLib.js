define(function(){
	var node = document.createElement("input")
	node.type = "button";
	node.value ="测试myLib.js";
	var doSomething = function(){
		document.getElementsByTagName("body")[0].appendChild(node);
	};
	return {
		doSomething: doSomething
	};
})