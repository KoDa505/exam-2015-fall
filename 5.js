'use strict';

// Create a constructor called CarStore, that takes an array of cars as a parameter:
// It should have an "addCar" method that adds a car object to it's list
// It should have a "getSumPrice" method that returns the sum of all cars price
// It should have a "getOldestCarType" method that returns the oldest car's type
// It should have a "deleteCarByType" method that removes the cars from the inner list
// that have the given type

var cars = [
  {type: 'Dodge', price: 20000, year: 2012},
  {type: 'Tesla', price: 30000, year: 2015},
  {type: 'Nissan', price: 12000, year: 2010},
  {type: 'Trabant', price: 2000, year: 1980},
  {type: 'Ferrari', price: 40000, year: 2001}
];


function CarStore(cars) {
  this.cars = cars;
  this.addCar = addCar;
  this.getSumPrice = getSumPrice;
  this.getOldestCarType = getOldestCarType;
}

function addCar(tipus, ar, ev) {
	var newCar = {
		type: tipus,
		price: ar,
		year: ev
	};
	this.cars.push(newCar);
	return this.cars;
}

function getSumPrice() {
  var sum = 0;
  for (var i =0; i < this.cars.length; i++) {
    sum += this.cars[i].price;
  }
  return sum
}

function getOldestCarType() {
  var oldest = this.cars[0].year;
  var oldestCar = this.cars[0].type;
  for (var i = 0; i < this.cars.length; i++) {
    if (this.cars[i].year < oldest) {
      oldest = this.cars[i].year;
      oldestCar = this.cars[i].type;
    }
  }
  return oldestCar;
}

function deleteCarByType(tipus) {
  for (var i = 0; i < this.cars.length < i++) {
    
  }
}


var carStore = new CarStore(cars);


carStore.addCar('Smart', 18000, 2011);
console.log(carStore.getSumPrice()); // 122000
console.log(carStore.getOldestCarType()); // 'Trabant'
// carStore.deleteCarByType('Ferrari');
console.log(carStore.getSumPrice()); // 82000
