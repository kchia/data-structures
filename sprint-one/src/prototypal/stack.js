var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.counter = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.counter] = value;
  this.counter ++;
}

stackMethods.pop = function(){
  if(this.counter > 0 ){
    this.counter--;
    var value = this.storage[this.counter];
    delete this.storage[this.counter];
    return value;
  }
}

stackMethods.size = function(){
  return this.counter;
}
