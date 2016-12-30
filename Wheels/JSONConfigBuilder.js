buildJSON = (source, spec) => {
	updateChild = (child, k , v) => {
		if (child.hasOwnProperty(k)) {
			if (currKeys.length === 0) 
				child[k] = v;
			else
				Object.assign(child[k], updateChild(child[k], currKeys.shift(), v));
			return child;
		} else {
			let newChild = {};
			newChild[k] = v;
			return newChild
		}
	}

	let currKeys = [];
	for (let description of spec) {
		currKeys = description.path;
		let [start, next] = [currKeys.shift(), currKeys.shift()];

		if (source.hasOwnProperty(start)) {
			Object.assign(source[start], updateChild(source[start], next, description.value));
		}
	}

	return source
}
