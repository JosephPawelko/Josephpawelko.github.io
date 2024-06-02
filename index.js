
monsters = [["aether.png",7,2,6,4,7,4],["angle man.png",7,3,6,9,1,2],["bear thing.png",6,1,3,7,4,9],["brunard.png",0,7,4,6,2,8],["dhumpix.png",7,4,5,2,9,9],["drogo.png",1,4,3,7,5,8],["githra.png",6,4,7,3,9,2],["hairy turd.png",5,7,4,3,7,8],["hrothgar.png",6,4,8,2,4,3],["jen.png",8,9,5,3,1,2],["jinn.png",7,5,3,7,9,4],["kiloworph.png",1,1,6,9,4,3],["lagash & uruk.png",7,9,4,3,2,2],["ozgot.png",6,3,8,9,4,5],["poo.png",1,2,3,6,7,3],["progg.png",5,5,2,8,3,1],["Scimitar.png",3,3,7,8,2,3],["SwampDude.png",1,1,5,8,3,9],["the mimic.png",7,7,5,5,2,5],["thunderbrute.png",1,5,3,8,6,8],["turtle man.png",4,2,7,5,9,7],["unor.png",8,8,8,8,8,8],["watt.png",3,2,6,4,0,8],["xogomir.png",9,5,7,4,6,1],["zophiel.png",5,4,5,2,9,7]]
//deck = [["Nelson",4,534,12,247,1,140],["jobes",7,2,8,5,9,1],["binks",2,2,4,6,1,9],["slowline",8,5,6,6,2,1]]
//deckE = [["Skeevz",5,2,5,1,38,15],["Choppa",9,10,5,0,18,37],["Shmeegs",2,753,12,62,12,37],["traitorous binks",4,6,2,7,5,2]]
deck = new Array
deckE = new Array

var winners = new Array
var winnersE = new Array
var cardNum
var cardNumE
var myTurn = true
var gameBroken = false
var burnCard




function play(){
    var x = Math.trunc(Math.random()*25)
    burnCard = monsters.splice(x, 1);
    var cardsChecked = 0
  

    shuffle(monsters)
    function shuffle(monsters) {
        let currentIndex = monsters.length;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [monsters[currentIndex], monsters[randomIndex]] = [
            monsters[randomIndex], monsters[currentIndex]];
        }
      }
    const half = Math.ceil(monsters.length / 2); 
    deck = monsters.slice(0,half)
    deckE = monsters.slice(half)

    showCard()
    document.getElementById("hButton").style.visibility = "hidden"


    
}



function showCard() {
    
            document.getElementById("cardName").innerHTML = deck[0][0]
            document.getElementById("stat1").innerHTML = deck[0][1]
            document.getElementById("stat2").innerHTML = deck[0][2]
            document.getElementById("stat3").innerHTML = deck[0][3]
            document.getElementById("stat4").innerHTML = deck[0][4]
            document.getElementById("stat5").innerHTML = deck[0][5]
            document.getElementById("stat6").innerHTML = deck[0][6]
            document.getElementById("imageMine").src = deck[0][0]

    

            
        
    }
    




