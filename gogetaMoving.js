let gogeta = document.getElementById('personaje1')
let posicionInicialgogetaX = (document.querySelector('.container').offsetWidth/3 )


let altoPantalla = 440
let desplazamientoMaxX = (document.querySelector('.container').offsetWidth / 2 - 200)


function movergogeta(nombre, posicionX, posicionY) {

    nombre.style.left= `${posicionX}px`
    nombre.style.bottom= `${20}px`

    document.addEventListener('keypress',(e)=>{
        
        if(timer <= 0) return

        if (janembaLife <= 0 && e.key !== 'r' && e.key !== 't')  return;

        if(modal.classList.contains('opacity1')) return


        if( e.key == "d"){
            posicionX += 20
            nombre.style.left= `${posicionX}px`
            if(posicionX >= desplazamientoMaxX ){
                nombre.style.left= `${desplazamientoMaxX}px`
                posicionX = desplazamientoMaxX
            }
        } 
        
        if( e.key == "a"){
            posicionX -= 20
            nombre.style.left= `${posicionX}px`
            if(posicionX <= 0 ){
                nombre.style.left= `0px`
                posicionX  = 0
            }
        }


    })
}


movergogeta(gogeta , posicionInicialgogetaX, 20)











