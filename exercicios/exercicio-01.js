let precoCombustivel = 5.79;
const KmPorLitro = 12;
let distanciaEmKm = 1580;


console.log ("o valor gasto será de R$ " + (precoCombustivel * (distanciaEmKm / KmPorLitro)).toFixed(2)); // corigindo as casas decimais para 2, o padrao do real.
