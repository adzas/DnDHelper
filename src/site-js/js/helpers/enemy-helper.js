import App from "../app.js";
import Player2Generator from "../enemy-generators/player-2-generator.js";
import AnyoneGenerator from "../enemy-generators/anyone-generator.js";
import BanditCaptainGenerator from "../enemy-generators/bandit-captain-generator.js";
import BanditGenerator from "../enemy-generators/bandit-generator.js";
import BarbarianGenerator from "../enemy-generators/barbarian-generator.js";
import DarklingGenerator from "../enemy-generators/darkling-generator.js";
import DireWolfGenerator from "../enemy-generators/dire-wolf-generator.js";
import DogGenerator from "../enemy-generators/dog-generator.js";
import DwarfExtraGenerator from "../enemy-generators/dwarf-extra-generator.js";
import DwarfGenerator from "../enemy-generators/dwarf-generator.js";
import GnollGenerator from "../enemy-generators/gnoll-generator.js";
import GnollPackLordGenerator from "../enemy-generators/gnoll-pack-lord-generator.js";
import GoblinGenerator from "../enemy-generators/golbin-generator.js";
import HillGiantGenerator from "../enemy-generators/hill-giant-generator.js";
import HobgoblinCaptainGenerator from "../enemy-generators/hobgoblin-captain-generator.js";
import HobgoblinGenerator from "../enemy-generators/hobgoblin-generator.js";
import Player3Generator from "../enemy-generators/player-3-generator.js";
import Player1Generator from "../enemy-generators/player-1-generator.js";
import Player4Generator from "../enemy-generators/player-4-generator.js";
import RotMonsterGenerator from "../enemy-generators/rot-generator.js";
import ScoutBanditGenerator from "../enemy-generators/scout-bandit-generator.js";
import ShadowGenerator from "../enemy-generators/shadow-generator.js";
import ThugGenerator from "../enemy-generators/thug-generator.js";
import WoodGolemGenerator from "../enemy-generators/wood-golem-generator.js";
import Anyone from "../enemy-type/anyone.js";
import BanditCaptain from "../enemy-type/bandit-captain.js";
import Bandit from "../enemy-type/bandit.js";
import Barbarian from "../enemy-type/barbarian.js";
import Darkling from "../enemy-type/darkling.js";
import DireWolf from "../enemy-type/dire-wolf.js";
import Dog from "../enemy-type/dog.js";
import DwarfExtra from "../enemy-type/dwarf-extra.js";
import Dwarf from "../enemy-type/dwarf.js";
import GnollPackLord from "../enemy-type/gnoll-pack-lord.js";
import Gnoll from "../enemy-type/gnoll.js";
import Goblin from "../enemy-type/goblin.js";
import HillGiant from "../enemy-type/hill-giant.js";
import HobgoblinCaptain from "../enemy-type/hobgoblin-captain.js";
import Hobgoblin from "../enemy-type/hobgoblin.js";
import Player from "../enemy-type/Player.js";
import RotMonster from "../enemy-type/rot-monster.js";
import ScoutBandit from "../enemy-type/scout-bandit.js";
import Shadow from "../enemy-type/shadow.js";
import Thug from "../enemy-type/thug.js";
import WoodGolem from "../enemy-type/wood-golem.js";
import Veteran from "../enemy-type/veteran.js";
import VeteranGenerator from "../enemy-generators/veteran-generator.js";

export default class EnemyHelper {
    appClass = null;
    pathToConfigFile = './storage/config/enemies-config.json';
    constructor (app) {
        if (app instanceof App) {
            this.appClass = app;
        } else console.log('Not Defined appClass in EnemyHelper class constructor');
    };
    getRandomEnemyObjectByType(enemyType, customInitiative) {
        const enemyObject = this.getClassObjectKindByTypeEnemy(enemyType, 'getGenerator');

        return enemyObject.getRandomObject(customInitiative);
    };
    addRandomEnemyObjectByType(elementDOM, enemyType, customInitiative, expOrLvl, battlefield) {
        const enemyObject = this.getClassObjectKindByTypeEnemy(enemyType, 'getGenerator');
        enemyObject.addRandomObjectAsync(elementDOM, customInitiative, battlefield, expOrLvl);
    };
    getEnemyObject(obj) {
        return this.getClassObjectKindByTypeEnemy(obj.type, 'getEnemyObjectClass', obj);
    };
    /**
     * Returns Enemy class object or Enemy-Generator class object for a entered type value.
     */
    getClassObjectKindByTypeEnemy(enemyType, requestKind = 'getGenerator', object = null) {
        let classObjectReturned = null;
        if ('getEnemyObjectClass' === requestKind) {
            if (typeof object === "undefined" || null === object) {
                console.log('"object" parameter is requered for this requestKind')
            }
        }
        switch (enemyType) {
            case 'bandit':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new BanditGenerator(this.appClass);
                } else {
                    classObjectReturned = new Bandit(object, this.appClass);
                }
                break;

            case 'dwarf':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new DwarfGenerator(this.appClass);
                } else {
                    classObjectReturned = new Dwarf(object, this.appClass);
                }
                break;

