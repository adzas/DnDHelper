
export default class QuestLevelHelper {
    oBattleField = null;
    howManyEnemies = 0;
    playersList = [];

    setBFObjects(oBattleField) {
        if (!Array.isArray(oBattleField)) {
            console.log('Battlefield should be an array');
            return;
        }
        if (oBattleField.length === 0) {
            console.log('Battlefield is empty');
            return;
        }
        this.oBattleField = oBattleField;
    }

    setPlayersName(players) {
        if (Array.isArray(players)) {
            this.players = players;
        } else {
            console.log('Players should be an array');
        }
    }

    getPlayersName() {
        if (Array.isArray(this.players)) {
            return this.players;
        } else {
            console.log('Players not set or not an array');
            return [];
        }
    }

    getQuestLevel() {
        let aList = [];
        let iEnemyCounter = 0;
        let expCounter = 0;
        let i = 0;
        const players = this.getPlayersName();
        $.each(this.oBattleField, function(k, obj) {
            if (!players.includes(obj.type)) {
                iEnemyCounter += 1;
                expCounter += obj.exp;
            } else {
                aList.push(obj.lvl);
                i++;
            }
        });
        this.playersList = aList;
        this.howManyEnemies = iEnemyCounter;
        this.expCounter = expCounter;

        return this.getQuestLevelHtml(this.oBattleField);
    }

    getQuestLevelHtml(quest) {
        const howManyEnemies = this.howManyEnemies;
        const playerLevels = this.playersList;
        const exp = this.expCounter;
        let easy = 0, medium = 0, hard = 0, deadly = 0;
        if (playerLevels.length > 0) {
            playerLevels.forEach(level => {
                if (1 === level) {
                    easy += 25;
                    medium += 50;
                    hard += 75;
                    deadly += 100;
                }
                if (2 === level) {
                    easy += 50;
                    medium += 100;
                    hard += 150;
                    deadly += 200;
                }
                if (3 === level) {
                    easy += 75;
                    medium += 150;
                    hard += 225;
                    deadly += 400;
                }
                if (4 === level) {
                    easy += 125;
                    medium += 250;
                    hard += 375;
                    deadly += 500;
                }
                if (5 === level) {
                    easy += 250;
                    medium += 500;
                    hard += 750;
                    deadly += 1100;
                }
                if (6 === level) {
                    easy += 300;
                    medium += 600;
                    hard += 900;
                    deadly += 1400;
                }
                if (7 === level) {
                    easy += 350;
                    medium += 750;
                    hard += 1100;
                    deadly += 1700;
                }
            });
        } else {
            console.log('No players found in the battlefield');
            return '';
        }
        let renderExpCounter = '';
        let expValue = 0;
        if (1 === howManyEnemies) {
            expValue = exp * 1;   
        } else if (2 === howManyEnemies) {
            expValue = exp * 1.5;
        } else if (3 <= howManyEnemies && howManyEnemies <= 6) {
            expValue = exp * 2;   
        } else if (7 <= howManyEnemies && howManyEnemies <= 10) {
            expValue = exp * 2.5;   
        } else if (11 <= howManyEnemies && howManyEnemies <= 14) {
            expValue = exp * 3;   
        } else {
            expValue = exp * 4;
        }

            renderExpCounter = 'Wyzwanie: ' + expValue + ' XP';
        if (expValue <= easy) {
            renderExpCounter += ' (łatwy: ' + easy + ')';
        } else if (expValue <= medium) {
            renderExpCounter += ' (średni: ' + medium + ')';
        } else if (expValue <= hard) {
            renderExpCounter += ' (trudny: ' + hard + ')';
        } else if (expValue <= deadly) {
            renderExpCounter += ' (śmiertelny: ' + deadly + ')';
        } else {
            renderExpCounter += ' (śmiertelny: ' + deadly + ')';
            renderExpCounter += ' Przekroczono limit trudności!';
        }

        return renderExpCounter;
    }
}
