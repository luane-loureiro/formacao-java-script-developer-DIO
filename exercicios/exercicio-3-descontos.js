let precoProduto = 200;

let p1 = "debito";
let p2 = "dinheiro ou Pix" ;
let p3 = "credito 2x" ;
let p4 = "credito" ;

let pagamento = p4;

if (pagamento===p1) {
    console.log (" forma de pagamento " + p1 + ", valor a pagar R$" + (precoProduto - (precoProduto * 0.1)));
} else if (pagamento===p2) {
    console.log (" forma de pagamento " + p2 + ", valor a pagar R$" + (precoProduto - (precoProduto * 0.15)));
} else if (pagamento===p3) {
    console.log (" forma de pagamento" + p3 + ", valor a pagar R$" + (precoProduto));
} else {
    console.log (" forma de pagamento "+ p4 + ", valor a pagar R$" + (precoProduto + (precoProduto * 0.1)));
}
