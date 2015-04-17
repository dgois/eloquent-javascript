function shouldFlatteningArray() {
	var arrays = [[1, 2, 3], [4, 5], [6]]
	
	console.log(arrays.reduce(function(flattenedArray, array) {
		return flattenedArray = flattenedArray.concat(array);
	}));
}

shouldFlatteningArray();
