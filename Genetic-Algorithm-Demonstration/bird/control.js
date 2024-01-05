class Control {
    constructor(){
        this.up=false
        this.#addKeyboardListeners()
    }

    #addKeyboardListeners(){
        document.onkeydown =(event)=>{
            if(event.key=="ArrowUp"){
                this.up=true
            }
        }

        document.onkeyup =(event)=>{
            this.up =false
        }

        console.table(this)
    }
}