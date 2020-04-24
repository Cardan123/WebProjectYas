var valorI = new Array(); //Para usar el div libre que esta mas a la izquierda
var hexa = document.createElement("p");
var contador=0;
var arriba=380;
var altura=0;
var mutantes=0;
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

function borrarLinea() {
    if (contador != 0) {
        var estiloizq = document.querySelector("#Izquierdo");
        var estilocen = document.querySelector("#Central");
        var estiloder = document.querySelector("#Derecho");
        var izq = document.getElementById('izq');
        var cen = document.getElementById('centro');
        var der = document.getElementById('der');

        var canizq = izq.getContext('2d');
        var cancen = cen.getContext('2d');
        var cander = der.getContext('2d');

        
        arriba += 47;
        altura -= 50;
        estiloizq.style.top = arriba + "px";
        estiloizq.style.height = altura + "px";
        estilocen.style.top = "98px";
        estilocen.style.height = "0px";
        estiloder.style.top = "98px";
        estiloder.style.height = "0px";
        switch(contador) {
            case 1: canizq.clearRect(0, 0, izq.width, 300);
            case 2: canizq.clearRect(0, 0, izq.width, 240);
            case 3: canizq.clearRect(0, 0, izq.width, 195);
            case 4: canizq.clearRect(0, 0, izq.width, 150);
            case 5: canizq.clearRect(0, 0, izq.width, 105);
            case 6: canizq.clearRect(0, 0, izq.width, 60);

        }


        cancen.clearRect(0, 0, cen.width, cen.height);
        cander.clearRect(0, 0, der.width, der.height);
        contador -= 1;
    }
    valorI.pop();

}

function borrarHexa() {
    if (contador != 0) {
        var estiloizq = document.querySelector("#Izquierdo");
        var estilocen = document.querySelector("#Central");
        var estiloder = document.querySelector("#Derecho");
        var izq = document.getElementById('izq');
        var cen = document.getElementById('centro');
        var der = document.getElementById('der');

        var canizq = izq.getContext('2d');
        var cancen = cen.getContext('2d');
        var cander = der.getContext('2d');

        contador = 0;
        arriba = 380;
        altura = 0;
        estiloizq.style.top ="360px";
        estiloizq.style.height ="0px";
        estilocen.style.top = "98px";
        estilocen.style.height = "0px";
        estiloder.style.top = "98px";
        estiloder.style.height = "0px";
        canizq.clearRect(0, 0, izq.width, izq.height);
        cancen.clearRect(0, 0, cen.width, cen.height);
        cander.clearRect(0, 0, der.width, der.height);

        
    }
    valorI=[];
}

function dibujarLinea(suma) {

    var estiloizq = document.querySelector("#Izquierdo");
    if (contador < 6) {
        arriba -= 47;
        altura += 50;
        estiloizq.style.top = arriba + "px";
        estiloizq.style.height = altura + "px";
        switch (suma) {
            case 6: //YIN MUTANTE
                valorI.push(6);
                mutantes = 1;
                var izq = document.getElementById('izq');
                if (izq.getContext) {
                    var canizq = izq.getContext('2d');
                    canizq.shadowBlur = 5;
                    canizq.shadowOffsetY = 6;
                    canizq.shadowOffsetX = 2;
                    canizq.shadowColor = "#333";
                    canizq.beginPath();

                    canizq.moveTo(10, 270 - 45 * contador); //198
                    canizq.lineTo(140, 270 - 45 * contador);
                    canizq.moveTo(160, 270 - 45 * contador); //198
                    canizq.lineTo(290, 270 - 45 * contador);
                    canizq.font = "bold 22px sans-serif";
                    canizq.fillText("X", 145, 262 - 45 * contador);

                    canizq.lineWidth = 5;
                    canizq.stroke();
                }
                contador += 1;
                break;

            case 7: //YANG
                valorI.push(7);

                var izq = document.getElementById('izq');
                if (izq.getContext) {
                    var canizq = izq.getContext('2d');
                    canizq.shadowBlur = 5;
                    canizq.shadowOffsetY = 6;
                    canizq.shadowOffsetX = 2;
                    canizq.shadowColor = "#333";
                    canizq.beginPath();

                    canizq.moveTo(10, 270 - 45 * contador); //198
                    canizq.lineTo(290, 270 - 45 * contador);

                    canizq.lineWidth = 5;
                    canizq.stroke();
                }
                contador += 1;
                break;

            case 8: //Yin
                valorI.push(8);

                var izq = document.getElementById('izq');
                if (izq.getContext) {
                    var canizq = izq.getContext('2d');
                    canizq.shadowBlur = 5;
                    canizq.shadowOffsetY = 6;
                    canizq.shadowOffsetX = 2;
                    canizq.shadowColor = "#333";
                    canizq.beginPath();

                    canizq.moveTo(10, 270 - 45 * contador); //198
                    canizq.lineTo(140, 270 - 45 * contador);
                    canizq.moveTo(160, 270 - 45 * contador); //198
                    canizq.lineTo(290, 270 - 45 * contador);

                    canizq.lineWidth = 5;
                    canizq.stroke();
                }
                contador += 1;
                break;

            case 9: //YANG mutante
                valorI.push(9);

                mutantes = 1;
                var izq = document.getElementById('izq');
                if (izq.getContext) {
                    var canizq = izq.getContext('2d');
                    canizq.shadowBlur = 5;
                    canizq.shadowOffsetY = 6;
                    canizq.shadowOffsetX = 2;
                    canizq.shadowColor = "#333";
                    canizq.beginPath();

                    canizq.moveTo(10, 270 - 45 * contador); //198
                    canizq.lineTo(290, 270 - 45 * contador);
                    canizq.font = "bold 22px sans-serif";
                    canizq.fillText("O", 145, 262 - 45 * contador);
                    canizq.lineWidth = 5;
                    canizq.stroke();
                }
                contador += 1;
                break;
            default:
                break;

        }
        if (contador == 6 && mutantes) {
            dosHexagramas();
        }
    }
}

