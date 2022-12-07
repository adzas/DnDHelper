import Enemy from "../enemy.js";

export default class Dog extends Enemy
{   
    // "actions": ["bit"],
    attackBite() {
        const testResult = this.getTestResult(3); // +3
        let html = testResult.html;
        html += this.generateDmg(2*this.k(4), 2, 'Obrażenia kłute');

        return html;
    }
}
