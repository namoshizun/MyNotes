// Helper
function print(obj) {
	console.log(obj)
}

// Mimic Async-Await
function coRunner(feedback) {
	let iterator = this;

	let result = iterator.next(feedback);
	if (result.done) {
		return;
	}

	Promise.resolve(result.value).then(function(nextFeedback) {
		coRunner.call(iterator, nextFeedback);
	})
}

function _async(generatorFn) {
	let iterator = generatorFn();
	coRunner.call(iterator);
}



_async(function *() {
	let nihao = yield 'nihao';
	print(nihao);

	let hello = yield new Promise((resolve) => setTimeout(() => resolve('hello'), 3000));
	print(hello);

	let world = yield new Promise((resolve) => setTimeout(() => resolve('world'), 1000));
	print(world);

	let yoooo = yield Promise.resolve('yoooo');
	print(yoooo);
})
