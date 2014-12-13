var HashTable = function(){
  this._limit = 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var tuple = [k,v];

  if (this._counter >= this._limit * 0.75 ){
    this._limit = this._limit * 2;
  }

//Do two checks
  // First, check whether the bucket exists

      // If it doesn't, then create a bucket with the tuple in it without
          //interacting with the limitedArray
  if (bucket === undefined || bucket === null){
    bucket = [];
    bucket.push(tuple);
  }

  if (bucket){
    var found = false;
    for(var j = 0; j < bucket.length; j++){
      // If it does, then check if key is in one of the tuples in the bucket
          // If so, update the tuple's value
      if(bucket[j][0] === k){
        bucket[j][1] = v;
        found = true;
      }
    }
    // If not, push the tuple
    if(!found){
      bucket.push(tuple);
    }

  }

  // Last, store the bucket we just created or modified in step 1 in limitedArray at index i
  this._storage.set(i,bucket);
  this._counter++;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // Pull bucket from index i
  var bucket = this._storage.get(i);
  // if bucket has only one tuple, return value of that tuple
  // if bucket is undefined or null or empty
  if(bucket === undefined || bucket === null || bucket === []){
    return null;
  }

  // if bucket is defined, check each tuple
  if(bucket){
    for(var j = 0; j < bucket.length; j++){
    // if tuple is undefined
      if(bucket[j] === undefined){
      // return null
        return null;
      }
    // if the tuple's key matches k
      if(bucket[j][0] === k){
      // return the tuple's value
        return bucket[j][1];
      }
    }
  }


};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  // if bucket is undefined, empty, or null
  if(bucket === undefined || bucket === null || bucket === []){
    return null;
  }
  // if there's a non empty bucket
  if (bucket) {
    // iterate through each tuple
    for(var j = 0; j < bucket.length; j++){
      // if tuple's key matches k, delete the tuple
      if(bucket[j][0] === k){
        delete bucket[j];
      }
    }
  }

  // Store the modified bucket inside storage
  this._storage.set(i,bucket);

  this._counter--;

  this.checkSize();
};

HashTable.prototype.checkSize = function(){
  //console.log(this._counter, this._limit);
  if (this._counter < this._limit * 0.25 ){
    // Before halving the limit, move the buckets with over-the-limit indexes
    var oldLimit = this._limit;
    var newLimit = this._limit * 0.5;
    var tuples = [];
    for(var l = newLimit; l < oldLimit; l++ ){
      console.log(l)
      var bucket = this._storage.get(l);
      // if bucket has tuples, store the tuples in an array
      if(bucket){
        for(var j = 0; j < bucket.length ;j++){
          tuples.push(bucket[j]);
        // Remove the tuples from the bucket
          this.remove(bucket[j][0]);
        }
      }
    }
    //console.log(tuples)
    // Halve the limit
    this._limit = this._limit * 0.5;
    // Insert the stored tuples
    for(var m = 0; m < tuples.length; m++){
      this.insert(tuples[m][0],tuples[m][1]);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  insert: O(1)
  retrieve: O(1)
  remove: O(1)
 */
