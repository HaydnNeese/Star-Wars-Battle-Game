//make undefined variables for the character stats
var playerHealth, playerAttack, playerBaseAttack, enemyHealth, enemyAttack;

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
   //console.log(currentElement.data("health"), currentElement.data("attackPower"), currentElement.data("counterPower"));
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
    // attack button when clicked needs to lower health of opponent using the attack power total
    
    // when attack power is clicked it will increase by base attack power's value

    // lower player health by opponent's counter attack total

});

//if enemy health = 0 or less then remove image from screen 
//alert win round
//reveal enemy row to user so they can choose a new fighter
//send new enemy to fightbox
//redo fighting mechanics
//and enemy health win condition
//if all three enemies die then alert victory of game
//if player health = 0 change image to (some death image) and alert loss message
//create a reset button and make the reset function

