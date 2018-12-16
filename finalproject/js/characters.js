//player
var player;

function Player(classType, health, magic, strength, agility, speed, luck, special) {
    this.classType = gamemanager.underscoreToSpace(classType);
    this.health = health;
    this.magic = magic;
    this.special = special;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
    this.luck = luck;
}

let PlayerMoves = {
    updateHealth: function() {
        getEnemyHealth.innerHTML = "Health: " + enemy.health;
        getPlayerHealth.innerHTML = "Health: " + player.health;
    },
    playerAttack: function() {
        //Calculate how much damage the player deals
        let calcBaseDamage = Math.floor((player.strength + player.agility) / 3);
        let offsetDamage = Math.floor(Math.random() * player.luck / 10);
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
        let offsetDamage = Math.floor(Math.random() * enemy.luck / 10);
        let calcOutputDamage = calcBaseDamage + offsetDamage;

        let numberOfHits = Math.floor(enemy.agility / 100 * enemy.luck / 100 * Math.random())
        if(numberOfHits === 0) {
            numberOfHits += 1;
        }
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
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
                alert(enemy.enemyType + " hit you with " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] +" times.")
                if(player.health <= 0) {
                    alert("The tower has overwhelmed you. Refresh the browser to start over.")
                    getPlayerHealth.innerHTML = "Health: 0";
                    getEnemyHealth.innerHTML = "Health: " + enemy.health;
                } else {
                    PlayerMoves.updateHealth()
                }
            }
        } else {
            //enemy first
            let enemyAttackValues = PlayerMoves.enemyAttack();
            let totalEnemyDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalEnemyDamage;
            alert(enemy.enemyType + " hit you with " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] +" times.")
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
                    PlayerMoves.updateHealth()
                }
            }
        }
    },
    initiateSpecial: function() {
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        let getPlayerMagic = document.querySelector(".magic-player");
        //Determine who attacks first
        let getPlayerSpeed = player.speed
        let getEnemySpeed = enemy.speed

        //Player First
        //Flamethrower obj
        let flamethrower = {
            damage: 50 + Math.floor(Math.random() * 100),
            dot: 9 + Math.floor(Math.random() * 2),
            time: Math.floor(Math.random() * 2) + 1,
            cost: 100
        }
        //Crossbow obj
        let crossbow = {
            damage: 100 + Math.floor(Math.random() * 500),
            cost: 50
        }
        if(player.special === "None") {
            alert("No special ability!");
            if(player.magic <= 0) {
                alert("Not enough magica!")
                if(getPlayerSpeed >= getEnemySpeed) {
                    //Flamethrower
                    //Player Attack
                    if(player.special === "Flamethrower") {
                        alert("You spent 100 magic to cast Flamethrower!")
                        player.magic = Number(player.magic) - Number(flamethrower.cost);
                        getPlayerMagic.innerHTML = "Magic: " + player.magic
                        alert("You dealt " + flamethrower.damage + " damage to the " + enemy.enemyType + " and left him burning for " + flamethrower.time + " periods")
                        enemy.health = enemy.health - flamethrower.damage
                        if(enemy.health <= 0) {                    
                            alert(enemy.enemyType + " has been killed!")
                            getPlayerHealth.innerHTML = "Health: " + player.health;
                            getEnemyHealth.innerHTML = "Health: 0";
                            gamemanager.ascendBtn();
                        }
                        if(enemy.health > 0) {
                            getEnemyHealth.innerHTML = "Health: " + enemy.health;
                            for(let dottime = 0; dottime < Number(flamethrower.time); dottime++) {
                                alert("The " + enemy.enemyType + " was burnt for " + flamethrower.dot + " damage")
                                enemy.health = enemy.health - flamethrower.dot
                                if(enemy.health <= 0) {
                                    alert(enemy.enemyType + " has been killed!")
                                    getPlayerHealth.innerHTML = "Health: " + player.health;
                                    getEnemyHealth.innerHTML = "Health: 0";
                                    gamemanager.ascendBtn();
                                    break;
                                }else {
                                    PlayerMoves.updateHealth()
                                }
                            }
                        }
                        if(enemy.health > 0) {
                            PlayerMoves.updateHealth()
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
                            PlayerMoves.updateHealth()
                        }
                    }
                    if(player.special === "Crossbow") {
                        alert("You spent 50 magic to cast Crossbow!")
                        player.magic = Number(player.magic) - Number(crossbow.cost)
                        getPlayerMagic.innerHTML = "Magic: " + player.magic
                        alert("You dealt " + crossbow.damage + " amount of damage to the " + enemy.enemyType + "!")
                        enemy.health = enemy.health - crossbow.damage
                        if(enemy.health <= 0) {
                            alert(enemy.enemyType + " has been killed!")
                            getPlayerHealth.innerHTML = "Health: " + player.health;
                            getEnemyHealth.innerHTML = "Health: 0";
                            gamemanager.ascendBtn();
                        } else {
                            PlayerMoves.updateHealth()
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
                    alert(enemy.enemyType + " hit you with " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] +" times.")
                    if(player.health <= 0) {
                        alert("The tower has overwhelmed you. Refresh the browser to start over.")
                        getPlayerHealth.innerHTML = "Health: 0";
                        getEnemyHealth.innerHTML = "Health: " + enemy.health;
                    } else {
                        getPlayerHealth.innerHTML = "Health: " + player.health;
                        getEnemyHealth.innerHTML = "Health: " + enemy.health;
                        if(player.special === "Flamethrower") {
                            alert("You spent 100 magic to cast Flamethrower!")
                            player.magic = Number(player.magic) - Number(flamethrower.cost)
                            getPlayerMagic.innerHTML = "Magic: " + player.magic
                            alert("You dealt " + flamethrower.damage + " damage to the " + enemy.enemyType + " and left him burning for " + flamethrower.time + " periods")
                            enemy.health = enemy.health - flamethrower.damage
                            if(enemy.health <= 0) {                    
                                alert(enemy.enemyType + " has been killed!")
                                getPlayerHealth.innerHTML = "Health: " + player.health;
                                getEnemyHealth.innerHTML = "Health: 0";
                                gamemanager.ascendBtn();
                            }
                            getEnemyHealth.innerHTML = "Health: " + enemy.health
                            if(enemy.health > 0) {
                                getEnemyHealth.innerHTML = "Health: " + enemy.health;
                                for(let dottime = 0; dottime < Number(flamethrower.time); dottime++) {
                                    alert("The " + enemy.enemyType + " was burnt for " + flamethrower.dot + " damage")
                                    enemy.health = enemy.health - flamethrower.dot
                                    if(enemy.health <= 0) {
                                        alert(enemy.enemyType + " has been killed!")
                                        getPlayerHealth.innerHTML = "Health: " + player.health;
                                        getEnemyHealth.innerHTML = "Health: 0";
                                        gamemanager.ascendBtn();
                                        break;
                                    }else {
                                        getEnemyHealth.innerHTML = "Health: " + enemy.health;
                                    }
                                }
                            }
                        }    
                        if(player.special === "Crossbow") {
                            alert("You spent 50 magic to cast Crossbow!")
                            player.magic = Number(player.magic) - Number(crossbow.cost)                 
                            getPlayerMagic.innerHTML = "Magic: " + player.magic
                            alert("You dealt " + crossbow.damage + " amount of damage to the" + enemy.enemyType + "!")
                            enemy.health = enemy.health - crossbow.damage
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
    },
    initiateDefend: function() {
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        let enemyAttackValues = PlayerMoves.enemyAttack();
        let rngBlockChance = Math.round(Math.random() * 1);
        if(rngBlockChance === 1) {
            let parryDamage = enemyAttackValues[0] + Math.floor(Math.random() * 10) - Math.floor(Math.random() * enemyAttackValues[0])
            for(let parryAmount = 1; parryAmount <= enemyAttackValues[1]; parryAmount++) {
                if(parryAmount = 1) {
                    alert("You successfully parried the " + enemy.enemyType + " and reflected " + parryDamage + " damage!")
                } else {
                    alert("You parried the " + enemy.enemyType + " again and reflected " + parryDamage + " damage!")
                }
                enemy.health = enemy.health - parryDamage;
                if(enemy.health <= 0) {
                    alert(enemy.enemyType + " has been killed!")
                    getPlayerHealth.innerHTML = "Health: " + player.health;
                    getEnemyHealth.innerHTML = "Health: 0";
                    gamemanager.ascendBtn();
                } else {
                getEnemyHealth.innerHTML = "Health: " + enemy.health
                }
            }
        } else {
            let failedattackDamage = Number(enemyAttackValues[0]) - Math.floor(Math.random() * Number(enemyAttackValues[0]) - Math.floor(Math.random() * 10))
            if(failedattackDamage <= 0) {
                failedattackDamage = 1
            }
            for(let failedattackAmount = 1; failedattackAmount <= enemyAttackValues[1]; failedattackAmount++) {
                if(failedattackAmount = 1) {
                    alert("You failed to parry the " + enemy.enemyType + " and received " + failedattackDamage + " damage!")
                } else {
                    alert("You failed to parry the " + enemy.enemyType + " again and received " + failedattackDamage + " damage!")
                }
                player.health = player.health - failedattackDamage;
                if(player.health <= 0) {
                    alert("The tower has overwhelmed you. Refresh the browser to start over.")
                    getPlayerHealth.innerHTML = "Health: 0";
                    getEnemyHealth.innerHTML = "Health: " + enemy.health;
                } else {
                    getPlayerHealth.innerHTML = "Health: " + player.health;
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