// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


function rot13(str) {  
  var arr = str.split("");
  
  for(var i = 0; i < arr.length; i++) {
    var codeOfSymbol = arr[i].charCodeAt(0);
    if (codeOfSymbol >= 65 && codeOfSymbol <= 77) {
      arr[i] = String.fromCharCode(codeOfSymbol + 13);
    } else if (codeOfSymbol >= 78 && codeOfSymbol <= 90) {
      arr[i] = String.fromCharCode(codeOfSymbol - 13);
    }
  }
  return arr.join("");
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
