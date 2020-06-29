<!-- ### Space Battle
#### Setting up our project directory
1. Create a project directory `$ mkdir yourname-mid-mod-1`
2. `$ cd yourname-mid-mod-1`
3. `$ touch index.html app.js` 
#### Guide to get started 
##### 1 Player game 
- USS Schwarzenegger (User)
  - Attacks first 
  - Is able to retreat 
  - Hull: 20
  - Firepower: 5
  - Accuracy: 7
- 6 Alien ships (Computer)
  - Hull: 3-6
  - Firepower: 2-4
  - Accuracy: .6 - .8
  - <b>Weakness</b> They attack one at a time 
  - <b>Hull (AKA hitpoints):</b>  If hull reaches 0 or less, the ship is destroyed
  - <b>Firepower:</b> Amount of damage done to the hull of the target with a successful hit 
  - <b>Accuracy: </b> is the chance between 0-1 that the ship will hit its target
      - Everytime the ship will attack, calculate the chance that the damage will hit the opposing ship using `Math.random` 
      - If the ships accuracy is greater than `0.8`than the attack is missed
      - If the ships accuracy is less than or equal to `0.8` the attack will be successful 
#### Functionality pseudocode
- Welcome to the game 
- User starts the game
- User can click attack! 
- If alien ship isn't attacked then it is the alien's turn
- If the user survives the alien attack then User can `attack` or `retreat`
- If user retreats the game is over  -->



<!-- more pseudocode...

- Gameplay turn based: a way to track who's turn it is

- When it's the players turn what's happening?
  - ask player if they want to attack or retreat
  - did they say attack, if they did: ***IF STATEMENT
    - player attacks alien 
  IF THE PLAYER HITS? IF IT DOES: 
    - find out the damage done to alien 
    - alien has lost hull I keep way to keep that updated
    - player turns end, alien goes next

  IF THE PLAYER MISSES:
    - THE TURN ENDS FOR THE PLAYER
    - when alien goes it does damage to the player hull. I need way to keep the player's values updated
    - alien's turn ends.

^^^^^^^^^^^^^^^^^^^ KEEPS LOOPING UNTIL AN ALIEN SHIP IS KILLED. THEN ONCE THAT HAPPENS:

DOES THE PLAYER WANT TO ATTACK THE NEW SHIP OR RETREAT?

IF THEY WANT TO ATTACK, FOLLOW THE ABOVE
IF THEY DONT WANT TO THE GAME ENDS

-HOWEVER there are two things that can happen in a round per player.
  1. The alien ship can miss ACC > chance to hit
  || The alien ship can die

  2. The player can miss ACC > chance to hit
  || The player can die
    ** dying can only happen right before the turn ends

WHAT HAPPENS ON A GAME END:
  -ACTUALLY GO BACK TO GAME 
  -QUIT
    -AFTER QUIT DO YOU WANT TO PLAY AGAIN?




HOW MANY WAYS CAN MY GAME END?
-player death: SOME IDEAS >> when player hull == 0 (track by booleans true or false)...
-all aliens death (6) >>> hold all the ships in array and when the array is empty you won the game 
-on retreat >> did the player retreat >> true or false? 



MAKE YOUR CHARACTER

MAKE A CLASS

  - in this class you'll have properties hull, firepower, accuracy
  - classes can hold functions (they are just called METHODS)

class NAMEOFCLASS {
  constructors(){
    this.
    this.
    this.
  }
  ** you can put a fucntion inside this maybe attack method?????
}



***if statements will run if something is true -->