//programa que recebe 5 numeros informados pelo usuario, verifica qual deles é o maior e exibe no html
//***como complemento, pode exibir todos os números que foram fornecidos

//Declaração de variaveis
let maior=0;
let valor=0;
let valores="";


//Laço de repetição para leitura dos valores
for(let i=0;i<5;i++){
    //solicitando os dados para o usuario
    valor=prompt("Informe o valor "+(i+1)+": ");
    
    //registrando os valores informados via prompt
    if(i==0){
        valores=valor;
    }
    else{
        valores=valores + ", " + valor;
    }
    

    //verificando se o valor informado é maior do que o valor anteriormente armazenado em maior
    if(valor>maior){
        maior=valor;
    }
}

//Exibindo a saida no html
document.write("<h1>Os valores informados foram: "+ valores+"</h1>");
document.write("<p>O maior valor dentro dos 5 valores informados é: "+maior+"</p>");

