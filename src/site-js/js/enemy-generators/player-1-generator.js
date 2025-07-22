import RandomHelper from "../helpers/random-helper.js";

export default class Player1Generator extends RandomHelper {
    type = 'player-1';
    async addRandomObjectAsync(elementDOM, customInitiative, battlefield, expOrLvl){
        let initiative = 99;
        if (typeof customInitiative === "number" && 0 < customInitiative) {
            initiative = customInitiative;
        }

        // get from playersDataConfigPath
        const config = this.playersDataConfigPath + '?rnd=' + Math.random();

        // Załaduj dane z pliku JSON (asynchronicznie)
        const data = await fetch(config).then(res => res.json());
        for (let i = 0; i < data.length; i++) {
            if (data[i].type === this.type) {
                let playerData = data[i];
                playerData.statistics.initiative = initiative;
                battlefield.store(playerData, expOrLvl);
                const message = `Dodano ${playerData.name} do pola bitwy.`;
                console.log(message);
                elementDOM.html(playerData.name + ' - gotów!');
                return 1;
            }
        }
        console.log('Player1Generator: No player-2 found in data');
        return 0;
    };
    // Generated with AI - it works.
    getRandomObjectAsync() {
        return new Promise((resolve, reject) => {
            const config = this.playersDataConfigPath + '?rnd=' + Math.random();
            fetch(config)
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].type === this.type) {
                            resolve(data[i]);
                            return;
                        }
                    }
                    reject('Player1Generator: No player-1 found in data');
                })
                .catch(error => reject(error));
        });
    };
}