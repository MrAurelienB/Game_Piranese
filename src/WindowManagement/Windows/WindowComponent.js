
export class WindowComponent {

    constructor(windowMgr){
        this.windowMgr = windowMgr;

        this.div = document.createElement('div');
        this.div.classList.add('window');

        let mainContainer = document.getElementById('mainContainer');
        mainContainer.appendChild(this.div);

        this.setActive(false);
    }

    init(){
        // Nothing to do by default
    }

    setActive(active){
        if (active)
            this.div.classList.add('active');
        else
            this.div.classList.remove('active');
    }
}; // class WindowComponent
