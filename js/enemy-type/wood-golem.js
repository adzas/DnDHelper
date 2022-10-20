import Enemy from "../enemy.js";

export default class WoodGolem extends Enemy
{   
    // "actions": ["smash","throw-wood"],
    constructor(obj) {
        super(obj);
    };
    attackSmash() {
        const testResult = this.getTestResult(4);
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 2, 'Obrażenia obuchowe');
        html += this.generateDmg(2*this.k(4), 0, 'Obrażenia magiczne');

        return html;
    };
    attackThrowWood() {
        const testResult = this.getTestResult(0);
        let html = testResult.html;
        html += this.generateDmg(2*this.k(6), 0, 'Obrażenia magiczne');

        return html;
    }
}
