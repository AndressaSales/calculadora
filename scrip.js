function adi(){
    const num01 = document.querySelector('#num01');
    const num02 = document.querySelector('#num02');
    const resposta = document.querySelector('#res');

    let numero01 = Number(num01.value);
    let numero02 = Number(num02.value);
    conta = numero01 + numero02;
    resposta.textContent = `${conta}`
}

function sub(){
    const num01 = document.querySelector('#num01').value;
    const num02 = document.querySelector('#num02').value;
    const resposta = document.querySelector('#res');
    
    conta = num01 - num02;
    resposta.textContent = `${conta}`
}

function mul(){
    const num01 = document.querySelector('#num01').value;
    const num02 = document.querySelector('#num02').value;
   const resposta = document.querySelector('#res');

   conta = num01 * num02;
   resposta.textContent =`${conta}`
}

function div(){
    const num01 = document.querySelector('#num01').value;
    const num02 = document.querySelector('#num02').value;
   const resposta = document.querySelector('#res');

   conta = num01 / num02;
   resposta.textContent = `${conta}`
}