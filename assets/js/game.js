var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
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

  // generate random damage value based on player's attack power
  var damage = randomNumber(playerAttack - 3, playerAttack);
  // remove enemy's health by subtracting the amount set in the playerAttack variable
  enemyHealth = Math.max(0, enemyHealth - damage);
  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " has " + enemyHealth + " health remaining."
  );    
      
  // Check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      //award player money for winning
        playerMoney = Math.max(0, playerMoney + 20);

        //leave while() loop since enemy has died
        break;
      } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
      }
      
      // generate random damage value based on enemy's attack power
      var damage = randomNumber(enemyAttack - 3, enemyAttack);
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = Math.max(0, playerHealth - damage);
      // Log a resulting message
      console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      // Check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        //leave while() loop if player is dead
        endGame();
      } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
    }
  };


  // function to start a new game
var startGame = function() {
  //debugger;
  // fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  // if player is still alive, keep fighting
  if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    //reset enemyHealth before starting new fight
    enemyHealth = randomNumber(40, 60);

    // use debugger to pause script from running and check what's going on at that moment in the code
    //newFunction();

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);

    // if we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length - 1) {
      //ask if player wants to use the store before next round
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      
      //if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }
     
    }
  }
  // if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
  }
}
//aftrer the loop ends, player is either out of health or enemies to fight, so run the endGame function
endGame();

};


// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("great job, you've survived the game! You now have a score of " + playerMoney + "."); 
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play agian
  var playAgainConfirm = window.confirm("would you like to play again?");
  
  if (playAgainConfirm) {
    // restart the game
    startGame()
  }
  else {
    window.alert("Thank you for playing Robot ladiators! Come back soon!");
  }
};


// Function the enter shop
var shop = function() {
// ask player what they'd like to do
var shopOptionPrompt = window.prompt(
  "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
);

// use switch to carry out action
switch (shopOptionPrompt) {
  case "REFILL":
  case "refill":
    if (playerMoney >=7) {
    window.alert("Refilling player's health by 20 for 7 dollars.");

    // increase health and decrease money
    playerHealth = playerHealth + 20;
    playerMoney = playerMoney - 7;
    }
    else {
      window.alert("You dont have enough money!");
    }

    break;
  case "UPGRADE":
  case "upgrade":
    if (playerMoney >= 7) {
    window.alert("Upgrading player's attack by 6 for 7 dollars.");

    // increase attack and decrease money
    playerAttack = playerAttack + 6;
    playerMoney = playerMoney - 7;
    }
    else {
      window.alert("you dont have enough money!");
    }

    break;
  case "LEAVE":
  case "leave":
    window.alert("Leaving the store.");

    // do nothing, so function will end
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");

    // call shop() again to force player to pick a valid option
    shop();
    break;
}

};
  

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};


//start the game when the page loads
startGame()






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
