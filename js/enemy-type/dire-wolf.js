import Enemy from "../enemy.js";

export default class DireWolf extends Enemy
{   
    // "actions": ["bit"],
    attackBite() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(2*this.k(6), 3, 'Obrażenia kłute');
        html += 'cel ataku musi wykonać test siły o ST 13 albo będzie powalony.';

        return html;
    }
}
