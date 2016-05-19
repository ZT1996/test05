'use strict';

function double_to_one(collection) {
  var newarray = [];

  for(var i = 0; i < collection.length; i++){
    if(collection[i].length == null){
      newarray.push(collection[i]);
    }
    for(var j = 0; j < collection[i].length; j++){
      newarray.push(collection[i][j]);
    }
  }
  return newarray;
}

module.exports = double_to_one;
