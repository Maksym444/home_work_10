function showSum() {
  let sum = 0;
      return function(number) {
      return sum += number; 
      };
  };

let sum = showSum();

console.log(sum(111)); 
console.log(sum(111)); 
console.log(sum(333)); 
console.log(sum(112)); 


function createCounter (initialValue, counterStep) {
  let count = initialValue;
  createCounter.prototype.increment = function () {
      return count +=counterStep;
  }; 
  createCounter.prototype.resetToInitialValue = function () {
      return count = initialValue;
  };
}

let counter = new createCounter(100, 10);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.resetToInitialValue());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());