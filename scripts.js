var valorI = new Array(); //Para usar el div libre que esta mas a la izquierda
var hexa = document.createElement("p");
var contador=0;

function verificarValor() {

    var valores = document.getElementsByName("Valor"); //Obtener el arreglo con los valores ingresados
    var alerta = false;
    var aviso = "";
    var suma = 0;
    var val1 = parseInt(valores[0].value); //Valor de la caja 1

    if (val1 == 2 || val1 == 3) {
        suma += val1;
    } else {
        aviso += "Error en el Valor 1\n";
        alerta = true;
    }
    var val2 = parseInt(valores[1].value); //Valor de la caja 2
    if (val2 == 2 || val2 == 3) {
        suma += val2;
    } else {
        aviso += "Error en el Valor 2\n";
        alerta = true;
    }
    var val3 = parseInt(valores[2].value); //Valor de la caja 3
    if (val3 == 2 || val3 == 3) {
        suma += val3;
    } else {
        aviso += "Error en el Valor 3\n";
        alerta = true;
    }
    if (alerta) { //Si la alerta se activa con un true, significa que alguno de los valores ingresados no es correct
        alert(aviso); //La linea no puede ser agregada,y se notifica con un alert
    } else {
        dibujarLinea(suma, "Izquierdo");
    }

}
function verHexa(valor, id) {
    var pila = "";
    for (var i = valor.length - 1; i >= 0; i--) { //ver el hexagrama desde abajo hacia arriba
        pila += valor[i] + "\n";
    }
    hexa.innerText = pila;
    document
        .getElementById(id)
        .appendChild(hexa);
}
function borrarLinea() {
    valorI.pop();
    verHexa(valorI, "Izquierdo");
}
function borrarHexa() {
    while (valorI.length > 0) {
        valorI.pop()
    }
    verHexa(valorI, "Izquierdo");
}

function dibujarLinea(suma) {
    switch (suma) {
        case 6:
            var izq = document.getElementById('izq');
            if (izq.getContext) {
                var canizq = izq.getContext('2d');
                canizq.shadowBlur=5;
                canizq.shadowOffsetY=6;
                canizq.shadowOffsetX=2;
                canizq.shadowColor="#333";
                canizq.beginPath();

                canizq.moveTo(0, 240 - 42 * contador); //198
                canizq.lineTo(115, 240 - 42 * contador);
                canizq.moveTo(135, 240 - 42 * contador); //198
                canizq.lineTo(250, 240 - 42 * contador);
                canizq.font = "bold 22px sans-serif";
                canizq.fillText("X",118,232-42*contador);

                canizq.lineWidth = 5;
                canizq.stroke();
            }
            contador += 1;
            break;

        case 7: //YANG
            var izq = document.getElementById('izq');
            if (izq.getContext) {
                var canizq = izq.getContext('2d');
                canizq.shadowBlur=5;
                canizq.shadowOffsetY=6;
                canizq.shadowOffsetX=2;
                canizq.shadowColor="#333";
                canizq.beginPath();

                canizq.moveTo(0, 240 - 42 * contador); //198
                canizq.lineTo(250, 240 - 42 * contador);

                canizq.lineWidth = 5;
                canizq.stroke();
            }
            contador += 1;
            break;

        case 8: //Yin
            var izq = document.getElementById('izq');
            if (izq.getContext) {
                var canizq = izq.getContext('2d');
                canizq.shadowBlur=5;
                canizq.shadowOffsetY=6;
                canizq.shadowOffsetX=2;
                canizq.shadowColor="#333";
                canizq.beginPath();

                canizq.moveTo(0, 240 - 42 * contador); //198
                canizq.lineTo(115, 240 - 42 * contador);
                canizq.moveTo(135, 240 - 42 * contador); //198
                canizq.lineTo(250, 240 - 42 * contador);

                canizq.lineWidth = 5;
                canizq.stroke();
            }
            contador += 1;
            break;

        case 9: //YANG mutante
            var izq = document.getElementById('izq');
            if (izq.getContext) {
                var canizq = izq.getContext('2d');
                canizq.shadowBlur=5;
                canizq.shadowOffsetY=6;
                canizq.shadowOffsetX=2;
                canizq.shadowColor="#333";
                canizq.beginPath();

                canizq.moveTo(0, 240 - 42 * contador); //198
                canizq.lineTo(250, 240 - 42 * contador);
                canizq.font = "bold 22px sans-serif";
                canizq.fillText("O",118,232-42*contador);
                canizq.lineWidth = 5;
                canizq.stroke();
            }
            contador += 1;
            break;
        default:
            break;

    }
    

    var cen = document.getElementById('centro');
    if (cen.getContext) {
        var cancen = cen.getContext('2d');

    }

    var der = document.getElementById('der');
    if (der.getContext) {
        var cander = der.getContext('2d');

    }

}