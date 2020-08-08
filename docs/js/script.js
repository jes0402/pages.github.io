var posicion = 0;
var imagenes = document.getElementsByClassName("img_slider");
console.log(imagenes);

if (imagenes.length != 0){
  imagenes[0].classList.add("active");

  var anterior =document.getElementById("slider_button-prev");
  var siguiente =document.getElementById("slider_button-next");

  anterior.addEventListener('click', moverAnterior.bind(this));
  siguiente.addEventListener('click', moverSiguiente.bind(this));
} else {
alert("Dónde están las imágenes?");
}
function moverAnterior(){
  this.imagenes[this.posicion].classList.remove("active");
     if (this.posicion - 1 < 0) {
         this.posicion = this.imagenes.length - 1;
     } else {
         this.posicion = this.posicion - 1;
     }
     this.imagenes[this.posicion].classList.add("active");
 }

function moverSiguiente(){
  this.imagenes[this.posicion].classList.remove("active");
    if (this.posicion + 1 >= this.imagenes.length) {
        this.posicion = 0;
    } else {
        this.posicion = this.posicion + 1;
    }
    this.imagenes[this.posicion].classList.add("active");
}