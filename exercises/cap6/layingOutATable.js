var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

function rowHeights(rows) {
	return rows.map(function(row) {
		return row.reduce(function(max, cell) {
			return Math.max(max, cell.minHeight());
		}, 0);
	});
}

function colWidths(rows) {
	return rows[0].map(function(_, i) {
		return rows.reduce(function(max, row) {
			return Math.max(max, row[i].minWidth())
		}, 0);
	});
}

function drawTable(rows) {
	var heights = rowHeights(rows);
	var widths = colWidths(rows);

	function drawLine(blocks, lineNo) {
		return blocks.map(function(block) {
			return block[lineNo];
		}).join(" ");
	}

	function drawRow(row, rowNum) {
		var blocks = row.map(function(cell, colNum) {
			return cell.draw(widths[colNum], heights[rowNum]);
		});

		return blocks[0].map(function(_, lineNo) {
			return drawLine(blocks, lineNo);
		}).join("\n");
	}

	return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
	var result = "";
	for (var i = 0; i < times; i++)
		result += string;
	return result;
}

function TextCell(text) {
	this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) {
		return Math.max(width, line.length);
	}, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};
	
function UnderlineCell(inner) {
	this.inner = inner;
};
UnderlineCell.prototype.minWidth = function() {
	return this.inner.minWidth();
};
UnderlineCell.prototype.minHeight = function() {
	return this.inner.minHeight() + 1;
};
UnderlineCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height - 1).concat([repeat("-", width)]);
}

function RTextCell(text) {
	TextCell.call(this, text);
}

RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function(width, height) {
	var result = [];
	for (var i = 0; i < height; i++) {
		var line = this.text[i] || "";
		result.push(repeat(" ", width - line.length) + line);
	}
	return result;
};

function dataTable(data) {
	var keys = Object.keys(data[0]);
	var headers = keys.map(function(name) {
		return new UnderlineCell(new TextCell(name));
	});
	var body = data.map(function(row) {
		return keys.map(function(name) {
			var value = row[name];
			if (typeof value == "number")
				return new StretchCell(new RTextCell(String(value)), 1, 3);
			else
				return new StretchCell(new TextCell(String(value)), 1, 3);
		}); 
	});

	return [headers].concat(body);
}

function StretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
};
StretchCell.prototype.minWidth = function() {
	return Math.max(this.inner.minWidth(), this.width);
};
StretchCell.prototype.minHeight = function() {
	return Math.max(this.inner.minHeight(), this.height);
};
StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height);
}

//console.log(t.draw());
console.log(drawTable(dataTable(MOUNTAINS)));


var sc = new StretchCell(new TextCell("abc"), 1, 3);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(4, 3));



























