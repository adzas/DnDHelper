
// class Bandit extends Enemy {
//     constructor(id) {
//         super();
//         this.id = id;
//     };
//     setData(data) {
//         this.type = 'bandit';
//         this.strength = this.getRandom(10, 14);
//         this.dexterity = this.getRandom(10, 14);
//         this.wisdom = this.getRandom(8, 10);
//         this.intelligence = this.getRandom(6, 9);
//         this.charisma = this.getRandom(6, 14);
//         this.condition = this.getRandom(8, 14);
//         this.setSuperData(data);
//         this.setDetails(this);
//     }
// }

import { Bandit } from "./bandit.js";
import Dwarf from "./enemy-type/dwarf.js";

export default class EnemyHelper {
    getEnemyObject(obj) {
        switch (obj.type) {
            case 'bandit':
                return new Bandit(obj);

            case 'dwarf':
                return new Dwarf(obj);
        
            default:
                break;
        }
    }
}

// const enemyHelper = new EnemyHelper;

// export default enemyHelper;