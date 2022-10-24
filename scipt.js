String.prototype.replaceAt = function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); 
} 
const palabras =['casa', 'perro', 'mascota', 'familia'];

const palabra= palabras[Math.floor(Math.random()*palabras.length)];

let palabraconGuiones=palabra.replace(/./g, "_ ");
let contadorfallos = 0;

document.querySelector('#output').innerHTML = palabraconGuiones;
document.querySelector('#calcular').addEventListener('click', ()=>{   
    const letra=document.querySelector('#letra').value;
    let haFallado = true;
      for(const i in palabra){     
        if (letra==palabra[i]){
            palabraconGuiones = palabraconGuiones.replaceAt(i*2, letra);
            haFallado = false;

        }
    }
if( haFallado){
    contadorfallos++;
    document.querySelector('#ahorcado').style.backgroundPosition = -(165*contadorfallos) + 'px 0';
    if(contadorfallos==4){
        alert("Perdiste el juego");
    }

}else{
    if(palabraconGuiones.indexOf('_')<0){
        alert("Ganaste");
    }
}
document.querySelector('#output').innerHTML = palabraconGuiones;

document.querySelector('#letras').value = '';
document.querySelector('#letras').focus();

});
