import Enemy from "../enemy.js";

export default class Khello extends Enemy
{   
    shortInfo() {
        return `[+7/3k6+4(cięte)]x2+[kolce]
        <br/> 45ft [9]`;
    };
    // "actions": ["multiattack","claws","spikes", "scream"],
    attackMultiattack() {
        let html = 'Opis ataku wielokrotnego:';
        html += '<br/> dwa razy drapnięcie pazurami i próba wejścia na przeciwnika (DEX vs DEX)';
        html += '<br/> w przypadku niepowodzenia, przeciwnik ma atak okazyjny';
        html += '<br/> wbicia (z ułatwieniem jeśli jest na przeciwniku) lub wystrzelenia kolców';

        return html;
    };
    attackClaws() {
        const testResult = this.getTestResult(7);
        let html = testResult.html;
        html += this.generateDmg(this.k(6)*3, 4, 'Obrażenia cięte');

        return html;
    };
    attackSpikes() {
        const testResult = this.getTestResult(5);
        let html = testResult.html;
        html += this.generateDmg(this.k(4)*3, 2, 'Obrażenia cięte');
        html += this.generateDmg(this.k(6)*2, 0, 'Obrażenia od trucizny');

        return html;
    };
    attackScream() {
        let html = 'Khello wydaje z siebie przeciągły pisk ogłuszając na chwilę przeciwników w odległości 15ft';
        html += '<br/> przeciwnicy stojący blisko (5ft) zostają na chwilę oszołomieni';
        html += '<br/> Khello wykonuje dodatkową akcję sprintu po wykonaniu krzyku';

        return html;
    }
}
