/************ VAR *************/

/****************

    Avec 'var', la déclaration est implicitement remontée au début du script
    comme si on avait sur la toute première ligne : var bonjour;
    C'est ce qu'on appelle le "Hoisting" ce qui se traduit littéralement par la Remontée

    Inconvénient de var
    On peut redéfinir par erreur une variable "function scope" dans un sous-bloc sans s'en rendre compte

******************/

//console.log(greeter);

var greeterVar = "Hey Salut";

function varFunction() {
  var helloVar = "Bonjour";
  console.log(helloVar);
  console.log(greeterVar);

  // var time = 4
  // if (time > 3){
  //     var greeter = "Je pense que je créé une nouvelle variable dans mon bloc 'if' alors que j'écrase ma variable 'greeter'";
  // }
}
varFunction();
console.log(helloVar); // Error => helloVar n'est pas une variable global mais une variable "function scoped" donc qui n'existe que dans la fonction

/************ LET *************/

/****************

    Attention : si vous utilisez une variable "let" avant de la déclarer, contrairement au 'var' qui prenait par défaut la valeur "undefined",
    la variable 'let' n'en prend pas se qui génèrera une erreur "Rerence Error";

    Le let est "block scoped", donc il n'existe que dans le bloc dans lequel il a été déclaré (et les sous-bloc)

******************/

let greeterLet = "Hey Salut";
let time = 4;
if (time > 3) {
  let helloLet = "Bonjour";
  console.log(helloLet);
}
console.log(helloLet); // Error => helloLet ayant été déclaré avec un 'let', il est 'block scoped' donc il n'existe que dans le bloc dans lequel il a été déclaré

/************ CONST *************/

/** Variable "block scoped" qui ne peut être ni redéfinit, ni redéclarer **/
/** Doit être initialisée avec une valeur */

const toto = "toto";
const toto = "titi"; // error
toto = "tutu"; // error
