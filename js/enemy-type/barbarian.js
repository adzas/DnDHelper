import Enemy from "../enemy.js";

export default class Barbarian extends Enemy {
    attackGreataxe() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(this.k(12), 3, 'Obrażenia cięte');

        return html;
    };
    AttackSpear() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;wood-golem
        html += this.generateDmg(this.k(6), 3, 'Obrażenia kłute');

        return html;
    }
}
