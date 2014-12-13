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

  if(bucket){
    if(bucket.length !== undefined && bucket.length === 1){
      return bucket[0][1];
    }
    // if bucket has more than one tuple, look for the tuple with the key k
    if(bucket.length > 1){
      for(var j = 0; j < bucket.length; j++){
        if(bucket[j][0] === k){
    // return the tuple's value
          return bucket[j][1];
        }
      }
    }
  }

};

HashTable.prototype.remove = function(k){
  // var i = getIndexBelowMaxForKey(k, this._limit);
  // var bucket = this._storage.get(i);

  // if (this._counter <= this._limit * 0.25 ){
  //   this._limit = this._limit * 0.5;
  // }

  // //if there's only one tuple in bucket
  // if (bucket.length === 1){
  //   // set bucket to null
  //   bucket = null;
  // }
  // //if there's more than one tuple in bucket
  // if (bucket !== null && bucket.length > 1){
  //   // iterate through each tuple
  //   for(var j = 0; j < bucket.length; j++){
  //     // if tuple's key matches k, delete the tuple
  //     if(bucket[j][0] === k){
  //       bucket[j] = null;
  //     }
  //   }
  // }

  // this._storage.set(i,bucket);
  this.insert(k,null);

};



/*
 * Complexity: What is the time complexity of the above functions?
  insert: O(1)
  retrieve: O(1)
  remove: O(1)
 */
