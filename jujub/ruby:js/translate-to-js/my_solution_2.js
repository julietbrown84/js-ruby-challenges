

function Rectangle(height, width) {
this.height = height;
this.width = width;

this.calcArea = function() {
  return this.height * this.width;
};

this.calcPerimeter = function() {
  return this.height * 2 + this.width * 2
};
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

console.log(area)        //to check with height 7, width 3
console.log(perimeter)   //to check with height 7, width 3