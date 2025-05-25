import Enemy from "../enemy.js";

export default class Dog extends Enemy
{   
    // "actions": ["bit"],
    attackBite() {
        const testResult = this.getTestResult(3); // +3
        let html = testResult.html;
        html += this.generateDmg(this.roll(4,2), 2, 'Obrażenia kłute');
        return html;
    }
}
