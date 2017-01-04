function deepCopy(obj) {
	return JSON.parse(JSON.stringify(obj));
}

function strStr(str, substr) {
	// OR return str.indexOf(substr) != -1
	return ~str.indexOf(substr)
}

function getType(obj) {
	/*
	 * [] => [object Array]  (typeof [] === 'object')
	 * undefined => [object Undefined]  (undefined.toString() gets an error)
	 * null => [object Null] (typeof null === 'object')
	 * number => [object Number]
	 * string => [object String]
	 * {} => [object Object]
	 */
	return toString.call(obj)
}