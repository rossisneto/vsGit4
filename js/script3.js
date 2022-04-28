//Calcular a idade de uma pessoa com base no seu ano de nascimento
//2022-anoNascimento

//Declaração de variaveis
let anoNascimento;
let anoAtual=2022;
let idade;

//Recebendo data de nascimento do cliente
anoNascimento=prompt("Informe o ano do seu nascimento: ");

//convertendo os dados de entrada para number
anoNascimento=parseInt(anoNascimento);

//realizando o calculo de idade
idade=anoAtual-anoNascimento;

//exibindo o resultado
document.write("Em "+anoAtual+" você completa "+idade+" anos");