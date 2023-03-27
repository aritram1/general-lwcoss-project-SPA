import { LightningElement } from 'lwc';

export default class Center extends LightningElement {
    handleClick(){
        let chessBoard = this.template.querySelector('ui-chess');
        chessBoard?.generateBoard();
    }

    connectedCallback(){
        console.log('Inside center connectedCallback');
    }

    renderedCallback(){
        console.log('Inside center renderedCallback');
    }
}
