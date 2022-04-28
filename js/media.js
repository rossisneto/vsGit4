let notas = [];
let somatorio = 0;
let media=0;

for(let i=0;i<4;i++){
    notas[i]=prompt("Informe a nota "+(i+1)+": ");
    notas[i]=parseInt(notas[i]);
    somatorio=somatorio+notas[i];
    //document.write(typeof(notas[i])+"<br>");
}

//calculando a media
//formula de calculo: soma das notas dividido pela quantidade de notas
media=somatorio/4;


//verificando se o aluno foi aprovado
if(media>=6){
    document.write("O aluno foi APROVADO com media "+media);
}

else{

    document.write("O aluno foi REPROVADO já que obteve a media "+media);
}


//exibindo o resultado
document.write("<br><br>As notas informadas foram: <br>");
document.write(notas);
