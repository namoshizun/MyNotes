function Foo(name) {
	this.name = name;
};


Foo.prototype.sayYourName = function() {
	let arr = [1,2,3,4,5];

	/*
	 * this will produce a bunch of undefined because 'this'
	 * is bound to the caller context (arr) 
	 */
	// arr.forEach(function(counter) {
	// 	console.log(this.name)
	// });	

	/*
	 * Use ES5 'bind' method to imply the calling context
	 */
	// arr.forEach(function(counter) {
	// 	console.log(this.name)
	// }, this);

	/*
	 * Even better! Use 'ES6' arrow function :D
	 */
	// arr.forEach((counter) => console.log(this.name))

	/*
	 * Using name alias to 'this' but less straight-forward
	 * other commonly used names are 'me' and 'that'
	 */
	return (function (self) {
		arr.forEach(function(counter) {
			console.log(self.name)
		});
	})(this);
};


var foo = new Foo('hey');
foo.sayYourName()