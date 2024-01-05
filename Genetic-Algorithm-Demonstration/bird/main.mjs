import Bird from "./bird.mjs"
import Obstacle from "./obstacle.mjs"

const canva  =  document.getElementById("canvas")
var score  =0
var generation = 1
var bestScore =0


canva.width=window.innerWidth
canva.height  =window.innerHeight
canva.style.backgroundColor ="rgba(200,200,200,.9)"


const ctx  =  canva.getContext('2d')
const height  =canva.height
const width = canva.width
const BIRDS  = 100
const MUTATION=0.9
let fittestGene =localStorage.getItem("fittest")
let fittest= fittestGene?JSON.parse(fittestGene):null
let birds =[]
let birdgenes=[]

for(let i=0;i<BIRDS;i++){
    let b  = new Bird(300,height/2.2,15)
    birds.push(b)
    birdgenes.push(b)
    // if(fittest && fittest.brain){
    //     birds[i].brain = fittest.brain
    // }
}
function nextGen(brain){
    generation+=1
    for(let i=0;i<BIRDS;i++){
        score=0
        console.log("this is from the nextGen++++++++++" ,fittest)
        let b =new Bird(300,height/2.2,15,fittest.brain)
        birds.push(b)
        birdgenes.push(b)
   
        // birds[i].brain.mutate(MUTATION)
    }
   
for(let i=1;i<=5;i++){
    let obstacle  = new Obstacle(innerWidth*(i+1)/2.2,100,60)
    obstacles.push(obstacle)
}

}

function select(){
    let fit = null
    for(let bird of birdgenes){
        if(!fit ||fit&&( bird.score >fit.score)){
            fit =bird
        }
    }

    birdgenes=[]
    return fit
}

//5 obstacles at a time
var obstacles =[]

for(let i=1;i<=5;i++){
    let obstacle  = new Obstacle(innerWidth*(i+1)/2.2,100,60)
    obstacles.push(obstacle)
}



animate()

function animate(){
    canva.width = 900;
    canva.height  =window.innerHeight

    bestScore = fittest?fittest.score:0

    ctx.font = "24px Arial";
    ctx.fillStyle = "black";

    // Render the text
    ctx.fillText("score : "+score, 50, 50);
    ctx.fillText("best score : "+bestScore, 50, 80);
    score+=1
    ctx.fillText("Generation : "+generation, 50, 110);


    
    for(let i=0;i<obstacles.length;i++){
        
        obstacles[i].draw(ctx,height)
    }
    
for(let j=0; j<birds.length;j++){
    birds[j].draw(ctx,100,height,"black")
    if(j<obstacles.length){
        console.log("current brain ",birds[j].brain)
        birds[j].think(obstacles)
    }
    for(let i=0;i<obstacles.length;i++){
        if(obstacles[i].outOfBound()){
         obstacles.shift()
         obstacles.push(new Obstacle(innerWidth*(6)/2.2,100,60))
         }
 
         if(j<birds.length && obstacles[i].collision(birds[j])){
            //  bird.draw(ctx,bird.width,bird.height,"red")
            //  console.log("the bird is hit")
            if(birds.length>1){

                birds.splice(j,1)
            }else{
                if(!fittest || fittest && fittest.score<birds[j].score){

                    fittest = birds[j]
                    localStorage.setItem("fittest",JSON.stringify(fittest))
                }
                obstacles=[]
                console.log("fittest score +++++ ",fittest)
                let current_fittest = select()
                if(!fittest || fittest && (current_fittest.score>fittest.score)){
                    fittest = current_fittest
                    localStorage.setItem("fittest",JSON.stringify(fittest))
                }
                nextGen(fittest.brain)

                 console.table(fittest)
            }
           
            
         }
 
 
     }

}


console.log("birds alive   ",birds.length)
    
    requestAnimationFrame(animate)
}

