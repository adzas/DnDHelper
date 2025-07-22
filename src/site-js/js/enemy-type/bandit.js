import Enemy from "../enemy.js";

export default class Bandit extends Enemy {
    shortInfo () {
        return 'miecz+3[1k6+1] lub kusza+3[1k8+1]';
    };
    // "actions": ["short-bow","sword"],
    attackSword() {
        const testResult = this.getTestResult(3); // +3
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 1, 'Obrażenia cięte');

        return html;
    };
    attackLightCrossbow() {
        const testResult = this.getTestResult(3);
        let html = testResult.html;
        html += this.generateDmg(this.k(8), 1, 'Obrażenia kłute');

        return html;
    }
}
