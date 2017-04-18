// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".


function titleCase(str) {
  var myArr = str.toLowerCase().split(" ");
  var resultArr = myArr.map(function(item) {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
  return resultArr.join(" ");
}

titleCase("I'm a little tea pot");
