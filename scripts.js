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
    console.log(valorI)
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
    document.getElementById('H1').style.visibility='hidden';
document.getElementById('H2').style.visibility='hidden';
document.getElementById('H3').style.visibility='hidden';
document.getElementById('H4').style.visibility='hidden';
document.getElementById('H5').style.visibility='hidden';
document.getElementById('H6').style.visibility='hidden';
document.getElementById('H7').style.visibility='hidden';
document.getElementById('H8').style.visibility='hidden';
document.getElementById('H9').style.visibility='hidden';
document.getElementById('H10').style.visibility='hidden';
document.getElementById('H11').style.visibility='hidden';
document.getElementById('H12').style.visibility='hidden';
document.getElementById('H13').style.visibility='hidden';
document.getElementById('H14').style.visibility='hidden';
document.getElementById('H15').style.visibility='hidden';
document.getElementById('H16').style.visibility='hidden';
document.getElementById('H17').style.visibility='hidden';
document.getElementById('H18').style.visibility='hidden';
document.getElementById('H19').style.visibility='hidden';
document.getElementById('H20').style.visibility='hidden';
document.getElementById('H21').style.visibility='hidden';
document.getElementById('H22').style.visibility='hidden';
document.getElementById('H23').style.visibility='hidden';
document.getElementById('H24').style.visibility='hidden';
document.getElementById('H25').style.visibility='hidden';
document.getElementById('H26').style.visibility='hidden';
document.getElementById('H27').style.visibility='hidden';
document.getElementById('H28').style.visibility='hidden';
document.getElementById('H29').style.visibility='hidden';
document.getElementById('H30').style.visibility='hidden';
document.getElementById('H31').style.visibility='hidden';
document.getElementById('H32').style.visibility='hidden';
document.getElementById('H33').style.visibility='hidden';
document.getElementById('H34').style.visibility='hidden';
document.getElementById('H35').style.visibility='hidden';
document.getElementById('H36').style.visibility='hidden';
document.getElementById('H37').style.visibility='hidden';
document.getElementById('H38').style.visibility='hidden';
document.getElementById('H39').style.visibility='hidden';
document.getElementById('H40').style.visibility='hidden';
document.getElementById('H41').style.visibility='hidden';
document.getElementById('H42').style.visibility='hidden';
document.getElementById('H43').style.visibility='hidden';
document.getElementById('H44').style.visibility='hidden';
document.getElementById('H45').style.visibility='hidden';
document.getElementById('H46').style.visibility='hidden';
document.getElementById('H47').style.visibility='hidden';
document.getElementById('H48').style.visibility='hidden';
document.getElementById('H49').style.visibility='hidden';
document.getElementById('H50').style.visibility='hidden';
document.getElementById('H51').style.visibility='hidden';
document.getElementById('H52').style.visibility='hidden';
document.getElementById('H53').style.visibility='hidden';
document.getElementById('H54').style.visibility='hidden';
document.getElementById('H55').style.visibility='hidden';
document.getElementById('H56').style.visibility='hidden';
document.getElementById('H57').style.visibility='hidden';
document.getElementById('H58').style.visibility='hidden';
document.getElementById('H59').style.visibility='hidden';
document.getElementById('H60').style.visibility='hidden';
document.getElementById('H61').style.visibility='hidden';
document.getElementById('H62').style.visibility='hidden';
document.getElementById('H63').style.visibility='hidden';
document.getElementById('H64').style.visibility='hidden';
}

