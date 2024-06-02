
monsters = [["aether.png",2.08,6,17,28,43,11],["angle man.png",1.78,5,236,217,13,7],["bear thing.png",3.12,9,17,28,38,4],["brunard.png",1.46,4,112,0,29,18],["dhumpix.png",2.08,4,1125,94,6,15],["drogo.png",3.12,10,6,45,26,8],["githra.png",1.12,3,6,6,46,16],["hairy turd.png",1.45,6,0,3,39,6],["hrothgar.png",3.06,10,12,85,12,14],["jen.png",0.96,2,12,3,46,15],["jinn.png",4.65,7,730,12,5,13],["kiloworph.png",4.65,4,0,12,39,1],["lagash & uruk.png",1.78,6,38,13,32,13],["ozgot.png",3.12,8,8,9,28,10],["poo.png",3.06,4,259,0,8,16],["progg.png",1.55,7,12,36,50,13],["Scimitar.png",1.96,5,7,13,37,6],["SwampDude.png",1.9,3,112,18,29,19],["the mimic.png",2.08,4,683,98,14,14],["thunderbrute.png",2.08,7,3,8,30,12],["turtle man.png",1.85,6,17,12,38,16],["unor.png",1.88,4,1500,219,8,20],["watt.png",3.86,8,276,4,32,8],["xogomir.png",1.9,9,82,132,29,7],["zophiel.png",2.08,5,622,300,43,10]]
//deck = [["Nelson",4,534,12,247,1,140],["jobes",7,2,8,5,9,1],["binks",2,2,4,6,1,9],["slowline",8,5,6,6,2,1]]
//deckE = [["Skeevz",5,2,5,1,38,15],["Choppa",9,10,5,0,18,37],["Shmeegs",2,753,12,62,12,37],["traitorous binks",4,6,2,7,5,2]]
deck = new Array
deckE = new Array

var music = new Audio

var winners = new Array
var winnersE = new Array
var cardNum
var cardNumE
var myTurn = true
var gameBroken = false
var burnCard
var clickCooldown

var gameMode




