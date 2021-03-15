const prompt = require('prompt-sync')({sigint: true});


const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
class Field {
    constructor(arr){
        this.field = arr ; 
    }
    print(){
        let arr1 = this.field.map(e => e.join(''))
        let result = arr1.join('\n')
        return result ; 
        };
    navigate(){
        
    }
}
const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
 console.log(myField.print()) 
