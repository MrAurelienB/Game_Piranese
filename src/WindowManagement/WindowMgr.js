import {WindowStart} from './Windows/WindowStart.js';

export class WindowMgr {

    constructor(){
        this.currentActiveWindow = null;

        this.windowStart = null;
    }

    init(){
        // Créer toutes les window (active = false par défaut)
        this.windowStart = new WindowStart(this);

        // Activer la window de départ
        this.currentActiveWindow = this.windowStart;
        this.currentActiveWindow.setActive(true);
    } // init()

    activate(window){
        this.currentActiveWindow.setActive(false);
        this.currentActiveWindow = window;
        this.currentActiveWindow.setActive(true);
    } // activate()

}; // class WindowMgr