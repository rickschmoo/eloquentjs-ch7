function Vector(x,y) {
	this.x = x;
	this.y = y;

}

/* Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values. */
Vector.prototype.plus = function(v) {
	var new_x = this.x + v.x;
	var new_y = this.y + v.y;
	new_vector = new Vector(new_x, new_y);
	return new_vector; 
}
Vector.prototype.minus = function(v) {
	var new_x = this.x - v.x;
	var new_y = this.y - v.y;
	new_vector = new Vector(new_x, new_y);
	return new_vector; 
}
Object.defineProperty(Vector.prototype, "length", {
  get: function() { return Math.sqrt( (this.x*this.x) + (this.y * this.y) ) }
});

/* Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0). */

var v1 = new Vector(1, 2);
var v2 = new Vector(2, 3);

// Your code here.
console.log("WANT: Vector{x: 3, y: 5}");
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log("WANT: Vector{x: -1, y: -1}");
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log("WANT: 5");
console.log(new Vector(3, 4).length);
// → 5

