// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWord(str) {
  var myArr = str.split(" ");
  /* 1st variant - loop and array
  var res = myArr[0].length;
  for(var i = 1; i < myArr.length; i++) {
    if(myArr[i].length > res) {
      res = myArr[i].length;
    }
  }
  */
  var res = myArr.reduce(function(max,current) {
    return current.length > max ? current.length : max;
  }, myArr[0].length);
  return res;
}

findLongestWord("The quick brown fox jumped over the lazy dog");