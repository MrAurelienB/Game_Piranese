import {WindowStart} from './Windows/WindowStart.js';
import {WindowParams} from './Windows/WindowParams.js';
import {WindowEnum} from './Windows/WindowEnum.js'

export class WindowMgr {

    constructor(){
        this.currentActiveWindow = null;

        this.windowMap = new Map();
    }

    init(){
        // Créer toutes les window (active = false par défaut)
        this.windowMap.set(WindowEnum.START, new WindowStart(this));
        this.windowMap.set(WindowEnum.PARAMETERS, new WindowParams(this));

        // Activer la window de départ
        this.activateWindowByName(WindowEnum.START);
    } // init()

    activateWindow(window){
        if (this.currentActiveWindow !== null)
            this.currentActiveWindow.setActive(false);

        this.currentActiveWindow = window;

        if (this.currentActiveWindow !== null)
            this.currentActiveWindow.setActive(true);
    } // activateWindow()

    activateWindowByName(windowName){
        if (this.windowMap.has(windowName))
            this.activateWindow(this.windowMap.get(windowName));
    } // activateWindowByName()

}; // class WindowMgr