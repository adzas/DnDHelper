import Enemy from "../enemy.js";

export default class Dwarf extends Enemy
{   
    // "actions": ["axe","short-bow"],
    constructor(obj) {
        super(obj);
    };
    attackAxe() {
        const testResult = this.getTestResult(2);
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 0, 'Obrażenia cięte');
        html += '<br/>20/60ft';

        return html;
    };
    attackShortBow() {
        const testResult = this.getTestResult(4);
        let html = testResult.html;
        html += this.generateDmg(this.k(8), 2, 'Obrażenia kłute');
        html += '<br/>80/320ft';

        return html;
    }
}