function stateChange() {
    setTimeout(function () {}, 1000);
}
function dibujarLinea(suma) {

    var estiloizq = document.querySelector("#Izquierdo");
    if (contador < 6) {
        //estiloizq.style.animation = "none";
        estiloizq.style.webkitAnimation = 'none';
        setTimeout(function() {
            estiloizq.style.webkitAnimation = '';
        }, 10);
        
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
            cuadrito()  
            dosHexagramas();
        }else if(contador == 6){
            cuadrito()  
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
    estilocen.style.webkitAnimation = 'none';
    setTimeout(function() {
        estilocen.style.webkitAnimation = '';
    }, 10);
    estiloder.style.webkitAnimation = 'none';
    setTimeout(function() {
        estiloder.style.webkitAnimation = '';
    }, 10);
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


function cuadrito(){
    if(valorI[0] == 6 & valorI[1] == 6 & valorI[2] == 6 & valorI[3] == 6 & valorI[4] == 6 & valorI[5] == 6 ){
        document.getElementById('H1').style.visibility= "visible";
    }
    else if (valorI[0] == 8 & valorI[1] == 8 & valorI[2] == 8 & valorI[3] == 8 & valorI[4] == 8 & valorI[5] == 8){
        document.getElementById('H2').style.visibility= "visible";
    }
    else if (valorI[0] == 7 & valorI[1] == 8 & valorI[2] == 8 & valorI[3] == 8 & valorI[4] == 7 & valorI[5] == 8){
        document.getElementById('H3').style.visibility= "visible";
    }
    else if (valorI[0] == 8 & valorI[1] == 7 & valorI[2] == 8 & valorI[3] == 8 & valorI[4] == 8 & valorI[5] == 7){
        document.getElementById('H4').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==7 & valorI[2]==7 & valorI[3]==8 & valorI[4]==7 & valorI[5]==8){
        document.getElementById('H5').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==7 & valorI[2]==8 & valorI[3]==7 & valorI[4]==7 &valorI[5]==7){
        document.getElementById('H6').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==7 & valorI[2]==8 & valorI[3]==8 & valorI[4]==8 &valorI[5]==8){
        document.getElementById('H7').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==8 & valorI[2]==8 & valorI[3]==8 & valorI[4]==7 &valorI[5]==8){
        document.getElementById('H8').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==7 & valorI[2]==7 & valorI[3]==8 & valorI[4]==7 &valorI[5]==7){
        document.getElementById('H9').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==7 & valorI[2]==8 & valorI[3]==7 & valorI[4]==7 &valorI[5]==7){
        document.getElementById('H10').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==7 & valorI[2]==7 & valorI[3]==8 & valorI[4]==8 &valorI[5]==8){
        document.getElementById('H11').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==8 & valorI[2]==8 & valorI[3]==7 & valorI[4]==7 &valorI[5]==7){
        document.getElementById('H12').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==8 & valorI[2]==7 & valorI[3]==7 & valorI[4]==7 &valorI[5]==7){
        document.getElementById('H13').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==7 & valorI[2]==7 & valorI[3]==7 & valorI[4]==8 &valorI[5]==7){
        document.getElementById('H14').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==8 & valorI[2]==7 & valorI[3]==8 & valorI[4]==8 &valorI[5]==8){
        document.getElementById('H15').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==8 & valorI[2]==8 & valorI[3]==7 & valorI[4]==8 &valorI[5]==8){
        document.getElementById('H16').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==8 & valorI[2]==8 & valorI[3]==7 & valorI[4]==7 &valorI[5]==8){
        document.getElementById('H17').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==7 & valorI[2]==7 & valorI[3]==8 & valorI[4]==8 &valorI[5]==7){
        document.getElementById('H18').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==7 & valorI[2]==8 & valorI[3]==8 & valorI[4]==8 &valorI[5]==8){
        document.getElementById('H19').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==8 & valorI[2]==8 & valorI[3]==8 & valorI[4]==7 &valorI[5]==7){
        document.getElementById('H20').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==8 & valorI[2]==8 & valorI[3]==7 & valorI[4]==8 &valorI[5]==7){
        document.getElementById('H21').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==8 & valorI[2]==7 & valorI[3]==8 & valorI[4]==8 &valorI[5]==7){
        document.getElementById('H22').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==8 & valorI[2]==8 & valorI[3]==8 & valorI[4]==8 &valorI[5]==7){
        document.getElementById('H23').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==8 & valorI[2]==8 & valorI[3]==8 & valorI[4]==8 &valorI[5]==8){
        document.getElementById('H24').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==8 & valorI[2]==8 & valorI[3]==7 & valorI[4]==7 &valorI[5]==7){
        document.getElementById('H25').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==7 & valorI[2]==7 & valorI[3]==8 & valorI[4]==8 &valorI[5]==7){
        document.getElementById('H26').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==8 & valorI[2]==8 & valorI[3]==8 & valorI[4]==8 &valorI[5]==7){
        document.getElementById('H27').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==7 & valorI[2]==7 & valorI[3]==7 & valorI[4]==7 &valorI[5]==8){
        document.getElementById('H28').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==7 & valorI[2]==8 & valorI[3]==8 & valorI[4]==7 &valorI[5]==8){
        document.getElementById('H29').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==8 & valorI[2]==7 & valorI[3]==7 & valorI[4]==8 &valorI[5]==7){
        document.getElementById('H30').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==8 & valorI[2]==7 & valorI[3]==7 & valorI[4]==7 &valorI[5]==8){
        document.getElementById('H31').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==7 & valorI[2]==7 & valorI[3]==7 & valorI[4]==8 &valorI[5]==8){
        document.getElementById('H32').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==8 & valorI[2]==7 & valorI[3]==7 & valorI[4]==7 &valorI[5]==7){
        document.getElementById('H33').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==7 & valorI[2]==7 & valorI[3]==7 & valorI[4]==8 &valorI[5]==8){
        document.getElementById('H34').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==8 & valorI[2]==8 & valorI[3]==7 & valorI[4]==8 &valorI[5]==7){
        document.getElementById('H35').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==8 & valorI[2]==7 & valorI[3]==8 & valorI[4]==8 &valorI[5]==8){
        document.getElementById('H36').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==8 & valorI[2]==7 & valorI[3]==8 & valorI[4]==7 &valorI[5]==7){
        document.getElementById('H37').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==7 & valorI[2]==8 & valorI[3]==7 & valorI[4]==8 &valorI[5]==7){
        document.getElementById('H38').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==8 & valorI[2]==7 & valorI[3]==8 & valorI[4]==7 &valorI[5]==8){
        document.getElementById('H39').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==7 & valorI[2]==8 & valorI[3]==7 & valorI[4]==8 &valorI[5]==8){
        document.getElementById('H40').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==7 & valorI[2]==8 & valorI[3]==8 & valorI[4]==8 &valorI[5]==7){
        document.getElementById('H41').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==8 & valorI[2]==8 & valorI[3]==8 & valorI[4]==7 &valorI[5]==7){
        document.getElementById('H42').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==7 & valorI[2]==7 & valorI[3]==7 & valorI[4]==7 &valorI[5]==8){
        document.getElementById('H43').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==7 & valorI[2]==7 & valorI[3]==7 & valorI[4]==7 &valorI[5]==7){
        document.getElementById('H44').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==8 & valorI[2]==8 & valorI[3]==7 & valorI[4]==7 &valorI[5]==8){
        document.getElementById('H45').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==7 & valorI[2]==7 & valorI[3]==8 & valorI[4]==8 &valorI[5]==8){
        document.getElementById('H46').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==7 & valorI[2]==8 & valorI[3]==7 & valorI[4]==7 &valorI[5]==8){
        document.getElementById('H47').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==7 & valorI[2]==7 & valorI[3]==8 & valorI[4]==7 &valorI[5]==8){
        document.getElementById('H48').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==8 & valorI[2]==7 & valorI[3]==7 & valorI[4]==7 &valorI[5]==8){
        document.getElementById('H49').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==7 & valorI[2]==7 & valorI[3]==7 & valorI[4]==8 &valorI[5]==7){
        document.getElementById('H50').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==8 & valorI[2]==8 & valorI[3]==7 & valorI[4]==8 &valorI[5]==8){
        document.getElementById('H51').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==8 & valorI[2]==7 & valorI[3]==8 & valorI[4]==8 &valorI[5]==7){
        document.getElementById('H52').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==8 & valorI[2]==7 & valorI[3]==8 & valorI[4]==7 &valorI[5]==7){
        document.getElementById('H53').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==7 & valorI[2]==8 & valorI[3]==7 & valorI[4]==8 &valorI[5]==8){
        document.getElementById('H54').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==8 & valorI[2]==7 & valorI[3]==7 & valorI[4]==8 &valorI[5]==8){
        document.getElementById('H55').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==8 & valorI[2]==7 & valorI[3]==7 & valorI[4]==8 &valorI[5]==7){
        document.getElementById('H56').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==7 & valorI[2]==7 & valorI[3]==8 & valorI[4]==7 &valorI[5]==7){
        document.getElementById('H57').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==7 & valorI[2]==8 & valorI[3]==7 & valorI[4]==7 &valorI[5]==8){
        document.getElementById('H58').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==7 & valorI[2]==8 & valorI[3]==8 & valorI[4]==7 &valorI[5]==7){
        document.getElementById('H59').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==7 & valorI[2]==8 & valorI[3]==8 & valorI[4]==7 &valorI[5]==8){
        document.getElementById('H60').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==7 & valorI[2]==8 & valorI[3]==8 & valorI[4]==7 &valorI[5]==7){
        document.getElementById('H61').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==8 & valorI[2]==7 & valorI[3]==7 & valorI[4]==8 &valorI[5]==8){
        document.getElementById('H62').style.visibility= "visible";
    }
    else if (valorI[0]==7 & valorI[1]==8 & valorI[2]==7 & valorI[3]==8 & valorI[4]==7 &valorI[5]==8){
        document.getElementById('H63').style.visibility= "visible";
    }
    else if (valorI[0]==8 & valorI[1]==7 & valorI[2]==8 & valorI[3]==7 & valorI[4]==8 &valorI[5]==7){
        document.getElementById('H64').style.visibility= "visible";
    }
}