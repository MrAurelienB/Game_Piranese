import {WindowComponent} from './WindowComponent.js';
import {WindowEnum} from './WindowEnum.js'

export class WindowStart extends WindowComponent {

    constructor(windowMgr){
        super(windowMgr);

        this.div.classList.add('windowStart');

        this.init();
    }

    init(){
        super.init();


        // Create button
        const startButton = document.createElement("button");
        startButton.textContent = "START";
        startButton.classList.add('button_start');
        this.div.appendChild(startButton);

        const paramButton = document.createElement("button");
        paramButton.textContent = "PARAMETERS";
        paramButton.classList.add('button_start');
        this.div.appendChild(paramButton);

        const exitButton = document.createElement("button");
        exitButton.textContent = "EXIT";
        exitButton.classList.add('button_start');
        this.div.appendChild(exitButton);

        startButton.addEventListener('click', () => {
            this.windowMgr.activateWindowByName(WindowEnum.PARAMETERS);
        });
    } // init()
}; // class WindowStart
