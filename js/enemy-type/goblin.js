import Enemy from "../enemy.js";

export default class Goblin extends Enemy {
    // "actions": ["short-bow","scimitar"],
    attackShortBow() {
        const testResult = this.getTestResult(4);
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 2, 'Obrażenia kłute');
        html += '<br/>zasięg 80/320 ft (18[ ]/72[ ])';

        return html;
    };
    attackScimitar() {
        const testResult = this.getTestResult(4);
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 4, 'Obrażenia cięte');

        return html;
    }
}
