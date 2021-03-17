const prompt = require('prompt-sync')({sigint: true});


const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(array) {
        this.field = array
        this.x = 0 ; 
        this.y = 0
        this.field[0][0] = pathCharacter
    }
    isOutOfFiled () {
        const satat = this.x < 0 || this.x >= this.field[0].length || this.y < 0 || this.y >= this.field.length 
        return satat 
    }
    hole(){
        return this.field[this.y][this.x] === hole
    }
    hat(){
        return this.field[this.y][this.x] === hat 
    }
    navigate() {
      const direction = prompt('wich Direction you choose ')
       switch (direction) {
            case "U":
               this.y -= 1
               break;
            case "D": 
               this.y += 1 ;
               break; 
            case "R":
                this.x += 1 ;
                break;
            case "L": 
                this.x -= 1; 
                break;
            default:
                console.log('Please enter a valid Diriction ')
               break;
       }
    }
    print(){
        const stringField = this.field.map(e => e.join('')).join('\n')
        return console.log(stringField)
    }
    play() {
        let  play = true 
        while (play) {
             this.print()
             this.navigate() 
             if (this.isOutOfFiled() || this.hole() ){
                  console.log("You lose ")
                  play = false 
              } else if (this.hat()){
                  console.log("You win")
                  play = false 
              } else {
                  this.field[this.y][this.x] = pathCharacter ;
              }
        }
    }
}
const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
    ['░', '░', '░']
  ])
myField.play()


