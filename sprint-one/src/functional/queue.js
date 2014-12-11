var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0; // count the number of objects storage
  var first = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    // first in first out
    // adding value to the end
    // and increment counter
  };

  someInstance.dequeue = function(){
    // remove value from the front
    // return that value
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
