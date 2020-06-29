// ask if they want to attack or retreat
// run attack function
// run math.random 

// var player;
// var enemy;

// //write if/else statement that will answer to the prompt




// USSschwarzenegger object
// get USSschwarzenegger to attack alienShip

//creates the player
class USSschwarzenegger {
    constructor(hull, firepower, accuracy) { //these are the properties of my class that can be define using a variable and assigning it to a new ship
        this.hull = hull,
            this.firepower = firepower,
            this.accuracy = accuracy
    }
};

let player = new USSschwarzenegger(20, 5, .7); // defined properties
//telling the player their stats
alert(`${" USSschwarzenegger- " + " health: " + player.hull + " firepower: " + player.firepower + " accuracy: " + player.accuracy}`)

// creates the alien.
class AlienShip {
    constructor(hull, firepower, accuracy) {
        this.hull = hull,
            this.firepower = firepower,
            this.accuracy = accuracy
    }
};

let currentEnemy = new AlienShip(6, 3, .6);

// stats of the enemy ship
alert(`${" Alien Ship- " + " health: " + currentEnemy.hull + " firepower: " + currentEnemy.firepower + " accuracy: " + currentEnemy.accuracy}`)


//I want the attack function to take health away from the enemy ship 
// if they hit or miss should be randomized
// after the attack the player should choose if they want to attack or retreat again 


//USSshwarzenegger hull- AlienShip firepower


// after the play attacks if the enemys health is 0... the ship is destroyed

let afterPlayerAttack = () => {
    if (currentEnemy.hull <= 0) {
        alert("Enemy ship has been destroyed!")
        currentEnemy = new AlienShip(6, 3, .6);
        gameLoop() // will contain the question if they would like to continue fighting
    } else {
        alert(`${"They have been hit! The Alien ships health is " + currentEnemy.hull + " now. "}`)
        alienAttacks();//calls on this function when the alien has been hit it in now their turn
    }
};



let afterEnemyAttack = () => {
    if (player.hull > 0) {
        alert("The ships health is " + player.hull + " now. ")
        iHaveAttacked();// calls on this function after player has been hit
    } else {
        alert("You have been destroyed!")
        null;
    }
};




let iHaveAttacked = () => {
    alert("attacking!");
    let playerAccuracy = Math.random(0, 1)
    if (playerAccuracy <= player.accuracy) {
        currentEnemy.hull = currentEnemy.hull - player.firepower
        afterPlayerAttack() //calls on this function after enemy has been hit 
    } else {
        alert("You missed!")
        //since you miss the alien you attack
        alienAttacks()
    }

};



let alienAttacks = () => {
    let enemyAccuracy = Math.random(0, 1)
    if (enemyAccuracy <= currentEnemy.accuracy) {
        alert("You have been hit!")
        player.hull = player.hull - currentEnemy.firepower
        afterEnemyAttack() // calls on this function after player has been hit
    } else {
        alert("They missed the ship!")
        iHaveAttacked(); // calls on this function after the aliens turn
    }
};


let gameLoop = () => {
    while (currentEnemy.hull > 0 && player.hull > 0) {
        let endOfRound = prompt("Your health is now " + player.hull + " Would you like to continue? (yes or no) ")
        if (endOfRound === "yes") {
            alert("Preparing to attack.") //they're attacking
            iHaveAttacked();
        } else {
            alert("stand down!")
            break;
        }
    };

}

let aliens = 6;

while (aliens >= 0) {
    let startOfGame = prompt("Aliens are attacking our USSshwarzenegger ship. Would you like to attack... or retreat?")
    if (startOfGame == "attack") { //player's attacking
        alert("approaching enemy...")
        //you want the player to attack here:
        iHaveAttacked();
        aliens--;

    } else { //player's retreating
        alert("stand down!")
        break;
    };
}