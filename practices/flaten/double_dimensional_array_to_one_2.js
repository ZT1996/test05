'use strict';

function double_to_one(collection) {
  var array = [];
  var arr = [];
  var isRepeated;

  for(var i = 0; i < collection.length; i++){
    for(var j = 0; j < collection[i].length; j++){
      array.push(collection[i][j]);
    }
  }
  for(var k = 0; k < array.length; k++){
    isRepeated = false;
    for(var m = 0; m < arr.length; m++){
      if(array[k] == arr[m]){
        isRepeated = true;
        break;
      }
    }
    if(!isRepeated){
      arr.push(array[k]);
    }
  }

  return arr;
}

module.exports = double_to_one;
