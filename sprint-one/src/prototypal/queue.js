var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.enqueued = 0;
  newQueue.dequeued = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.enqueued] = value;
  this.enqueued++;
};

queueMethods.dequeue = function () {
  if (this.size() > 0) {
    var value = this.storage[this.dequeued];
    delete this.storage[this.dequeued];
    this.dequeued++;
    return value;
  }
};

queueMethods.size = function () {
  return this.enqueued - this.dequeued;
};
