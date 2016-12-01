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

// Testing playPass function. Expected return in comments.
playPass("I LOVE YOU!!!", 1)  //"!!!vPz fWpM J"
playPass("I LOVE YOU!!!", 0)  //"!!!uOy eVoL I"
playPass("AAABBCCY", 1)  //"zDdCcBbB"
playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)  //"4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO"
playPass("TO BE HONEST WITH YOU I DON'T USE THIS TEXT TOOL TOO OFTEN BUT HEY... MAYBE YOUR NEEDS ARE DIFFERENT.", 5)  //".ySjWjKkNi jWf xIjJs wZtD JgDfR ...dJm yZg sJyKt tTy qTtY YcJy xNmY JxZ Y'StI N ZtD MyNb yXjStM Jg tY"
playPass("IN 2012 TWO CAMBRIDGE UNIVERSITY RESEARCHERS ANALYSED PASSPHRASES FROM THE AMAZON PAY SYSTEM...", 20)  //"...gYnMsM SuJ HiTuGu yBn gIlZ MyMuLbJmMuJ XyMsFuHu mLyBwLuYmYl sNcMlYpChO YaXcLvGuW IqN 7897 hC"
playPass("IN 2012 TWO CAMBRIDGE UNIVERSITY RESEARCHERS ANALYSED PASSPHRASES FROM THE AMAZON PAY SYSTEM...", 10)  //"...wOdCiC IkZ XyJkWk oRd wYbP CoCkBrZcCkZ NoCiVkXk cBoRmBkOcOb iDsCbOfSxE OqNsBlWkM YgD 7897 xS"
playPass("1ONE2TWO3THREE4FOUR5FIVE6SIX7SEVEN8EIGHT9NINE", 5)   //"JsNs0yMlNj1sJaJx2cNx3jAnK4WzTk5jJwMy6tBy7jSt8"
playPass("AZ12345678ZA", 1)  //"bA12345678aB"
playPass("!!!VPZ FWPM J", 25)  //"I LoVe yOu!!!"
playPass("BOY! YOU WANTED TO SEE HIM? IT'S YOUR FATHER:-)", 15)  //")-:gTwIpU GjDn h'iX ?bXw tTh dI StIcPl jDn !NdQ"
playPass("FOR THIS REASON IT IS RECOMMENDED THAT PASSPHRASES NOT BE REUSED ACROSS DIFFERENT OR UNIQUE SITES AND SERVICES.", 15)  //".hTrXkGtH ScP HtIxH TjFxCj gD IcTgTuUxS HhDgRp sThJtG Tq iDc hThPgWeHhPe iPwI StScTbBdRtG Hx iX CdHpTg hXwI GdU"
playPass("ONCE UPON A TIME YOU DRESSED SO FINE (1968)", 12)  //")1308( qZuR Ae pQeEqDp gAk qYuF M ZaBg qOzA"
playPass("AH, YOU'VE GONE TO THE FINEST SCHOOL ALL RIGHT, MISS LONELY", 12)  //"KxQzAx eEuY ,fTsUd xXm xAaToE FeQzUr qTf aF QzAs qH'GaK ,tM"
playPass("THE SPECIES, NAMED AFTER THE GREEK GOD OF THE UNDERWORLD, LIVES SOME 3,600 FEET UNDERGROUND.", 8)  //".LvCwZoZmLvC BmMn 993,6 mUwA AmDqT ,lTzWeZmLvC MpB Nw lWo sMmZo mPb zMbNi lMuIv ,AmQkMxA MpB"
