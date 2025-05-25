import Enemy from "../enemy.js";

export default class Hobgoblin extends Enemy {
    // "actions": ["sword","longbow"],
    attackSword() {
        const testResult = this.getTestResult(3);
        let html = testResult.html;
        html += this.generateDmg(this.k(8), 1, 'Obrażenia cięte');

        return html;
    };
    attackLongBow() {
        const testResult = this.getTestResult(3);
        let html = testResult.html;
        html += this.generateDmg(this.k(8), 1, 'Obrażenia kłute');
        html += '<br/>zasięg 150/600 ft (30[ ]/120[ ])';

        return html;
    }
}
