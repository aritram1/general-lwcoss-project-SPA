import { LightningElement } from 'lwc';

export default class Footer extends LightningElement {
    footerItems = [];
    connectedCallback(){
        this.footerItems.push({
            'label' : 'About Me',
            'id': 'about_me',
            'path' : '' 
        });
        this.footerItems.push({
            'label' : 'Credit',
            'id': 'credit',
            'path' : '' 
        });
        this.footerItems.push({
            'label' : 'Source',
            'id': 'source',
            'path' : '' 
        });
    }
}
