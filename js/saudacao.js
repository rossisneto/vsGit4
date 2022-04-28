let hora=0;
let saudacao="";

//recebendo a hora informada pelo cliente
hora=prompt("Informe a hora: ");

//realizando a conversão de string para numero
hora=parseInt(hora);

if (hora>6 && hora<12) {
    saudacao = "Bom dia!!!";
  } else if (hora >= 12 && hora<18) {
    saudacao = "Boa tarde!!";
  } else {
    saudacao = "Boa Noite!!!";
  }

  document.write("<h1>"+saudacao+"</h1");