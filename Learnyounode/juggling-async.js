var http= require ('http');
var concat = require('concat-stream');
var links = process.argv.slice(2);
var results = [];
	resultsCount = 0;
links.forEach(function(link,i){
	http.get(link, function(response){
		response.setEncoding('utf-8');
		response.pipe(concat(function(data){
			results[i]=data;
			resultsCount++;
			if ( resultsCount === links.length){
				results.forEach(function(result){
					console.log(result);
				})
			}
		}))
	})
})