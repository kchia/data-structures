var Queue = function() {
  this.storage = {};
  this.enqueued = 0;
  this.dequeued = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.enqueued] = value;
  this.enqueued++;
};

Queue.prototype.dequeue = function () {
  if (this.size() > 0) {
    var value = this.storage[this.dequeued];
    delete this.storage[this.dequeued];
    this.dequeued++;
    return value;
  }
};

Queue.prototype.size = function () {
  return this.enqueued - this.dequeued;
};
