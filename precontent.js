import {lib, game, ui, get, ai, _status} from '../../../noname.js';

export let charPack = {
    xinx1: {
        translate: '<span style=\'color:#03f7fe\'>杏雅三国</span>',
    },
    // xinx2: {
    //     translate: '<span style=\'color:#03f7fe\'>汉鹿争簇</span>',
    // },
};

export async function precontent(config,pack){
    for (let packName in charPack) {
        let result=await import(`./character/${packName}.js`).catch(e=>alert(`在导入武将包“${charPack[packName]&&charPack[packName].translate||packName}”时出现错误:\n${e.stack}`));       
        let info=result.info;
        if(!info) continue;     
        for (let name in info.character) {
            let char=info.character[name];
            if (!char[4]) char[4]=[];
            char[4].push(((lib.device||lib.node)?'ext:':'db:extension-')+'杏雅三国/image/'+name+'.png');
           // char[4].push('die:ext:杏雅三国/audio/die/'+name+'.mp3');
        }
        game.import('character',()=>info); 


        lib.skill._xinx_die = {
            charlotte: true,
            ruleSkill: true,
            trigger: { player: 'dieBegin' },
            filter(event, player) {
                return lib.config.background_speak && event.player.name;
            },
            firstDo: true,
            direct: true,
            priority: -Infinity,
            lasrDo: true,
            content() {
                game.broadcastAll(function (name) {
                    game.playAudio('..', 'extension', '杏雅三国/audio/die', name);
                }, trigger.player.name);
            },
        };

        

        lib.namePrefix.set('杏', {
            color: '#03f7fe',  //#6affe2 #29b7cb #98F5FF     
            nature: 'watermm',
            showName: '杏',
        });
        
        lib.namePrefix.set('影', {
            color: '#7947ab',  
            nature: 'keymm',
            showName: '影',
        });
        lib.namePrefix.set('初', {
            color: '#00ffc1',  
            nature: 'watermm',
            showName: '初',
        });
        lib.namePrefix.set('逐', {
            color: '#ff7461',  
            nature: 'thundermm',
            showName: '逐',
        });
        game.addGroup('xing', '杏','杏',  { color: '#8abcd1'}, )    // #f7cdbc #c6e6e8 #126e82  59f0f4 346c9c 1fb1b5   {nature: 'watermm',}


        lib.arenaReady.push(function () {//扩展武将强度排行
            for (var pack of ["xinx1"]) {
                for (var name in lib.characterPack[pack]) {
                    // var rarity=lib.characterPack[pack][name][5];
                    // if(['junk','common','rare','epic','legend'].includes(rarity)) lib.rank.rarity[rarity].add(name);
                    for (var rarity of ['junk', 'common', 'rare', 'epic', 'legend']) {//废材，普通，精品，史诗，传说
                        if (lib.characterPack[pack][name][4].includes(rarity)) {
                            lib.rank.rarity[rarity].add(name);
                            break;
                        }
                    }
                }
            }
        });
        // 首次导入开启将包
        if (!lib.config[packName+'_character_pack_open']){
            lib.config.characters.add(packName);
            game.saveConfig('characters',lib.config.characters);
            game.saveConfig(packName+'_character_pack_open',true);
        };
        lib.config.all.characters.push(packName);
        //lib.config.all.sgscharacters.push(packName);
        if (!lib.config.characters.includes(packName)) lib.config.characters.remove(packName);
        lib.translate[packName + '_character_config'] = charPack[packName].translate ||'杏雅三国';             
    };
         
}