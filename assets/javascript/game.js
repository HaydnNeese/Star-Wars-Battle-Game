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
    var opponentNewHealth = enemyHealth - playerAttack;
    var increasePlayerDamage = playerAttack + playerBaseAttack;
    var counterDamage = playerHealth - enemyAttack;    

    // attack button when clicked needs to lower health of opponent using the attack power total
    $('#opponent .health').text('HP: ' + opponentNewHealth);

    // when attack power is clicked it will increase by base attack power's value
    $('#playerCharacter .attack').text('Attack: ' + increasePlayerDamage);

    // lower player health by opponent's counter attack total
    $('#playerCharacter .health').text('HP: ' + counterDamage);

    playerHealth = counterDamage; //reassign new value to playerHealth
    playerAttack = increasePlayerDamage; //reassign new value to attackPower
    //if player HP reaches 0: alert gameover, reset

    if(playerHealth <= 0) {
        alert('Something Something Dark Side');//alert loss
        document.location.reload();//reload entire game

    }else if(opponentNewHealth <= 0) {
        alert('Next opponent');//alert new opponent
        $('.deadOpponent').append($('#opponent .charCard'));//send dead opponenent to the defeated pile
        $('.chooseEnemy .charCard').show();//show enemy selection again
    }
});

//if all three enemies die then alert victory of game and reset entire game

if('.deadOpponent'.document.getElementsByClassName='.charCard'.length <= 3) {
    alert('The force is strong in this one');
    document.location.reload();
}//still not working

//create a reset button and make the reset function
$('#restartButton').on('click', function() {
    document.location.reload();
})
