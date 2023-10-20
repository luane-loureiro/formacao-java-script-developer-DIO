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

#### Diferencas entre variavéis e tipo de operadoes
= (igual) -> operador de atribuição

Operadores matemático 
|Sinal aritimético | Operção | Sinal na programação |
|------------------|---------|----------------------|
| ➕ | Adição |  +  |
| ➖ | Subtração | - |
| ✖️ | Multiplicação | * |
| ➗ | Divisão | / |


#### Exercício - Calculo de valor de uma viagem
faça um programa para calcular o valor de uma viagem
você terá três variáveis, sendo elas:
1) preço do combustível;
2) Gasto de combustível por Km;
3) Distancia em km da vaigem;

Imprima no console o valor que será gasto para realizar a viagem.


#### Resolucão Guiada do Exercício

```
let precoCombustivel = 5.79;
const KmPorLitro = 12;
let distanciaEmKm = 1580;

console.log ("o valor gasto será de R$ " + (precoCombustivel * (distanciaEmKm / KmPorLitro)).toFixed(2)); // corigindo as casas decimais para 2, o padrao do real.

```





