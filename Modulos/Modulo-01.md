# Módulo 01 - Aprenda a programar do zero com JavaScript

## Aula 1 -Primeiros Passos Com JavaScript

### Variávei e Operadores
#### console e como declarar Variáveis
- Variavel é onde guardamos valores para serem usados futuramente/
- Existem 2 maneiras de declarar variavel:
   - **lets** - onde o valor pode ser alterado.
  
  ```
  let variavel_1 = 10;
  variavel_1 = 20;
  
  ```

  o valor inicial foi declarado como 10, mas na linha seguinte foi alterado para 20.

    - **Const** - onde o valor pode não pode ser alterado.
  ```
  const pi = 3,14;
  ```

### Diferencas entre variavéis e tipo de operadoes
= (igual) -> operador de atribuição

Operadores matemático 
|Sinal aritimético | Operção | Sinal na programação |
|------------------|---------|----------------------|
| ➕ | Adição |  +  |
| ➖ | Subtração | - |
| ✖️ | Multiplicação | * |
| ➗ | Divisão | / |
| % | mostra o resto da divisão | % |

:Por

### Exercício - Calculo de valor de uma viagem
faça um programa para calcular o valor de uma viagem
você terá três variáveis, sendo elas:
1) preço do combustível;
2) Gasto de combustível por Km;
3) Distancia em km da vaigem;

Imprima no console o valor que será gasto para realizar a viagem.


### Resolucão Guiada do Exercício

```
let precoCombustivel = 5.79;
const KmPorLitro = 12;
let distanciaEmKm = 1580;

console.log ("o valor gasto será de R$ " + (precoCombustivel * (distanciaEmKm / KmPorLitro)).toFixed(2)); // corigindo as casas decimais para 2, o padrao do real.

```

## Aula 2 - Estruturas condicionais
### Conceito de Boolean e Condicionais
- Uma variável é booleana se tem apenas dois possíveis valores:  false e true.

| Operador | Operação | Exemplo |
|-------|-----|-----|
| >	| Maior que	| (a > b) |
| <	| Menor que	| (a < b) |
| >=	| Maior ou igual a	| (a >= b) |
| <=	| Menor ou igual a	| (a <= b) |
| ==	| Igual a	| (a == b) |
| !=	| Diferente de	| (a !== b) |
| ===	| Idêntico a	| (a === b) |
| !==	| Não idêntico a	| (a !== b) | 
| &&	| E/and	| (a && b) |
| ll	| Ou/or	| (a ll b) |



### Exemplo com Resto de Divisão
```
const NumeroPar = (numero % 2) === 0;
console.log(NumeroPar);

```

### Tipos de Operadores de Igualdade
| Operador| Ação executada |
|-----|------------------------------------------------------|
| ==  | compara diferentes tipos (number, character, Boolena)|
| === | Compara apaneas variáveis do mesmo tipo. |
| ! | Inverte o valor boolean |


### Estrutura Condicional com If e Else
```
const NumeroPar = (numero % 2) === 0;

if (NumeroPar) {
    console.log(" O Numero é Par!");
}

else {
    console.log("O numero é impar!");
}
```

### Estrutura Condicional com Else if
```
const numero = 10;

const NumeroPar = (numero % 2) === 0;

// executa o primeiro operação condicional, se ela for verdadeira náo executa as outras condições
if (numero === 0){
    console.log("Inválido, o numero é Zero,");
}

//  caso contrario consitua executando o código
    else if (NumeroPar) {
    console.log(" O Numero é Par!");
}

    else {
    console.log("O numero é impar!");
}

```


### Revisão e dicas de Boas Práticas
Revisão


### Exercício 2 - Incrementando do calculo do valor de uma viagem
Faça um programa para calcular o valor de uma Viagem.
Você terá três variáveis, sendo elas:
1) preço do etanol.
2) preço da Gasolina.
3) O tipo de combustível que está no seu Carro.
4) Gasto médio de combustível do carro por Km.
5) Distancia da Viagem em Km.

imprima no console o valor que será gasto para realizar esta Viagem.


### Resolução guiada do Exercício
```
const precoEtanol = 6.79;
const precoGasolina = 5.40;
let tipoCombustivel = "gasolina";
const KmPorLitro = 12;
let distanciaEmKm = 1580;

let litrosGastos = (distanciaEmKm / KmPorLitro);

if (combustivelCarro = "gasolina") {
    console.log ("o valor gasto será de R$ " + (litrosGastos * precoGasolina));
}
else{
    console.log ("o valor gasto será de R$ " + (litrosGastos * precoEtanol));
}
```


## Aula 3 - Praticando com Variáveis, Operadores e Estruturas Condicionais
### Exerício 1 - Media de Notas
Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

### Resoluçao do Exercício 1

### Exercício 2 - Cálculo IMC
O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
- 
### Resolução do exerício 2

### Exercício 3 - Valor Pago de um Produto
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

### Resolução do Exercício 3