function colorFlashReturn(){
    document.body.style.backgroundColor = "cornflowerblue";

}
function colorFlashGreen(){
    document.body.style.backgroundColor = "green";

}
function colorFlashRed(){
    document.body.style.backgroundColor = "red";

}
function colorFlashBlue(){
    document.body.style.backgroundColor = "blue";

}
function enemyAttack(){
    var x=Math.trunc(Math.random()*6)
    switch (x) {
            case 0:
            fight1()
            break;
            case 1:
            fight2()
            break;
            case 2:
            fight3()
            break;
            case 3:
            fight4()
            break;
            case 4:
            fight5()
            break;
            case 5:
            fight6()
            break;

    
        default:
            break;
    }

}
function fight1(){
    if (deck.length == 0){return}
    if (deckE.length == 0){return}
    if (gameBroken==true && myTurn==true){return}
    document.getElementById("callouts").innerHTML = "STRENGTH "+deck[0][1]
    setTimeout(colorFlashReturn, 1000)
  
    document.getElementById("calloutsE").innerHTML = "STRENGTH "+deckE[0][1]
    if (deck[0][1] > deckE[0][1]){
        killEnemy()
        colorFlashGreen()
    }
    else if (deck[0][1] < deckE[0][1]){
        killMe()
        colorFlashRed()
    }
    else {
        document.getElementById("b1").style.visibility = "hidden"
        colorFlashBlue()
    }
    if (myTurn == false){
        gameBroken=false
        myTurn=true
        document.getElementById("enemyStatus").innerHTML = "Your Turn"
    }
    else if (myTurn == true&&gameBroken==false){
    gameBroken=true
    myTurn=false
    document.getElementById("enemyStatus").innerHTML = "Enemy is thinking"
    setTimeout(enemyAttack,7000)
    }
    
}
function fight2(){
    if (deck.length == 0){return}
    if (deckE.length == 0){return}
    if (gameBroken==true&& myTurn==true){return}

    document.getElementById("callouts").innerHTML = "ARCANE "+deck[0][2]
    setTimeout(colorFlashReturn, 1000)
    document.getElementById("calloutsE").innerHTML = "ARCANE "+deckE[0][2]
    if (deck[0][2] > deckE[0][2]){
        killEnemy()
        colorFlashGreen()
    }
    else if (deck[0][2] < deckE[0][2]){
        killMe()
        colorFlashRed()
    }
    else {
        document.getElementById("b2").style.visibility = "hidden"
        colorFlashBlue()
    }
    if (myTurn == false){
    gameBroken=false
    myTurn=true
    document.getElementById("enemyStatus").innerHTML = "Your Turn"
}
else if (myTurn == true&&gameBroken==false){
gameBroken=true
myTurn=false
document.getElementById("enemyStatus").innerHTML = "Enemy is thinking"
setTimeout(enemyAttack,7000)
}

}
function fight3(){
    if (deck.length == 0){return}
    if (deckE.length == 0){return}
    if (gameBroken==true&& myTurn==true){return}

    document.getElementById("callouts").innerHTML = "RANGED "+deck[0][3]
    setTimeout(colorFlashReturn, 1000)
    document.getElementById("calloutsE").innerHTML = "RANGED "+deckE[0][3]
    if (deck[0][3] > deckE[0][3]){
        killEnemy()
        colorFlashGreen()
    }
    else if (deck[0][3] < deckE[0][3]){
        killMe()
        colorFlashRed()
    }
    else {
        document.getElementById("b3").style.visibility = "hidden"
        colorFlashBlue()
    }
    if (myTurn == false){
        gameBroken=false
        myTurn=true
        document.getElementById("enemyStatus").innerHTML = "Your Turn"
    }
    else if (myTurn == true&&gameBroken==false){
    gameBroken=true
    myTurn=false
    document.getElementById("enemyStatus").innerHTML = "Enemy is thinking"
    setTimeout(enemyAttack,7000)
    }
}
function fight4(){
    if (deck.length == 0){return}
    if (deckE.length == 0){return}
    if (gameBroken==true&& myTurn==true){return}

    document.getElementById("callouts").innerHTML = "DIVINE "+deck[0][4]
    setTimeout(colorFlashReturn, 1000)
    document.getElementById("calloutsE").innerHTML = "DIVINE "+deckE[0][4]
    if (deck[0][4] > deckE[0][4]){
        killEnemy()
        colorFlashGreen()
    }
    else if (deck[0][4] < deckE[0][4]){
        killMe()
        colorFlashRed()
    }
    else {
        document.getElementById("b4").style.visibility = "hidden"
        colorFlashBlue()
    }
    if (myTurn == false){
        gameBroken=false
        myTurn=true
        document.getElementById("enemyStatus").innerHTML = "Your Turn"
    }
    else if (myTurn == true&&gameBroken==false){
    gameBroken=true
    myTurn=false
    document.getElementById("enemyStatus").innerHTML = "Enemy is thinking"
    setTimeout(enemyAttack,7000)
    }
}
function fight5(){
    if (deck.length == 0){return}
    if (deckE.length == 0){return}
    if (gameBroken==true&& myTurn==true){return}

    document.getElementById("callouts").innerHTML = "SPEED "+deck[0][5]
    setTimeout(colorFlashReturn, 1000)
    document.getElementById("calloutsE").innerHTML = "SPEED  "+deckE[0][5]
    if (deck[0][5] > deckE[0][5]){
        killEnemy()
        colorFlashGreen()
    }
    else if (deck[0][5] < deckE[0][5]){
        killMe()
        colorFlashRed()
    }
    else {
        document.getElementById("b5").style.visibility = "hidden"
        colorFlashBlue()
    }
    if (myTurn == false){
        gameBroken=false
        myTurn=true
        document.getElementById("enemyStatus").innerHTML = "Your Turn"
    }
    else if (myTurn == true&&gameBroken==false){
    gameBroken=true
    myTurn=false
    document.getElementById("enemyStatus").innerHTML = "Enemy is thinking"
    setTimeout(enemyAttack,7000)
    }
}
function fight6(){
    if (deck.length == 0){return}
    if (deckE.length == 0){return}
    if (gameBroken==true&& myTurn==true){return}

    document.getElementById("callouts").innerHTML = "AGE "+deck[0][6]
    setTimeout(colorFlashReturn, 1000)
    document.getElementById("calloutsE").innerHTML = "AGE "+deckE[0][6]
    if (deck[0][6] > deckE[0][6]){
        killEnemy()
        colorFlashGreen()
    }
    else if (deck[0][6] < deckE[0][6]){
        killMe()
        colorFlashRed()
    }
    else {
        document.getElementById("b6").style.visibility = "hidden"
        colorFlashBlue()
    }
    if (myTurn == false){
        gameBroken=false
        myTurn=true
        document.getElementById("enemyStatus").innerHTML = "Your Turn"
    }
    else if (myTurn == true&&gameBroken==false){
    gameBroken=true
    myTurn=false
    document.getElementById("enemyStatus").innerHTML = "Enemy is thinking"
    setTimeout(enemyAttack,7000)
    } 
}
function killEnemy(){
    showStats()
    document.getElementById("graveyard").src = deckE[0][0]
    

    winners.push(deck[0])

   
    deckE.shift()
    deck.shift()
    checkEndGame()
    checkAndReshuffle()
    document.getElementById("winners").innerHTML = "WINNERS: "+winners.length
    document.getElementById("deck").innerHTML = "DECK: "+deck.length
    document.getElementById("winnersE").innerHTML = "WINNERS: "+winnersE.length
    document.getElementById("deckE").innerHTML = "DECK: "+deckE.length
    showCard()
}
function killMe() {
    showStats()
    document.getElementById("graveyard").src = deck[0][0]
    winnersE.push(deckE[0])


    deck.shift()
    deckE.shift()
   
    checkEndGame()
    checkAndReshuffle()
    document.getElementById("winnersE").innerHTML = "WINNERS: "+winnersE.length
    document.getElementById("deckE").innerHTML = "DECK: "+deckE.length
    document.getElementById("winners").innerHTML = "WINNERS: "+winners.length
    document.getElementById("deck").innerHTML = "DECK: "+deck.length
    showCard()
}
function checkAndReshuffle(){
    if (deck.length == 0){
        deck = winners
        winners = []
        deck = deck.sort(() => Math.random() - 0.5);
        deckE = deckE.sort(() => Math.random() - 0.5);
    }
    if (deckE.length == 0){
        deckE = winnersE
        winnersE = []
        deck = deck.sort(() => Math.random() - 0.5);
        deckE = deckE.sort(() => Math.random() - 0.5);
    }
}
function showStats(){
    document.getElementById("b1").style.visibility = "visible"
    document.getElementById("b2").style.visibility = "visible"
    document.getElementById("b3").style.visibility = "visible"
    document.getElementById("b4").style.visibility = "visible"
    document.getElementById("b5").style.visibility = "visible"
    document.getElementById("b6").style.visibility = "visible"
}
function checkEndGame(){
    if (deck.length == 0 && winners.length == 0){
        clearTimeout(enemyAttack)
        document.getElementById("statChoice").style.visibility = "hidden"
        document.getElementById("enemyStatus").style.visibility = "hidden"
        document.getElementById("callouts").style.visibility = "hidden"
        document.getElementById("graveyard").style.visibility = "hidden"
        document.getElementById("calloutsE").style.visibility = "hidden"
        document.getElementById("ender").style.visibility = "hidden"
        document.getElementById("b1").style.visibility = "hidden"
    document.getElementById("b2").style.visibility = "hidden"
    document.getElementById("b3").style.visibility = "hidden"
    document.getElementById("b4").style.visibility = "hidden"
    document.getElementById("b5").style.visibility = "hidden"
    document.getElementById("b6").style.visibility = "hidden"
    document.getElementById("winnerCircleText").innerHTML = "YOU LOSE!<br>WINNER CIRCLE:"
        for (let i = 0; i < deckE.length; i++) {
            document.getElementById("image"+i).src = deckE[i][0]

            
        }
        
    }
    if (deckE.length == 0 && winnersE.length == 0){
        clearTimeout(enemyAttack)

        document.getElementById("statChoice").style.visibility = "hidden"
        document.getElementById("enemyStatus").style.visibility = "hidden"
        document.getElementById("callouts").style.visibility = "hidden"
        document.getElementById("graveyard").style.visibility = "hidden"
        document.getElementById("calloutsE").style.visibility = "hidden"
        document.getElementById("ender").style.visibility = "hidden"  
        document.getElementById("b1").style.visibility = "hidden"
        document.getElementById("b2").style.visibility = "hidden"
        document.getElementById("b3").style.visibility = "hidden"
        document.getElementById("b4").style.visibility = "hidden"
        document.getElementById("b5").style.visibility = "hidden"
        document.getElementById("b6").style.visibility = "hidden"
        document.getElementById("winnerCircleText").innerHTML = "YOU WIN!<br>WINNER CIRCLE:"

        for (let i = 0; i < deck.length; i++) {
            document.getElementById("image"+i).src = deck[i][0]

            
        } 

     }
}