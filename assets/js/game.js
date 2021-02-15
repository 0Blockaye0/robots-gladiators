// start the game
var startGame = function () {
  //debugger;
  // reset player stats
    playerInfo.reset();


    // fight each robot loop
    for (var i = 0; i < enemyInfo.length; i++) {
    // if health remaining..
    if (playerInfo.health > 0) {
      //Round [i+1]
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
      //debugger;

      // selected next enemy
      var pickedEnemyObj = enemyInfo[i];

      // random enemy health
      pickedEnemyObj.health = randomNumber(40, 60);

      console.log(pickedEnemyObj);

      // begin fight with new enemy
      fight(pickedEnemyObj);
    }
    // no health stop the game
    else {
      //break;
    }
    }

    // game results
    endGame();
  };

// end the entire game
var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");

  // if player lives..else "you lost"
  if (playerInfo.health > 0) {
    window.alert("great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  }  else {
    window.alert("You've lost your robot in battle!");
  }

  // play agian? confirm.
  var playAgainConfirm = window.confirm("would you like to play again?");
 
  if (playAgainConfirm) {
    // restart the game
    startGame()
  }else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

// fight or skip?
var fightOrSkip = function() {
  var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

      // Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) {
      window.alert("You need to provide a valid answer! Please try again.");
      return fightOrSkip();
    }
    // lowercase prompt
    promptFight = promptFight.toLocaleLowerCase()
    
    // if prompt is skip then confirm
    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if(true), leave fight
      if (confirmSkip) {
        window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
        // subtract for skipping
        playerInfo.playerMoney = playerInfo.money - 10;
        shop();
        return true;
      }
  }
}

// fight "enemy"
var fight = function (enemy) {
  // if enemy alive keep fighting 
  while (enemy.health > 0 && playerInfo.health > 0) {
    
    // fight or skip? (T or F)
    if (fightOrSkip()) {
      break;
    };

    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    
    // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
    enemy.health = Math.max(0, enemy.health - damage);
    // Log a resulting message to the console so we know that it worked.
    console.log(
      playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " has " + enemy.health + " health remaining."
    );

    // Check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + " has died!");

      //award player money for winning
      playerInfo.money = Math.max(0, playerInfo.money + 20);

      // ask if player wants to use the store before next round
      var storeConfirm = window.confirm('The fight is over, visit the store before the next round?');

      // if yes, take them to the store() function
      if (storeConfirm) {
        shop();
      }

      //leave while() loop since enemy has died
      break;
    } else {
      window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // generate random damage value based on enemy's attack power
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    // remove players's health by subtracting the amount set in the enemy.attack variable
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    // Log a resulting message
    console.log(
      enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );

    // Check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + " has died!");
      //leave while() loop if player is dead
      break;;
    } else {
      window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
  }
};

// enter shop
var shop = function () {

  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );
  // make switch accept numbers
  shopOptionPrompt = parseInt(shopOptionPrompt);
  
  // use switch to carry out action
  switch (shopOptionPrompt) {

    case 1:
      playerInfo.refillHealth();
      break;

    case 2:
      playerInfo.upgradeAttack();
      break;

    case 3:
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

// random number(min,max)
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

//PLAYER/ENEMY-INFO
var getPlayerName = function() {
  var name = "";
  while (name === "" || name === null) {
    name =prompt("what is your robot's name?");
  }
console.log("Your robot's name is"  + name);
  return name;
};

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  ////////////////////////
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];

startGame()

//COMMENTS AND SUCH
// You can also log multiple values at once like this
//console.log(playerInfo.name, playerInfo.attack,playerInfo.health);


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


