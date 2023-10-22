let peso = 68;
let altura =1.68;

let imc = (peso)/(Math.pow(altura,2)); // suvistiu o altura*altura pela função matecmática Pow, a função Math.pow() retorna a base elevada ao expoente.

if (imc < 18.5){
    console.log ("Seu imc é " + imc.toFixed(2) + ", Você está baixo do peso.");
}
 else if (imc >=18.5 && imc < 25) {
    console.log ("Seu imc é " + imc.toFixed(2) + ", está com o Peso normal");
 }
 else if (imc >= 25 && imc < 30) {
    console.log ("Seu imc é " + imc.toFixed(2) + ", Você está Acima do peso");
 }
 else if (imc >= 30 && imc < 40) {
    console.log ("Seu imc é " + imc.toFixed(2) + ", Você está Obeso");
 }
 else {
    console.log ("Seu imc é " + imc.toFixed(2) + ", Cuidado, você está com Obesidade Grave");
 }