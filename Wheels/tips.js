function deepCopy(obj) {
	return JSON.parse(JSON.stringify(obj));
}

function strStr(str, substr) {
	// OR return str.indexOf(substr) != -1
	return ~str.indexOf(substr)
}