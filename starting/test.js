const prompt = require('prompt-sync')({sigint: true});

const direction = prompt('wich Direction you choose ')
      
    
switch (direction) {
           case "U":
               console.log("u")
               break;
            case "D": 
            console.log("d")
               break; 
            case "R":
                console.log("r")
                break;
            case "L": 
            console.log("l")
                break;
            default:
                console.log('Please enter a valid Diriction ')
               break;
       }
console.log("hamza")