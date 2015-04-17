function SequenceInterface(first, end) {
	this.index = 0;
	this.present = first;
	this.end = end;
};
SequenceInterface.prototype.next = function() {
	if (this.present >= this.end) {
		console.log("End of the sequence");
	}
	this.index++;
	return this.present++;
};
SequenceInterface.prototype.hasNext = function() {
	return this.present < this.end;
};
SequenceInterface.prototype.getCurrentStep = function() {
	return this.index;
};

function ArraySeq(array) {
	this.inner = new SequenceInterface(0, array.length);
	this.array = array;
};
ArraySeq.prototype.next = function() {
	return this.array[this.inner.next()];
};
ArraySeq.prototype.hasNext = function() {
	return this.inner.hasNext();
};
ArraySeq.prototype.getCurrentStep = function() {
	return this.inner.getCurrentStep();
};

function RangeSeq(first, end) {
	this.inner = new SequenceInterface(first, end);
}
RangeSeq.prototype.next = function() {
	return this.inner.next();
};
RangeSeq.prototype.hasNext = function() {
	return this.inner.hasNext();
};
RangeSeq.prototype.getCurrentStep = function() {
	return this.inner.getCurrentStep();
};

function logFive(sequence) {
	while (sequence.hasNext() && sequence.getCurrentStep() < 5) {
		console.log(sequence.next());
	}
};


//logFive(new SequenceInterface(0, 10));
//logFive(new ArraySeq([1, 2]));
//logFive(new ArraySeq([1, 2, 3, 4, 5, 6]));
logFive(new RangeSeq(100, 1000));



