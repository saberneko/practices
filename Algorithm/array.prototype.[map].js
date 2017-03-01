// the array to be sorted
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// temporary array holds objects with position and sort-value
var mapped = list.map(function(el, i){
	return { index: i, value: el.toLowerCase()};
})

// sorting the mapped array containing the reduced values
mapped.sort(function(a, b) {
	return +(a.value > b.value) || +(a.value === b.value) - 1
})

// container for the resulting order
var result = mapped.map(function(el) {
	return list[el.index]
})

console.log(mapped)// [{index: 1, value: 'alpha'}, {index: 3, value: 'bravo'}, {index: 2, value: 'charlie'}, {index: 0, value: 'delta'}]
console.log(result)// ['alpha', 'bravo', 'CHARLIE', 'Delta']

//重新建一个数组对象
//array[{name: 'tag1', chapter: ['title1', 'title2']},
//      {name:'tag2', chapter: ['title1', 'title3']}]
var tags = [{name: 'tag1'},{name: 'tag2'}];
var tagObject = tags.map(function(tag){
	var obj = {};
	obj.name = tag.name;
	tag.chapter = new Array();
	return obj;
});

var posts = [{title: 'title1', tags: [{name: 'tag1'},{name: 'tag2'}]},
			{title: 'title2', tags: [{name: 'tag1'}]},
			{title: 'title3', tags: [{name: 'tag2'}]}];

function newArray(posts){
	var newObj = {};

	posts.forEach(function(post){
		post.tags.forEach(function(tag){
			if(!newObj.hasOwnProperty(tag.name)){
				newObj[tag.name] = new Array();
				newObj[tag.name].push(post.title);
			}else{
				newObj[tag.name].push(post.title);
			}
		});
	});

	return newObj;
}

var newarr = newArray(posts);
console.log(newarr);

// console.log(JSON.stringify(newObj));
// console.log(JSON.stringify(tagObject));






