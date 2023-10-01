import Enemy from "../enemy.js";

export default class Barbarian extends Enemy {
    shortInfo() {
        return 'GreatAxe +5 [k12+3(cięte)] <br> brawura - ułatwienie dla obu stron';
    };
    attackGreataxe() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(this.k(12), 3, 'Obrażenia cięte');

        return html;
    };
    AttackSpear() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 3, 'Obrażenia kłute');

        return html;
    }
}
