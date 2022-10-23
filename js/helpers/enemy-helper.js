import Bandit from "../enemy-type/bandit.js";
import Dog from "../enemy-type/dog.js";
import Dwarf from "../enemy-type/dwarf.js";
import Goblin from "../enemy-type/goblin.js";
import Hobgoblin from "../enemy-type/hobgoblin.js";
import Player from "../enemy-type/Player.js";
import ScoutBandit from "../enemy-type/scout-bandit.js";
import WoodGolem from "../enemy-type/wood-golem.js";

export default class EnemyHelper {
    getEnemyObject(obj) {
        switch (obj.type) {
            case 'bandit':
                return new Bandit(obj);

            case 'dwarf':
                return new Dwarf(obj);

            case 'scout-bandit':
                return new ScoutBandit(obj);

            case 'wood-golem':
                return new WoodGolem(obj);

            case 'dog':
                return new Dog(obj);

            case 'goblin':
                return new Goblin(obj);

            case 'hobgoblin':
                return new Hobgoblin(obj);

            case 'hum':
            case 'omalen':
            case 'kreatura':
            case 'alsariph':
                return new Player(obj);
        
            default:
                break;
        }
    };
    setObjArrayFromTarget(collapseTarget) {
        const target = $('#'+collapseTarget.attr('data-parent-id'));

        return {
            'type': target.attr('data-type'),
            'name': target.attr('data-name'),
            'actions': target.attr('data-actions'),
            'statistics': {
                'xp': target.attr('data-xp'),
                'kp': target.attr('data-kp'),
                'hp': target.attr('data-hp'),
                'initiative': target.attr('data-initiative'),
                'pp': target.attr('data-pp'),
                'strength': target.attr('data-strength'),
                'dexterity': target.attr('data-dexterity'),
                'condition': target.attr('data-condition'),
                'intelligence': target.attr('data-intelligence'),
                'wisdom': target.attr('data-wisdom'),
                'charisma': target.attr('data-charisma'),
                'speed': target.attr('data-speed'),
                'i': target.attr('data-i')
            }
        };
    }
}
