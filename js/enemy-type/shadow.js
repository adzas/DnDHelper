import Enemy from "../enemy.js";

export default class Shadow extends Enemy {
    // "actions": ["strength-drain"],
    constructor(obj) {
        super(obj);
    };
    attackStrengthDrain() {
        const testResult = this.getTestResult(4);
        let html = testResult.html;
        html += this.generateDmg(2*this.k(6), 2, 'Obrażenia nekrotyczne');
        html += '<br/>dodatkowo cel zmniejsza o +1k4 swoją cechę siły';

        return html;
    };
    renderInformation() {
        let html = '';
        const informations = this.i.split(';');
        for (let k in informations) {
            html += informations[k]+'</br></br>';
        }
        return html;
    }
}
