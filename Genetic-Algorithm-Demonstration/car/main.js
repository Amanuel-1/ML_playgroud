const canva  =  document.getElementById("canvas")


canva.width = 400;
canva.height  =window.innerHeight
canva.style.backgroundColor ="rgba(200,200,200,.9)"


const ctx  =  canva.getContext('2d')
const height  =canva.height
const width = canva.width


const car =  new Car(width/2,height/2,30,50)
animate()



function animate(){
    canva.height  =window.innerHeight
    car.draw(ctx)
    requestAnimationFrame(animate)
}

