import {WindowComponent} from './WindowComponent.js';
import {WindowEnum} from './WindowEnum.js'

export class WindowParams extends WindowComponent {

    constructor(windowMgr){
        super(windowMgr);

        this.div.classList.add('windowParams');

        this.init();
    }

    init(){
        super.init();

        this.div.addEventListener('click', () => {
            this.windowMgr.activateWindowByName(WindowEnum.START);
        });
    } // init()
}; // class WindowStart
