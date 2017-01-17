function destroy(arr){
	var removeArgs = Array.prototype.slice.call(arguments,1);
	
	function confirm(element){
		return removeArgs.indexOf(element) < 0;
	}

	return arr.filter(confirm);
}
var arr = destroy([1,2,3,4,5,2,3,1],1,2)
console.log(arr);

function destroy2(arr){
	var args = Array.prototype.slice.call(arguments);
	var newArray = args.shift();

	function isFalse(a){
		return args.every(function(b){
			return a !== b;
		});
	}

	return newArray.filter(isFalse);
}
console.log(destroy2([1,2,3,4,5,2,3,1],1,2));

function destroy3(arr){
	var removeArags = Array.prototype.slice.call(arguments,1);
	removeArags.forEach(function(value){
		var index = arr.indexOf(value);
		while(index > -1){
			arr.splice(index,1);
			index = arr.indexOf(value);
		}
	})
	return arr;
}
console.log(destroy3([1,2,3,4,5,2,3,1],1,2));