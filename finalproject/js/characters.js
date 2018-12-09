//player
var player;

function Player(classType, health, magic, strength, agility, speed, luck, special) {
    this.classType = classType;
    this.health = health;
    this.magic = magic + ", Special: " + special;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
    this.luck = luck;
}

let PlayerMoves = {
    playerAttack: function() {
        //Calculate how much damage the player deals
        let calcBaseDamage = Math.floor((player.strength + player.agility) / 3);
        let offsetDamage = Math.floor(Math.random() * player.luck / 100);
        let calcOutputDamage = calcBaseDamage + offsetDamage;

        let numberOfHits = Math.floor(player.agility / 100 * player.luck / 100 * Math.random())
        if(numberOfHits === 0) {
            numberOfHits += 1;
        }
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    },
    enemyAttack: function() {
        //Calculate how much damage the enemy deals
        let calcBaseDamage = Math.floor((enemy.strength + enemy.agility) / 3);
        let offsetDamage = Math.floor(Math.random() * enemy.luck / 100);
        let calcOutputDamage = calcBaseDamage + offsetDamage;

        let numberOfHits = Math.floor(enemy.agility / 100 * enemy.luck / 100 * Math.random())
        if(numberOfHits === 0) {
            numberOfHits += 1;
        }
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    },
    playerSpell: function() {

    },
    initiateFight: function() {
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");

        //initiate attack
        //Determine who attacks first
        let getPlayerSpeed = player.speed
        let getEnemySpeed = enemy.speed

        //Player First
        if(getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = PlayerMoves.playerAttack();
            let totalPlayerDamage = Math.floor(playerAttackValues[0] * playerAttackValues[1]);
            enemy.health = enemy.health - totalPlayerDamage
            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] +
            " times to " + enemy.enemyType + ".")
            if(enemy.health <= 0) {
                alert(enemy.enemyType + " has been killed!")
                getPlayerHealth.innerHTML = "Health: " + player.health;
                getEnemyHealth.innerHTML = "Health: 0";
                gamemanager.ascendBtn();
            } else {
                getEnemyHealth.innerHTML = "Health: " + enemy.health;
                //Enemy Attacks Back
                let enemyAttackValues = PlayerMoves.enemyAttack();
                let totalEnemyDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalEnemyDamage;
                alert(enemy.enemyType + " hit you with " + playerAttackValues[0] + " damage " + playerAttackValues[1] +" times.")
                if(player.health <= 0) {
                    alert("The tower has overwhelmed you. Refresh the browser to start over.")
                    getPlayerHealth.innerHTML = "Health: 0";
                    getEnemyHealth.innerHTML = "Health: " + enemy.health;
                } else {
                    getPlayerHealth.innerHTML = "Health: " + player.health;
                    getEnemyHealth.innerHTML = "Health: " + enemy.health;
                }
            }
        } else {
            //enemy first
            let enemyAttackValues = PlayerMoves.enemyAttack();
            let totalEnemyDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalEnemyDamage;
            alert(enemy.enemyType + " hit you with " + playerAttackValues[0] + " damage " + playerAttackValues[1] +" times.")
            if(player.health <= 0) {
                alert("The tower has overwhelmed you. Refresh the browser to start over.")
                getPlayerHealth.innerHTML = "Health: 0";
                getEnemyHealth.innerHTML = "Health: " + enemy.health;
            } else {
                let playerAttackValues = PlayerMoves.playerAttack();
                let totalPlayerDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalPlayerDamage
                alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] +
                " times to " + enemy.enemyType + ".")
                if(enemy.health <= 0) {
                    alert(enemy.enemyType + " has been killed!")
                    getPlayerHealth.innerHTML = "Health: " + player.health;
                    getEnemyHealth.innerHTML = "Health: 0";
                    gamemanager.ascendBtn();
                } else {
                    getEnemyHealth.innerHTML = "Health: " + enemy.health;
                    getPlayerHealth.innerHTML = "Health: " + player.health;
                    getEnemyHealth.innerHTML = "Health: " + enemy.health;
                }
            }
        }
    },
    initiateSpecial: function() {
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        //Determine who attacks first
        let getPlayerSpeed = player.speed
        let getEnemySpeed = enemy.speed

        //Player First
        if(player.special === "none") {
            alert("No special ability!")
        }
        if(getPlayerSpeed >= getEnemySpeed) {
            if(player.special === "Flamethrower") {
                let flamethrowerDamage = 50 + Math.floor(Math.random() * 100)
                let flamethrowerDOT = 9 + Math.floor(Math.random() * 2)
                let flamethrowerDOTTime = Math.floor(Math.random() * 2) + 1
                let flamethrowerCost = 100
                alert("You spent 100 magic to cast Flamethrower!")
                alert("You dealt " + flamethrowerDamage + " damage to the " + enemyType + " and left him burning for " + flamethrowerDOTTime + " periods")
                enemy.health = enemy.health - flamethrowerDamage
                if(enemy.health <= 0) {                    
                    alert(enemy.enemyType + " has been killed!")
                    getPlayerHealth.innerHTML = "Health: " + player.health;
                    getEnemyHealth.innerHTML = "Health: 0";
                    gamemanager.ascendBtn();
                }
                for(let time = 0; time < flamethrowerDOTTime; time++) {
                    alert("The " + enemyType + " was burnt for " + flamethrowerDOT + "damage")
                    enemy.health = enemy.health - flamethrowerDOT
                    if(enemy.health <= 0) {
                        alert(enemy.enemyType + " has been killed!")
                        getPlayerHealth.innerHTML = "Health: " + player.health;
                        getEnemyHealth.innerHTML = "Health: 0";
                        gamemanager.ascendBtn();
                    }
                }
                if(enemy.health > 0) {
                    getEnemyHealth.innerHTML = "Health: " + enemy.health;
                    getPlayerHealth.innerHTML = "Health: " + player.health;
                }
                //enemy attacks back
                let enemyAttackValues = PlayerMoves.enemyAttack();
                let totalEnemyDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalEnemyDamage;
                alert(enemy.enemyType + " hit you with " + playerAttackValues[0] + " damage " + playerAttackValues[1] +" times.")
                if(player.health <= 0) {
                    alert("The tower has overwhelmed you. Refresh the browser to start over.")
                    getPlayerHealth.innerHTML = "Health: 0";
                    getEnemyHealth.innerHTML = "Health: " + enemy.health;
                } else {
                    getPlayerHealth.innerHTML = "Health: " + player.health;
                    getEnemyHealth.innerHTML = "Health: " + enemy.health;
                }
            }
            if(player.special === "Crossbow") {
                let crossbowDamage = 100 + Math.floor(Math.random() * 500)
                let crossbowCost = 50
                alert("You spent 50 magic to cast Crossbow!")
                alert("You dealt " + crossbowDamage + " amount of damage to the" + enemy.enemyType + "!")
                enemy.health = enemy.health - crossbowDamage
                if(enemy.health <= 0) {
                    alert(enemy.enemyType + " has been killed!")
                    getPlayerHealth.innerHTML = "Health: " + player.health;
                    getEnemyHealth.innerHTML = "Health: 0";
                    gamemanager.ascendBtn();
                } else {
                    getEnemyHealth.innerHTML = "Health: " + enemy.health;
                    getPlayerHealth.innerHTML = "Health: " + player.health;
                    //enemy attacks back
                    let enemyAttackValues = PlayerMoves.enemyAttack();
                    let totalEnemyDamage = enemyAttackValues[0] * enemyAttackValues[1];
                    player.health = player.health - totalEnemyDamage;
                    alert(enemy.enemyType + " hit you with " + playerAttackValues[0] + " damage " + playerAttackValues[1] +" times.")
                    if(player.health <= 0) {
                        alert("The tower has overwhelmed you. Refresh the browser to start over.")
                        getPlayerHealth.innerHTML = "Health: 0";
                        getEnemyHealth.innerHTML = "Health: " + enemy.health;
                    } else {
                        getPlayerHealth.innerHTML = "Health: " + player.health;
                        getEnemyHealth.innerHTML = "Health: " + enemy.health;
                    }
                }
            }
        //enemy faster than player
        } else {
            let enemyAttackValues = PlayerMoves.enemyAttack();
            let totalEnemyDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalEnemyDamage;
            alert(enemy.enemyType + " hit you with " + playerAttackValues[0] + " damage " + playerAttackValues[1] +" times.")
            if(player.health <= 0) {
                alert("The tower has overwhelmed you. Refresh the browser to start over.")
                getPlayerHealth.innerHTML = "Health: 0";
                getEnemyHealth.innerHTML = "Health: " + enemy.health;
            } else {
                getPlayerHealth.innerHTML = "Health: " + player.health;
                getEnemyHealth.innerHTML = "Health: " + enemy.health;
                if(player.special === "Flamethrower") {
                    let flamethrowerDamage = 50 + Math.floor(Math.random() * 100)
                    let flamethrowerDOT = 9 + Math.floor(Math.random() * 2)
                    let flamethrowerDOTTime = Math.floor(Math.random() * 2) + 1
                    let flamethrowerCost = 100
                    alert("You spent 100 magic to cast Flamethrower!")
                    alert("You dealt " + flamethrowerDamage + " damage to the " + enemyType + " and left him burning for " + flamethrowerDOTTime + " periods")
                    enemy.health = enemy.health - flamethrowerDamage
                    if(enemy.health <= 0) {                    
                        alert(enemy.enemyType + " has been killed!")
                        getPlayerHealth.innerHTML = "Health: " + player.health;
                        getEnemyHealth.innerHTML = "Health: 0";
                        gamemanager.ascendBtn();
                    }
                    for(let time = 0; time < flamethrowerDOTTime; time++) {
                        alert("The " + enemyType + " was burnt for " + flamethrowerDOT + "damage")
                        enemy.health = enemy.health - flamethrowerDOT
                        if(enemy.health <= 0) {
                            alert(enemy.enemyType + " has been killed!")
                            getPlayerHealth.innerHTML = "Health: " + player.health;
                            getEnemyHealth.innerHTML = "Health: 0";
                            gamemanager.ascendBtn();
                        }
                    }
                }
                if(player.special === "Crossbow") {
                    let crossbowDamage = 100 + Math.floor(Math.random() * 500)
                    let crossbowCost = 50
                    alert("You spent 50 magic to cast Crossbow!")
                    alert("You dealt " + crossbowDamage + " amount of damage to the" + enemy.enemyType + "!")
                    enemy.health = enemy.health - crossbowDamage
                    if(enemy.health <= 0) {
                        alert(enemy.enemyType + " has been killed!")
                        getPlayerHealth.innerHTML = "Health: " + player.health;
                        getEnemyHealth.innerHTML = "Health: 0";
                        gamemanager.ascendBtn();
                    } else {
                        getEnemyHealth.innerHTML = "Health: " + enemy.health;
                        getPlayerHealth.innerHTML = "Health: " + player.health;
                    }
                }
            }
        }
    }
}

//enemy
let enemy;

function Enemy(enemyType, health, magic, strength, agility, speed, luck) {
    this.enemyType = enemyType;
    this.health = health;
    this.magic = magic;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
    this.luck = luck;
}