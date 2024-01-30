class shape{
    constructor(x, y){
        this.x = x
        this.y = y

    }
    move(x, y){
        this.x = x
        this.y = y

    }
}
const myshape = new shape()

myshape.move(10,29);

console.log("Số của shape là:" ,myshape);
