import {lib, game, ui, get, ai, _status} from '../../../noname.js';

export let charPack = {
    xinx1: {
        translate: '<span style=\'color:#03f7fe\'>杏雅三国</span>',
    },
     xinx2: {
         translate: '<span style=\'color:#03f7fe\'>永夜之始</span>',
     },
};

export async function precontent(config,pack){
    for (let packName in charPack) {
        let result=await import(`./character/${packName}.js`).catch(e=>alert(`在导入武将包“${charPack[packName]&&charPack[packName].translate||packName}”时出现错误:\n${e.stack}`));       
        let info=result.info;
        if(!info) continue;     
        for (let name in info.character) {
            let char=info.character[name];
            if (!char[4]) char[4]=[];
            char[4].push(((lib.device||lib.node)?'ext:':'db:extension-')+'永夜之境/image/'+name+'.png');
           // char[4].push('die:ext:永夜之境/audio/die/'+name+'.mp3');
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
                    game.playAudio('..', 'extension', '永夜之境/audio/die', name);
                }, trigger.player.name);
            },
        };
    
       

       //样式参考扩展《圣杯战争》
        const css = '.lmyyy {  -webkit-transition: all 0.1s; animation: lrotate 3s linear infinite; }';
        const $style = document.createElement('style');
        $style.type = 'text/css';
        $style.textContent = css;
        document.head.appendChild($style);
        const css2 = '@keyframes lrotate { to{ transform: rotate(360deg); } }';
        const $style2 = document.createElement('style');
        $style2.type = 'text/css';
        $style2.textContent = css2;
        document.head.appendChild($style2);
        console.log('css样式已生成');
        const css3 = '.Fool-dibeijing {  height: 100%; width: 100%; position: absolute; left: 0; top: 0; z-index: 999; }';
        const $style3 = document.createElement('style');
        $style3.type = 'text/css';
        $style3.textContent = css3;
        document.head.appendChild($style3);
        const css4 = '.Fool-skilltip {  width: 20%; min-height: 5%; left: 50%; top: 50%; font-size: 16px; color: #ccad76; font-family: \'shousha\'; background-color: rgba(36, 29, 19, 0.85); border: #523a24 3px solid; border-radius: 10px;  position: absolute; display: block; padding: 8px; transform: translate(-50%, -50%); transition: none; }';
        const $style4 = document.createElement('style');
        $style4.type = 'text/css';
        $style4.textContent = css4;
        document.head.appendChild($style4);
        const css5 = '.Fool-bigskilltip {  width: 40%; min-height: 5%; left: 50%; top: 50%; font-size: 16px; color: #ccad76; font-family: \'shousha\'; background-color: rgba(36, 29, 19, 0.85); border: #523a24 3px solid; border-radius: 10px;  position: absolute; display: block; padding: 8px; transform: translate(-50%, -50%); transition: none; }';
        const $style5 = document.createElement('style');
        $style5.type = 'text/css';
        $style5.textContent = css5;
        document.head.appendChild($style5);
        lib.element.player.refreshYYY=function (){
        var list=Object.keys(this.getElementsByClassName("lmyyy"));
        var num=game.filterSkills(this.getStockSkills(true,true),this).length;
        if (list.length){
            for (var i =0; i< list.length; i++){
                if (i < num) {
                    this.getElementsByClassName("lmyyy")[i].style.display='inline';
                } else {
                    this.getElementsByClassName("lmyyy")[i].style.display='none';
                    }
                }
            }
        }


        get.xinx_skillTips=function(tipname,id){
			var dibeijing=ui.create.div('.Fool-dibeijing',document.body);
			dibeijing.style.zIndex=75;
			var skilltip=ui.create.div('.Fool-skilltip',dibeijing);
			skilltip.innerHTML=tipname;
			var herf=document.getElementById(id);
			if(herf){
				var left=herf.getBoundingClientRect().left;
				if(game.getFoolPhone()) left+=herf.offsetParent.offsetLeft;
				left+=document.body.offsetWidth*0.15;
				skilltip.style.left=left+'px';
				skilltip.style.top=(herf.getBoundingClientRect().top+30)+'px';
			}
			dibeijing.listen(function(e){
				e.stopPropagation();
				this.remove();
			})
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
        lib.namePrefix.set('华', {
            color: '#82e0aa', 
            nature: 'watermm',
            showName: '华',
        });

        game.addGroup('xing', '杏','杏',  { color: '#8abcd1'}, )    // #f7cdbc #c6e6e8 #126e82  59f0f4 346c9c 1fb1b5   {nature: 'watermm',}


        lib.arenaReady.push(function () {//扩展武将强度排行
            for (var pack of ["xinx1",'xinx2']) {
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
        lib.translate[packName + '_character_config'] = charPack[packName].translate ||'永夜之境';             
    };
         
}