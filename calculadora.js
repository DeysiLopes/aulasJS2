function calculadora(){
    const op = Number(prompt('Escolha uma operação: \n 1 - soma \n 2 - subtração \n 3 - Divisão \n 4 - Multiplicação'));

    let n1 = Number(prompt('Insira um numero '));
    let n2 = Number(prompt('Insira outro numero '));
    let resultado;

function soma(){
    resultado = n1+n2;
    alert(`${n1} + ${n2} = ${resultado}`);
}
function subtr(){
    resultado = n1-n2;
    alert(`${n1} - ${n2} = ${resultado}`);
}
function div(){
    resultado = n1/n2;
    alert(`${n1} / ${n2} = ${resultado}`);
}
function mult(){
    resultado = n1*n2;
    alert(`${n1} * ${n2} = ${resultado}`);
}


if(op ==1){
    soma();
}else if(op== 2){
    subtr()
} else if(op==3){
    div()
}else if(op==4){
    mult()
}else {
    console.log('operção invalida')
}

}
calculadora();