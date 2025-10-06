
import {WindowMgr} from './WindowManagement/WindowMgr.js'

export class App {

    constructor(){
        this.windowMgr = new WindowMgr();
    }

    init(){
        this.windowMgr.init();
        requestAnimationFrame((ts) => this.gameLoop(ts));
    } // init()

    start(){
        // TODO
    } // start()

    gameLoop(timestamp){
        requestAnimationFrame((ts) => this.gameLoop(ts));
    } // gameLoop()
}; // class App
