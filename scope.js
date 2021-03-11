// Scope global

let var1 = 'Hola';
const var2 = 'Hi';

// function Scope
function scope(number) {
  if (number >= 3) {
    // block scope
    //Re-escribir la variable var1 porque se definió con let
    var1='La multiplicación da'
    let number_two = 100;
    return console.log(`${var1} ${number * number_two}`);
  } else {
    // block scope
    // No se puede re-escribir var2, porque se definió con const
    //var2='la suma es ahora'
    let number_three = 200;
    return console.log(`${var2} ${number + number_three}`);
  }
}
