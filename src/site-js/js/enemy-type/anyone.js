import Enemy from "../enemy.js";

export default class Anyone extends Enemy {
    renderActions() {
        return `
        <ul>
            <li>
                krótki miecz: k20+${this.bonus()}+biegłość(+2) 
                -> k6+${this.bonus()}
            </li>
        </ul>`;
    }
}
