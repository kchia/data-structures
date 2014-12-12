var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];
  var currentGet = this._storage.get(i);

  //if there's nothing in the index position
  if (currentGet === undefined || currentGet === null){
    this._storage.set(i, tuple);
  }

  // if there's already a value in the index position, push to the bucket array
    if(currentGet && currentGet.length > 0){
      var bucket = [];
      bucket.push(currentGet);
      bucket.push(tuple);
      this._storage.set(i,bucket);
    }


};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i).length > 0){


  }
  return this._storage.get(i)[1];
};

HashTable.prototype.remove = function(k){
  //
  this.insert(k,null)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
