function where(arr,num){
	arr.push(num);
	arr.sort(function(a,b){
		return a-b;
	});
	return arr.indexOf(num);
}
console.log(where([20,40,10,60],24));