'use strict';

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'


function Circle(radius) {
  this.radius = radius;
  this.getCircumference = function() {
    this.circumference = this.radius*2*3.14;
  };
  this.getArea = function() {
    this.area = this.radius *3.14*3.14
  };
  this.toString = toString;
}

var toString = function() {
  this.getArea;
  this.getCircumference;
  console.log('Radius' + this.radius + ', Circumference: ' + this.circumference + ', Area: ' + this.area);
}

var kor1 = new Circle(4);

kor1.getCircumference();
kor1.getArea();

kor1.toString();
