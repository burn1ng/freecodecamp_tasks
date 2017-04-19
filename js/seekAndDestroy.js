// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.


function destroyer(arr) {
  
  var myArr = arguments[0];
  var args = [];
  
  //make array of arguments
  for (var i = 1; i < arguments.length; i++) {
    args[i-1] = arguments[i];
  }
  
  var res = myArr.filter(function(item){
    return args.indexOf(item) < 0;
  });
  return res;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
