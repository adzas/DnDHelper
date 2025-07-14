import Enemy from "../enemy.js";

/**
 * multi atak: 2xlongSword + shortsword jeśli ma w ręku
 * longsword: +5 do trafienia - 1d8+3 ciętych
 * longSword: +5 do trafienia - 1d6+3 ciętych
 * ciężka kusza: +3 do trafienia - 1d10 kłutych (100ft./400ft.)
 */
export default class Veteran extends Enemy {
    attackMultiattack() {
        return `
            <div class="attack">
                <h4>Multiattack</h4>
                <p>Veteran wykonuje dwa ataki bronią długą i jeden atak sztyletem.</p>
            </div>
        `;
    };
    attackDagger() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 3, 'Obrażenia cięte');

        return html;
    };
    attackLongSword() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(this.k(8), 3, 'Obrażenia cięte');

        return html;
    };
    attackLongSwordBothHands() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(this.k(10), 3, 'Obrażenia cięte');

        return html;
    };
    attackHeavyCrossbow() {
        const testResult = this.getTestResult(3);
        let html = testResult.html;
        html += this.generateDmg(this.k(10), 0, 'Obrażenia kłute');
        html += '</br>100/400ft (20[ ]/80[ ])';

        return html;
    }
}
