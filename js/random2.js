let aleatorio=0;
let chute=0;

//Gerando o numero aleatoriamente
aleatorio=Math.floor(Math.random() * 100);

//Solicitando o chute para o usuario e Convertendo a entrada de dados
chute=parseInt(prompt("Pode chutar: "));

//Loop de repetição enquanto nao acerta o chute
//verifica se acertou, caso nao tenha acertado 
//dá a dica se o chute é um numero maior ou menor que aleatorio

while(chute!=aletorio){
    debugguer;
    //Fornecendo a dica para o cliente
    if(chute>aleatorio){
        alert("Seu chute é MAIOR do que o meu numero");
    }
    else{
        alert("Seu chute é MENOR do que o meu numero");

    }

    //Atualizar o chute
    chute=parseInt(prompt("Pode chutar: "));
}

//Escrever mensagem de sucesso
document.write("<h1>Você acertou, eu pensei no numero "+chute+"</h1>");