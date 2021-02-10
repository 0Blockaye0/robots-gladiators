var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 30;
var playerMoney = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
var fight = function (enemyName) {
  // repeat and execute as long as the enemy-robot is alive 
  while (enemyHealth > 0 && playerHealth > 0) {
    // Ask player if they would like to fight or run?
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney" , playerMoney);
      break;
    }
  }

  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " has " + enemyHealth + " health remaining."
  );    
      
  // Check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      //award player money for winning
        playerMoney = playerMoney + 20;

        //leave while() loop since enemy has died
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
      
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      // Log a resulting message
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      // Check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        //leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    }
  };

  // fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
  // if player is still alive, keep fighting
  if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    //reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    //newFunction();

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }
  // if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
  }
}


/////////////////////////////////////////////
//function newFunction() {
  //debugger;
//}
/////////////////////////////////////////////

// run fight function to start game
//fight();


// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// if the enemy-robot's health is zero or less, exit from the fight loop.
