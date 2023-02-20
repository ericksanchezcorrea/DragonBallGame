gogeta.style.maxHeight = '250px';

let eventoEnProceso = false;
let suerte = false

let barJanemba = document.querySelector('.bar_janemba')
let janembaLife = 400

let barGogeta = document.querySelector('.bar_gogeta')
let gogetaLife = 400

let parrafo = document.querySelector('.resultado')
let modal = document.querySelector('.modal')

document.addEventListener('keydown', (e) => {

  if (janembaLife <= 0) {
    return;
  }

  if (eventoEnProceso) {
    return;
  }

  if(modal.classList.contains('opacity1')) return


  eventoEnProceso = true;

  if (e.key === 'r') {
    gogeta.src = './gifs/gogeta/gif/ataque-basico-unscreen.gif';
    gogeta.style.maxHeight = '250px';

    
    // Descontar puntos de vida a janemba por golpe bàsico
    if(gogeta.offsetLeft + 250 > janemba.offsetLeft ) {
      janembaLife -= 20
      barJanemba.style.width = `${barJanemba.offsetWidth + 20}px`

      // JanenmbaLife = 0
      if (janembaLife <= 0 || gogetaLife <= 0  ) {
        clearTimeout(intervalTimer)
        abrirModal()
      }
      
    }

    setTimeout(() => {
      gogeta.src = './gifs/gogeta/304px-DBFZ_SSB_Gogeta_color1.png';
      gogeta.style.maxHeight = '250px';
      eventoEnProceso = false;
    }, 500);
  }

  if (e.key === 't') {

    gogeta.src = './gifs/gogeta/gif/kame-unscreen.gif';
    gogeta.style.maxHeight = '350px';
    gogeta.style.height = '350px';

    
    // Descontar puntos de vida a janemba
    if(gogeta.offsetLeft + 480 > janemba.offsetLeft ) {

      if(numero > 3){
        // no se descuenta
        janemba.src = "./gifs/janemba/volteado/image (11).png"
        janemba.style.maxHeight = '250px';
        suerte = true

      }
      else{
        // se descuenta
        janembaLife -= 60
        barJanemba.style.width = `${barJanemba.offsetWidth + 60}px`

      }

      // modal
      if (janembaLife <= 0 || gogetaLife <= 0  ) {
        clearTimeout(intervalTimer)
        abrirModal()
      }

      }

    setTimeout(() => {
      gogeta.src = './gifs/gogeta/304px-DBFZ_SSB_Gogeta_color1.png';

      janemba.src = './gifs/janemba/volteado/image (20).png'

      gogeta.style.maxHeight = '250px';
      janemba.style.maxHeight = '250px';

      eventoEnProceso = false;
      suerte = false
    }, 700);
  }
  else{
    eventoEnProceso = false;
  }

});


document.querySelector('button').addEventListener('click',()=>{
  location.reload()
})


// timer

let timer = 45


let intervalTimer = setInterval(() => {

  if(timer <= 0) return

  timer -= 1 
  document.querySelector("span").innerText = timer

  if(timer == 0){
    abrirModal()
  }

}, 1000);


// función abrir modal
function abrirModal(){

  if(janembaLife < gogetaLife) parrafo.innerText = "You Won"
  else if(janembaLife > gogetaLife) parrafo.innerText = "You Lost"
  else parrafo.innerText = "Draw"

  modal.classList.add('opacity1')
  document.querySelector('button').style.display = 'block'

  document.querySelector('.resultado').classList.add('opacity1')

}


document.querySelector('.button1').addEventListener('click',()=>{
  document.querySelector('.ruler_modal').style.display='flex'
})

document.querySelector('.button2').addEventListener('click',()=>{
  document.querySelector('.ruler_modal').style.display='none'
})

