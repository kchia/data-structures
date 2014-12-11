var Stack = function() {
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
}

Stack.prototype.pop = function() {
  if (this.counter > 0) {
    this.counter--;
    var value = this.storage[this.counter];
    delete this.storage[this.counter];
    return value;
  }
};

Stack.prototype.size = function () {
  return this.counter;
}
