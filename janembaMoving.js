let janemba = document.getElementById('personaje2')

let posicionInicialJanembaX = (document.querySelector('.container').offsetWidth/3 + 200 )
janemba.style.left = `${posicionInicialJanembaX}px`

let numero = 0



let gifEspecialActivado = false; 

setInterval(() => {

    numero = Math.floor(Math.random()*10)

    if(numero == 1){
        if(janemba.offsetLeft  > 567 ) return
        janemba.src = './gifs/janemba/volteado/basico-espada-unscreen.gif'
        janemba.style.maxHeight = '700px'
        janemba.style.height = '350px'

        // Descontar vida a gogeta : gogeta r y está en rango
        if(gogeta.offsetWidth > 127 && (janemba.offsetLeft < gogeta.offsetLeft +230) ){
            gogetaLife -= 100
            barGogeta.style.width = `${barGogeta.offsetWidth + 100}px`

            if(gogetaLife <=0){
                abrirModal()
            } 
        } 

        setTimeout(() => {
            janemba.style.maxHeight = '250px'
            janemba.style.height = '250px'
            janemba.src = './gifs/janemba/volteado/image (20).png'
        }, 700);
    }


    
    if(numero == 0){
        janemba.src = './gifs/janemba/volteado/desaparecer-unscreen.gif'
        
        setTimeout(() => {
            janemba.style.maxHeight = '250px'
            janemba.src = './gifs/janemba/volteado/image (20).png'

        }, 700);

    }


    if(numero > 3 && !suerte){

        if(janemba.offsetLeft > 700  ) return
        janemba.src = './gifs/janemba/volteado/skill-unscreen.gif'

        
        // Descontar vida a gogeta : gogeta r y está en rango
        if( gogeta.offsetWidth  > 127 &&  (janemba.offsetLeft < gogeta.offsetLeft +280) ){
            gogetaLife -= 50
            barGogeta.style.width = `${barGogeta.offsetWidth + 50}px`

            if(gogetaLife <=0){
                abrirModal()
            } 
        }

        janemba.style.maxHeight = '350px'
        janemba.style.height = '350px'

        gifEspecialActivado = true


        setTimeout(() => {
            janemba.style.maxHeight = '250px'
            janemba.style.height = '250px'
            janemba.src = './gifs/janemba/volteado/image (20).png'
            gifEspecialActivado = false;

        }, 700);

    }

    if (numero >= 2)  janemba.style.left =  `${janemba.offsetLeft - 100}px`
   
    if (numero < 2)  janemba.style.left =  `${janemba.offsetLeft + 100}px`
    
    if(janemba.offsetLeft >= desplazamientoMaxX ) janemba.style.left =  `${desplazamientoMaxX-100}px` 

    if(janemba.offsetLeft < gogeta.offsetLeft + 150  ) janemba.style.left =  `${gogeta.offsetLeft + 200}px` 
    
    
}, 800);



