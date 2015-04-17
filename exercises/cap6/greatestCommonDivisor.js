function gcd(p, q) {
	if (q == 0) return p;
	return gcd(q, p % q);
}

console.log(gcd(6, gcd(35,40)));

function gcd2(a, b) {
	while (b != 0) {
		var t = b;
		b = a % b;
		a = t;
	}
	return a;
}

console.log(gcd2(6, gcd2(35,40)));

