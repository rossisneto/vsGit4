//formula para gerar numero aleatorio

let aleatorio=0, palpite=0;

aleatorio=Math.floor(Math.random() * 100);

//Recebendo o chute do usuario
palpite=prompt("Tente adivinhar o meu numero: ")

//Realizando a conversão dos dados de entrada
palpite=parseInt(palpite);

while(palpite!=aleatorio){
    if(palpite<aleatorio){
        alert("Tente novamente, o meu numero é MAIOR");
    }
    else{
        alert("Tente novamente, o meu numero é MENOR");
    }

    //Recebendo o chute do usuario
    palpite=prompt("Tente adivinhar o meu numero: ")
    //Realizando a conversão dos dados de entrada
    palpite=parseInt(palpite);

}

document.write("<h1>Você acertou, eu pensei no numero "+aleatorio+"</h1>")