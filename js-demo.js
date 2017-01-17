		this.x=9;
		var module = {
			x:81,
			getX:function(){return this.x;}
		};
		module.getX();

		var getX=module.getX;
		console.log(getX());//undefined

		var boundGetX=getX.bind(module);
		console.log(boundGetX());//81

// var http = require('http');
// var os = require('os');
 
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World\n');
 
// }).listen(3000);
 
// console.log('Server running at http://127.0.0.1:3000/');
