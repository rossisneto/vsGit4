//Recebe numero informado pelo usuario, 
//exibe no html a tabuada com a operação 
//multiplicação para os numeros de 1 a 10

//Declaração de variaveis
let numero;

//Recebendo o numero informado pelo usuario
numero=prompt("Informe um numero para o calculo da tabuada: ");

//convertendo a entrada
numero=parseInt(numero);

document.write("<h1>Tabuada do numero "+numero+"</h1>");

for(let i=1;i<=10;i++){
    document.write("<p>"+numero + " X " + i + " = "+(numero*i)+"</p>");
}
