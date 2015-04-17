function drawSquare(sizeSide) {
	var square = "";
	for (var line = sizeSide - 1; line >= 0; line--) {
		for (var column = sizeSide - 1; column >= 0; column--) {
			if (first(line, sizeSide) || last(line)) {
				square += "_";
			} else {
				if (first(column, sizeSide) || last(column)) {
					square += "|";				
				} else {
					square += " ";
				}
			}
		}
		square += "\n";
	}

	console.log(square);
}

function first(point, size) {
	return point == size - 1;
}

function last(point) {
	return point == 0;
}

drawSquare(4);