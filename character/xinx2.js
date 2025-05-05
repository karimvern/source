import { effect } from '../../../../game/vue.esm-browser.js';
import { lib, game, ui, get, ai, _status } from '../../../../noname.js';

export let info = {
    name: 'xinx2',
    connect: true,
    connectBanned: [],
    //武将分包
    characterSort: {
        xinx2: {
            'liechexinghe': ['xinx_liuying', 'xinx_ren', 'xinx_qiong', 'xinx_kafuka', 'xinx_sanyueqi', 'xinx_yinglang', 'xinx_danheng'],
            'xianzhou': ['xinx_jingliu', 'xinx_hanya', 'xinx_yinyuejun', 'xinx_guinaifen', 'xinx_wangguiren', 'xinx_feixiao', 'xinx_fuxuan'],
            'pinuokangni': ['xinx_zhigengniao', 'xinx_huahuo', 'xinxmeng_liuying'],
            'xinyiling': [],
            'yinhe': ['xinx_luocha', 'xinx_huangquan', 'xinx_xingqiri', 'xinx_luanpo'],
            'heita': ['xinx_daheita', 'xinx_ruanmei'],
            'beiluoboge': ['xinx_xier', 'xinx_buluoniya'],
            'wengfaluosi': ['xinx_xiadie'],
            'gongsi': ['xinx_tuopa'],



        }
    },
    //武将 'rare', 'epic', 'legend',['legend'] ["forbidai"],
    character: {
        xinx_liuying: ["female", "qun", 4, ['xinxyingshi', 'xinxxinzhui'], ['legend']],
        xinx_jingliu: ["female", "qun", 4, ['xinxxiaguang', 'xinxshuohua'], ['legend']],
        xinx_ren: ["male", "qun", 4, ['xinxzhili', 'xinxfandu'], ['legend']],
        xinx_zhigengniao: ["female", "qun", 3, [], ['legend']],
        xinx_huahuo: ["female", "qun", 3, [], ['epic']],
        //开拓者
        xinx_qiong: ["male", "qun", 4, ['xinxkaituo'], ['legend'], ["forbidai"]],
        xinx_qiong_shadow1: ["male", "qun", 4, ['xinxhuanling', 'xinxcilian'], ["unseen", "sex:male_castrated"]],
        xinx_qiong_shadow2: ["male", "qun", 4, ['xinxjizou'], ["unseen", "sex:male_castrated"]],
        xinx_qiong_shadow3: ["male", "qun", 4, ['xinxzhupo', 'xinxyanqiang'], ["unseen", "sex:male_castrated"]],
        xinx_mimi: ["female", "qun", 3, ['xinxhuoban'], ["unseen", "sex:male_castrated"]],
        xinx_yinglang: ["female", "qun", 3, ['xinxpojie', 'xinxhairu'], ['epic']],
        xinx_xiadie: ["female", "qun", 3, ['xinxsusheng'], ['legend']],
        xinx_Pollux: ["female", "qun", 3, [], ['legend'], ["unseen"]],
        xinx_luocha: ["male", "qun", 4, [], ['epic']],
        xinx_ruanmei: ["female", "qun", 3, [], ['epic']],
        xinx_xier: ["female", "qun", 4, [], ['epic']],
        xinx_huangquan: ["female", "qun", 4, [], ['legend']],
        xinx_daheita: ["female", "qun", 3, [], ['legend']],
        xinx_wangguiren: ["female", "qun", 3, [], ['legend']],
        xinx_tuopa: ["female", "qun", 3, [], ['epic']],
        xinx_luanpo: ["female", "qun", 3, [], ['epic']],
        xinx_feixiao: ["female", "qun", 4, [], ['legend']],
        xinx_hanya: ["female", "qun", 3, [], ['rare']],
        xinx_xingqiri: ["male", "qun", 3, [], ['epic']],
        xinx_guinaifen: ["female", "qun", 3, [], ['legend']],
        xinx_fuxuan: ["female", "qun", 4, [], ['epic']],
        xinx_kafuka: ["female", "qun", 3, [], ['epic']],
        xinx_buluoniya: ["female", "qun", 3, [], ['epic']],
        xinx_yinyuejun: ["male", "qun", 3, [], ['legend']],
        xinx_sanyueqi: ["female", "qun", 3, [], ['epic']],
        xinxmeng_liuying: ["female", "qun", 3, [], ['legend']],
        xinx_danheng: ["male", "qun", 4, [], ['epic']],








        // xinx_qiong_shadow1: {
        //     sex: "male",
        //     group: "qun",
        //     hp: 0,
        //     skills: [],
        //     isUnseen: true,
        //     trashBin: ["sex:male_castrated"],
        // },

    },
    //武将介绍
    characterIntro: {
        xinx_liuying: '星核猎手成员，身着机械装甲「萨姆」战斗。忠于任务，性格坚强。作为战胜虫群的兵器而诞生，其生长速度异于常人，但生命非常短暂。为了找寻「生」的机会而加入星核猎手，找寻违抗命运的方式。',
        xinx_jingliu: '曾经的罗浮剑首，云骑军不败盛名的缔造者。而今其名已被抹去，成为行于魔阴边缘的仙舟叛徒。',
        xinx_ren: '「星核猎手」的成员，弃身锋刃的剑客。效忠于「命运的奴隶」，拥有可怖的自愈能力。',
        xinx_qiong: '登上星穹列车的少年。为了消除星核带来的危机，选择与星穹列车同行。',
        xinx_yinglang: '「星核猎手」的成员，骇客高手。将宇宙视作大型沉浸式模拟游戏，玩乐其中。掌握了能够修改现实数据的「以太编辑」。',
        xinx_xiadie: '遐蝶是承载【死亡】神权的半神，曾经哀地里亚的督战圣女，奥赫玛的入殓师，也是翁法罗斯轮回的铁证。前世她为了让妹妹完成死亡火种试炼而死，在新的纪元塞纳托斯重新捏塑了她的灵魂，将她送往人间，却意外将赐予死亡的权能分割给了遐蝶，遐蝶因此拥有了碰触夺取生命的能力。为了挽救开拓者的生命、帮助那刻夏完成实验，领悟死亡意义的遐蝶接过了死亡的火种，停留在冥界看顾逝者的灵魂。',
    },
    //武将替换
    characterReplace: {

    },
    characterFilter: {//本体禁将

    },
    characterSubstitute: {//皮肤切换
        xinx_liuying: [
            ['xinx_liuying_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_liuying_shadow.png']],
        ],
        xinxmeng_liuying: [
            ['xinxmeng_liuying_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinxmeng_liuying_shadow.png']],
        ],
        xinx_xiadie: [
            ['xinx_xiadie_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_xiadie_shadow.png']],
        ],
        xinx_qiong: [
            ['xinx_qiong_shadow1', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_qiong_shadow1.png']],
            ['xinx_qiong_shadow2', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_qiong_shadow2.png']],
            ['xinx_qiong_shadow3', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_qiong_shadow3.png']],
        ],
        xinx_daheita: [
            ['xinx_daheita_shadow', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_daheita_shadow.png']],
        ],
        xinx_feixiao: [
            ['xinx_feixiao_shadow1', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_feixiao_shadow1.png']],
            ['xinx_feixiao_shadow2', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_feixiao_shadow2.png']],
            ['xinx_feixiao_shadow3', [((lib.device || lib.node) ? 'ext:' : 'db:extension-') + '永夜之境/image/xinx_feixiao_shadow3.png']],
        ],
    },
    //武将姓名
    pinyins: {

    },
    //武将称号
    characterTitle: {
        //武将ID:" ",

    },
    //珠联璧合
    perfectPair: {

    },
    //衍生卡牌
    card: {

    },
    //技能
    skill: {
        xinxyingshi: {
            audio: "ext:永夜之境/audio:5",
            audioname: ["xinx_liuying_shadow"],
            // logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxyingshi" + index + ".mp3"  : "ext:永夜之境/audio/xinxyingshi" + get.rand(1, 2,3) + ".mp3"),
            trigger: {
                player: "useCardToPlayered",
                source: "damageBegin1",
            },
            filter(event, player) {
                const count = player.storage.xinxxinzhuiCount;
                if (event.player === event.target) return false;
                if (count == 0 && event.name == "useCardToPlayered") return false;
                if (count > 0 && event.name == "damage") return false;
                return true;
            },
            forced: true,
            popup: false,
            async content(event, trigger, player) {
                const target = (trigger.name == "useCardToPlayered" ? trigger.target : trigger.player);
                // player.logSkill("xinxyingshi", target, null, null, [get.rand(1, 2, 3)]);
                player.logSkill("xinxyingshi", target);
                if (target.hasMark("xinxyingshi") && target.countCards("he")) {
                    const num = Math.round(target.maxHp / 2);
                    const { result: { bool, links } } =
                        await player.discardPlayerCard(target, "he", true, num);
                    if (!bool) return;

                    const cards = links
                        .filter(i => get.color(i) == "red");
                    if (cards.length) {
                        await player.gain(cards, "gain2");

                        const list = cards.slice(); // 复制卡牌列表

                        const card = list.filter(card => player.hasUseTarget(card));
                        //list.some(card => player.hasUseTarget(card))&&
                        while (card.length > 0) {
                            const result = await player
                                .chooseToUse(function (card, player, event) {
                                    return cards.includes(card) & lib.filter.filterCard.apply(this, arguments);
                                }, "萤誓：是否使用其中的一张牌？")
                                .set("addCount", false)
                                .set("complexSelect", true)
                                //.set("logSkill", ["xinxyingshi", null, null, null, [get.rand(4, 5)]])
                                .set("logSkill", ["xinxyingshi"])
                                .set("filterTarget", function (card, player, target) {
                                    return lib.filter.targetEnabled.apply(this, arguments);
                                })
                                .forResult();
                            if (result.card) {
                                card.length--;
                            }
                            else break;
                            ;
                        }
                    }
                }
                target.hasMark("xinxyingshi") ? await target.clearMark("xinxyingshi", false) : await target.addMark("xinxyingshi", 1, false);
            },
            markimage: 'extension/永夜之境/image/mark/xinxyingshi.png',
            intro: {
                "name2": "来自流萤",
                markcount: () => 0,
                content: "已被流萤标记",
            },

        },
        xinxxinzhui: {
            init(player) {
                player.storage.xinxxinzhuiCount = 0;
            },
            audio: "ext:永夜之境/audio:6",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxxinzhui" + index + ".mp3" : 2),
            trigger: {
                player: "useCard",
            },
            filter(event, player) {
                const num = player.countMark("xinxxinzhui_length");
                return num % 3 == 0 && player.storage.xinxxinzhuiCount == 0;
            },
            forced: true,
            popup: false,
            async content(event, trigger, player) {
                ui.background.setBackgroundImage('extension/永夜之境/image/background/liuying.png');
                player.logSkill("xinxxinzhui", null, null, null, [get.rand(1, 2)]);
                player.clearMark("xinxxinzhui_length", false);
                player.storage.xinxxinzhuiCount++;
                player.changeSkin({ characterName: "xinx_liuying" }, "xinx_liuying_shadow");
                player.addSkill(event.name + "_mark");
                player.addSkill(event.name + "_da");
                await player.addSkill(event.name + "_draw");
                if (!player.hasSkill('xinxxinzhui_used')) { player.addMark('xinxxinzhui_ins', 1, false); }

            },
            group: ["xinxxinzhui_skip", "xinxxinzhui_ins", "xinxxinzhui_length"],
            subSkill: {
                length: {
                    trigger: {
                        player: "useCard",
                    },
                    filter(event, player) {
                        return player.storage.xinxxinzhuiCount == 0;
                    },
                    firstDo: true,
                    silent: true,
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        player.addMark('xinxxinzhui_length', 1, false);
                    },
                    markimage: 'extension/永夜之境/image/mark/xinxxinzhui_length.png',
                    intro: {
                        "name2": "萤誓",
                        content: "已使用第#张牌",
                    },
                },
                mark: {
                    trigger: {
                        source: "damageSource",
                    },
                    filter(event, player) {
                        return player.storage.xinxxinzhuiCount > 0;
                    },
                    forced: true,
                    popup: false,
                    silent: true,
                    async content(event, trigger, player) {
                        player.addMark('xinxxinzhui_mark', trigger.num, false);
                        if (player.countMark('xinxxinzhui_mark') >= 3) {
                            ui.background.setBackgroundImage("image/background/" + lib.config.image_background + ".jpg");
                            player.logSkill("xinxxinzhui", null, null, null, [get.rand(3, 4)]);
                            player.storage.xinxxinzhuiCount = 0;
                            player.changeSkin({ characterName: "xinx_liuying" }, "xinx_liuying");
                            player.clearMark('xinxxinzhui_mark', false);
                        }

                    },
                    markimage: 'extension/永夜之境/image/mark/xinxxinzhui_mark.png',
                    intro: {
                        "name2": "星坠",
                        content: "已造成#点伤害",
                    },


                },
                da: {
                    trigger: {
                        player: "damageEnd",
                    },
                    filter(event, player) {
                        return player.storage.xinxxinzhuiCount > 0;
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        player.logSkill("xinxxinzhui", null, null, null, [get.rand(5, 6)]);
                    },
                },
                draw: {
                    forced: true,
                    trigger: {
                        player: "useCard",
                    },
                    filter(event, player) {
                        return get.color(event.card) == "red" && player.storage.xinxxinzhuiCount > 0;
                    },
                    content() {
                        trigger.directHit.addArray(game.players);
                        game.log(trigger.cards, "不可被响应");

                        player.when({ global: 'useCardAfter' })
                            .filter(evt => evt.card === trigger.card)
                            .then(() => {
                                player.draw(2);
                                player.chooseToDiscard(true, "he");
                            })
                            .vars({ skill: 'xinxxinzhui_draw' });
                    },
                    ai: {
                        effect: {
                            player(card, player, target) {
                                if (get.color(card, 'red') && player.storage.xinxxinzhuiCount > 0) return [1, 1];
                            }
                        }
                    }
                },
                ins: {
                    trigger: {
                        global: "phaseEnd",
                    },
                    filter(event, player) {
                        return !player.hasSkill('xinxxinzhui_used') && player.countMark('xinxxinzhui_ins');
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    onremove: true,
                    async content(event, trigger, player) {
                        player.insertPhase();
                        player.addSkill('xinxxinzhui_used');
                    },
                    markimage: 'extension/永夜之境/image/mark/xinxxinzhui_ins.png',
                    intro: {
                        markcount: () => 0,
                        content: "跳过下一个回合",
                    },
                },
                used: {
                    charlotte: true,
                    sub: true,
                    sourceSkill: "xinxxinzhui",
                    "_priority": 0,
                },
                skip: {
                    trigger: {
                        player: "phaseBefore",
                    },
                    filter(event, player) {
                        return !player.isTurnedOver() && !_status.event.getParent('phase').skill && player.countMark('xinxxinzhui_ins');
                    },
                    forced: true,
                    popup: false,
                    async content(event, trigger, player) {
                        if (player.hasSkill('xinxxinzhui_used')) {
                            player.removeSkill('xinxxinzhui_used');
                            // player.removeMark('xinxxinzhui_ins', 1, false);
                            player.clearMark('xinxxinzhui_ins', false);
                            trigger.cancel();
                            game.log(player, "跳过了回合");
                        }
                    }



                },


            }
        },
        xinxxiaguang: {
            audio: "ext:永夜之境/audio:6",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxxiaguang" + index + ".mp3" : 2),
            trigger: {
                global: "useCardAfter",
            },
            filter(event, player) {
                const { card, targets } = event;
                const info = get.info(card);
                if (get.name(card) === "sha") return true;
                if ((!info || info.type != "trick" || info.notarget || (info.selectTarget && info.selectTarget != 1))) return false;
                return player == event.player || targets.includes(player);
            },
            forced: true,
            popup: false,
            logTarget: function (event, player) {
                return player == event.player ? event.target : event.player;
            },
            check: function (event, player) {
                return get.attitude(player, player == event.player ? event.target : event.player) <= 0;
            },
            async content(event, trigger, player) {
                const target = (player == trigger.player ? trigger.targets[0] : trigger.player);

                const list = [];
                trigger.player.getHistory("useCard", function (evt) {
                    if (!player.getStorage("xinxxiaguang_mark").includes(evt.card.name)) return;
                    //if (!player.canUse(evt.card,target, false)) return;
                    // if (evt.card.name != "sha" && get.type(evt.card) != "trick") return;
                    if (evt.card.name == "sha" && evt.card.nature) list.add("sha:" + evt.card.nature);
                    else list.add(evt.card.name);
                });
                for (let i = 0; i < list.length; i++) {
                    if (list[i].indexOf("sha:") == 0) list[i] = ["基本", "", "sha", list[i].slice(4)];
                    else list[i] = [get.type(list[i]), "", list[i]];
                }
                const list2 = list.filter(info => !player.getStorage("xinxxiaguang_count").includes(info[2]));


                if (!target.hasHistory('useCard', evt => evt.respondTo && evt.respondTo[1] === trigger.card) &&
                    !target.hasHistory('respond', evt => evt.respondTo && evt.respondTo[1] === trigger.card)
                    && player == trigger.player && list2.length && player.countCards("hes")) {

                    player.logSkill("xinxxiaguang", [target], null, null, [get.rand(5, 6)]);
                    const { result } = await player.chooseButton(["罅光：是否将一张牌当做一张本回合使用的牌使用？", [list2, "vcard"]])
                        .set("ai", button => get.player().getUseValue({ name: button.link[2], nature: button.link[3] }, false))
                        .set("filterButton", function (button) {
                            return player.hasUseTarget({
                                name: button.link[2],
                                nature: button.link[3],
                                isCard: true,
                            });
                        });
                    if (!result?.links?.length) return;
                    player.addSkill(event.name + "_add");
                    const card = { name: result.links[0][2], nature: result.links[0][3] };

                    game.broadcastAll(card => {
                        lib.skill.xinxxiaguang_backup.viewAs = card;
                    }, card);
                    await player.markAuto('xinxxiaguang_count', [card.name]);
                    const next = player.chooseToUse();
                    next.set("openskilldialog", "将一张牌当做" + get.translation(card) + "使用");
                    next.set("norestore", true);
                    next.set("addCount", false);
                    next.set("_backupevent", "xinxxiaguang_backup");
                    next.set("logSkill", ["xinxxiaguang", null, null, null, [get.rand(3, 4)]]);
                    next.set("custom", {
                        add: {},
                        replace: { window() { } },
                    });
                    next.backup("xinxxiaguang_backup");
                    await next;

                }

                if (player.hasHistory('useCard', evt => evt.respondTo && evt.respondTo[1] === trigger.card) ||
                    player.hasHistory('respond', evt => evt.respondTo && evt.respondTo[1] === trigger.card) && target.countCards("he")
                ) {
                    player.logSkill("xinxxiaguang", [target], null, null, [get.rand(1, 2)]);
                    const result2 =
                        await target.chooseCard("he", "将一张手牌置于" + get.translation(player) + "的武将牌上", true).forResult();
                    if (result2.bool) player.addToExpansion(result2.cards, target, "give").gaintag.add("xinxxiaguang");
                }

                player.when({ global: "phaseAfter" }).then(() => {
                    delete player.storage.xinxxiaguang_count;
                });

            },
            markimage: 'extension/永夜之境/image/mark/xinxxiaguang.png',
            intro: {
                content: "expansion",
                markcount: "expansion",
            },
            group: ["xinxxiaguang_backup", "xinxxiaguang_mark"],
            subSkill: {
                backup: {
                    filterCard(card) {
                        return get.itemtype(card) == "card";
                    },
                    position: "hes",
                    filterTarget: function (card, player, target) {
                        if (!card) return false;
                        if (!target || !target.isIn()) return false;
                        var info = get.info(card);
                        var filter = info.filterTarget;
                        if (!info.singleCard || ui.selected.targets.length == 0) {
                            var mod = game.checkMod(card, player, target, "unchanged", "playerEnabled", player);
                            if (mod != "unchanged") return mod;
                            var mod = game.checkMod(card, player, target, "unchanged", "targetEnabled", target);
                            if (mod != "unchanged") return mod;
                        }
                        if (typeof filter == "boolean") return filter;
                        if (typeof filter == "function") return Boolean(filter(card, player, target));
                    },
                    selectCard: 1,
                    check: card => 6 - get.value(card),
                    log: false,
                    sub: true,
                    sourceSkill: "xinxxiaguang",
                    "_priority": 0,
                    viewAs: {
                        name: "sha",
                        nature: undefined,
                    },
                },

                mark: {
                    charlotte: true,
                    trigger: {
                        global: "useCard",
                    },
                    filter(event, player) {
                        return !player.getStorage("xinxxiaguang_mark").includes(event.card.name) && get.type(event.card) != 'equip';
                    },
                    silent: true,
                    forced: true,
                    content() {
                        player.markAuto("xinxxiaguang_mark", [trigger.card.name]);
                        player.when({ global: "phaseAfter" }).then(() => {
                            delete player.storage.xinxxiaguang_mark;
                        });
                    },
                }
            }


        },
        xinxshuohua: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxshuohua" + index + ".mp3" : 2),
            trigger: {
                global: "phaseZhunbeiBegin",
            },
            forced: true,
            locked: false,
            popup: false,
            filter(event, player) {
                if (event.player == player) return false;
                return player.countCards("xs") > 0;
            },
            check(event, player) {
                return get.attitude(player, event.player) <= 0;
            },
            async content(event, trigger, player) {
                const cardsx = player.getCards("xs", card => !card._cardid);
                const cards = get.cards(3);
                const allCardss = [...cardsx, ...cards];
                player.logSkill("xinxshuohua", null, null, null, [get.rand(1, 2)]);
                const next = player.chooseToMove('朔华：替换其中任意张牌', true);
                next.set('list', [['牌堆顶', cards], ['你武将牌上的牌', player.getCards("xs", card => !card._cardid)]]);
                next.set('filterMove', (from, to) => typeof to != 'number');
                next.set('filterOk', moved => moved[1].some(i => !get.event().player.getCards("xs", card => !card._cardid).includes(i)));
                next.set('processAI', list => {
                    const player = get.event().player;
                    let allcards = list[0][1].slice(0), cards = [];
                    if (list.length > 1) allcards = allcards.concat(list[1][1]);
                    let canchoose = allcards.slice();
                    const getv = button => {
                        if (button.name == 'sha' && allcards.filter(card => {
                            return card.name == 'sha' && !cards.filter(() => button == card).length;
                        }).length > player.getCardUsable({ name: 'sha' })) return 10;
                        return -player.getUseValue(button, player);
                    };
                    while (cards.length < 3) {
                        canchoose.sort((a, b) => getv(b) - getv(a));
                        cards.push(canchoose.shift());
                    }
                    return [cards, canchoose];
                });
                const result = await next.forResult();
                if (result.bool) {
                    event.forceDie = true;
                    const moved = result.moved[0];
                    const hs = player.getCards("xs", card => !card._cardid);
                    let lose = [], gain = cards.slice();
                    for (const i of moved) {
                        if (hs.includes(i)) lose.push(i);
                        else gain.remove(i);
                    }
                    if (lose.length) await player.lose(lose.slice().reverse(), ui.cardPile, 'insert');
                    if (gain.length) {
                        const next = player.addToExpansion(gain);
                        next.gaintag.add("xinxxiaguang");
                        await next;
                    }

                    for (const i of moved.slice().reverse()) {
                        if (!(('hejsdx').includes(get.position(i, true)))) {
                            i.fix();
                            ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                        }
                    }
                    game.updateRoundNumber();
                }

                var list = [],
                    map = {};
                for (var i of allCardss) {
                    var suit = get.suit(i);
                    if (!map[suit]) map[suit] = [];
                    map[suit].push(i);
                }
                var dialog = ["选择获得一种花色的所有牌"];
                for (var suit of lib.suit) {
                    if (map[suit]) {
                        dialog.push('<div class="text center">' + get.translation(map[suit]) + "</div>");
                        dialog.push(map[suit]);
                        list.push(suit);
                    }
                }
                if (list.length) {
                    const result = await player.chooseControl(list, "cancel2")
                        .set("dialog", dialog)
                        .set("list", list)
                        .set("map", map)
                        .set("ai", function () {
                            let max = 0,
                                res = "cancel2";
                            for (let s of _status.event.list) {
                                let temp = 0;
                                for (let i of _status.event.map[s]) {
                                    temp += get.value(i, _status.event.player) + get.sgn(get.attitude(_status.event.player, get.owner(i))) * (6 - get.value(i, get.owner(i)));
                                }
                                for (let i in _status.event.map) {
                                    if (i === s) continue;
                                    for (let j of _status.event.map[i]) {
                                        temp -= get.sgn(get.attitude(_status.event.player, get.owner(j))) * get.value(j, get.owner(j));
                                    }
                                }
                                if (temp > max) {
                                    res = s;
                                    max = temp;
                                }
                            }
                            return res;
                        }).forResult();

                    if (result.control != "cancel2") {
                        event.cards2 = allCardss.filter(function (i) {
                            return get.suit(i) == result.control;
                        });
                        await player.gain(event.cards2, "gain2");
                        let num = player.getExpansions("xinxxiaguang").length;
                        if (player.countCards("xs") > 0) {
                            const { result: { bool } } =
                                await player.chooseBool(`朔华：是否将武将牌上的${num}张牌当做一张冰【杀】使用?`)
                                    .set("choice")
                                    .set("ai", () => {
                                        const player = get.player();
                                        return player.getExpansions("xinxxiaguang").length > 2;
                                    });
                            if (bool) {
                                //await player.loseHp();
                                player.addTempSkill('xinxshuohua_effect');
                                player.logSkill("xinxshuohua", null, null, null, [get.rand(4, 5)]);
                                const next = player.chooseToUse();
                                next.set("openskilldialog", "【朔华】:将武将牌上的所有牌当一张冰【杀】使用");
                                next.set("_backupevent", "xinxshuohua_backup");
                                next.set("oncard", () => {
                                    const evt = get.event();
                                    evt.baseDamage = evt.cards.length;
                                });
                                next.backup("xinxshuohua_backup");
                                next.set("logSkill", ["xinxshuohua", null, null, null, [3]]);
                                await next;
                            }
                        }
                    }
                }
            },
            subSkill: {
                backup: {
                    filterCard: (card) => get.itemtype(card) == "card",
                    selectCard: -1,
                    position: "xs",
                    filterTarget: function (card, player, target) {
                        if (!card) return false;
                        if (!target || !target.isIn()) return false;
                        let event = _status.event,
                            evt = event.getParent("chooseToUse");
                        if (get.itemtype(evt) !== "event") evt = event;
                        if (event._backup && event._backup.filterCard == lib.filter.filterCard && (!lib.filter.cardEnabled(card, player, event) || !lib.filter.cardUsable(card, player, evt))) return false;
                        if (event.addCount_extra) {
                            if (!lib.filter.cardUsable2(card, player) && !game.checkMod(card, player, target, false, "cardUsableTarget", player)) return false;
                        }
                        var info = get.info(card);
                        if (info.singleCard && info.filterAddedTarget && ui.selected.targets.length) return Boolean(info.filterAddedTarget(card, player, target, ui.selected.targets[ui.selected.targets.length - 1]));
                        return lib.filter.targetEnabled.apply(this, arguments);

                    },
                    viewAs: {
                        name: "sha",
                        nature: "ice",
                    },
                    prompt: "将武将牌上的所有牌当一张【杀】使用",
                    check(card) {
                        return 7 - get.value(card);
                    },
                },
                effect: {
                    trigger: {
                        player: "useCardToPlayered",
                    },
                    filter(event, player) {
                        return event.card.name == "sha" && !event.getParent().directHit.includes(event.target);
                    },
                    forced: true,
                    charlotte: true,
                    popup: false,
                    logTarget: "target",
                    async content(event, trigger, player) {
                        const needNum = trigger.cards.length;
                        const id = trigger.target.playerid;
                        const map = trigger.getParent().customArgs;
                        if (!map[id]) map[id] = {};
                        if (typeof map[id].shanRequired == 'number') {
                            map[id].shanRequired = needNum;
                        }
                        else {
                            map[id].shanRequired = needNum;
                        }
                        await player.removeSkill('xinxshuohua_effect');
                    },
                },
                ai: {
                    "directHit_ai": true,
                    skillTagFilter(player, tag, arg) {
                        let needNum = trigger.cards.length;
                        if (arg.card.name != "sha" || arg.target.countCards("h", "shan") > needNum) return false;
                    },
                },
            }
        },
        xinxzhili: {
            init(player) {
                player.storage.xinxzhili = 0;
            },
            audio: "ext:永夜之境/audio:6",
            // logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxzhili" + index + ".mp3" : 2),
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxzhili" + index + ".mp3" : "ext:永夜之境/audio/xinxzhili" + get.rand(3, 4) + ".mp3"),
            enable: "phaseUse",
            trigger: {
                player: "useCard",
            },
            filter(event, player) {
                if (event.name == "chooseToUse") return !player.hasSkill('xinxzhili_used');
                return get.tag(event.card, 'damage') > 0.5 && player.countCards("he");
            },
            popup: false,
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseCard(get.prompt("xinxzhili"), "重铸任意张牌", [1, Infinity], "he", lib.filter.cardRecastable)
                    .set("ai", card => {
                        var val = get.value(card);
                        return 6 - val;
                    })
                    .setHiddenSkill("xinxzhili")
                    .forResult();
            },
            async content(event, trigger, player) {
                if (event.getParent(2).name == 'chooseToUse') {
                    const result = await player
                        .chooseCard(get.prompt("xinxzhili"), "重铸任意张牌", [1, Infinity], "he", lib.filter.cardRecastable)
                        .set("ai", card => {
                            var val = get.value(card);
                            return 6 - val;
                        })
                        .setHiddenSkill("xinxzhili")
                        .forResult();
                    if (result.bool) {
                        // player.logSkill("xinxzhili", null, null, null, [get.rand(3, 4)]);
                        player.addTempSkill('xinxzhili_used');
                        await player.recast(result.cards);
                        player.loseHp();
                        player.addMark('xinxzhili', 1, false);
                    }
                }
                else {
                    player.logSkill("xinxzhili", null, null, null, [get.rand(1, 2)]);
                    await player.recast(event.cards);
                    player.loseHp();
                    player.addMark('xinxzhili', 1, false);

                }

                player.when({ global: 'roundStart' }).then(() => {
                    player.clearMark('xinxzhili', false);
                });
            },
            markimage: 'extension/永夜之境/image/mark/xinxzhili.png',
            mark: true,
            intro: {
                content: "本轮伤害值和回复值+#",
            },
            group: "xinxzhili_effect",
            subSkill: {
                used: {
                    sub: true,
                    charlotte: true,
                    sourceSkill: "xinxzhili",
                    "_priority": 0,
                },
                effect: {
                    audio: ["ext:永夜之境/audio/xinxzhili5.mp3", "ext:永夜之境/audio/xinxzhili6.mp3"],
                    charlotte: true,
                    trigger: {
                        source: ["damageBegin1", "recoverBegin"],
                    },
                    forced: true,
                    logTarget: "player",
                    filter(event, player) {
                        if (event.name == "damage") return event.card;
                        return player.countMark('xinxzhili') > 0;
                    },
                    async content(event, trigger, player) {
                        // player.logSkill("xinxzhili", null, null, null, );
                        const num = player.countMark('xinxzhili');
                        trigger.num += num;
                    },

                    ai: {
                        damageBonus: true,
                    },
                    sub: true,
                    sourceSkill: "xinxzhili",
                    "_priority": 0,
                }
            },
        },

        xinxfandu: {
            audio: "ext:永夜之境/audio:5",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxfandu" + index + ".mp3" : "ext:永夜之境/audio/xinxfandu" + get.rand(4, 5) + ".mp3"),
            trigger: {
                player: ["loseHpBegin", "damageBegin"],
            },
            filter(event, player) {
                return event.num > 0;
                // && player.getHp()<player.maxHp
            },
            forced: true,
            async content(event, trigger, player) {
                player.addMark('xinxfandu', trigger.num, false);

                if (player.countMark('xinxfandu') >= 4) {
                    const result = await player
                        .chooseButton([
                            get.prompt("mbtanfeng"),
                            [
                                [
                                    ["damage", "对所有其他角色各造成1点伤害"],
                                    ["use", "使用一张牌，此牌可指定至多三名角色为目标，你于结算后获得此牌。"],
                                ],
                                "textbutton",
                            ],
                        ])
                        .set("filterButton", button => !(button.link === "use" && !player.countCards("hs")))
                        .set("ai", button => {
                            const player = get.player();
                            const hasDamageCard = player.countCards('hs', card => get.tag(card, 'damage') > 0);
                            const cards1 = player.countCards('hs', card => get.type2(card) !== 'equip');
                            if (player.getHp() < 3) {
                                return button.link === "damage" ? 1 : 0;
                            } else if (hasDamageCard) {
                                return button.link === "use" ? 1 : 0;
                            }
                            return button.link === "damage" ? 1 : 0;
                        })
                        .forResult();

                    if (result.bool) {
                        await player.recover();
                        player.clearMark('xinxfandu', false);
                        switch (result.links[0]) {
                            case "damage":
                                const targets = game.filterPlayer(current => current != player);
                                player.logSkill("xinxfandu", null, null, null, [1]);
                                if (targets.length) {
                                    player.line(targets);
                                    targets.forEach(target => target.damage());
                                }
                                break;
                            case "use":
                                player.logSkill("xinxfandu", null, null, null, [2]);
                                const result1 = await player
                                    .chooseToUse(function (card, player, event) {
                                        return lib.filter.filterCard.apply(this, arguments);
                                    }, "返渡：是否使用一张牌？")
                                    .set("selectTarget", [1, 3])
                                    .set("complexSelect", true)
                                    .set("logSkill", ["xinxfandu", null, null, null, [3]])
                                    .set("addCount", false)
                                    .forResult();

                                if (result1.bool) {
                                    // const target = result1.targets[0];
                                    const targets = result1.targets;
                                    await player.gain(result1.cards, "gain2");
                                    //  await   player.markAuto('xinxfandu_respond', result1.cards);
                                    // if (targets.length) {
                                    //     player.line(targets);
                                    //    // targets.forEach(target => target.damage());
                                    //     if (targets.hasHistory('respond', (evt) => evt.getParent(4) == event)) {
                                    //         await player.draw(2);
                                    //     }
                                    // }
                                }
                                break;
                        }
                    }

                }

            },
            init(player) {
                player.storage.xinxfandu = 0;
            },
            markimage: 'extension/永夜之境/image/mark/xinxfandu.png',
            mark: true,
            intro: {
                content: "已减少#点体力",
            },
            group: "xinxfandu_respond",
            subSkill: {
                respond: {
                    charlotte: true,
                    trigger: {
                        player: "useCardAfter",
                    },
                    forced: true,
                    popup: false,
                    filter(event, player) {

                        return player.getStorage("xinxfandu_respond").length &&
                            event.cards.filter(function (i) {
                                return player.getStorage("xinxfandu_respond").includes(i);
                            }).length > 0;
                    },
                    content() {
                        player.draw(2);
                        const list = trigger.cards.filter(function (i) {
                            return player.getStorage("xinxfandu_respond").includes(i);
                        });
                        player.unmarkAuto("xinxfandu_respond", list);
                    },
                }
            }
        },
        //开拓
        xinxkaituo: {
            derivation: ["xinxhuanling", "xinxcilian", "xinxjizou", "xinxmengxing", "xinxzhupo", "xinxyanqiang"],
            init(player) {
                game.addGlobalSkill("autoswap");
            },
            onremove(player) {
                for (let i of game.players) {
                    if (i.name === "xinx_mimi") i.die();
                }
            },
            audio: "ext:永夜之境/audio:3",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxkaituo" + index + ".mp3" : 2),
            trigger: {
                player: ["phaseZhunbeiBegin", "phaseJieshuBegin"],
            },
            forced: true,
            unique: true,
            popup: false,
            priority: 10,
            async content(event, trigger, player) {

                const button = [];
                if (!player.hasSkill('xinxhuanling')) {
                    button.push("xinx_qiong_shadow1");
                }
                if (!player.hasSkill('xinxjizou')) {
                    button.push("xinx_qiong_shadow2");
                }
                if (!player.hasSkill('xinxzhupo')) {
                    button.push("xinx_qiong_shadow3");
                }

                const skillsToRemove = ["xinxhuanling", 'xinxcilian', "xinxjizou", "xinxzhupo"];
                for (let skill of skillsToRemove) {
                    await player.removeSkill(skill);
                }



                const result = await player.chooseButton(["请选择切换的命途", [button, "character"]], true).set("ai", function (button) {
                    //return Math.random() - 1;
                    return button.link == "xinx_qiong_shadow1" ? 2 : 1;
                }).forResult();
                //await player.chooseButton(["请选择切换的命途", [button, "character"]], true).set("ai", function (button) {
                //  ["xinx_qiong_shadow1", "xinx_qiong_shadow2", "xinx_qiong_shadow3"]
                if (result.bool) {
                    switch (result.links[0]) {
                        case "xinx_qiong_shadow1":
                            player.logSkill("xinxkaituo", null, null, null, [1]);
                            player.changeSkin({ characterName: "xinx_qiong" }, "xinx_qiong_shadow1");
                            await player.addAdditionalSkills(event.name, ['xinxhuanling', 'xinxcilian']);
                            break;
                        case "xinx_qiong_shadow2":
                            player.logSkill("xinxkaituo", null, null, null, [2]);
                            player.changeSkin({ characterName: "xinx_qiong" }, "xinx_qiong_shadow2");
                            await player.addAdditionalSkills(event.name, ['xinxjizou', 'xinxmengxing']);
                            break;
                        case "xinx_qiong_shadow3":
                            player.logSkill("xinxkaituo", null, null, null, [3]);
                            player.changeSkin({ characterName: "xinx_qiong" }, "xinx_qiong_shadow3");
                            await player.addAdditionalSkills(event.name, ['xinxzhupo', 'xinxyanqiang']);
                            break;
                    }
                }
            },
            ai: {
                viewHandcard: true,
                skillTagFilter: function (player, tag, arg) {
                    const targets = game.filterPlayer();
                    for (const i of targets) {
                        if (!i.hasSkill('xinxkaituo_dead')) {
                            if (i == arg) return false;
                        }
                    }
                    if (player == arg) return false;
                },
            },
            group: ["xinxkaituo_swap", "xinxkaituo_die","xinxkaituo_win"],
            //, 'xinxkaituo_mark', 'xinxkaituo_ai', 'xinxkaituo_sp'
            subSkill: {
                win: {
                    trigger: {
                        global: ['phaseBegin', 'dieBegin'],
                    },
                    forced: true,
                    locked: true,
                    popup: false,
                    priority: -2,
                    charlotte: true,
                    logTarget: 'player',
                    forceunique: true,
                    superCharlotte: true,
                    charlotte: true,
                    content: function () {
                        if (game.zhu && game.zhu.hp <= 0) {
                            game.showIdentity();
                            var numx = game.players.length;
                            var list = 0;
                            for (var i = 0; i < game.players.length; i++) {
                                if (game.players[i].hp <= 0 || game.players[i].hasSkill('xinxkaituo_dead')) list++;
                            }
                            var nei = 0;
                            var n = [];
                            for (var i = 0; i < game.players.length; i++) {
                                if (game.players[i].identity == 'nei') {
                                    if (game.players[i].hp > 0 && !game.players[i].hasSkill('xinxkaituo_dead')) {
                                        nei++;
                                        n.add(game.players[i]);
                                    }
                                }
                            }
                            game.log('场上剩余【' + nei + '】名内奸。');
                            game.log('场上有【' + numx + '】名玩家，其中有【' + list + '】名视为已死亡（包括主公）。');
                            if (nei > 0 && numx == (list + 1)) {
                                game.over(game.me.identity == 'nei');
                                game.log('游戏结束，内奸', n, '获胜。');
                            } else {
                                var f = [];
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].identity == 'fan') f.add(game.players[i]);
                                }
                                game.over(game.me.identity == 'fan');
                                game.log('游戏结束，反贼', f, '获胜。');
                                event.finish();
                            }
                        }
                    }
                },
                die: {
                    charlotte: true,
                    silent: true,
                    trigger: { global: "dieBegin" },
                    async content(event, trigger, player) {
                        if (trigger.player === player) lib.skill.xinxkaituo.onremove(player);
                        else {
                            let chars = game.players.slice();
                            chars.remove(player);
                            chars.remove(trigger.player);
                            chars = chars.map(i => i.name);
                            if (chars.every(i => i === "xinx_mimi") || chars.length === 0) {
                                player.when({ global: "dieAfter" })
                                    .then(() => {
                                        game.over(true);
                                    });
                            }
                        }
                    },
                },
                swap: {
                    init(player, skill) {
                        player.storage[skill] = player;
                    },
                    onremove: true,
                    firstDo: true,
                    charlotte: true,
                    silent: true,
                    trigger: {
                        global: ["playercontrol", "chooseToUseBegin", "chooseToRespondBegin", "chooseToDiscardBegin", "chooseToCompareBegin", "chooseButtonBegin", "chooseCardBegin", "chooseTargetBegin", "chooseCardTargetBegin", "chooseControlBegin", "chooseBoolBegin", "choosePlayerCardBegin", "discardPlayerCardBegin", "gainPlayerCardBegin", "chooseToMoveBegin", "chooseToPlayBeatmapBegin", "chooseToGiveBegin"],
                    },
                    filter(event, player) {
                        // if (event.autochoose && event.autochoose()) return false;
                        // if (lib.filter.wuxieSwap(event)) return false;
                        // if (_status.auto || !player.isUnderControl()) return false;
                        return !event.player.isUnderControl(true) && !_status.auto && (event.player.hasSkill("xinxkaituo_dead") || event.player.hasSkill("xinxkaituo_swap"));
                        //|| event.player.hasSkill("xinxkaituo_swap")
                    },
                    async content(event, trigger, player) {
                        game.swapPlayer(trigger.player);
                    },
                },
                dead: {
                    charlotte: true,
                    silent: true,
                    trigger: { player: "dieBegin" },
                    async content(event, trigger, player) {
                        if (game.me != player.xinxkaituo) game.swapPlayer(player.xinxkaituo);
                        game.removePlayer(player);
                        game.log(player, `被移出游戏`);
                    },
                },
            },
        },
        //记忆
        xinxhuanling: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                player: "changeSkillsAfter",
            },
            forced: true,
            locked: false,
            popup: false,
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxhuanling" + index + ".mp3" : 2),
            filter(event, player) {
                return event.addSkill.includes("xinxhuanling");
            },
            async content(event, trigger, player) {
                var n = 0
                for (var i = 0; i < game.players.length; i++) {
                    if (['xinx_mimi'].includes(game.players[i].name)) {
                        n++
                    }
                }
                if (n > 0) {
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name === 'xinx_mimi') {
                            const target = game.players[i];
                            player.logSkill("xinxhuanling", [target], null, null, [get.rand(3, 4)]);
                            target.isDamaged() ? await target.recover() : await target.gainMaxHp();
                            break;
                        }
                    }
                }
                else {
                    player.logSkill("xinxhuanling", null, null, null, [get.rand(1, 2)]);
                    var fellow = game.addPlayer(1, 'xinx_mimi');
                    fellow.getId();
                    fellow.host = player;
                    for (var current of game.players.concat(game.dead)) current.seatNum = (parseInt(current.dataset.position) + 1);
                    // if (player.identity == 'nei')fellow.identity = null;
                    if (player.identity != 'zhu' || get.mode() === "doudizhu") fellow.identity = player.identity;
                    else fellow.identity = 'zhong';
                    fellow.node.identity.dataset.color = fellow.identity;
                    fellow.identityShown = true;
                    fellow.setIdentity(fellow.identity);
                    fellow.init('xinx_mimi');
                    fellow.draw(4);
                    fellow.addSkill("xinxkaituo_dead");
                    fellow.xinxkaituo = player;
                    for (var current of game.players) current.update();
                    game.updateRoundNumber();
                }

            },

        },
        xinxcilian: {
            audio: "ext:永夜之境/audio:4",
            trigger: {
                global: "gainEnd",
            },
            forced: true,
            filter: function (event, player) {
                const target = game.findPlayer(current => current.hasSkill("xinxkaituo_dead"));
                return target?.isIn() && event.getParent(2).name != "xinxcilian" && !event.numFixed && (event.player.name == 'xinx_mimi' || event.player == player);
            },
            async content(event, trigger, player) {
                const target = game.findPlayer(current => current.hasSkill("xinxkaituo_dead"));
                player.line(target);
                trigger.player == target ? await player.draw() : await target.draw();
            }
        },

        //迷迷
        xinxhuoban: {
            // mod: {
            //     targetEnabled: function (card, player, target) {
            //         if (player != target && player.name != 'xinx_qiong' && !player.isFriendsOf(target)) return false;
            //     },
            // },
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxhuoban" + index + ".mp3" : 2),
            trigger: {
                global: "phaseJieshuBegin",
            },
            chargeSkill: 4,
            filter(event, player) {
                return player.countCharge() > 3;
            },
            async cost(event, trigger, player) {
                event.result = await player.chooseTarget('是否令一名其他角色获得一个额外回合？', lib.filter.notMe)
                    .set("ai", target => get.attitude(get.player(), target))
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                player.removeMark('charge', 4);
                target.insertPhase();
                target.addSkill("xinxhuoban_damage", { player: "phaseAfter" });
            },
            ai: {
                combo: "quanji",
                viewHandcard: true,
                skillTagFilter: function (player, tag, arg) {
                    const targets = game.filterPlayer();
                    for (const i of targets) {
                        if (!i.hasSkill('xinxkaituo')) {
                            if (i == arg) return false;
                        }
                    }
                    if (player == arg) return false;
                },
            },
            group: ["xinxhuoban_charge"],
            subSkill: {
                charge: {
                    trigger: {
                        global: "changeHp",
                    },
                    forced: true,
                    popup: false,
                    filter(event, player, name) {
                        return event.player.name == 'xinx_qiong' || event.player == player;
                    },
                    content() {
                        player.logSkill("xinxhuoban", null, null, null, [get.rand(3, 4)]);
                        player.addCharge(1);
                    },
                    sub: true,
                    sourceSkill: "xinxhuoban",
                    "_priority": 0,
                },
                damage: {
                    trigger: {
                        source: "damageSource",
                    },
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter(event, player) {
                        return event.player.isIn();
                    },
                    async content(event, trigger, player) {
                        const {
                            result: { bool },
                        } = await player.chooseBool("伙伴：是否令迷迷对" + get.translation(trigger.player) + "造成1点伤害？").set("choice", get.damageEffect(trigger.player, player, player) > 0);
                        if (bool) {
                            const target = game.findPlayer(current => current.hasSkill("xinxkaituo_dead"));
                            player.logSkill("xinxhuoban", null, null, null, [get.rand(1, 2)]);
                            target.line(trigger.player);
                            trigger.player.damage(target);
                        }
                        player.when({ global: "phaseEnd" }).then(() => {
                            player.removeSkill("xinxhuoban_damage");
                        });
                    }

                }
            }
        },
        //同谐
        xinxjizou: {
            audio: "ext:永夜之境/audio:6",
            trigger: {
                player: "changeSkillsAfter",
            },
            //logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxjizou" + index + ".mp3" : 2),
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxjizou" + index + ".mp3" : "ext:永夜之境/audio/xinxjizou" + get.rand(1, 2) + ".mp3"),
            filter(event, player) {
                return event.addSkill.includes("xinxjizou");
            },
            async cost(event, trigger, player) {
                event.result = await player.chooseTarget(get.prompt2("xinxjizou"), lib.filter.notMe, (card, player, target) => {
                    return target.countCards('h')
                })
                    .set('ai', target => {
                        const player = get.player();
                        return get.attitude(player, target);
                    }).forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                await Promise.all(event.next);
                event.videoId = lib.status.videoId++;
                if (player.isUnderControl()) game.swapPlayerAuto(player);
                /**
                 * player选择target的一种花色的牌
                 * @param {Player} player
                 * @param {Player} target
                 */
                function chooseOneSuitCard(player, target, force = false, limit, str = "请选择一个花色的牌", ai = { bool: false }) {
                    const { promise, resolve } = Promise.withResolvers();
                    const event = _status.event;
                    event.selectedCards = [];
                    event.selectedButtons = [];
                    //对手牌按花色分类
                    let suitCards = Object.groupBy(target.getCards("h"), c => get.suit(c, target));
                    suitCards.heart ??= [];
                    suitCards.diamond ??= [];
                    suitCards.spade ??= [];
                    suitCards.club ??= [];
                    let dialog = (event.dialog = ui.create.dialog());
                    dialog.classList.add("fullheight");
                    event.control_ok = ui.create.control("ok", link => {
                        _status.imchoosing = false;
                        event.dialog.close();
                        event.control_ok?.close();
                        event.control_cancel?.close();
                        event._result = {
                            bool: true,
                            cards: event.selectedCards,
                        };
                        resolve(event._result);
                        game.resume();
                    });
                    event.control_ok.classList.add("disabled");
                    //如果是非强制的，才创建取消按钮
                    if (!force) {
                        event.control_cancel = ui.create.control("cancel", link => {
                            _status.imchoosing = false;
                            event.dialog.close();
                            event.control_ok?.close();
                            event.control_cancel?.close();
                            event._result = {
                                bool: false,
                            };
                            resolve(event._result);
                            game.resume();
                        });
                    }
                    event.switchToAuto = function () {
                        _status.imchoosing = false;
                        event.dialog?.close();
                        event.control_ok?.close();
                        event.control_cancel?.close();
                        event._result = ai();
                        resolve(event._result);
                        game.resume();
                    };
                    dialog.addNewRow(str);
                    let keys = Object.keys(suitCards).sort((a, b) => {
                        let arr = ["spade", "heart", "club", "diamond", "none"];
                        return arr.indexOf(a) - arr.indexOf(b);
                    });
                    //添加框
                    while (keys.length) {
                        let key1 = keys.shift();
                        let cards1 = suitCards[key1];
                        let key2 = keys.shift();
                        let cards2 = suitCards[key2];
                        //点击容器的回调
                        /**@type {Row_Item_Option['clickItemContainer']} */
                        const clickItemContainer = function (container, item, allContainer) {
                            if (!item?.length || item.some(card => !lib.filter.cardDiscardable(card, player, event.name))) return;
                            if (event.selectedButtons.includes(container)) {
                                container.classList.remove("selected");
                                event.selectedButtons.remove(container);
                                event.selectedCards.removeArray(item);
                            } else {
                                if (event.selectedButtons.length >= limit) {
                                    let precontainer = event.selectedButtons[0];
                                    precontainer.classList.remove("selected");
                                    event.selectedButtons.remove(precontainer);
                                    let suit = get.suit(event.selectedCards[0], target),
                                        cards = target.getCards("h", { suit: suit });
                                    event.selectedCards.removeArray(cards);
                                }
                                container.classList.add("selected");
                                event.selectedButtons.add(container);
                                event.selectedCards.addArray(item);
                            }
                            event.control_ok.classList[event.selectedButtons.length === limit ? "remove" : "add"]("disabled");
                        };
                        //给框加封条，显示xxx牌多少张
                        function createCustom(suit, count) {
                            return function (itemContainer) {
                                function formatStr(str) {
                                    return str.replace(/[♥︎♦︎]/g, '<span style="color: red; ">$&</span>');
                                }
                                let div = ui.create.div(itemContainer);
                                if (count) {
                                    div.innerHTML = formatStr(`${get.translation(suit)}牌${count}张`);
                                } else {
                                    div.innerHTML = formatStr(`没有${get.translation(suit)}牌`);
                                }
                                div.css({
                                    position: "absolute",
                                    width: "100%",
                                    bottom: "1%",
                                    height: "35%",
                                    background: "#352929bf",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "1.2em",
                                    zIndex: "2",
                                });
                            };
                        }
                        //框的样式，不要太宽，高度最小也要100px，防止空框没有高度
                        /**@type {Row_Item_Option['itemContainerCss']} */
                        let itemContainerCss = {
                            border: "solid #c6b3b3 2px",
                            minHeight: "100px",
                        };
                        if (key2) {
                            dialog.addNewRow(
                                {
                                    item: cards1,
                                    ItemNoclick: true, //卡牌不需要被点击
                                    clickItemContainer,
                                    custom: createCustom(key1, cards1.length), //添加封条
                                    itemContainerCss,
                                },
                                {
                                    item: cards2,
                                    ItemNoclick: true, //卡牌不需要被点击
                                    clickItemContainer,
                                    custom: createCustom(key2, cards2.length),
                                    itemContainerCss,
                                }
                            );
                        } else {
                            dialog.addNewRow({
                                item: cards1,
                                ItemNoclick: true, //卡牌不需要被点击
                                clickItemContainer,
                                custom: createCustom(key1, cards1.length),
                                itemContainerCss,
                            });
                        }
                    }
                    game.pause();
                    dialog.open();
                    _status.imchoosing = true;
                    return promise;
                }

                let next2,
                    str2 = `即奏：用牌堆等量的红色牌替换${get.translation(target)}一种花色的所有牌`;
                let ai2 = function () {
                    let list = lib.suits.slice().filter(i => target.hasCard({ suit: i }, "h"));
                    let getv = cards => cards.map(i => get.value(i)).reduce((p, c) => p + c, 0);
                    return {
                        bool: true,
                        cards: target.getCards("h", {
                            suit: list.sort((a, b) => {
                                return getv(target.getCards("h", { suit: b })) - getv(target.getCards("h", { suit: a }));
                            })[0],
                        }),
                    };
                };
                if (event.isMine()) {
                    next2 = chooseOneSuitCard(player, target, true, 1, str2, ai2);
                } else if (player.isOnline()) {
                    let { promise, resolve } = Promise.withResolvers();
                    player.send(chooseOneSuitCard, player, target, true, 1, str2, ai2);
                    player.wait(result => {
                        if (result == "ai") result = ai2();
                        resolve(result);
                    });
                    next2 = promise;
                } else next2 = Promise.resolve(ai2());
                let result3 = await next2;
                const cards22 = result3.cards.slice().filter(card => lib.filter.canBeDiscarded(card, player, target));
                if (cards22.length) {
                    let cards = [];
                    for (let i = 0; i < cards22.length; i++) {
                        let card = get.cardPile2(card => {
                            return get.color(card) == 'red' && !cards.includes(card);
                        });
                        if (card) cards.push(card);
                    }
                    if (cards.length) await target.gain(cards, "draw").gaintag.add("xinxjizou");
                    player.logSkill("xinxjizou", null, null, null, [get.rand(3, 4)]);
                    await player.gain(cards22, "draw").gaintag.add("xinxjizou");
                    player.addSkill("xinxjizou_draw");
                    target.addSkill("xinxjizou_draw");

                }
            },
            subSkill: {
                draw: {
                    trigger: {
                        player: "loseAfter",
                        global: ["equipAfter", "addJudgeAfter", "gainAfter", "loseAsyncAfter", "addToExpansionAfter"],
                    },
                    forced: true,
                    charlotte: true,
                    popup: false,
                    filter(event, player) {
                        var evt = event.getl(player);
                        if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                        if (event.name == "lose") {
                            for (var i in event.gaintag_map) {
                                if (event.gaintag_map[i].includes("xinxjizou")) return true;
                            }
                            return false;
                        }
                        return player.hasHistory("lose", evt => {
                            if (event != evt.getParent()) return false;
                            for (var i in evt.gaintag_map) {
                                if (evt.gaintag_map[i].includes("xinxjizou")) return true;
                            }
                            return false;
                        });
                    },

                    async content(event, trigger, player) {
                        var heart = get.discardPile(function (card) {
                            return get.suit(card) == 'heart';
                        });
                        var diamond = get.discardPile(function (card) {
                            return get.suit(card) == 'diamond';
                        });
                        const allcards = [heart, diamond];
                        player.logSkill("xinxjizou", null, null, null, [get.rand(5, 6)]);
                        for (let card of allcards) {
                            await player.gain(card, 'gain2').gaintag.add("xinxjizou_tag");
                        }


                    },
                    mod: {
                        ignoredHandcard(card) {
                            if (card.hasGaintag("xinxjizou_tag")) return true;
                        },
                        cardDiscardable(card, _, name) {
                            if (name == "phaseDiscard" && card.hasGaintag("xinxjizou_tag")) return false;
                        },
                    },
                }

            }
        },
        xinxmengxing: {
            audio: "ext:永夜之境/audio:2",
            trigger: {
                global: "phaseBegin",
            },
            filter(event, player) {
                const skills = ["xinxhuoban", 'xinxxinzhui_ins'];
                return skills.includes(event.skill);
            },
            async cost(event, trigger, player) {
                event.result = await player.chooseBool("梦醒：是否令" + get.translation(trigger.player) + "的当前手牌不计入手牌上限？").set("choice")
                    .set("ai", function () {
                        let evt = _status.event.getParent();
                        return get.attitude(evt.player, evt.target) > 0;
                    }).forResult();

            },
            async content(event, trigger, player) {
                player.line(trigger.player);
                const cards = trigger.player.getCards("h");
                trigger.player.addGaintag(cards, 'xinxmengxing_tag');
                trigger.player.addSkill("xinxmengxing_tag");
            },
            subSkill: {
                tag: {
                    mod: {
                        ignoredHandcard(card) {
                            if (card.hasGaintag("xinxmengxing_tag")) return true;
                        },
                        cardDiscardable(card, _, name) {
                            if (name == "phaseDiscard" && card.hasGaintag("xinxmengxing_tag")) return false;
                        },
                    },
                }

            }

        },
        //存护
        xinxzhupo: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxzhupo" + index + ".mp3" : 2),
            trigger: {
                player: "changeSkillsAfter",
            },
            filter(event, player) {
                return event.addSkill.includes("xinxzhupo");
            },
            forced: true,
            locked: false,
            popup: false,
            async content(event, trigger, player) {
                const target = game.findPlayer(current => current.hasSkill("xinxkaituo_dead"));
                player.line(target);
                player.addMark("xinxzhupo_effect", 1, false);
                player.addSkill("xinxzhupo_effect");
                if (target) {
                    target.addMark("xinxzhupo_effect", 1, false);
                    target.addSkill("xinxzhupo_effect");
                }

                const result =
                    await player.chooseTarget("筑珀：是否嘲讽一名其他角色（使用【杀】只能指定你为目标）？", 1, lib.filter.notMe).set("ai", target => -get.attitude(player, target)).forResult();
                if (result.bool) {
                    player.line(result.targets, "fire");
                    player.logSkill("xinxzhupo", null, null, null, [get.rand(1, 2)]);
                    const target = result.targets[0];
                    result.targets.forEach(target => {
                        target.addAdditionalSkill("xinxzhupo_" + player.playerid, "xinxzhupo_chaofen");
                        target.markAuto("xinxzhupo_chaofen", [player]);
                    });
                    player.addTempSkill("xinxzhupo_clear", { player: "phaseBegin" });
                    if (!event.isMine() && !event.isOnline()) game.delayx();
                }

            },
            subSkill: {
                effect: {
                    markimage: 'extension/永夜之境/image/mark/xinxzhupo.png',
                    mark: true,
                    intro: {
                        content: "共有#点珀石",
                    },
                    trigger: {
                        player: "damageEnd",
                    },
                    filter(event, player) {
                        return player.hasMark("xinxzhupo_effect");
                    },
                    forced: true,
                    charlotte: true,
                    popup: false,
                    async content(event, trigger, player) {
                        player.logSkill("xinxzhupo", null, null, null, [get.rand(3, 4)]);
                        player.removeMark("xinxzhupo_effect", 1, false);
                        player.recover();
                    }
                },
                chaofen: {
                    charlotte: true,
                    mark: true,
                    markimage: 'extension/永夜之境/image/mark/xinxzhupo_chaofen.png',
                    intro: {
                        name: "筑珀",
                        markcount: () => 0,
                        content: "使用【杀】只能指定$为目标",
                    },
                    mod: {
                        playerEnabled(card, player, target) {
                            // if (player != target &&!player.getStorage("xinxzhupo_chaofen").includes(target)) return false;
                            if ((player.getStorage("xinxzhupo_chaofen").includes(target) && card.name == "sha")) return true;
                            else if (card.name == "sha") return false;
                        },
                    },
                    sub: true,
                    sourceSkill: "xinxzhupo",
                    "_priority": 0,
                },
                clear: {
                    charlotte: true,
                    onremove(player) {
                        game.countPlayer(function (current) {
                            current.removeAdditionalSkill("xinxzhupo_" + player.playerid);
                        });
                    },
                    sub: true,
                    sourceSkill: "xinxzhupo",
                    "_priority": 0,
                },

            }
        },
        xinxyanqiang: {
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxyanqiang" + index + ".mp3" : 2),
            enable: "phaseUse",
            usable: 1,
            filter(event, player) {
                return player.countCards("hes");
            },
            chooseButton: {
                dialog(event, player) {
                    var list = [];
                    // if (event.filterCard({ name: "sha" }, player, event)) list.push(["基本", "", "sha"]);
                    // for (var j of lib.inpile_nature) {
                    //     if (event.filterCard({ name: "sha", nature: j }, player, event)) list.push(["基本", "", "sha", j]);
                    // }
                    if (event.filterCard({ name: "sha", nature: 'fire' }, player, event)) {
                        list.push(["基本", "", "sha", "fire"]);
                    }
                    list.push("huogong");
                    return ui.create.dialog("炎枪", [list, "vcard"]);
                },
                filter(button, player) {
                    var evt = _status.event.getParent();
                    return evt.filterCard(
                        {
                            name: button.link[2],
                        },
                        player, evt
                    );
                },
                check(button) {
                    return (
                        _status.event.player.getUseValue({
                            name: button.link[2],
                        }) * (button.link[2] == "huogong" ? 3 : 1)
                    );
                },
                backup(links) {
                    return {
                        viewAs: { name: links[0][2], nature: links[0][3] },
                        filterCard: true,
                        check(card) {
                            return 6 - get.value(card);
                        },
                        position: "hse",
                        precontent() {
                            event.getParent().addCount = false;
                            player.logSkill("xinxyanqiang", null, null, null, [2]);
                            player.addSkill('xinxyanqiang_effect');

                        },

                    };
                },
                prompt(links) {
                    return "将一张牌当做" + get.translation(links[0][3] || "") + "【" + get.translation(links[0][2]) + "】" + "使用";
                },
            },
            ai: {
                order(item, player) {
                    return Math.max(get.order({ name: "sha", nature: "fire" }), get.order({ name: "huogong" })) + 0.2;
                },
                result: {
                    player: 1,
                },
            },
            subSkill: {
                effect: {
                    trigger: {
                        source: "damageSource",
                    },
                    forced: true,
                    charlotte: true,
                    firstDo: true,
                    silent: true,
                    popup: false,
                    filter(event, player) {
                        var evt = event.getParent("useCard");
                        return event.card && evt && event.card == evt.card && evt.skill == "xinxyanqiang_backup" && evt.player == player;
                    },
                    async content(event, trigger, player) {
                        player.logSkill("xinxyanqiang", [trigger.player], null, null, [get.rand(3, 4)]);
                        player.addMark("xinxzhupo_effect", 1, false);
                    },
                    sub: true,
                    sourceSkill: "xinxyanqiang",
                    "_priority": 1,
                },
            },
        },
        //银狼
        xinxpojie: {
            //derivation: ['xinxpojie_huo', 'xinxpojie_lei', 'xinxpojie_feng', 'xinxpojie_bing'],
            audio: "ext:永夜之境/audio:9",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxpojie" + index + ".mp3" : "ext:永夜之境/audio/xinxpojie" + get.rand(1, 2) + ".mp3"),
            trigger: {
                player: "phaseJieshuBegin",
            },
            enable: "phaseUse",
            usable: 1,
            filterTarget(card, player, target) {
                return target != player;
                // && target.countCards('he')
            },
            logTarget: "target",
            //popup: false,
            async cost(event, trigger, player) {
                event.result = await player
                    .chooseTarget(get.prompt2("xinxpojie"), lib.filter.notMe)
                    .set("ai", target => {
                        const player = get.player(),
                            hs = game.countPlayer();
                        if (get.attitude(player, target) <= 0 && target.hp <= Math.floor(target.maxHp)) return hs * 2;
                        return hs;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                //const target = event.targets[0];
                const target = event.target || event.targets[0];
                if (event.getParent(2).name == "phaseEnd") { player.line(target); }
                await target.chooseToDiscard(true, "he");
                target.showHandcards();
                const suits = ['heart', 'club', 'spade', 'diamond'];
                const cards = target.get('hej');
                for (let i = 0; i < cards.length; i++) {
                    if (suits.includes(get.suit(cards[i])))
                        suits.remove(get.suit(cards[i]));
                }
                if (suits.length) {
                    const num = suits.length;
                    if (num > 0) {
                        const list = ['xinxpojie_huo', 'xinxpojie_lei', 'xinxpojie_feng', 'xinxpojie_bing', 'xinxpojie_wuli']; // 定义可获得的技能列表
                        const list2 = target.skills || []; // 获取目标玩家已拥有的技能列表

                        // 筛选出目标玩家尚未拥有的技能
                        const alllist = list.filter(skill => !list2.includes(skill));

                        if (alllist.length) {
                            let skill = alllist.randomGet();
                            target.addSkill(skill);
                            target.addMark(skill, 1, false);
                            game.log(target, "获得了技能", "【" + get.translation(skill) + "】");
                        } else {
                            console.log("目标玩家已经拥有所有可用技能");
                        }
                    }
                    if (num > 2) {
                        target.addSkill('xinxpojie_xushu');
                        target.addMark('xinxpojie_xushu', 1, false);
                    }

                    if (num > 3) {
                        target.addSkill('xinxpojie_liangzi');
                        target.addMark('xinxpojie_liangzi', 1, false);
                    }
                }


            },
            ai: {
                order: 10,
                result: {
                    target: -1.5,
                },

            },
            subSkill: {
                huo: {
                    charlotte: true,
                    markimage: 'extension/永夜之境/image/mark/xinxpojie_huo.png',
                    mark: true,
                    intro: {
                        content(event, player) {
                            let num = player.countMark('xinxpojie_huo');
                            if (num > 0) return '回合开始时，你受到1点无来源火焰伤害。';
                            return '暂无效果';
                        }
                    },
                    trigger: {
                        player: "phaseBegin",
                    },
                    forced: true,
                    priority: 20,
                    filter(event, player) {
                        return player.hasMark('xinxpojie_huo');
                    },
                    async content(event, trigger, player) {
                        player.logSkill("xinxpojie", [player], null, null, [9]);
                        player.damage('fire', "nosource");
                    },
                },
                lei: {
                    charlotte: true,
                    markimage: 'extension/永夜之境/image/mark/xinxpojie_lei.png',
                    mark: true,
                    intro: {
                        content(event, player) {
                            let num = player.countMark('xinxpojie_lei');
                            if (num > 0) return '当你获得黑桃牌后，由银狼获得之。';
                            return '暂无效果';
                        }
                    },
                    trigger: {
                        player: ["gainAfter", "loseAsyncAfter"],
                    },
                    forced: true,
                    popup: false,
                    priority: 1,
                    filter(event, player) {
                        return player.hasMark('xinxpojie_lei');
                    },
                    async content(event, trigger, player) {
                        const lostCards = trigger.cards || [];
                        const cards = lostCards.filter(card => get.suit(card) == 'spade');
                        const target = game.findPlayer(current => current.name == 'xinx_yinglang');
                        if (cards.length > 0 && target) {
                            target.logSkill("xinxpojie", [player], null, null, [3]);
                            await target.gain(cards, 'gain2', player);
                        }
                    }


                },
                feng: {
                    onremove: function (player, skill) {
                        player.removeSkill(skill);
                    },
                    charlotte: true,
                    markimage: 'extension/永夜之境/image/mark/xinxpojie_feng.png',
                    mark: true,
                    intro: {
                        content(event, player) {
                            let num = player.countMark('xinxpojie_feng');
                            if (num > 0) return '摸牌阶段结束后，你将一种花色的所有牌置于牌堆顶。';
                            return '暂无效果';
                        }
                    },
                    trigger: {
                        player: "phaseDrawEnd",
                    },
                    forced: true,
                    popup: false,
                    priority: 10,
                    filter(event, player) {
                        return player.hasMark('xinxpojie_feng') && player.countCards("he");
                    },
                    async content(event, trigger, player) {
                        const suits = player
                            .getCards("he")
                            .reduce((list, card) => list.add(get.suit(card)), [])
                            .sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                        const result = await player
                            .chooseControl(suits)
                            .set("prompt", "破解：将一种花色的牌置于牌堆顶")
                            .set("ai", () => {
                                const player = get.event("player");
                                let suits = get.event("controls").slice();
                                suits.sort((a, b) => player.countCards("he", { suit: a }) - player.countCards("he", { suit: b }));
                                return suits[0];
                            })
                            .forResult();
                        if (result.control) {
                            const suit = result.control,
                                cards = player.getCards("he", { suit: suit });
                            if (cards.length) {
                                player.logSkill("xinxpojie", null, null, null, [4]);
                                // await game.cardsGotoPile(cards, 'insert');
                                await player.lose(cards, ui.cardPile, 'insert');
                                player.$throw(cards.length, 1000);
                                game.log(player, "将" + cards.length + "张牌置于了牌堆顶");
                            }
                        }
                    },


                },
                bing: {
                    onremove: function (player, skill) {
                        player.removeSkill(skill);
                    },
                    charlotte: true,
                    silent: true,
                    markimage: 'extension/永夜之境/image/mark/xinxpojie_bing.png',
                    mark: true,
                    intro: {
                        content(event, player) {
                            let num = player.countMark('xinxpojie_bing');
                            if (num > 0) return '你于自己的回合内至多使用等同体力上限张牌。';
                            return '暂无效果';
                        }
                    },
                    trigger: {
                        player: "phaseZhunbeiBegin",
                    },
                    forced: true,
                    priority: 10,
                    filter(event, player) {
                        return player.hasMark('xinxpojie_bing');
                    },
                    async content(event, trigger, player) {
                        player.addTempSkill("xinxpojie_debuff");
                        const num = player.maxHp;
                        player.addMark("xinxpojie_debuff", num, false);

                    },
                },
                debuff: {
                    mark: true,
                    intro: {
                        markcount(storage) {
                            return (storage || 0).toString();
                        },
                        content(storage) {
                            return "还可使用" + (storage || 0).toString() + "张牌";
                        },
                    },
                    charlotte: true,
                    onremove: true,
                    trigger: {
                        player: "useCard0",
                    },
                    filter(event, player) {
                        return player.hasMark("xinxpojie_debuff");
                    },
                    forced: true,
                    popup: false,
                    firstDo: true,
                    content() {
                        player.removeMark("xinxpojie_debuff", 1, false);
                    },
                    mod: {
                        cardEnabled(card, player) {
                            if (player.hasMark("xinxpojie_debuff")) return;
                            if (get.itemtype(card) == "card" && get.position(card) == "h") return false;
                            if (card.cards && (card.cards || []).some(i => get.position(i) == "h")) return false;
                        },
                        cardSavable() {
                            return lib.skill.xinxpojie.subSkill.debuff.mod.cardEnabled.apply(this, arguments);
                        },
                    },
                },
                wuli: {
                    charlotte: true,
                    priority: 10,
                    markimage: 'extension/永夜之境/image/mark/xinxpojie_wuli.png',
                    mark: true,
                    intro: {
                        content(event, player) {
                            let num = player.countMark('xinxpojie_wuli');
                            if (num > 0) return '当你回复体力时，进行一次判定，若为黑色，取消之。';
                            return '暂无效果';
                        }
                    },
                    trigger: {
                        player: "recoverBegin",
                    },
                    forced: true,
                    popup: false,
                    priority: 10,
                    filter(event, player) {
                        return player.hasMark('xinxpojie_wuli');
                    },
                    async content(event, trigger, player) {

                        const color = await player.judge().forResult('color');
                        if (color === 'black') {
                            player.logSkill("xinxpojie", null, null, null, [5]);
                            trigger.cancel();
                        }

                    },
                },
                xushu: {
                    charlotte: true,
                    markimage: 'extension/永夜之境/image/mark/xinxpojie_xushu.png',
                    mark: true,
                    intro: {
                        content(event, player) {
                            let num = player.countMark('xinxpojie_xushu');
                            if (num > 0) return '当你成为其他角色使用牌的目标时，你须交给银狼一张牌，否则失去一个技能或失去1点体力。';
                            return '暂无效果';
                        }
                    },
                    trigger: {
                        target: "useCardToTargeted",
                    },
                    forced: true,
                    popup: false,
                    priority: 1,
                    filter(event, player) {
                        return player.hasMark('xinxpojie_xushu') && event.player != player;
                    },
                    async content(event, trigger, player) {
                        const target = game.findPlayer(current => current.name == 'xinx_yinglang');
                        if (target) {
                            const result = await player
                                .chooseToGive(`破解：交给${get.translation(target)}一张牌，否则失去一个技能或失去1点体力`, "he", target)
                                .set("ai", card => {
                                    const { player, target } = get.event();
                                    if (get.attitude(player, target) > 0) {
                                        return 11 - get.value(card);
                                    } else {
                                        let num = 12 - player.hp * 2;
                                        return num - get.value(card);
                                    }
                                })
                                .set("logSkill", ["xinxpojie", null, null, null, [7]])
                                .forResult();
                            if (!result?.bool || !result?.cards?.length) {
                                const result = await player
                                    .chooseButton([
                                        '选择一项', [
                                            [["lose", "失去1点体力"], ["skill", "失去一个技能"]],
                                            "textbutton",
                                        ],
                                    ], true)
                                    .set("filterButton", button => !(button.link === "use" && !player.countCards("hs")))
                                    .set("ai", button => {
                                        const player = get.player();
                                        if (player.hp === 1 && player.countCards("h", "tao") === 0) {
                                            return button.link === "skill" ? 10 : 0;
                                        } else {
                                            return button.link === "lose" ? 10 : 0;
                                        }
                                    })
                                    .forResult();

                                if (result.bool) {
                                    switch (result.links[0]) {
                                        case "lose":
                                            player.logSkill("xinxpojie", null, null, null, [6]);
                                            await player.loseHp();
                                            break;
                                        case "skill":
                                            let skills = player.getSkills(null, false, false).filter(skill => {
                                                let info = get.info(skill);
                                                if (!info || info.charlotte || get.skillInfoTranslation(skill, player).length == 0) return false;
                                                return true;
                                            });
                                            if (skills.length === 1) {
                                                player.removeSkills(skills[0]);
                                            } else {

                                                const result = await player
                                                    .chooseControl(skills)
                                                    .set(
                                                        "choiceList",
                                                        skills.map(i => {
                                                            return '<div class="skill">【' + get.translation(lib.translate[i + "_ab"] || get.translation(i).slice(0, 2)) + "】</div><div>" + get.skillInfoTranslation(i, player) + "</div>";
                                                        })
                                                    )
                                                    .set("displayIndex", false)
                                                    .set("prompt", "破解：选择失去一个技能")
                                                    .set("ai", () => {
                                                        var choices = _status.event.controls.slice();
                                                        var negs = choices.filter(i => {
                                                            var info = get.info(i);
                                                            if (!info || !info.ai) return false;
                                                            return info.ai.neg || info.ai.halfneg;
                                                        });
                                                        if (negs.length) return negs.randomGet();
                                                        if (choices.includes("mashu")) return "mashu";
                                                        return choices.randomGet();
                                                    }).forResult();

                                                if (result.control) {
                                                    player.logSkill("xinxpojie", null, null, null, [8]);
                                                    player.removeSkills(result.control);
                                                }
                                            }
                                            break;
                                    }
                                }
                            }
                        }

                    },

                },
                liangzi: {
                    charlotte: true,
                    markimage: 'extension/永夜之境/image/mark/xinxpojie_liangzi.png',
                    mark: true,
                    intro: {
                        content(event, player) {
                            let num = player.countMark('xinxpojie_liangzi');
                            if (num > 0) return '当你使用牌指定角色为目标时，若目标为银狼，其对你发动一次【破解】。';
                            return '暂无效果';
                        }
                    },
                    trigger: {
                        player: "useCardToPlayered",
                    },
                    forced: true,
                    popup: false,
                    priority: 1,
                    filter(event, player) {
                        return player.hasMark('xinxpojie_liangzi') && event.target.name == 'xinx_yinglang';
                    },
                    async content(event, trigger, player) {
                        const target = game.findPlayer(current => current.name == 'xinx_yinglang');
                        if (target) {
                            //await target.useSkill("xinxpojie");
                            //await target.useSkill("xinxpojie",null,player);
                            target.logSkill("xinxpojie", player);
                            await player.chooseToDiscard(true, "he");
                            player.showHandcards();
                            const suits = ['heart', 'club', 'spade', 'diamond'];
                            const cards = player.get('hej');
                            for (let i = 0; i < cards.length; i++) {
                                if (suits.includes(get.suit(cards[i])))
                                    suits.remove(get.suit(cards[i]));
                            }
                            if (suits.length) {
                                const num = suits.length;
                                if (num > 0) {
                                    const list = ['xinxpojie_huo', 'xinxpojie_lei', 'xinxpojie_feng', 'xinxpojie_bing', 'xinxpojie_wuli']; // 定义可获得的技能列表
                                    const list2 = player.skills || []; // 获取目标玩家已拥有的技能列表

                                    // 筛选出目标玩家尚未拥有的技能
                                    const alllist = list.filter(skill => !list2.includes(skill));

                                    if (alllist.length) {
                                        let skill = alllist.randomGet();
                                        player.addSkill(skill);
                                        player.addMark(skill, 1, false);
                                        game.log(player, "获得了技能", "【" + get.translation(skill) + "】");
                                    } else {
                                        console.log("目标玩家已经拥有所有可用技能");
                                    }
                                }
                                if (num > 2) {
                                    player.addSkill('xinxpojie_xushu');
                                    player.addMark('xinxpojie_xushu', 1, false);
                                }

                                if (num > 3) {
                                    player.addSkill('xinxpojie_liangzi');
                                    player.addMark('xinxpojie_liangzi', 1, false);
                                }
                            }
                        }
                    }
                },

            },
        },
        xinxhairu: {
            initList() {
                // 确保角色列表已初始化
                if (!_status.characterlist) lib.skill.pingjian.initList();
                // 从角色列表中提取所有技能并去重
                const skills = _status.characterlist
                    .map(i => get.character(i, 3)) // 获取角色的所有技能（包括隐藏/限定等）
                    .flat() // 展平嵌套数组
                    .unique(); // 去重
                game.expandSkills(skills);
                const list = skills.filter(skill => {
                    const info = get.info(skill);
                    return info && info.limited; // 仅保留有 `limited` 标记的技能
                });
                // 存储到全局变量
                _status.xinxhairuSkills = list;
            },
            audio: "ext:永夜之境/audio:4",
            logAudio: index => (typeof index === "number" ? "ext:永夜之境/audio/xinxhairu" + index + ".mp3" : 2),
            trigger: {
                global: 'roundStart',
            },
            filter(event, player) {
                const marks = ['xinxpojie_huo', 'xinxpojie_lei', 'xinxpojie_feng', 'xinxpojie_bing', 'xinxpojie_wuli', 'xinxpojie_xushu', 'xinxpojie_liangzi'];
                //var target = game.findPlayer(current => current.hasMark(''));
                const targets = game.filterPlayer(current => marks.some(mark => current.hasMark(mark)));
                return targets.length > 0;
            },
            async cost(event, trigger, player) {
                const marks = ['xinxpojie_huo', 'xinxpojie_lei', 'xinxpojie_feng', 'xinxpojie_bing', 'xinxpojie_wuli', 'xinxpojie_xushu', 'xinxpojie_liangzi'];
                const validTargets = game.filterPlayer(current => marks.some(mark => current.hasMark(mark)));
                event.result = await player
                    .chooseTarget(get.prompt2("xinxhairu"), function (card, player, target) {
                        return validTargets.includes(target);
                    })
                    .set("ai", target => {
                        const player = get.player();
                        const marks = ['xinxpojie_huo', 'xinxpojie_lei', 'xinxpojie_feng', 'xinxpojie_bing', 'xinxpojie_wuli', 'xinxpojie_xushu', 'xinxpojie_liangzi'];
                        if (get.attitude(player, target) > 0) return 0;
                        const markCount = marks.reduce((count, mark) => {
                            return count + (target.hasMark(mark) ? 1 : 0);
                        }, 0);
                        if (markCount < 2) return 0;
                        return markCount * 10;
                    })
                    .forResult();
            },
            async content(event, trigger, player) {
                const target = event.targets[0];
                const marks = ['xinxpojie_huo', 'xinxpojie_lei', 'xinxpojie_feng', 'xinxpojie_bing', 'xinxpojie_wuli', 'xinxpojie_xushu', 'xinxpojie_liangzi'];
                const availableMarks = marks.filter(mark => target.hasMark(mark));
                let map = {}
                let choose = [];
                for (let xinxpojie_ of availableMarks) {
                    let cn = get.translation(xinxpojie_);
                    map[cn] = xinxpojie_;
                    choose.push(cn);
                };

                if (availableMarks.length === 0) {
                    player.chat("没有可移除的弱点");
                    return;
                }
                const { result } = await player.chooseButton(['〖' + get.skillTranslation(event.name) + '〗:选择要移除的弱点', [choose, 'tdnodes']], 1, true)
                    .set('ai', (button) => {
                        const player = get.player();
                        const target = event.targets[0];

                        if (target.countMark('xinxpojie_liangzi') > 0 || target.countMark('xinxpojie_xushu') > 0) {
                            if (button.link == '量子') return 2;
                            else if (button.link == '虚数') return 3;
                            return 1;
                        } else if (button.link == '物理') return 2;

                        else if (["风", "火", "雷", "物理", "冰"].includes(button.link)) {
                            // 随机选择一个作为高优先级（例如 2），其他返回 1
                            const randomPriority = Math.random() > 0.5 ? 2 : 1;
                            return randomPriority;
                        }
                        // return 1;
                    }).set('filterButton', (button, player) => {
                        return choose.includes(button.link);
                    });

                if (result.bool) {
                    const selectedMark = map[result.links[0]]; // 玩家选择的标记
                    target.removeMark(selectedMark, 1, false);
                    game.log(player, "移除了" + get.translation(target) + "一个" + get.translation(selectedMark) + "弱点");

                    const markcount = marks.filter(mark => target.hasMark(mark)).length;//当前的弱点数量
                    player.draw(markcount);
                    const num = markcount;
                    if (num > 0) {
                        if (target.getStockSkills(false, true).length > 0) {
                            const list = target.getStockSkills(false, true);//定义技能
                            if (!list.length) return;
                            const dialog = ui.create.dialog();
                            dialog.addText("骇入：是否令其失去一个技能？", true);
                            for (const skill of list) {
                                dialog.add([[[skill, '<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skill) + "】</div><div>" + lib.translate[skill + "_info"] + "</div></div>"]], "textbutton"]);
                            }
                            const result = await player.chooseButton(dialog, 'cancel2')
                                .set("ai", button => Math.random())
                                .forResult();

                            //if (!result?.links) return;
                            if (result.bool) {
                                let skill = result.links[0];
                                player.logSkill("xinxhairu", null, null, null, [get.rand(3, 4)]);
                                await target.removeSkill(skill);

                                if (!_status.xinxhairuSkills) lib.skill.xinxhairu.initList();
                                const skills = _status.xinxhairuSkills.filter(skill => !target.hasSkill(skill)).randomGets(num);
                                if (skills.length) {
                                    const result = await player
                                        .chooseButton(
                                            [
                                                `###${get.translation(event.name)}###从${num}个限定技中选择一个令${get.translation(target)}获得`,
                                                [
                                                    skills.map(skill => {
                                                        return [skill, `${get.translation(skill)}：${get.translation(skill + "_info")}`];
                                                    }),
                                                    "textbutton",
                                                ],
                                            ],
                                            true
                                        )
                                        .set("ai", button => Math.random())
                                        .forResult();
                                    if (!result?.links) return;
                                    const skill = result.links[0];
                                    await target.addSkill(skill);

                                }
                            }
                        }
                    }
                }
            }
        },
        xinxsusheng: {
            trigger: {
                global: "phaseBefore",
                player: "enterGame",
            },
            unique: true,
            locked: true,
            filter(event, player) {
                return event.name != "phase" || game.phaseNumber == 0;
            },
            group: ["xinxsusheng_swap", "xinxsusheng_right", 'xinxsusheng_add','xinxsusheng_damage'],
            async cost(event, trigger, player) {
                const result = await player
                    .chooseTarget([1,2], lib.filter.notMe, get.prompt2("xinxsusheng"))
                    .set("ai", target => {
                        const player = get.player();
                        let val = target.getHp();
                        if (get.attitude(player, target) <= 0) val *= 2;
                        return val;
                    })
                    .forResult();
                if (!result?.targets) result.targets = [];
                event.result = {
                    bool: true,
                    targets: [player, ...result.targets],
                };
            },
            async content(event, trigger, player) {
                // const num = player.getHp(),
                //     num1 = player.maxHp;
                const target = event.targets;
              //player.logSkill("xinxsusheng", null, null, null, [get.rand(5, 6)]);
                player.line(target);
                player.markAuto("xinxsusheng", target);
                player.markSkill("xinxsusheng");
                const targets = game
                .filterPlayer(target => {
                    return player.getStorage("xinxsusheng").includes(target);
                }).sortBySeat();
                const num = targets.reduce((sum, target) => sum + target.hp, 0);
                player.storage.xinxsusheng.hp = num;
                player.storage.xinxsusheng_dist = player.addSubPlayer({
                    name: "xinx_Pollux",
                    skills: ["xinxsusheng_in","xinxsusheng_swap"],
                    hp: num,
                    maxHp: num,
                    sex: "female",
                    image: "ext:永夜之境/image/xinx_Pollux.png",
                    hs: get.cards(4),
                    skill: "xinxsusheng",
                    intro: "你的本体回合结束后，切换至此随从并进行一个额外的回合。",
                    intro2: "当前回合结束后切换回本体",
                    onremove(player) {
                        delete player.storage.xinxsusheng_dist;
                    },
                });
            },
            intro: {
                markcount(storage, player) {
                    let num = player.countMark("xinxsusheng_add");
                    if (num == 0) return null;
                    return num;
                },
                mark(dialog, storage, player) {
                    if (storage) dialog.addSmall([storage.map(key => key.name), "character"]);
                    let num = player.countMark("xinxsusheng_add");
                    if (num != 0) dialog.addText(`已拥有新蕊${num > 0 ? ":" : ""}${num}`);
                },
            },
            subSkill: {
                damage:{

                },
                add: {
                    trigger: {
                        global: "changeHp",
                    },
                    line: {
                        color: [235, 96, 138],
                    },
                    getIndex: event => Math.abs(event.num),
                    priority: 1,
                    forced: true,
                    popup: false,
                    charlotte: true,
                    filter: function (event, player) {
                        const targets = game
                            .filterPlayer(target => {
                                return player.getStorage("xinxsusheng").includes(target);
                            }).sortBySeat();
                        return targets.includes(event.player);
                    },
                    async content(event, trigger, player) {
                        player.addMark('xinxsusheng_add', 1);
                        player.markSkill("xinxsusheng");
                        const num =player.storage.xinxsusheng.hp;
                        //const target = game.findPlayer(current => current.hasSkill("xinxsusheng_in"));
                        const target =player.storage.xinxsusheng_dist;
                        if (player.countMark('xinxsusheng_add') >= num) {
                            if (target) {
                            player.storage[target].hp += num;
                            game.log('#b' + target, '将体力回复至体力上限');
                            }else {
                                player.storage.xinxsusheng_dist = player.addSubPlayer({
                                    name: "xinx_Pollux",
                                    skills: ["xinxsusheng_in","xinxsusheng_swap"],
                                    hp: num,
                                    maxHp: num,
                                    sex: "female",
                                    image: "ext:永夜之境/image/xinx_Pollux.png",
                                    hs: get.cards(4),
                                    skill: "xinxsusheng",
                                    intro: "你的本体回合结束后，切换至此随从并进行一个额外的回合。",
                                    intro2: "当前回合结束后切换回本体",
                                    onremove(player) {
                                        delete player.storage.xinxsusheng_dist;
                                    },
                                });
                            }
                            await player.clearMark('xinxsusheng_add',false);
                        }
                    },
                },
                in:{
                    sub: true,
                    sourceSkill: "xinxsusheng",
                    "_priority": 0,
                },
                chosen: {
                    sub: true,
                    sourceSkill: "xinxsusheng",
                    "_priority": 0,
                },
                swap: {
                    trigger: {
                        global: "phaseBegin",
                    },
                    forced: true,
                    popup: false,
                    filter: function (event, player) {
                        return event.player != player;
                    },
                    priority: 20,
                    content: function () {
                        if (player.hasSkill('subplayer')) {
                            player.exitSubPlayer();
                        }
                        player.markSkill("xinxsusheng");
                    },
                },

                right: {
                    trigger: {
                        player: ["phaseAfter", "phaseCancelled"],
                    },
                    forced: true,
                    popup: false,
                    priority: -40,
                    filter: function (event, player) {
                        if (player.hasSkill('xinxsusheng_chosen')) return false;
                        if (player.hasSkill('subplayer')) return false;
                        var right = player.storage.xinxsusheng_dist;
                        if (!right) return false;
                        return player.hasSkill(right);
                    },
                    content: function () {
                        player.callSubPlayer(player.storage.xinxsusheng_dist);
                        player.insertPhase();
                        player.addTempSkill('xinxsusheng_chosen', ['phaseBegin', 'phaseCancelled']);
                    },
                },
            }
        },



    },
    //翻译
    translate: {
        liechexinghe: '列车组&星核猎手',
        xianzhou: '仙舟',
        xinyiling: '忆灵',
        pinuokangni: '匹诺康尼的梦',
        yinhe: '银河',
        heita: '空间站「黑塔」',
        beiluoboge: '贝洛伯格',
        wengfaluosi: '翁法罗斯',
        gongsi: '星际和平公司',
        xinx_liuying: "杏流萤",
        xinx_liuying_prefix: '杏',
        xinx_jingliu: '杏镜流',
        xinx_jingliu_prefix: '杏',
        xinx_ren: '杏刃',
        xinx_ren_prefix: '杏',
        xinx_zhigengniao: '杏知更鸟',
        xinx_zhigengniao_prefix: '杏',
        xinx_huahuo: '杏花火',
        xinx_huahuo_prefix: '杏',
        xinx_qiong: '杏穹',
        xinx_qiong_prefix: '杏',
        xinx_qiong_shadow1: '记忆',
        xinx_qiong_shadow2: '同谐',
        xinx_qiong_shadow3: '存护',
        xinx_mimi: '杏迷迷',
        xinx_mimi_prefix: '杏',
        xinx_luocha: '杏罗刹',
        xinx_luocha_prefix: '杏',
        xinx_ruanmei: '杏阮梅',
        xinx_ruanmei_prefix: '杏',
        xinx_xier: '杏希儿',
        xinx_xier_prefix: '杏',
        xinx_yinglang: '杏银狼',
        xinx_yinglang_prefix: '杏',
        xinx_huangquan: '杏黄泉',
        xinx_huangquan_prefix: '杏',
        xinx_daheita: '杏大黑塔',
        xinx_daheita_prefix: '杏',
        xinx_wangguiren: '杏忘归人',
        xinx_wangguiren_prefix: '杏',
        xinx_xiadie: '杏遐蝶',
        xinx_xiadie_prefix: '杏',
        xinx_Pollux: '玻吕刻斯',
        xinx_tuopa: '杏托帕',
        xinx_tuopa_prefix: '杏',
        xinx_luanpo: '杏乱破',
        xinx_luanpo_prefix: '杏',
        xinx_feixiao: '杏飞霄',
        xinx_feixiao_prefix: '杏',
        xinx_hanya: '杏寒鸦',
        xinx_hanya_prefix: '杏',
        xinx_xingqiri: '杏星期日',
        xinx_xingqiri_prefix: '杏',
        xinx_guinaifen: '杏桂乃芬',
        xinx_guinaifen_prefix: '杏',
        xinx_fuxuan: '杏符玄',
        xinx_fuxuan_prefix: '杏',
        xinx_kafuka: '杏卡芙卡',
        xinx_kafuka_prefix: '杏',
        xinx_buluoniya: '杏布洛妮娅',
        xinx_buluoniya_prefix: '杏',
        xinx_yinyuejun: '杏饮月君',
        xinx_yinyuejun_prefix: '杏',
        xinx_sanyueqi: '杏三月七',
        xinx_sanyueqi_prefix: '杏',
        xinxmeng_liuying: '华流萤',
        xinxmeng_liuying_prefix: '华',
        xinx_danheng: '杏丹恒',
        xinx_danheng_prefix: '杏',



















        //技能翻译
        xinxyingshi: "萤誓",
        xinxyingshi_info: "锁定技。当你对一名其他角色第偶数次造成伤害时，你弃置其X张牌（X为其体力上限的一半，向上取整），获得其中的红色牌并可以使用之。",
        xinxxinzhui: "星坠",
        xinxxinzhui_info: "锁定技。你每使用三张牌，若你未处于“完全燃烧”，你<a style='color:#03f7fe' href=\"javascript:get.xinx_skillTips('于当前回合结束后进行一个额外回合，并于此额外回合结束后跳过自己的下个回合（每轮限一次）','0');\">提前自己的下个回合</a>，并进入“完全燃烧”：①使用红色牌无法被响应，且于结算后摸两张牌并弃置一张牌。②将【萤誓】的触发条件改为“对一名其他角色第偶数次使用牌时”。当你于此状态下造成3点伤害后，退出“完全燃烧”。",
        xinxxiaguang: "罅光",
        xinxxiaguang_info: "当一张【杀】或单目标普通锦囊牌结算后，若你为此牌的目标/使用者，且你响应过/对方未响应此牌，你可以将一张牌当本回合使用过的牌使用（每回合每种牌名限一次）/令其将一张牌置于你的武将牌上。",
        xinxshuohua: "朔华",
        xinxshuohua_info: "其他角色的准备阶段，若你的武将牌上有牌，你观看牌堆顶三张牌并可以用武将牌上的牌替换其中任意张牌，若如此做，你选择获得其中一种花色的所有牌。然后你可以将武将牌上的所有牌当一张伤害值与响应牌数为X的冰【杀】使用（X为此牌对应的实体牌数）。",
        xinxzhili: "支离",
        xinxzhili_info: "出牌阶段限一次或你使用伤害牌时，你可以重铸任意张牌并失去1点体力，然后你本轮使用牌造成的伤害值和回复值+1。",
        xinxfandu: "返渡",
        xinxfandu_info: "锁定技。你的体力值每减少4点时，你选择一项并回复1点体力：1.对所有其他角色各造成1点伤害；2.使用一张牌，此牌可指定至多三名角色为目标，且你于结算后获得此牌。",
        xinxkaituo: "开拓",
        xinxkaituo_info: "锁定技。准备阶段或结束阶段，你选择切换为<a style='color:#03f7fe' href=\"javascript:get.sbzz_skillTips('可获得的技能：<br/>「即奏」：当你获得此技能时，你可以观看一名其他角色的手牌，将其中一种花色的牌替换为牌堆中的等量红色牌，然后你获得被替换的牌。你或其失去以此法获得的牌时，从弃牌堆获得方块和红桃牌各一张（因此获得的牌不计入手牌上限）。','0');\">同谐</a>/<a style='color:#03f7fe' href=\"javascript:get.sbzz_skillTips('可获得的技能：<br/>「唤灵」：当你获得此技能时，你召唤忆灵“迷迷”至你的下家或为“迷迷”回复1点体力（若“迷迷”未受伤则增加1点体力上限）。<br/>「磁链」：当你/“迷迷”不因本技能获得牌时，“迷迷”/你摸一张牌。','0');\">记忆</a>/<a style='color:#03f7fe' href=\"javascript:get.sbzz_skillTips('可获得的技能：<br/>「筑珀」：当你获得此技能时，你与迷迷获得1枚珀石，并可以选择一名角色，直到你的下回合开始，其使用【杀】只能指定你为目标。<br/>「炎枪」：出牌阶段限一次，你可以将一张牌当不计入次数的【火攻】或火【杀】使用。若此牌造成过伤害，你获得1枚珀石。','0');\">存护</a>命途。然后你失去因【开拓】获得的技能，获得对应命途的技能。",
        xinxhuanling: "唤灵",
        xinxhuanling_info: "当你获得此技能时，你召唤忆灵“迷迷”至你的下家或为“迷迷”回复1点体力（若“迷迷”未受伤则增加1点体力上限）。",
        xinxcilian: "磁链",
        xinxcilian_info: "当你/“迷迷”不因本技能获得牌时，“迷迷”/你摸一张牌。",
        xinxhuoban: "伙伴",
        xinxhuoban_info: "蓄力技（0/4）。①当场上存在开拓者时，你受开拓者控制。②当你或开拓者的体力值变化后，你获得1点蓄力值。一名角色的结束阶段，你可以消耗4点蓄力值令一名其他角色获得一个额外回合，且本回合其造成伤害后，其可以令你对目标角色造成1点伤害。",
        xinxjizou: "即奏",
        xinxjizou_info: "当你获得此技能时，你可以观看一名其他角色的手牌，将其中一种花色的牌替换为牌堆中的等量红色牌，然后你获得被替换的牌。你或其失去以此法获得的牌时，从弃牌堆获得方块和红桃牌各一张（因此获得的牌不计入手牌上限）。",
        xinxmengxing: "梦醒",
        xinxmengxing_info: "一名角色的回合开始时，若当前回合为额外回合，你可以令其的当前手牌不计入手牌上限。",
        xinxmengxing_tag: "梦醒",
        xinxjizou_tag: "即奏 上限",
        xinxzhupo: "筑珀",
        xinxzhupo_info: "当你获得此技能时，你与迷迷获得1枚<a style='color:#03f7fe' href=\"javascript:get.xinx_skillTips('当你受到伤害后，你移去一枚“珀石”，回复1点体力。','0');\">珀石</a>，并可以选择一名角色，直到你的下回合开始，其使用【杀】只能指定你为目标。",
        xinxyanqiang: "炎枪",
        xinxyanqiang_info: "出牌阶段限一次，你可以将一张牌当不计入次数的【火攻】或火【杀】使用。若此牌造成过伤害，你获得1枚<a style='color:#03f7fe' href=\"javascript:get.xinx_skillTips('当你受到伤害后，你移去一枚“珀石”，回复1点体力。','0');\">珀石</a>。",
        xinxpojie: "破解",
        xinxpojie_info: "出牌阶段限一次或结束阶段，你可以令一名其他角色弃置一张牌，然后其展示所有手牌，根据其区域内缺少的花色数获得对应弱点:<br>大于1：其获得<a style='color:#03f7fe' href=\"javascript:get.xinx_skillTips('火：回合开始时，你受到1点无来源火焰伤害。','0');\">火</a>/<a style='color:#03f7fe' href=\"javascript:get.xinx_skillTips('雷：当你获得黑桃牌后，由银狼获得之。','0');\">雷</a>/<a style='color:#03f7fe' href=\"javascript:get.xinx_skillTips('风：摸牌阶段结束后，你将一种花色的所有牌置于牌堆顶。','0');\">风</a>/<a style='color:#03f7fe' href=\"javascript:get.xinx_skillTips('冰：你于自己的回合内至多使用等同体力上限张牌。','0');\">冰</a>/<a style='color:#03f7fe' href=\"javascript:get.xinx_skillTips('物理：当你回复体力时，进行一次判定，若为黑色，取消之。','0');\">物理</a>中随机一个未拥有的弱点；<br>大于2：其获得一个<a style='color:#03f7fe' href=\"javascript:get.xinx_skillTips('虚数：当你成为其他角色使用牌的目标，你须交给银狼一张牌，否则失去一个技能或失去1点体力。','0');\">虚数</a>弱点；<br>大于3：其获得一个<a style='color:#03f7fe' href=\"javascript:get.xinx_skillTips('量子：当你使用牌指定角色为目标时，若目标为银狼，其对你发动一次【破解】。','0');\">量子</a>弱点。",
        xinxpojie_huo: "火",
        xinxpojie_lei: "雷",
        xinxpojie_feng: "风",
        xinxpojie_bing: "冰",
        xinxpojie_wuli: "物理",
        xinxpojie_xushu: "虚数",
        xinxpojie_liangzi: "量子",
        xinxhairu: "骇入",
        xinxhairu_info: "每轮开始时，你可以选择一名有弱点的其他角色。你移除其一个弱点，摸X张牌（X为其当前弱点类型数），然后从X个限定技中选择一个替换其武将牌上的一个技能。",
        xinxsusheng: "苏生",
        xinxsusheng_info: "出牌阶段限一次，你可以将一张手牌当任意普通锦囊牌使用。",























        //台词翻译

        //流萤
        '#ext:永夜之境/audio/xinxyingshi1': '这不止是一场战役。',
        '#ext:永夜之境/audio/xinxyingshi2': '火萤Ⅳ型，已就位。',
        '#ext:永夜之境/audio/xinxyingshi3': '火萤Ⅳ型，等待指示。',
        '#ext:永夜之境/audio/xinxyingshi4': '行动四，点火。',
        '#ext:永夜之境/audio/xinxyingshi5': '没有退路，只能向前。',
        '#ext:永夜之境/audio/xinxyingshi_xinx_liuying_shadow1': '为战而生，为生而战！',
        '#ext:永夜之境/audio/xinxyingshi_xinx_liuying_shadow2': '我将，点燃星海！',
        '#ext:永夜之境/audio/xinxyingshi_xinx_liuying_shadow3': '我会为自己夺得胜利。',
        '#ext:永夜之境/audio/xinxyingshi_xinx_liuying_shadow4': '行动四，点火。',
        '#ext:永夜之境/audio/xinxyingshi_xinx_liuying_shadow5': '没有退路，只能向前。',
        '#ext:永夜之境/audio/xinxxinzhui1': '飞萤扑火，向死而生。',
        '#ext:永夜之境/audio/xinxxinzhui2': '我为自我而战，直至一切…燃烧殆尽！',
        '#ext:永夜之境/audio/xinxxinzhui3': '也许最后，我也能拥有自己的梦……',
        '#ext:永夜之境/audio/xinxxinzhui4': '薄如蝉翼的生命，也有璀璨燃烧的可能。',
        '#ext:永夜之境/audio/xinxxinzhui5': '切换预案。',
        '#ext:永夜之境/audio/xinxxinzhui6': '受到攻击。',
        '#xinx_liuying': '任务…终止……',
        "#ext:永夜之境/xinx_liuying:die": "任务…终止……",

        //镜流
        '#ext:永夜之境/audio/xinxxiaguang1': '现在退下，我便饶你一命。',
        '#ext:永夜之境/audio/xinxxiaguang2': '无趣。',
        '#ext:永夜之境/audio/xinxxiaguang3': '飞光流泻！',
        '#ext:永夜之境/audio/xinxxiaguang4': '剑出无回！',
        '#ext:永夜之境/audio/xinxxiaguang5': '多添一条亡魂罢了。',
        '#ext:永夜之境/audio/xinxxiaguang6': '不值一哂。',
        '#ext:永夜之境/audio/xinxshuohua1': '我以月色为剑。',
        '#ext:永夜之境/audio/xinxshuohua2': '剑下草芥！',
        '#ext:永夜之境/audio/xinxshuohua3': '就让这一轮月华…照彻万川！',
        '#ext:永夜之境/audio/xinxshuohua4': '准备受死…',
        '#ext:永夜之境/audio/xinxshuohua5': '你无处可逃！',

        //刃
        '#ext:永夜之境/audio/xinxzhili1': '其势…已成！',
        '#ext:永夜之境/audio/xinxzhili2': '死兆…将至！',
        '#ext:永夜之境/audio/xinxzhili3': '以掌中之剑，送你一程。',
        '#ext:永夜之境/audio/xinxzhili4': '剑下不必留情。',
        '#ext:永夜之境/audio/xinxzhili5': '生命，已成惩戒。',
        '#ext:永夜之境/audio/xinxzhili6': '已死之人，不知所惧。',
        '#ext:永夜之境/audio/xinxfandu1': '彼岸…葬送！',
        '#ext:永夜之境/audio/xinxfandu2': '此番美景，我虽求而不得……',
        '#ext:永夜之境/audio/xinxfandu3': '却能，邀诸位共赏。',
        '#ext:永夜之境/audio/xinxfandu4': '还不够……',
        '#ext:永夜之境/audio/xinxfandu5': '好，来得好。',







    },
    //动态翻译
    dynamicTranslate: {

    },
};