import { LightningElement } from 'lwc';

export default class Center extends LightningElement {
    handleReset(){
        let chessBoard = this.template.querySelector('ui-chess');
        chessBoard?.resetBoard();
    }

    connectedCallback(){
        console.log('Inside center connectedCallback');
    }

    renderedCallback(){
        console.log('Inside center renderedCallback');
    }

    handleDiscolightStart(){
        let discolight = this.template.querySelector('ui-discolight');
        discolight?.start();
    }
}
