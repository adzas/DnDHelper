import App from "../app.js";
import Bandit from "../enemy-type/bandit.js";
import Barbarian from "../enemy-type/barbarian.js";
import Darkling from "../enemy-type/darkling.js";
import Dog from "../enemy-type/dog.js";
import DwarfExtra from "../enemy-type/dwarf-extra.js";
import Dwarf from "../enemy-type/dwarf.js";
import Gnoll from "../enemy-type/gnoll.js";
import Goblin from "../enemy-type/goblin.js";
import Hobgoblin from "../enemy-type/hobgoblin.js";
import Player from "../enemy-type/Player.js";
import ScoutBandit from "../enemy-type/scout-bandit.js";
import Shadow from "../enemy-type/shadow.js";
import Thug from "../enemy-type/thug.js";
import WoodGolem from "../enemy-type/wood-golem.js";

export default class EnemyHelper {
    appClass = null;
    constructor (app) {
        if (app instanceof App) {
            this.appClass = app;
        } else console.log('Not Defined appClass in EnemyHelper class constructor');
    }
    getEnemyObject(obj) {
        switch (obj.type) {
            case 'bandit':
                return new Bandit(obj, this.appClass);

            case 'dwarf':
                return new Dwarf(obj, this.appClass);

            case 'scout-bandit':
                return new ScoutBandit(obj, this.appClass);

            case 'wood-golem':
                return new WoodGolem(obj, this.appClass);

            case 'dog':
                return new Dog(obj, this.appClass);

            case 'goblin':
                return new Goblin(obj, this.appClass);

            case 'hobgoblin':
                return new Hobgoblin(obj, this.appClass);

            case 'gnoll':
                return new Gnoll(obj, this.appClass);

            case 'shadow':
                return new Shadow(obj, this.appClass);

            case 'thug':
                return new Thug(obj, this.appClass);

            case 'dwarf-extra':
                return new DwarfExtra(obj, this.appClass);

            case 'darkling':
                return new Darkling(obj, this.appClass);

            case 'barbarian':
                return new Barbarian(obj, this.appClass);

            case 'hum':
            case 'omalen':
            case 'kreatura':
            case 'alsariph':
                return new Player(obj, this.appClass);
        
            default:
                alert('Nieznany typ przeciwnika: '+obj.type);
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
