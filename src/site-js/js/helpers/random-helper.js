import App from "../app.js";

export default class RandomHelper {
    appClass = null;
    playersDataConfigPath = './storage/players-data-2506291043.json';
    constructor(app) {
        if (app instanceof App) {
            this.appClass = app;
        } else console.log('Not Defined appClass in RandomHelper class constructor');
    };
    getRandom(min, max) {
        let results = [];
        let k = 0;
        for (let i=min; i<=max; i++) {
            results[k++] = i;
        }
        results.sort();

        return results[Math.floor(Math.random() * (results.length))];
    };
    k(die) {
        if (this.appClass.isManualMode()) {
            return `k${die}`;
        }
        let results = [];
        for (let i = 0; i < 10; i++) {
            results[i] = this.getRandom(1, die);
        }
        const result = this.getRandomValueFromData(results);

        return result;
    };
    getRandomValueFromData(data) {
        let results = [];
        let k = 0;
        for (let i=0; i <= data.length; i++) {
            results[k++] = data[i];
        }
        results.sort();

        return results[Math.floor(Math.random() * (results.length-1))];
    };
    roll(k, x) {
        if (this.appClass.isManualMode()) {
            return `${this.k(k)}x${x}`;
        }

        return this.k(k)*x;
    }
}
