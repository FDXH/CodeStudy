new Vue({
    el: '#app',
    data: {
        playerHP: 100,
        monsterHP: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHP = 100;
            this.monsterHP = 100;
            this.turns = [];
        },
        attack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHP -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: '玩家普通攻击怪兽' + damage + '点血'
            });
            if (this.checkWin()){
                return;
            }

            this.monsterAttack();
        },
        specialAttack: function () {
            damage = this.calculateDamage(10, 20);
            this.monsterHP -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: '玩家使用大招攻击怪兽' + damage + '点血'
            });

            if (this.checkWin()){
                return;
            }

            this.monsterAttack();
        },
        heal: function () {
            if (this.playerHP <= 90){
                this.playerHP += 10;
            }else {
                this.playerHP = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text:  '玩家使用回血技能回了10点血'
            })

            this.monsterAttack();
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },
        monsterAttack: function(){
            var damage = this.calculateDamage(5, 12);
            this.playerHP -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: '怪兽攻击玩家' + damage + '点血'
            });
            this.checkWin();
        },
        calculateDamage: function (min,max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        checkWin: function() {
            if (this.monsterHP <= 0 ) {
                if (confirm("you won! New Game?")) {
                    this.startGame();
                }else {
                    this.gameIsRunning = false;
                }
                return true;
            }else if (this.playerHP <= 0) {
                if (confirm("you lost! New Game?")) {
                    this.startGame();
                }else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
})