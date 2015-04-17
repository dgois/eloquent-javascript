function shouldValidateEveryAndSomeElementsOfArray() {

	function every(array, f) {
		for (var i = array.length - 1; i >= 0; i--) {
			if (!f(array[i])){
				return false;
			}
		};
		return true;
	}

	function some(array, f) {
		for (var i = array.length - 1; i >= 0; i--) {
			if (f(array[i])){
				return true;
			}
		};
		return false;
	}

	//console.log(isNaN(NaN));

	console.log(every([NaN, NaN, NaN], isNaN));

	console.log(every([NaN, NaN, 4], isNaN));
	
	console.log(some([NaN, 3, 4], isNaN));

	console.log(some([2, 3, 4], isNaN));

	console.log(some([2, 3, NaN], isNaN));
}

shouldValidateEveryAndSomeElementsOfArray();