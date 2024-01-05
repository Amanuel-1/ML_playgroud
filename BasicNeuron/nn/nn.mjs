import Matrix from "./primitives/matrix.mjs"
import Activation from "./activation.mjs"
import randomGaussian from "./primitives/random.mjs"



globalThis.mtx1=new Matrix(4,3)
globalThis.b1 = new Matrix(mtx1.rows,1)

globalThis.mtx2 =new Matrix(3,51)


console.log("this is from the neural network class")

class NeuralNetwork{
    constructor(num_inputs=4,num_hidden=[3,4,5,5,4],num_outputs=3){
        this.num_inputs = num_inputs
        this.num_outputs = num_outputs
        this.num_hidden = num_hidden


        this.layers  =[num_inputs,...this.num_hidden,num_outputs]
        this.weights =[]
        this.biases =[]

        for(let i=0; i<this.layers.length-1;i++){
            let w  = new Matrix(this.layers[i],this.layers[i+1])

            this.weights.push(w)
        }

        for(let i=0;i<this.layers.length;i++){
            let b =  new Matrix(this.layers[i],1)

            // this.biases.push(b)
        }

    }
    mutate(rate){

        for(let i=0;i<this.weights.length;i++){
            let w  =  this.weights[i]
            // console.log(w instanceof Matrix)
            for(let j=0;j<w.rows;j++){
                for(let k=0;k<w.cols;k++){
                    w.data[j][k]+= randomGaussian()*rate +Math.random()*2-1
                }
            }
            
        }
    }
    
    forwardFeed(inputs) {

        let activated = Matrix.toMatrix(inputs);

        for(let i=0;i<this.weights.length;i++){
            let w  =  this.weights[i]
            // console.log(w instanceof Matrix)
            // console.log(activated instanceof Matrix,"loop "+i)
            let intermediate  = Matrix.multiply(activated,w)
            activated  =intermediate.mapfn(Activation.tanh)
            
        }

        
        return activated;
    }
}


export default NeuralNetwork






const nn  = new NeuralNetwork()


let inputs= [2,1,5.3,4]
// console.log(inputs)
let outputs  =nn.forwardFeed(inputs)


console.log("behold the outputs")
outputs.print()




globalThis.ans  = Matrix.multiply(mtx1,mtx2)


mtx1.print()
b1.print()