import Enemy from "../enemy.js";

export default class Shadow extends Enemy {
    // "actions": ["strength-drain"],
    shortInfo() {
        return '+4: 2k6+2(nekr) -k4(STR)';
    };
    attackStrengthDrain() {
        const testResult = this.getTestResult(4);
        let html = testResult.html;
        html += this.generateDmg(this.roll(6,2), 2, 'Obrażenia nekrotyczne');
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
