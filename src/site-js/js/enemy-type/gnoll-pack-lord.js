import Enemy from "../enemy.js";

export default class GnollPackLord extends Enemy {
    attackBite() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(this.k(4), 3, 'Obrażenia kłute');

        return html;
    };
    attackGlaive() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(this.k(10), 3, 'Obrażenia cięte');
        html += '<br/>z bliska lub zasięg 20/60ft';

        return html;
    };
    attackLongBow() {
        const testResult = this.getTestResult(4);
        let html = testResult.html;
        html += this.generateDmg(this.k(8), 2, 'Obrażenia kłute');
        html += '<br/>zasięg 150/600ft';

        return html;
    }
}
