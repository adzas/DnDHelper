import Enemy from "../enemy.js";

export default class WoodGolem extends Enemy
{   
    // "actions": ["smash","throw-wood"],
    attackSmash() {
        const testResult = this.getTestResult(4);
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 2, 'Obrażenia obuchowe');
        html += this.generateDmg(this.roll(4,2), 0, 'Obrażenia magiczne');

        return html;
    };
    attackThrowWood() {
        const testResult = this.getTestResult(0);
        let html = testResult.html;
        html += this.generateDmg(this.roll(6,2), 0, 'Obrażenia magiczne');

        return html;
    }
}
