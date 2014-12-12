

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = [];
};

Graph.prototype.contains = function(node){
  var found = false;
  // for(var i = 0; i < this.nodes.length; i++){
  //   if(this.nodes[i] === node){
  //     found = true;
  //   }
  // }
  for(var key in this.nodes){
    if(key === node){
      found = true;
    }
  }
  return found;
};

Graph.prototype.removeNode = function(node){
  // var index = _.indexOf(this.nodes, node);
  // if (index > -1){
  //   delete this.nodes[index];
  // }
  delete this.nodes[node];
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // fromNode.edge = fromNode.edge || [];
  // fromNode.edge.push(toNode);
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.indexOf(this.nodes[fromNode],toNode) > -1;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][_.indexOf(this.nodes[fromNode],toNode)];
  delete this.nodes[toNode][_.indexOf(this.nodes[toNode],fromNode)];
};

Graph.prototype.forEachNode = function(cb){
  for(node in this.nodes){
    cb(node);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 addNode: O(1)
 contains: O(n)
 removeNode: O(1)
 addEdge: O(1)
 hasEdge: O(n)
 removeEdge: O(n)
 forEachNode: O(n)
 */



