//Keeps track on how many floors the player went
var floorLevel = 1;
//Keeps track on how many spawnlings have spawned
var spawnlingAmount = 1;

let gamemanager = {
    rngEnemy: function() {
        //Create enemy
        let enemy99 = new Enemy("Spawnling", Math.round(50 * spawnlingAmount / 4), 0, Math.round(20 * spawnlingAmount / 4), Math.round(50 * spawnlingAmount / 4), Math.round(100 * spawnlingAmount / 4), 100)
        let enemy00 = new Enemy("Goblin", 50, 0, 25, 75, 150, 100)
        let enemy01 = new Enemy("Troll", 150, 0, 100, 15, 70, 70)
        let enemy05 = new Enemy("Enchanted_Wall", 250, 10, 1000, 0, 1, 100)
        let enemy07 = new Enemy("Necromancer", 200, 200, 10, 10, 50, 200)
        let enemy10 = new Enemy("Corrupt", 500, 100, 250, 150, 400, 50)
        //Randomly choosing enemy
        let chooseRandomEnemy = Math.round(Math.random() * floorLevel);
        if(chooseRandomEnemy === 0 || chooseRandomEnemy === 2 || chooseRandomEnemy === 4) {
            enemy = enemy00;
        }
        if(chooseRandomEnemy === 1 || chooseRandomEnemy === 3 || chooseRandomEnemy === 9) {
            enemy = enemy01;
        }
        if(chooseRandomEnemy === 5 || chooseRandomEnemy === 6) {
            enemy = enemy05;
        }
        if(chooseRandomEnemy === 7 || chooseRandomEnemy === 8) {
            enemy = enemy07;
        }
        if(chooseRandomEnemy === 10) {
            enemy = enemy10;
        }
        if(chooseRandomEnemy > 10) {
            spawnlingAmount++;
            enemy = enemy99
        }
    },
    rngItem: function() {
        //Create item
        let item00 = new Item("Ring of Health", 50, 0, 10, 0, 0, 0);
        let item01 = new Item("Boots of Speed", 0, 0, 0, 10, 50, 0);
        let item02 = new Item("Magic talisman", 0, 50, 0, 0, 0, 10);
        let item03 = new Item("Band of Strength", 10, 0, 50, 0, 0, 0);
        let item04 = new Item("Lightweight armor", 0, 0, 0, 50, 10, 0);
        let item05 = new Item("Lucky coin", 0, 10, 0, 0, 0, 50);

        //Decide if an item will spawn
        let spawnRandomItem = Math.round(Math.random() * player.luck / 75);
        if(spawnRandomItem >= 1) {
            //Decide what item to spawn
            let chooseRandomItem = Math.round(Math.random() * 5);
            if(chooseRandomItem === 0) {
                item = item00;
            }
            if(chooseRandomItem === 1) {
                item = item01;
            }
            if(chooseRandomItem === 2) {
                item = item02;
            }
            if(chooseRandomItem === 3) {
                item = item03;
            }
            if(chooseRandomItem === 4) {
                item = item04;
            }
            if(chooseRandomItem === 5) {
                item = item05;
            }
            let getInterface = document.querySelector(".interface");
            //Update player values
            player.health = player.health + item.health;
            player.magic = player.magic + item.magic;
            player.agility = player.agility + item.agility;
            player.strength = player.strength + item.strength;
            player.speed = player.speed + item.speed;
            player.luck = player.luck + item.luck;
            //Make updates visible to user
            getInterface.innerHTML = '<img src="assets/' + 
            player.classType + '.jpg" class="img-avatar"><div><h3>' +
            player.classType + '</h3><p class="health-player">Health : ' + player.health + '</p><p class="magic-player">Magic : '
            + player.magic + '</p><p>Strength : '
            + player.strength + '</p><p>Agility : '
            + player.agility + '</p><p>Speed : ' + player.speed + '</p><p>Luck : '
            + player.luck + '</p>';
            alert("You received " + item.itemType + "!")
        }
    },
    restartGame: function() {
        let getActions = document.querySelector(".actions");
        getActions.innerHTML = "<a href='#' class='btn-prefight' onclick='window.location.reload()'>Restart Game</a>";
    },
    underscoreToSpace: function(text) {
        text = text.split("_");
        return text.join(" ")
    },
    selectedClass: function(classType) {
        if(classType === 'Warrior') {
            player = new Player(classType, 300, 0, 150, 25, 75, 100, "None");
        }
        if(classType === 'Elementalist') {
            player = new Player(classType, 150, 200, 50, 100, 100, 65, "Flamethrower");
        }
        if(classType === 'Assassin') {
            player = new Player(classType, 100, 50, 75, 200, 250, 125, "Crossbow");
        }
        let getActions = document.querySelector(".actions");
        getActions.innerHTML = "<a href='#' class='btn-prefight' onclick='gamemanager.setGameStart()'>Confirm class</a>";
    },
    setGameStart: function() {
        this.resetPlayer();
        this.setPreFight();
    },
    resetPlayer: function() {
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="assets/' + 
        player.classType + '.jpg" class="img-avatar"><div><h3>' +
        player.classType + '</h3><p class="health-player">Health : ' + player.health + '</p><p class="magic-player">Magic : '
        + player.magic + '</p><p>Strength : '
        + player.strength + '</p><p>Agility : '
        + player.agility + '</p><p>Speed : ' + player.speed + '</p><p>Luck : '
        + player.luck + '</p>';
    },
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        //Class selected, waiting to enter the game
        getHeader.innerHTML = '<p>Enter the Tower</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gamemanager.setFight()">Enter</a>';
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        
        //Choosing what enemy to spawn
        this.rngEnemy()
        
        //Changing the html display
        getHeader.innerHTML = '<p>Floor ' + floorLevel + '</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.initiateFight()">Attack</a><a href="#" class="btn-prefight" onclick="PlayerMoves.initiateSpecial()">Special Attack</a><a href="#" class="btn-prefight" onclick="PlayerMoves.initiateDefend()">Defend</a>';
        getEnemy.innerHTML = '<img src="assets/' + 
        enemy.enemyType + '.jpg" enemy="img-avatar"><div><h3>' +
        this.underscoreToSpace(enemy.enemyType) + '</h3><p class="health-enemy">Health : ' + enemy.health + '</p><p>Magic : '
        + enemy.magic + '</p><p>Strength : ' + enemy.strength + '</p><p>Agility : '
        + enemy.agility + '</p><p>Speed : ' + enemy.speed + '</p><p>Luck : '
        + enemy.luck + '</p>';
    },
    ascendBtn: function() {
        gamemanager.rngItem()

        let getActions = document.querySelector(".actions");
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gamemanager.ascendFloor()">Next Floor</a>';
    },
    ascendFloor: function() {
        floorLevel++;
        this.setFight();
    }
}