function inserir(btn_value){

    var expressao = document.getElementById('resultado').innerHTML;
    
    switch (btn_value) {
        case '+':
            verificaExpressao(btn_value, expressao);
            break;
        case '-':
            verificaExpressao(btn_value, expressao);
            break;
        case '/':
            verificaExpressao(btn_value, expressao);
            break;
        case '*':
            verificaExpressao(btn_value, expressao);
            break;
        case '.':
            verificaExpressao(btn_value, expressao);
            break
        default:
            document.getElementById('resultado').innerHTML = expressao + btn_value;
            break;
    }
}

function verificaExpressao(operador, expressao){
    const ultimoValor = expressao.substring(expressao.length - 1, expressao.length);
    
    if (expressao == '') {
        document.getElementById('resultado').innerHTML = '0' + operador;
    }
    else if (ultimoValor == operador) {
        document.getElementById('resultado').innerHTML = expressao;
    }
    else if(ultimoValor == '+' || ultimoValor == '-' || ultimoValor == '/' || ultimoValor == '*'){
        document.getElementById('resultado').innerHTML = expressao.substring(0, expressao.length -1) + operador;
    }
    else{
        document.getElementById('resultado').innerHTML = expressao + operador;
    }
}

function limpar() {
    document.getElementById('resultado').innerHTML = "";
}

function apagar(){
    var x = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = x.substring(0, x.length - 1);
}

function calcular(){
    const resultado = document.getElementById('resultado').innerHTML;

    if (resultado != "") {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else if (resultado == ""){
        document.getElementById('resultado').innerHTML = "Valor inválido";
    }
}