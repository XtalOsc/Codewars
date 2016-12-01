// Playing with passphrases
//
// Everyone knows passphrases. One can choose passphrases from poems, songs, movies
// names and so on but frequently they can be guessed due to common cultural
// references. You can get your passphrases stronger by different means. One is the
// following:
//
// Choose a text in capital letters including or not digits and non alphabetic
// characters,
//
//    1. shift each letter by a given number but the transformed letter must be a
//       letter (circular shift),
//    2. replace each digit by its complement to 9,
//    3. keep such as non alphabetic and non digit characters,
//    4. downcase each letter in odd position, upcase each letter in even position
//       (the first character is in position 0),
//    5. reverse the whole result.
//
// Example:
// your text: "BORN IN 2015!", shift 1
//
// 1. + 2. + 3. -> "CPSO JO 7984!"
// 4. "CpSo jO 7984!"
// 5. "!4897 Oj oSpC"
//
// With longer passphrases it's better to have a small and easy program. Would you
// write it?

var result="";
var charcode = 0;

function playPass(s, n) {
//clear result
result="";
  //change all letters to lowercase
  s = s.toLowerCase();
  for (var i = 0; i < s.length; i++) {
    //replace digit with its complement to 9
    if (!isNaN(parseFloat(s[i])) && isFinite(s[i])) {
      result += (9-s[i]);
    }//end if
    //shift letters by n
    else if (s[i].match(/[a-z]/i)) {
      charcode = (s[i].charCodeAt()) + n;
      if (charcode > 122) {
        charcode -= 26;
      }//end if
      //if i is even, then convert to uppercase
      if (i % 2 == 0) {
        result += String.fromCharCode(charcode).toUpperCase();
      }//end if
      //if i is odd, keep lowercase
      else {
        result += String.fromCharCode(charcode);
      }//end else
    }//end else if
    //keep non alphabetic and non-digit characters
    else {
      result += s[i];
    }//end else
  }//end for
  //reverse string
  var reverse = result.split("").reverse().join("");
  return reverse;
}//end playPass function
