// Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.


function bouncer(arr) {
  return arr.filter(function(item){
    return item; // if item will false (e.g. false, null, undefined, NaN, ""), it will be filtered
  });
}

bouncer([7, "ate", "", false, 9]);
