export default class RandomHelper {
    getRandom(min, max) {
        let results = [];
        let k = 0;
        for (let i=min; i<=max; i++) {
            results[k++] = i;
        }
        results.sort();

        return results[Math.floor(Math.random() * results.length)];
    };
    k(die) {
        return this.getRandom(1, die);
    };
    getRandomValueFromData(data) {
        console.log('data', data);
        let results = [];
        let k = 0;
        for (let i=0; i<=data.length; i++) {
            results[k++] = data[i];
        }
        results.sort();

        return results[Math.floor(Math.random() * results.length)];
    }
}