function play(){
    var easy = document.getElementById("easyBot").checked
    var hard = document.getElementById("hardBot").checked
    if (easy == false&&hard== false){return}
    var x = Math.trunc(Math.random()*25)
    burnCard = monsters.splice(x, 1);
    var cardsChecked = 0
    
    if (easy == true){gameMode="easy"}
    if (hard == true){gameMode="hard"}
    document.getElementById("easyBot").style.visibility = "hidden"
    document.getElementById("hardBot").style.visibility = "hidden"
    document.getElementById("dest").style.visibility = "hidden"
    document.getElementById("dest2").style.visibility = "hidden"

    document.getElementById("b1").style.visibility = "visible"
    document.getElementById("b2").style.visibility = "visible"
    document.getElementById("b3").style.visibility = "visible"
    document.getElementById("b4").style.visibility = "visible"
    document.getElementById("b5").style.visibility = "visible"
    document.getElementById("b6").style.visibility = "visible"

    for (let i = 0; i < monsters.length; i++) {
        let numb = Math.random() * 1.4
        let numb2 = Math.random() * 1.4
        var newStat = monsters[i][1] + (numb - numb2)
       
        newStat = Number(newStat.toFixed(2))
        monsters[i][1] =newStat
        
    }
    for (let i = 0; i < monsters.length; i++) {
        let numb = Math.random() * 1.7
        let numb2 = Math.random() * 1.7
        var newStat = monsters[i][2] + (numb - numb2)
       
        newStat = Number(newStat.toFixed())
        monsters[i][2] =newStat
        
    }
    for (let i = 0; i < monsters.length; i++) {
        let numb = Math.random() * 1.9*monsters[i][3]
        let numb2 = Math.random() * 1.9*monsters[i][3]
        var newStat = monsters[i][3] + (numb - numb2)
       
        newStat = Number(newStat.toFixed())
        monsters[i][3] =newStat
        
    }
    for (let i = 0; i < monsters.length; i++) {
        let numb = Math.random() * 3.6*monsters[i][3]
        let numb2 = Math.random() * 3.6*monsters[i][3]
        var newStat = monsters[i][4] + (numb - numb2)
       
        newStat = Number(newStat.toFixed())
        monsters[i][4] =newStat
        
    }
    for (let i = 0; i < monsters.length; i++) {
        let numb = Math.random() * 6.8
        let numb2 = Math.random() * 6.8
        var newStat = monsters[i][5] + (numb - numb2)
       
        newStat = Number(newStat.toFixed())
        monsters[i][5] =newStat
        
    }
    for (let i = 0; i < monsters.length; i++) {
        let numb = Math.random() * 1.3* 1.3* 1.3
        let numb2 = Math.random() * 1.3* 1.3* 1.3
        var newStat = monsters[i][6] + (numb - numb2)
       
        newStat = Number(newStat.toFixed())
        monsters[i][6] =newStat
        
    }

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
    if (gameMode == "easy"){
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
    if (gameMode == "hard"){
        var hei = deckE[0][1]/4.65
        var str = deckE[0][2]/10
        var arc = deckE[0][3]/1500
        var div = deckE[0][4]/300
        var spe = deckE[0][5]/50
        var bra = deckE[0][6]/20
        const points = [hei, str, arc, div, spe, bra];
        points.sort(function(a, b){return a - b})
        switch (points[5]) {
               case hei:
                fight1()
                break;
                case str:
                fight2()
                break;
        
                case arc:
                fight3()
                break;

                case div:
                fight4()
                break;
                
                case spe:
                fight5()
                break;

                case bra:
                fight6()
                break;

        
            default:
                break;
        }

    }

}
function unsetCooldown(){
gameBroken = false
}
function fight1(){
    if (deck.length == 0){return}
    if (deckE.length == 0){return}
    if (gameBroken==true){return}
    document.getElementById("callouts").innerHTML = "HEIGHT "+deck[0][1]
    setTimeout(colorFlashReturn, 1000)
   

  
    document.getElementById("calloutsE").innerHTML = "HEIGHT "+deckE[0][1]
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
    if (myTurn == true&&gameBroken==false){
        gameBroken=true
        myTurn=false
        document.getElementById("enemyStatus").innerHTML = "Enemy is thinking"
        setTimeout(enemyAttack,7000)
        }
        
    else if (myTurn == false){
        gameBroken=false
        myTurn=true
        document.getElementById("enemyStatus").innerHTML = "Your Turn"
    }
    gameBroken = true
    setTimeout(unsetCooldown,6999)
    
}
function fight2(){
    if (deck.length == 0){return}
    if (deckE.length == 0){return}
    if (gameBroken==true){return}

    document.getElementById("callouts").innerHTML = "STRENGTH "+deck[0][2]
    setTimeout(colorFlashReturn, 1000)
    document.getElementById("calloutsE").innerHTML = "STRENGTH "+deckE[0][2]
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
gameBroken = true
    setTimeout(unsetCooldown,6999)

}
function fight3(){
    if (deck.length == 0){return}
    if (deckE.length == 0){return}
    if (gameBroken==true){return}

    document.getElementById("callouts").innerHTML = "ARCANE "+deck[0][3]
    setTimeout(colorFlashReturn, 1000)
    document.getElementById("calloutsE").innerHTML = "ARCANE "+deckE[0][3]
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
    gameBroken = true
    setTimeout(unsetCooldown,6999)
}
function fight4(){
    if (deck.length == 0){return}
    if (deckE.length == 0){return}
    if (gameBroken==true){return}

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
    gameBroken = true
    setTimeout(unsetCooldown,6999)
}
function fight5(){
    if (deck.length == 0){return}
    if (deckE.length == 0){return}
    if (gameBroken==true){return}

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
    gameBroken = true
    setTimeout(unsetCooldown,6999)
}
function fight6(){
    if (deck.length == 0){return}
    if (deckE.length == 0){return}
    if (gameBroken==true){return}

    document.getElementById("callouts").innerHTML = "BRAINS "+deck[0][6]
    setTimeout(colorFlashReturn, 1000)
    document.getElementById("calloutsE").innerHTML = "BRAINS "+deckE[0][6]
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
    gameBroken = true
    setTimeout(unsetCooldown,6999)
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
    for (let i = 0; i < winnersE.length; i++) {
        deckE.push(winnersE[i])
        
    }
        for (let i = 0; i < deckE.length; i++) {
            document.getElementById("image"+i).src = deckE[i][0]

            
        }   
        
    }
    else if (deckE.length == 0 && winnersE.length == 0){
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
        for (let i = 0; i < winners.length; i++) {
            deck.push(winners[i])
            
        }
        

        for (let i = 0; i < deck.length; i++) {
            document.getElementById("image"+i).src = deck[i][0]

            
        } 

     }
}
   