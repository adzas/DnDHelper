import Enemy from "../enemy.js";

export default class Thug extends Enemy {
    // "actions": ["mace","heavy-crossbow"],
    attackMace() {
        const testResult = this.getTestResult(4);
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 2, 'Obrażenia obuchowe');

        return html;
    };
    attackHeavyCrossbow() {
        const testResult = this.getTestResult(2);
        let html = testResult.html;
        html += this.generateDmg(this.k(10), 0, 'Obrażenia kłute');
        html += '</br>100/400ft (20[ ]/80[ ])';

        return html;
    }
}
