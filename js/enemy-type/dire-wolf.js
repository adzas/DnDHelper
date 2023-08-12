import Enemy from "../enemy.js";

export default class DireWolf extends Enemy
{   
    shortInfo() {
        return `+5/2k6+3(kł) z powaleniem ST 13
        <br/> ułatwienie z sojusznikiem obok`;
    };
    // "actions": ["bit"],
    attackBite() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(this.roll(6, 2), 3, 'Obrażenia kłute');
        html += ' cel ataku musi wykonać test siły o ST 13 albo będzie powalony.';

        return html;
    }
}