            case 'scout-bandit':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new ScoutBanditGenerator(this.appClass);
                } else {
                    classObjectReturned = new ScoutBandit(object, this.appClass);
                }
                break;

            case 'wood-golem':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new WoodGolemGenerator(this.appClass);
                } else {
                    classObjectReturned = new WoodGolem(object, this.appClass);
                }
                break;

            case 'dog':
                if ('getGenerator' === requestKind) {

                    classObjectReturned = new DogGenerator(this.appClass);
                } else {
                    classObjectReturned = new Dog(object, this.appClass);
                }
                break;

            case 'goblin':
                if ('getGenerator' === requestKind) {

                    classObjectReturned = new GoblinGenerator(this.appClass);
                } else {
                    classObjectReturned = new Goblin(object, this.appClass);
                }
                break;

            case 'hobgoblin':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new HobgoblinGenerator(this.appClass);
                } else {
                    classObjectReturned = new Hobgoblin(object, this.appClass);
                }
                break;

            case 'gnoll':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new GnollGenerator(this.appClass);
                } else {
                    classObjectReturned = new Gnoll(object, this.appClass);
                }
                break;

            case 'gnoll-pack-lord':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new GnollPackLordGenerator(this.appClass);
                } else {
                    classObjectReturned = new GnollPackLord(object, this.appClass);
                }
                break;

            case 'shadow':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new ShadowGenerator(this.appClass);
                } else {
                    classObjectReturned = new Shadow(object, this.appClass);
                }
                break;

            case 'thug':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new ThugGenerator(this.appClass);
                } else {
                    classObjectReturned = new Thug(object, this.appClass);
                }
                break;

            case 'dwarf-extra':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new DwarfExtraGenerator(this.appClass);
                } else {
                    classObjectReturned = new DwarfExtra(object, this.appClass);
                }
                break;

            case 'darkling':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new DarklingGenerator(this.appClass);
                } else {
                    classObjectReturned = new Darkling(object, this.appClass);
                }
                break;

            case 'barbarian':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new BarbarianGenerator(this.appClass);
                } else {
                    classObjectReturned = new Barbarian(object, this.appClass);
                }
                break;

            case 'anyone':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new AnyoneGenerator(this.appClass);
                } else {
                    classObjectReturned = new Anyone(object, this.appClass);
                }
                break;

            case 'bandit-captain':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new BanditCaptainGenerator(this.appClass);
                } else {
                    classObjectReturned = new BanditCaptain(object, this.appClass);
                }
                break;

            case 'dire-wolf':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new DireWolfGenerator(this.appClass);
                } else {
                    classObjectReturned = new DireWolf(object, this.appClass);
                }
                break;

            case 'hobgoblin-captain':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new HobgoblinCaptainGenerator(this.appClass);
                } else {
                    classObjectReturned = new HobgoblinCaptain(object, this.appClass);
                }
                break;

            case 'player-3':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new Player3Generator(this.appClass);
                } else {
                    classObjectReturned = new Player(object, this.appClass);
                }
                break;

            case 'player-4':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new Player4Generator(this.appClass);
                } else {
                    classObjectReturned = new Player(object, this.appClass);
                }
                break;

            case 'player-1':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new Player1Generator(this.appClass);
                } else {
                    classObjectReturned = new Player(object, this.appClass);
                }
                break;

            case 'player-2':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new Player2Generator(this.appClass);
                } else {
                    classObjectReturned = new Player(object, this.appClass);
                }
                break;

            case 'rot-monster':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new RotMonsterGenerator(this.appClass);
                } else {
                    classObjectReturned = new RotMonster(object, this.appClass);
                }
                break;
            case 'hill-giant':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new HillGiantGenerator(this.appClass);
                } else {
                    classObjectReturned = new HillGiant(object, this.appClass);
                }
                break;

            case 'veteran':
                if ('getGenerator' === requestKind) {
                    classObjectReturned = new VeteranGenerator(this.appClass);
                } else {
                    classObjectReturned = new Veteran(object, this.appClass);
                }
                break;
        
            default:
                alert('Undefined enemy type: ' + enemyType);
                break;
        }

        return classObjectReturned;
    }
    getAttackName(type) {
        const result = this.getAttackDataFromConfigFile(type);

        return result.name;
    };
    getAttackFunction(type) {
        const result = this.getAttackDataFromConfigFile(type);

        return result.function;
    };
    getAttackDataFromConfigFile(type) {
        let attackName = 'undefined';
        let attackFunction = 'undefined';
        
        $.ajax({
            dataType: "json",
            url: this.pathToConfigFile + '?r=' + Math.random(),
            async: false,
            success: function(result) {
                $.each(result.attackType, function(k, attack) {
                    if (type === attack.type) {
                        attackName = attack.name;
                        attackFunction = attack.function;
                    }
                })
            }
        });

        return {"name": attackName, "function": attackFunction};
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
    };
    renderEnemyListTo(DOMelementToRender) {
        $.getJSON(this.pathToConfigFile + '?r=' + Math.random(), function(data){
            let enemiesGroups = '';
            $.each(data.group, function(k, group){
                let elementList = ``;
                $.each(group.content, function(k2, enemyElement) {
                    elementList += `
                        <button class="btn ${enemyElement.btnClass} btn-sm js-enemy" 
                            data-type="${enemyElement.type}" data-exp-or-level="${enemyElement.EXP}" type="button">
                            ${enemyElement.name} - ${enemyElement.EXP}
                        </button>
                    `;
                });
                enemiesGroups += `
                <details class="details">
                    <summary>${group.name}</summary>    
                    <p class="details__p">
                        ${elementList}
                    </p>
                </details>`;
            });
            const content = `<div class="col-12">
                ${enemiesGroups}
            </div>`;
            $(DOMelementToRender).html(content);
        }).fail(function(){
            $(DOMelementToRender).html('Loaded failed.');
            console.log("cant load: " + this.pathToConfigFile);
        });
    }
}
