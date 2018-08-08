require('es6-promise').polyfill();
require('isomorphic-fetch');

// https://jsonplaceholder.typicode.com/posts,
fetch('https://jsonplaceholder.typicode.com/posts').then(function(response) {
	if(response.ok) {
		return console.log("Operation Complete!");
	}
});