function dosHexagramas(){
    var estilocen = document.querySelector("#Central");
    var estiloder = document.querySelector("#Derecho");
    estilocen.style.top = "98px";
    estilocen.style.height = "300px";
    estiloder.style.top = "98px";
    estiloder.style.height = "300px";
    contador1=0;
    valorI.forEach(elemento => {

    switch (elemento) {
        case 6:  //YIN MUTANTE

            var cen = document.getElementById('centro');
            var der = document.getElementById('der');
            if (cen.getContext) {

                var cancen = cen.getContext('2d');
                var cander = der.getContext('2d');

                cancen.shadowBlur=5;
                cancen.shadowOffsetY=6;
                cancen.shadowOffsetX=2;
                cancen.shadowColor="#333";
                cancen.beginPath();
                cancen.moveTo(10, 270 - 45 * contador1); //198
                cancen.lineTo(140, 270 - 45 * contador1);
                cancen.moveTo(160, 270 - 45 * contador1); //198
                cancen.lineTo(290, 270 - 45 * contador1);
                cancen.lineWidth = 5;
                cancen.stroke();

                cander.shadowBlur=5;
                cander.shadowOffsetY=6;
                cander.shadowOffsetX=2;
                cander.shadowColor="#333";
                cander.beginPath();
                cander.moveTo(10, 270 - 45 * contador1); //198
                cander.lineTo(290, 270 - 45 * contador1);
                cander.lineWidth = 5;
                cander.stroke();



            }
            contador1 += 1;
            break;

        case 7: //YANG


            var cen = document.getElementById('centro');
            var der = document.getElementById('der');

            if (cen.getContext) {

                var cancen = cen.getContext('2d');
                var cander = der.getContext('2d');

                cancen.shadowBlur=5;
                cancen.shadowOffsetY=6;
                cancen.shadowOffsetX=2;
                cancen.shadowColor="#333";
                cancen.beginPath();
                cancen.moveTo(10, 270 - 45 * contador1); //198
                cancen.lineTo(290, 270 - 45 * contador1);
                cancen.lineWidth = 5;
                cancen.stroke();

                cander.shadowBlur=5;
                cander.shadowOffsetY=6;
                cander.shadowOffsetX=2;
                cander.shadowColor="#333";
                cander.beginPath();
                cander.moveTo(10, 270 - 45 * contador1); //198
                cander.lineTo(290, 270 - 45 * contador1);
                cander.lineWidth = 5;
                cander.stroke();



            }
            contador1 += 1;
            break;

        case 8: //Yin


            var cen = document.getElementById('centro');
            var der = document.getElementById('der');
            

            if (cen.getContext) {
                var cancen = cen.getContext('2d');
                var cander = der.getContext('2d');

                cancen.shadowBlur=5;
                cancen.shadowOffsetY=6;
                cancen.shadowOffsetX=2;
                cancen.shadowColor="#333";
                cancen.beginPath();
                cancen.moveTo(10,  270 - 45 * contador1); //198
                cancen.lineTo(140, 270 - 45 * contador1);
                cancen.moveTo(160, 270 - 45 * contador1); //198
                cancen.lineTo(290, 270 - 45 * contador1);
                cancen.lineWidth = 5;
                cancen.stroke();

                cander.shadowBlur=5;
                cander.shadowOffsetY=6;
                cander.shadowOffsetX=2;
                cander.shadowColor="#333";
                cander.beginPath();
                cander.moveTo(10,  270 - 45 * contador1); //198
                cander.lineTo(140, 270 - 45 * contador1);
                cander.moveTo(160, 270 - 45 * contador1); //198
                cander.lineTo(290, 270 - 45 * contador1);
                cander.lineWidth = 5;
                cander.stroke();

            }
            contador1 += 1;
            break;

        case 9: //YANG mutante

            var cen = document.getElementById('centro');
            var der = document.getElementById('der');

            if (cen.getContext) {

                var cancen = cen.getContext('2d');
                var cander = der.getContext('2d');
                
                cancen.shadowBlur=5;
                cancen.shadowOffsetY=6;
                cancen.shadowOffsetX=2;
                cancen.shadowColor="#333";
                cancen.beginPath();
                cancen.moveTo(10, 270 - 45 * contador1); //198
                cancen.lineTo(290, 270 - 45 * contador1);
                cancen.lineWidth = 5;
                cancen.stroke();

                cander.shadowBlur=5;
                cander.shadowOffsetY=6;
                cander.shadowOffsetX=2;
                cander.shadowColor="#333";
                cander.beginPath();
                cander.moveTo(10,  270 - 45 * contador1); //198
                cander.lineTo(140, 270 - 45 * contador1);
                cander.moveTo(160, 270 - 45 * contador1); //198
                cander.lineTo(290, 270 - 45 * contador1);
                cander.lineWidth = 5;
                cander.stroke();
            
            }
            contador1 += 1;
            break;
        default:
            break;

    }
    });

mutantes=0;
}

