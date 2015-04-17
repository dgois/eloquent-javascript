function createSimpleObject() {

	var speak = function(line) {
		console.log("The " + this.type + " rabbit says '" + line + "'");
	};

	var whiteRabbit = {type: "white", speak: speak};
	var fatRabbit = {type: "fat", speak: speak};

	whiteRabbit.speak("Oh I am white ");
	fatRabbit.speak("Oh I am fat ");

	speak.apply(fatRabbit, ["Test apply!"]);
	speak.call({type: "old"}, "Test call");
}

function testPrototypes() {
	var empty = {};
	console.log(empty.toString);
	console.log(empty.toString());

	console.log(Object.getPrototypeOf({}) == Object.prototype);

	console.log(Object.getPrototypeOf(Object.prototype));

	console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
	console.log(Object.getPrototypeOf([]) == Array.prototype);

	var proRabbit = {
		speak: function(line) {
			console.log("The " + this.type + " rabbit says '" + line + "'");
		}
	};

	var killerRabbit = Object.create(proRabbit);
	proRabbit.collor = "black";
	killerRabbit.type = "killer";
	killerRabbit.speak("SKEREEEE!");
	console.log(killerRabbit.collor);
}

function testConstructors() {
	function Rabbit(type) {
		this.type = type;
	}

	var killerRabbit = new Rabbit("killer");
	var blackRabbit = new Rabbit("black");
	console.log(blackRabbit.type);

	Rabbit.prototype.speak = function(line) {
		console.log("The " + this.type + " rabbit says '" + line + "'");
	};
	blackRabbit.speak("Doom... ");

	//Overriding properties
	Rabbit.prototype.teeth = "small";
	console.log(killerRabbit.teeth);

	killerRabbit.teeth = "long, sharp and bloody";
	console.log(killerRabbit.teeth);

	console.log(blackRabbit.teeth);
}

function testEnumerableAndNonEnumerablePropertiesPrototype() {
	var map = {};
	function storePhi(event, phi) {
		map[event] = phi;
	}

	storePhi("pizza", 0.069);
	storePhi("touched tree", -0.081);

	Object.prototype.nonsense = "hi";
	Object.defineProperty(Object.prototype, "hiddenNonsense", {enumerable: false, value: "hi"});

	for(var name in map)
		console.log(name);

	console.log(("nonsense" in map) + " - nonsense");
	console.log(("toString" in map) + " - toString");
	console.log(("hiddenNonsense" in map) + " - hiddenNonsense");

	delete Object.prototype.nonsense;

	console.log("nonsense" in map);

	console.log("use map.hasOwnProperty toString inseted of in operator? " + map.hasOwnProperty("toString"));


}

function getAndSetTest() {
	var pile = {
		elements: ["eggshell", "orange peel", "worm"],
		get height() {
			return this.elements.length;
		},
		set height(value) {
			console.log("Ignoring attempt to set height to : ", value);
		}
	};

	console.log(pile.height);
	pile.height = 100;
}

function instanceOfTest() {
	var test = "123";
	console.log(test.constructor);
	console.log(new String(test).constructor);
	console.log(test instanceof String);
	console.log(new String(test) instanceof String);
	
}

instanceOfTest()
























