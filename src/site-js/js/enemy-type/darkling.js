import Enemy from "../enemy.js";

export default class Darkling extends Enemy {
    // "actions": ["dagger"], // or range 20/60 ft. ({@damage 1d4 + 3}) piercing damage plus 7 ({@damage 2d6}) necrotic damage.
    shortInfo() {
        return 'Sztylet+5: k4+3(kł) + 2k6(nekr)';
    };
    attackDagger() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(this.k(4), 3, 'Obrażenia kłute');
        html += this.generateDmg(this.roll(6,2), 0, 'Obrażenia nekrotyczne');
        html += '<br> mele lub 20/60 ft';

        return html;
    }
}
