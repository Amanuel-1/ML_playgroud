class Activation {
    constructor(){

    }


    static mapActivation(mm, fn) {
        if (typeof mm === "number") {
            return fn(mm);
        } else {
            return mm.map((m) => this.mapActivation(m, fn));
        }
    }

    static sigmoid(x) {
        return 1 / (1 + Math.exp(-x));
    }

    static relu(x) {
        return Math.max(0, x);
    }

    static tanh(x) {
        return Math.tanh(x);
    }

    static softmax(arr) {
        const max = Math.max(...arr);
        const expArr = arr.map((val) => Math.exp(val - max));
        const sumExp = expArr.reduce((acc, val) => acc + val, 0);
        return expArr.map((val) => val / sumExp);
    }
}


export default Activation