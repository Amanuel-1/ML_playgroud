import NeuralNetwork from "../nn/nn.mjs";

console.log("hey this is a console from the bird class")
class Bird {
    constructor(x, y, radius,brain=null) {
        this.x = x; 
        this.y = y;
        this.radius = radius;
        this.gravity = 0.5; // Adjust the gravity value for realistic effect
        this.lift = -4.5; // Adjust the lift value for realistic effect
        this.velocity = 0;
        this.maxVelocity =6
        this.brain  = new NeuralNetwork(4,[8,8],1)
        console.log("real brain",typeof this.brain)
        this.control  = [Math.random(),Math.random()]
        this.score =0

        

        


    }

    draw(ctx,width,height,color) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
        this.update(height,ctx);



    }

    update(height,ctx) {
        this.score+=1

        // console.log("decisionnnnn ===>",this.control[0])
        if(this.control[0]<0.05){
            // console.log("+++++++++++++++++++++++++++")
            ctx.fillStyle = "yellow"
            ctx.fill()
            this.velocity+=2*this.lift

        }else{
            // console.log("---------------------------")
            ctx.fillStyle = "green"
            ctx.fill()

        }

        if(this.velocity>this.maxVelocity){
            this.velocity=this.maxVelocity
        }
        if(this.velocity<-this.maxVelocity/2){
            this.velocity  =-this.maxVelocity/2
        }
        // Update bird's position based on control and gravity
        // if (this.control.up) {
        //     this.velocity += this.lift;
        // }


        if(!this.collisionDetection(height)){
            this.velocity += this.gravity;
            this.y += this.velocity;
        }
        else{
            this.y=height-this.radius
            this.velocity=0

        }

        
    }

    think(obstacles){
        let closest  = null
        let dist  = Infinity
        console.log("this is the brain ",this.brain)
        for(let i=0;i<obstacles.length;i++){
            let d  = obstacles[i].x -this.x

            if(d>0 && d<dist){
                dist = d;
                closest  = obstacles[i]
            }
        }

        let inputs=[0,0,0,0]
        inputs[0]=this.y/window.innerHeight;
        inputs[1]=closest.top/window.innerHeight
        inputs[2]=closest.bottom/window.innerHeight
        inputs[3] =dist/window.innerWidth

        this.control  = this.brain.forwardFeed(inputs).data
        // console.table(this.control)
// 
        // console.log("guuuuuuuuuuuuuuuueeeeeeeeess   ",this.control)

    }

    collisionDetection(height){

            if(this.y+this.radius>height){
                // console.log("out of bound")
                return true
            }

            return false
    }


}



export default Bird

