import App from "../app.js";
import AlsariphGenerator from "../enemy-generators/alsariph-generator.js";
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
import GoblinGenerator from "../enemy-generators/golbin-generator.js";
import HobgoblinCaptainGenerator from "../enemy-generators/hobgoblin-captain-generator.js";
import HobgoblinGenerator from "../enemy-generators/hobgoblin-generator.js";
import HumGenerator from "../enemy-generators/hum-generator.js";
import KreaturaGenerator from "../enemy-generators/kreatura-generator.js";
import OmalenGenerator from "../enemy-generators/omalen-generator.js";
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
import Gnoll from "../enemy-type/gnoll.js";
import Goblin from "../enemy-type/goblin.js";
import HobgoblinCaptain from "../enemy-type/hobgoblin-captain.js";
import Hobgoblin from "../enemy-type/hobgoblin.js";
import Player from "../enemy-type/Player.js";
import ScoutBandit from "../enemy-type/scout-bandit.js";
import Shadow from "../enemy-type/shadow.js";
import Thug from "../enemy-type/thug.js";
import WoodGolem from "../enemy-type/wood-golem.js";

export default class EnemyHelper {
    appClass = null;
    pathToConfigFile = './storage/config/enemies-config-2304201134.json';
    constructor (app) {
        if (app instanceof App) {
            this.appClass = app;
        } else console.log('Not Defined appClass in EnemyHelper class constructor');
    };
    getRandomEnemyObjectByType(enemyType, customInitiative) {
        let enemyObject = null;
        switch (enemyType) {
            case 'bandit':
                enemyObject = new BanditGenerator(this.appClass);
                break;
            case 'scout-bandit':
                enemyObject = new ScoutBanditGenerator(this.appClass);
                break;
    
            case 'dog':
                enemyObject = new DogGenerator(this.appClass);
                break;
    
            case 'wood-golem':
                enemyObject = new WoodGolemGenerator(this.appClass);
                break;
    
            case 'goblin':
                enemyObject = new GoblinGenerator(this.appClass);
                break;
    
            case 'hobgoblin':
                enemyObject = new HobgoblinGenerator(this.appClass);
                break;
    
            case 'dwarf':
                enemyObject = new DwarfGenerator(this.appClass);
                break;
    
            case 'hum':
                enemyObject = new HumGenerator(this.appClass);
                break;
    
            case 'kreatura':
                enemyObject = new KreaturaGenerator(this.appClass);
                break;
    
            case 'omalen':
                enemyObject = new OmalenGenerator(this.appClass);
                break;
    
            case 'alsariph':
                enemyObject = new AlsariphGenerator(this.appClass);
                break;
    
            case 'gnoll':
                enemyObject = new GnollGenerator(this.appClass);
                break;
    
            case 'shadow':
                enemyObject = new ShadowGenerator(this.appClass);
                break;
    
            case 'thug':
                enemyObject = new ThugGenerator(this.appClass);
                break;
    
            case 'dwarf-extra':
                enemyObject = new DwarfExtraGenerator(this.appClass);
                break;
    
            case 'darkling':
                enemyObject = new DarklingGenerator(this.appClass);
                break;
    
            case 'barbarian':
                enemyObject = new BarbarianGenerator(this.appClass);
                break;
    
            case 'anyone':
                enemyObject = new AnyoneGenerator(this.appClass);
                break;
    
            case 'bandit-captain':
                enemyObject = new BanditCaptainGenerator(this.appClass);
                break;
    
            case 'dire-wolf':
                enemyObject = new DireWolfGenerator(this.appClass);
                break;
    
            case 'hobgoblin-captain':
                enemyObject = new HobgoblinCaptainGenerator(this.appClass);
                break;
        
            default:
                console.log('enemyType: '+enemyType+' is ubdefined');
                break;
        }

        return enemyObject.getRandomObject(customInitiative);
    };
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

            case 'anyone':
                return new Anyone(obj, this.appClass);

            case 'bandit-captain':
                return new BanditCaptain(obj, this.appClass);

            case 'dire-wolf':
                return new DireWolf(obj, this.appClass);

            case 'hobgoblin-captain':
                return new HobgoblinCaptain(obj, this.appClass);

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
            url: this.pathToConfigFile,
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
        $.getJSON(this.pathToConfigFile, function(data){
            let enemiesGroups = '';
            $.each(data.group, function(k, group){
                let elementList = ``;
                $.each(group.content, function(k2, enemyElement) {
                    elementList += `
                        <button class="btn ${enemyElement.btnClass} btn-sm js-enemy" 
                            data-type="${enemyElement.type}" type="button">
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
            console.log("cant load: "+this.pathToConfigFile);
        });
    }
}
