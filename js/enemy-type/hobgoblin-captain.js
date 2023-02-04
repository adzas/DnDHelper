import Enemy from "../enemy.js";

export default class HobgoblinCaptain extends Enemy {
    // "actions": ["javelin","greatsword","leadership"],
    attackJavelin() {
        const testResult = this.getTestResult(4);
        let html = testResult.html;
        html += this.generateDmg(this.k(6), 2, 'Obrażenia kłute');
        html += '30/120ft'

        return html;
    };
    attackGreatsword() {
        const testResult = this.getTestResult(4);
        let html = testResult.html;
        html += this.generateDmg(this.roll(6,2), 2, 'Obrażenia cięte');
        // html += '<br/>zasięg 150/600 ft (30[ ]/120[ ])';

        return html;
    };
    attackLeadership() {
        return `Może wydać specjalną komendę, dla swojego sojusznika, których widzi i ma w zasięgu 30ft<br>
        Tan sojusznik, jeśli rozumie przywódcę, może dodać 1k4 do rzutu obronnego lub ataku<br>
        `;
    }
}
