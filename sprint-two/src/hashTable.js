var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var tuple = [k,v];

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
    for(var i = 0; i < bucket.length; i++){
      // If it does, then check if key is in one of the tuples in the bucket
          // If so, update the tuple's value
      if(bucket[i][0] === k){
        bucket[i][1] = v;
        found = true;
      }
    }
    // If not, push the tuple
    if(!found){
      bucket.push(tuple);
    }

  }
    console.log(bucket)

  // Last, store the bucket we just created or modified in step 1 in limitedArray at index i
  this._storage.set(i,bucket);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // Pull bucket from index i
  var bucket = this._storage.get(i);
  // if bucket has only one tuple, return value of that tuple
  if(bucket !== undefined || bucket !== null){
    if(bucket.length === 1){
      return bucket[0][1];
    }
    // if bucket has more than one tuple, look for the tuple with the key k
    if(bucket.length > 1){
      for(var i = 0; i < bucket.length; i++){
        if(bucket[i][0] === k){
    // return the tuple's value
          return bucket[i][1];
        }
      }
    }
  }

};

HashTable.prototype.remove = function(k){
  //
  this.insert(k,null)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
