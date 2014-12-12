var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push( Tree(value) );
};

treeMethods.contains = function(target){
  var found = false;
  var inspect = function (tree) {
    if (tree.value === target) {
      found = true;
    }
    for (var i = 0; i < tree.children.length; i++) {
      inspect(tree.children[i]);
    }
  };
  inspect(this);
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
