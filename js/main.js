const bloque  = document.querySelectorAll('.bloque')
const subtitle = document.querySelectorAll('.subtitle')

 //Cuando se hace CLICK en los h2=
                //Se quita la clase activo de todos los bloques, esto hace que se contraiga todo el contenido.
                //Despues se agrega la clase activo, pero solo al bloque clickeado.


//Se recorren todos los h2
subtitle.forEach( (cadaSubtitle, i) =>{
    //Se le asigna un Click a cada h2
    subtitle[i].addEventListener('click', ()=>{

        //Se recorren todos los bloque
        bloque.forEach( (cadaBloque, i) =>{
            //Se quita la clase activo de todos los bloques
            bloque[i].classList.remove('activo')
        })
        //Se le asigna la clase activo, pero solo al bloque donde se registra el click
        bloque[i].classList.add('activo')
    })
} )
