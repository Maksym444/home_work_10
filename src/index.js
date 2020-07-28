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


function createCount (init, step) {
  let count = init;
  let inside = function (){
      return count +=step;
    };
    inside.reset = function(){
      return count = init;
    };
 return inside;
};

let count = createCount (300, 300);


console.log(count());
console.log(count());
console.log(count());
console.log(count.reset())
console.log(count());
console.log(count());
console.log(count());

