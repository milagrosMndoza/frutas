
var Afruta = [];

var agregarFruta = document.getElementById('agregarFruta');
agregarFruta.onclick = function () {
var frutita = document.getElementById("fruta").value;
Afruta.push(frutita);
  
  printHTML(mergeHTML());
};
//Función que une todas las compras guardadas en el array productos
function mergeHTML (){
  var html = '';
  for (i=0; i<Afruta.length; i++){
    html += (i+1)+ " "+Afruta[i]+ "<br>";
  }
  return html;
}

//función que imprime un producto luego de ingresarlo
function printHTML (html){
  //records.innerHTML = '';
  fruta.value="";
  lista.innerHTML = html;
}


var printAll = document.getElementById('print');
function printAll() {
  printHTML(mergeHTML());
}