// function getLetter(s) {
//     let letter;
//     switch(s[0]){
//         case (s[0].includes("a","e","i","o","u")==true):
//             letter="A"
//             console.log(letter)
//             break
//         case s[0].includes("b","c","d","g","f")==true:
//             letter="B"
//         case s[0].includes("h","j","k","l","m")==true:
//             letter="C"
//         case s[0].includes("n","p","q","r","s","t","v","w","x","y","z")==true:
//             letter="D"
//     }
//     return letter;
// }

function getLetter(s) {
  let letter;
  switch (s[0]) {
    case 'a': case 'e': case 'i': case 'o': case'u':
      letter = 'A';
      break;
    case 'b':case 'c':case 'd':case 'f':case 'g':
      letter = 'B';
      break;
    case 'h':case 'j':case 'k':case 'l':case 'm':
      letter = 'C';
      break;
    case 'n':case 'p':case'q','r': case's': case 't': case 'v': case'x' : case 'y':case 'z':
      letter = 'D';
      break;
  }
  return letter;
}

console.log(getLetter('osorio'));
