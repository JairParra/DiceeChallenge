
/*
    ### Helpers ### 
*/
function randInt(min, max){
    /**
     * Generates a random number betwen min and max 
     */ 
    if (typeof(min) !== "number"){
        throw new TypeError(`'${min}'` + " is not of type " + `'${typeof(4)}'` ); 
    } 
    else if (typeof(max) !== "number") { 
        throw new TypeError(`'${max}'` + " is not of type " + `'${typeof(4)}'` ); 
    }

    // if typecheck passed, correct types 
    min = Math.floor(min) ; 
    max = Math.floor(max); 

    // Get a random number within the available indexes 
    var randNum = Math.floor(Math.random() * (max - min + 1) + min); 

    return randNum
}


function refreshPage(){ 
    /**
     * Refreshes page dice on click
     */

    // lis to store the results of the draws for each dice 
    let resList = []; 

    // obtain left dice inner html 
    let diceImgs = document.getElementsByClassName("diceImg");

    // Change the innerHTML of all dices on page 
    for (let i=0; i < diceImgs.length; i++) { 
        // Create a random number betwen 1 and 6 and store 
        let randNum = randInt(1,6); 

        // change the thing 
        diceImgs[i].src = "img\\dice" + randNum + ".png"; 

        // store result of draws in list 
        resList[i] = randNum; 
    }

    console.log(resList); 

    // Compare the results to see who won 
    if (resList[0] > resList[1]) { 
        // Change inner HTML 
        var resText = "🚩Player 1 Wins!"
    }
    else if (resList[0] < resList[1] ){ 
        var resText = "Player 2 Wins!🚩"
    }
    else { 
        var resText = "Draw!"
    }

    // obtain change title text 
    document.getElementsByClassName("pointer")[0].innerHTML = resText; 

}


/*
    ### Script logic### 
*/
