class Control{
    constructor(){
        this.left =false
        this.right = false
        this.forward=false
        this.backward=false
        this.#addKeyboardListeners()
    }


    #addKeyboardListeners(){
        document.onkeydown= (event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=true
                    break;
                case "ArrowRight":
                    this.right=true
                    break;
                case "ArrowUp":
                    this.forward = true
                    break;
                case "ArrowDown":
                    this.backward=true
                    break;
                
            }

            // console.table(this)
        }

        document.onkeyup= (event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=false
                    break;
                case "ArrowRight":
                    this.right=false
                    break;
                case "ArrowUp":
                    this.forward = false
                    break;
                case "ArrowDown":
                    this.backward=false
                    break;
                
            }

            
            // console.table(this)
        }
    }



}