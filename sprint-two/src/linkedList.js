var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if(list.head === null){
    //if the list is empty, make the new node both head and tail
      list.head = newNode;
      list.tail = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;
    return newNode;
  };

  list.removeHead = function(){
    if(list.head !== null){
      var value = list.head.value;
      list.head = list.head.next;
      if(list.head.next === null){
        list.tail = null;
      }
    }
    return value;
  };

  list.contains = function(target){
    var currentNode = list.head;
    var found = false;
    var check = function(){
      if (currentNode.value === target) {
        found = true;
      }
    };

    while ( currentNode !== list.tail ) {
      check();
      if (!found) {
        currentNode = currentNode.next;
      }
    }

    if (currentNode === list.tail && list.tail !== null) {
      check();
    }

    return found;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
