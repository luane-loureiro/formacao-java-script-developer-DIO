let nota1 = 10;
let nota2 = 10;
let nota3 = 10;
let media = ((nota1+nota2+nota3)/3);

if (media < 5){
    console.log ("Media " + media.toFixed(2) + ", reprovado");
} else if (media >=5 && media < 7) {
    console.log ("Media " + media.toFixed(2) + ", está de recuperação");
} else if ( media >= 7 && media != 10) {
    console.log ("Media " + media.toFixed(2) + ", aprovado");
}else {
    console.log ("Media " + media.toFixed(2) + ", Parabéns! Conseguiu nota máxima, aprovado com louvor");
}
 