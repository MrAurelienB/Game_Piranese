import {WindowComponent} from './WindowComponent.js';

export class WindowStart extends WindowComponent {

    constructor(windowMgr){
        super(windowMgr);

        this.div.classList.add('windowStart');

        this.init();
    }
}; // class WindowStart
