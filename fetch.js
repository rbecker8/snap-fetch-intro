require('es6-promise').polyfill();
require('isomorphic-fetch');

fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'get'
}).then(function(response) {

}).catch(function(err) {
// Error :(
});

console.log();
