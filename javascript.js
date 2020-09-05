var imagenes = ['assets/img/imagen1.png','assets/img/imagen2.png','assets/img/imagen3.png','assets/img/imagen4.png', 'assets/img/imagen5.png','assets/img/imagen6.png'];
    cont = 0;

function carrousel(contenedor5) {
    contenedor5.addEventListener('click', e =>{
        let atras = coontenedor5.querySelector('.atras'),
        adelante = coontenedor5.querySelector('.adelante'),
            img = contenedor5.querySelector('img'),
            tgt = e.target;

        if (tgt == atras) {
            if (cont > 0) {
                img.src = imagenes[cont - 1];
                cont--;
            }
            else {
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        }else if (tgt == adelante){
            if (cont < imagenes.length - 1) {
                img.src = imagenes[cont + 1];
                cont ++;
            }
            else {
                img.src = imagenes[0];
                cont = 0;
            }
        }

    });
}

document.addEventListener ("DOMContentLoaded", ()=>{
    let contenedor= document.queryselector('.contenedor5');
    carrousel(contenedor);
});
