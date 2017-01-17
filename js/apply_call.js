// 1、借用Math方法
var a = [10,2,4,345]
console.log(Math.max.apply(null,a));//345

//2、将数组空元素变为undefined,以便被forEach遍历到
function isBlank(item,i){
	if(!item){
		console.log("空元素在第" + (i+1)+  "个");
	}else{
		console.log(item);
	}
}
["a",,"b"].forEach(isBlank);//a,b
Array.apply(null,["a",,"b"]).forEach(isBlank);//a,空元素在第二个,b

//判断一个数组中有多少个null、undefined和“ ”？
function EmptyelmentsNumber(arr){
	var num = 0;//空元素个数
	Array.apply(null,arr).forEach(function(item){
		if(!item){num++}// !item 排除了null undefined
	});
	return num;
}
var  arr = [1,null,2,undefined,"neko",2,5,,8];
var num = EmptyelmentsNumber(arr);
console.log(num);//3 如果arr.forEach()，则跳过空元素输出2

console.log(arr.toString());//忽略null、undefined和空元素1,,2,,neko,2,5,,8

// 3.转换类数组对象（如arguments对象）
function list(){
	return Array.prototype.slice.call(arguments);
}
var list1 = list(1,2,3,"neko");
console.log(list1);

//被处理的对象必须有length属性，以及相对应的数字键
Array.prototype.slice.apply({0:1,length:1});//1

Array.prototype.slice.apply({0:1});//[]

Array.prototype.slice.apply({0:1,length:2})
// [1, undefined]

Array.prototype.slice.apply({length:1})
// [undefined]

