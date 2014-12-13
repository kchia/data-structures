var BinarySearchTree = function(value){
  var binarySearchTree = {};
  binarySearchTree.value = value;
  binarySearchTree.left = null;
  binarySearchTree.right = null;

  binarySearchTree.insert = function(value){
    // If value is greater than existing tree's value
    if (value > binarySearchTree.value) {
      // check if right child exists
      if (!binarySearchTree.right) {
        // create right child tree with value being passed in
        binarySearchTree.right = BinarySearchTree( value );
      } else {
        binarySearchTree.right.insert( value );
      }
    }
    // If value is less than existing tree's value
    if (value < binarySearchTree.value) {
      // check if left child exists
      if (!binarySearchTree.left) {
        // create left child tree with value being passed in
        binarySearchTree.left = BinarySearchTree( value );
      } else {
        binarySearchTree.left.insert( value );
      }
    }
  };

  binarySearchTree.contains = function(value){
    //check if tree's value matches value being passed in
    if(binarySearchTree.value === value){
      // if yes, return true
      return true;
    }
    //check if left and right children of the tree are null
    if(!binarySearchTree.left && !binarySearchTree.right ){

      // if so, return false
      return false;
    }

      // if not, check whether value is less than or greater than current value
      // if value is greater than
    if (value > binarySearchTree.value){
      // recursively check right
      return binarySearchTree.right.contains( value );
    }
      // if value is less than
    if (value < binarySearchTree.value){
      // recursively check less
      return binarySearchTree.left.contains( value )
    }
  };

  binarySearchTree.depthFirstLog = function(callback){
    // apply callback function on first tree
    callback(binarySearchTree.value);

    // check if tree has left child
    if (binarySearchTree.left) {
      binarySearchTree.left.depthFirstLog( callback );
    }
    // check if tree hash right child
    if (binarySearchTree.right) {
      binarySearchTree.right.depthFirstLog( callback );
    }
  };
  return binarySearchTree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(n)
 contains: O(n)
 depthFirstLog: O(n)
 */
