import { LightningElement } from 'lwc';

export default class Clock extends LightningElement {
    hour;min;sec;ampm;
    connectedCallback(){
        setInterval(()=>{
            let now = new Date();
            this.ampm = now.getHours() <= 12 ? 'AM' : 'PM';
            this.hour = this.ampm == 'AM' ? now.getHours() : now.getHours() - 12;
            this.min = now.getMinutes().toString().padStart(2, '0');
            this.sec = now.getSeconds().toString().padStart(2, '0');
        }, 1000);
    }


}
