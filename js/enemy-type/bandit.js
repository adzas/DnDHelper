import Enemy from "../enemy.js";

export default class Bandit extends Enemy {
    // "actions": ["short-bow","sword"],
    constructor(obj) {
        super(obj);
    };
    attackSword(method) {
        const test = Math.round(this.k(20)+this.str);
        const dmg =  Math.round(this.k(6)+this.str);
        return `test(${method}): ${test} dmg: ${dmg}`;
    };
    attackShortBow(method) {
        const test = Math.round(this.k(20)+this.str);
        const dmg =  Math.round(this.k(6)+this.str);
        return `test(${method}): ${test} dmg: ${dmg}`;
    }
}
