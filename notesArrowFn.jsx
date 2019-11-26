// https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/

// basic syntax w multiple parameters
// ES5
var multiplyES5 = function(x, y) {
  return x * y;
};
// ES6
const multiplyES6 = (x, y) => {
  return x * y;
};
// or
const multiplyES6 = (x, y) => x * y;

// basic syntax w one parameter
// ES5
var phraseSplittersEs5 = function phraseSplitter(phrase) {
  return phrase.split("");
};
// ES6
const phraseSplittersEs6 = phrase => phrase.split("");
phraseSplittersEs6("xxx yyy zzz");

// no parameters
// ES5
var docLogEs5 = function docLog() {
  console.log(document);
};
// ES6
var docLogEs6 = () => {
  console.log(document);
};
docLogEs6();

// object literal syntax
// ES5
var setNameIdsEs5 = function setNameId(id, name) {
  return {
    id: id,
    name: name
  }
}
// ES6
var setNameIdsEs6 = (id, name) => ({ id: id, name: name })
console.log(setNameIdsEs6(4, "tyler"))

// USE CASES
// array manipulation
const smartPhones = [
  { name: 'iphone', price: 649 },
  ...
]

// ES5
var prices = smartPhones.map(function(smartPhone) {
  return smartPhone.price
})
console.log(prices)
// ES6
const prices = smartPhones.map(smartPhone => smartPhone.price)
console.log(prices)
////
const array = [1, 2, 3, 4, ..., 15]
// ES5
var divisibleByThreeES5 = array.filter(function (v) {
  return v % 3 === 0
})
// ES6
const divisibleByThreeES6 = array.filter(v => v % 3 === 0)
console.log(divisibleByThreeES6)

// promises and callbacks
// ES5
aAsync().then(function() {
  return bAsync();
}).then(function() {
  return cAsync();
}).done(function() {
  finish();
});
// ES6
aAsync().then(() => bAsync()).then(() => cAsync()).done(() => finish)
////

// this keyword et al
// ES5
API.prototype.get = function(resource) {
  var self = this;
  return new Promise(function(resolve, reject) {
    http.get(self.uri + resource, function(data) {
      resolve(data)
    })
  })
}
// ES6
API.prototype.get = function(resource) {
  return new Promise((resolve, reject) => {
    http.get(this.uri + resource, function(data) {
      resolve(data)
    })
  })
}

////
// This statement returns the array: [8, 6, 7, 9]
var elements = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
elements.map(function(element) {
  return element.length;
});

elements.map(element => {
  return element.length;
});

elements.map(element => element.length);