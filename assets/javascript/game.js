//make undefined variables for the character stats
var playerHealth, playerAttack, playerBaseAttack, enemyHealth, enemyAttack;

window.onload = function() {
    document.getElementById("my_audio").play();
}



//choosing player character
$('body').on("click", '.chooseChar .charCard', function() {
    var currentElement = $(this); // assign a currentElement variable to be the image we click on
    $("#playerCharacter").append(currentElement); // send the image to the playerCharacter box
    console.log( $("#playerCharacter"));

   $(".enemyRow").append($('.chooseChar .charCard')); //send the remaining characters to the enemy row
   playerHealth = currentElement.data("health"); //retrieve the health of the chosen character from the HTML pages value
   playerAttack = currentElement.data("attackPower"); //retrieve the attackpower of the chosen character from the HTML page's value to be dynamically changed from character's base attack value 
   playerBaseAttack = currentElement.data("attackPower"); //retrieve the attackpower of the chosen character from the HTML page's value to be the base attack
   updateCharCardDisplay($(currentElement), playerHealth, playerAttack); //update the chosen characters stats when it goes to the fightBox
});

// when choosing an card in the enemy row send it to opponent fighter box; hide the enemy row; 
$('body').on("click", '.chooseEnemy .charCard', function() {
    var currentElement = $(this); // recognize which card we click
    $("#opponent").append(currentElement); //send it to the enemy box
    $(".chooseEnemy .charCard").hide(); // hide the enemy row during the battle
    enemyHealth = currentElement.data("health"); //retrieve health stat from HTML page for enemy
    enemyAttack = currentElement.data("counterPower"); // retrieve counter attack stat from HTML page for enemy
    updateCharCardDisplay($(currentElement), enemyHealth, enemyAttack); // update the chosen enemy when it goes to his fight box
   // console.log( $("#playerCharacter"));
});
//put the retrieved value on the charCard for the user to see
function updateCharCardDisplay (charCard, health, attack) { 
    charCard.find('.health').text('HP: ' + health); //update the health stat on the card
    charCard.find('.attack').text('Attack: ' + attack);//update the attack stat on the card
}

$('#attackButton').on('click', function() {
    // Perform battle calculations
    enemyHealth = enemyHealth - playerAttack;
    playerAttack = playerAttack + playerBaseAttack;
    playerHealth = playerHealth - enemyAttack;
    // Update display of player and then opponent.
    updateCharCardDisplay($('#playerCharacter .charCard'), playerHealth, playerAttack);
    updateCharCardDisplay($('#opponent .charCard'), enemyHealth, enemyAttack);
    
    //if player HP reaches 0: alert gameover, reset
    if (playerHealth <= 0) {
        alert('You lose! Try again!');//alert loss
        document.location.reload();//reload entire game
    } else if (enemyHealth <= 0) {
        $('.deadOpponent').append($('#opponent .charCard'));//send dead opponenent to the defeated pile
        $('.chooseEnemy .charCard').show();//show enemy selection again

        // If there are no more opponents, the player has won.
        if ($(".chooseEnemy .charCard").length === 0) {
            alert("VICTORY! Click the restart button to try again!");
        } else {
            alert('Next opponent!');//alert new opponent
        }
    }
});

//create a reset button and make the reset function
$('#restartButton').on('click', function() {
    document.location.reload();
})
