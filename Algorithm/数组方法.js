//argument
function myConcat(separator){
	var args = Array.prototype.slice.call(arguments,1);
	return args.join(separator);
}

var str = myConcat(",","red","orange","blue");

console.log(str);

//array.forEach(callback[,thisArg])
//打印出数组的内容
function logArrayElements(element,index,array){
	console.log("a[" + index + "]=" + element);
}
[2,3,4].forEach(logArrayElements);

//从每个数组中的元素值中更新一个对象中每个属性的值
function Counter(){
	this.sum = 0;
	this.count = 0;
}
Counter.prototype.add = function(array){
	array.forEach(function(entry){
		this.sum += entry;
		++this.count;
	},this);
};

var obj = new Counter();
obj.add([2,4,5]);
console.log(obj.count);
console.log(obj.sum);