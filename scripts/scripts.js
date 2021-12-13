/* eslint-disable indent */
const form = document.getElementById("formulary");

/*
form.addEventListener("submit", function (event) {
	event.preventDefault();
});
*/
//mesma função como arrow function
form.addEventListener("submit", (event) =>	{
    event.preventDefault();
    validation();     
});

function validation (){
    let imputSexo = document.getElementById("sexo"),
        imputIdade =  document.getElementById("idade"),
        imputAltura = document.getElementById("altura"),
        imputPeso  = document.getElementById("peso"),
        idade =  parseInt(imputIdade.value),
        altura = parseInt(imputAltura.value),
        peso  = parseInt(imputPeso.value);

    if (imputSexo.value === ""){
        alert("Escolha seu genero!");
        imputSexo.focus();
        return;
    }
    if (!idade){
        alert("Idade faltando ou errada!");
        imputIdade.focus();
        return;
    } 
    if (!altura){
        alert("Coloque sua altura em cm!");
        imputAltura.focus();
        return;
    } 
    if (!peso){
        alert("Coloque seu peso!");
        imputPeso.focus();
        return;
    }

    calcIMC((altura/100), peso);
}

function calcIMC (altura, peso) {
    let imc = peso/(altura*altura);
    let text;

    if (imc < 18.5){
        text = `Seu IMC é ${imc.toFixed(2)} (Abaixo do peso ideal)`;
    } else if (imc < 24.9) {
        text = `Seu IMC é ${imc.toFixed(2)} (Peso normal)`;
    } else if (imc < 29.9) {
        text = `Seu IMC é ${imc.toFixed(2)} (Sobrepeso)`;
    } else if (imc < 34.9) {
        text = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`;
    } else if (imc < 39) {
        text = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`;
    } else if (imc > 40) {
        text = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)`;
    }

    criarElemento(text);
}




function criarElemento (text) {
    // const divAtual = document.getElementById("resultado");
    // const p = document.createElement("p");        
    // const conteudo = document.createTextNode(text);
    // p.appendChild(conteudo);
    // divAtual.appendChild(p);

    document.getElementById("resultado").innerHTML = text;

 
}

