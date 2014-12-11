var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // count the number of objects storage
  var enqueued = 0;
  var dequeued = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    // first in first out
    // adding value to the end
    // and increment counter
    storage[enqueued] = value;
    enqueued++;
  };

  someInstance.dequeue = function(){
    // remove value from the front
    // return that value
    if(someInstance.size() > 0){
      var value = storage[dequeued];
      delete storage[dequeued];
      dequeued++;
      return value;
    }
  };

  someInstance.size = function(){
    return enqueued - dequeued;
  };

  return someInstance;
};
