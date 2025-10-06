
export class App {

    constructor(){

    }

    init(){
        requestAnimationFrame((ts) => this.gameLoop(ts));
    } // init()

    start(){

    } // start()

    gameLoop(timestamp){

        console.log(timestamp);

        requestAnimationFrame((ts) => this.gameLoop(ts));
    } // gameLoop()
}; // class App
