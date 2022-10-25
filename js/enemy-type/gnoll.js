import Enemy from "../enemy.js";

export default class Gnoll extends Enemy {
    // "actions": ["bite","spear", "long-bow"],
    constructor(obj) {
        super(obj);
    };
    attackBite() {
        const testResult = this.getTestResult(4);
        let html = testResult.html;
        html += this.generateDmg(this.k(4), 2, 'Obrażenia kłute');

        return html;
    };
    attackSpear() {
        const testResult = this.getTestResult(4);
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 2, 'Obrażenia kłute');
        html += this.generateDmg(this.k(8), 2, 'lub obrażenia kłute (dwie ręce)');
        html += '<br/>z bliska lub zasięg 20/60 ft (4[ ]/12[ ])';

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
