import { LightningElement, api } from 'lwc';

export default class Chess extends LightningElement {
    
    board = [];
    
    // get showboard(){
    //     return this.board?.length !== 0;
    // }
    
    connectedCallback(){
        console.log('Inside chess connectedCallback');
        this.board = this.generateBoard();
    }

    renderedCallback(){
        console.log('Inside chess renderedCallback');
    }

    @api generateBoard(){
        console.log('Inside chess generateBoard');
        if(this.board.length !== 0) return;
        let _board = [];
        for(let j=7; j>=0; j--){
            for(let i=0; i<8; i++){
                _board.push({
                    'id' : i + '' + j, //identifier
                    'y' : i, 'x' : j,   // x, y locations
                    'r' : j+'', 'f' : String.fromCharCode(97+i), //rank and file locations
                    'label' : String.fromCharCode(97+i) + '' + (j+1),
                    'gameInfo' : {
                        'occupied' : false, 
                        'by' : '', //occupied info
                        'score' : 0,
                        'controlledBy' : [], 'vulnerableTo' : [],
                    },
                    'color' : (i+j)%2 === 0 ? 'black' : 'white'
                });
            }
        }
        return _board;
    }
}
