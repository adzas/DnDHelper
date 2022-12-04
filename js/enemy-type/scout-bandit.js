import Enemy from "../enemy.js";

export default class ScoutBandit extends Enemy
{   
    // "actions": ["sword","long-bow"],
    constructor(obj) {
        super(obj);
    };
    attackLongBow() {
        const testResult = this.getTestResult(4);
        let html = testResult.html;
        html += this.generateDmg(this.k(8), 2, 'Obrażenia kłute');
        html += '<br/>zasięg 150/600 ft (30[ ]/120[ ])';

        return html;
    };
    attackSword() {
        const testResult = this.getTestResult(3);
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 2, 'Obrażenia cięte');

        return html;
    }
}
