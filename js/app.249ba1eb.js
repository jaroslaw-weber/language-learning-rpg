(function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/language-learning-rpg/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("ecfe"),o=n.n(r);o.a},1:function(e,t){},"15be":function(e,t,n){},"169c":function(e,t,n){},2:function(e,t){},"26c5":function(e,t,n){},"304a":function(e,t,n){},"31b8":function(e,t,n){},"39c9":function(e,t,n){},"3a0a":function(e,t,n){"use strict";var r=n("26c5"),o=n.n(r);o.a},"3a16":function(e,t,n){},"4ff7":function(e,t,n){"use strict";var r=n("7431"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TopInfo"),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-one-quarter"},[n("Menu")],1),n("div",{staticClass:"column"},["battle"==e.currentScene?n("Battle"):e._e(),"shop"==e.currentScene?n("Shop"):e._e(),"inventory"==e.currentScene?n("Inventory"):e._e(),"locations"==e.currentScene?n("Locations"):e._e()],1)]),n("hr"),n("div",{staticClass:"debug-wrapper"},[e.$store.state.isDebug?n("DebugPanel"):e._e()],1),n("div",{staticClass:"debug-wrapper"},[n("b-checkbox",{model:{value:e.$store.state.isDebug,callback:function(t){e.$set(e.$store.state,"isDebug",t)},expression:"$store.state.isDebug"}},[e._v("show debug panel")])],1)],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"top-info"},[e.player?n("p",[e._v("level: "+e._s(e.player.level)+" | gold: "+e._s(e.player.gold)+" | exp: "+e._s(e.player.exp)+"/"+e._s(e.player.nextLevelExp)+" | hp: "+e._s(e.player.hp))]):e._e()])},i=[],c={name:"HelloWorld",props:{msg:String},computed:{player:function(){return this.$store.state.player}}},l=c,u=(n("cd75"),n("0c7c")),p=Object(u["a"])(l,s,i,!1,null,"4b55298c",null),d=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$store.state.player.hp>0?n("div",{staticClass:"battle-grid"},[n("div",[this.$store.state.currentEnemy?n("Enemy",{staticClass:"item3"}):e._e(),this.$store.state.currentLoot?n("Loot",{staticClass:"item3"}):e._e(),n("BattleLog",{staticClass:"item4"})],1),this.$store.state.previousAnswer?n("div",[n("Question",{staticClass:"item1"}),n("SelectAnswer",{staticClass:"item2"}),this.$store.state.currentLoot?n("div",[n("button",{staticClass:"button collect-loot",on:{click:function(t){return e.$store.commit("collectLoot")}}},[e._v("collect loot")])]):e._e()],1):e._e()]):n("div",[n("p",[e._v("you dead buddy")])])])},f=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"enemy-name"},[e._v(e._s(e.currentEnemy.name))]),n("p",[e._v("hp: "+e._s(e.currentEnemy.hp)+"/"+e._s(e.currentEnemy.maxHp))]),n("img",{staticClass:"enemy-icon",attrs:{src:e.$store.state.publicPath+"icons/"+e.currentEnemy.image+".svg"}})])},h=[],b={name:"HelloWorld",props:{msg:String},methods:{shake:function(){}},computed:{currentEnemy:function(){return this.$store.state.currentEnemy}}},g=b,y=(n("ae64"),Object(u["a"])(g,v,h,!1,null,"6310073c",null)),_=y.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{staticClass:"loot",attrs:{src:e.$store.state.publicPath+"/icons/chest.svg"}})])},C=[],k={name:"HelloWorld",props:{msg:String},methods:{shake:function(){}},computed:{loot:function(){return this.$store.state.currentLoot}}},$=k,x=(n("c4d6"),Object(u["a"])($,w,C,!1,null,"342c6a9a",null)),L=x.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"question"},[e._v(e._s(e.question))])])},E=[],A={name:"Question",props:{},computed:{question:function(){if(this.$store.state.currentCard)return this.$store.state.currentCard.front}}},O=A,j=(n("e469"),Object(u["a"])(O,S,E,!1,null,"75fde70a",null)),T=j.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"answers"},[n("div",{staticClass:"answers"},e._l(e.answers,(function(t,r){return n("div",{key:r},[e.$store.state.isShowAnswer?n("div",[t.isCorrect?n("button",{staticClass:"button answer-button correct-answer",attrs:{disabled:""}},[e._v(e._s(t.display))]):n("button",{staticClass:"button answer-button",attrs:{disabled:""}},[e._v(e._s(t.display))])]):n("div",[n("button",{staticClass:"button answer-button",on:{click:function(n){return e.onAnswer(t)}}},[e._v(e._s(t.display))])])])})),0),e.$store.state.isShowAnswer&&e.$store.state.currentEnemy?n("div",[n("button",{staticClass:"button next-turn",on:{click:function(t){return e.$store.commit("nextTurn")}}},[e._v("next turn")])]):e._e()])},P=[],M={name:"Answers",props:{},methods:{onAnswer:function(e){this.$store.commit("onAnswer",e)}},computed:{answers:function(){return this.$store.state.answers}}},N=M,W=(n("a09b"),Object(u["a"])(N,q,P,!1,null,"65dffa41",null)),D=W.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"battle-log"},e._l(e.log,(function(t,r){return n("p",{key:r,staticClass:"single-log"},[e._v(e._s(t))])})),0)},B=[],H=(n("fb6a"),n("2909")),I={name:"BattleLog",props:{msg:String},computed:{log:function(){var e=Object(H["a"])(this.$store.state.battleLog);return e.reverse(),e.slice(0,5)}}},G=I,J=(n("bed2"),Object(u["a"])(G,R,B,!1,null,"7ae00843",null)),Q=J.exports,U={name:"Battle",props:{msg:String},components:{Enemy:_,SelectAnswer:D,BattleLog:Q,Question:T,Loot:L}},K=U,z=(n("3a0a"),Object(u["a"])(K,m,f,!1,null,"113704c0",null)),F=z.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"shop"},[n("p",{staticClass:"shop-title"},[e._v("shop")]),n("div",[n("p",{staticClass:"shop-category"},[e._v("weapons")]),e.hasWeapons?n("div",e._l(e.weapons,(function(t){return n("div",{key:t.id,staticClass:"shop-item"},[n("button",{staticClass:"button",attrs:{disabled:t.price>e.$store.state.player.gold},on:{click:function(n){return e.buyWeapon(t.id)}}},[e._v(e._s(t.name)+": "+e._s(t.price)+" gold")])])})),0):n("p",[e._v("no new weapons")])])])},X=[],Y=(n("4de4"),{name:"Shop",props:{},computed:{weapons:function(){var e=this.$store.state.player.equipped.hand;return this.$store.state.master.weapons.filter((function(t){return 1!=t.id&&t.atk>e.atk}))},hasWeapons:function(){return this.weapons.length>0}},methods:{buyWeapon:function(e){this.$store.commit("buyWeapon",e)}}}),Z=Y,ee=(n("b3ab"),Object(u["a"])(Z,V,X,!1,null,"3abc2d4e",null)),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"inventory"},[n("p",{staticClass:"inventory-title"},[e._v("equipped items")]),n("p",{staticClass:"inventory-item"},[n("strong",[e._v("hand:")]),e._v(" "+e._s(e.$store.state.player.equipped.hand.name)+" ")])])},re=[],oe={name:"HelloWorld",props:{msg:String}},ae=oe,se=(n("4ff7"),Object(u["a"])(ae,ne,re,!1,null,"319342d0",null)),ie=se.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"debug-panel"},[n("button",{staticClass:"button",on:{click:function(t){return e.addGold(20)}}},[e._v("add 20 gold")]),n("button",{staticClass:"button",on:{click:function(t){return e.levelUp()}}},[e._v("level up")])])},le=[],ue={name:"Question",props:{},computed:{},methods:{addGold:function(e){this.$store.commit("debugAddGold",e)},levelUp:function(){this.$store.commit("debugLevelUp")}}},pe=ue,de=(n("aaf9"),Object(u["a"])(pe,ce,le,!1,null,"3d53f721",null)),me=de.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"locations"},[n("div",{staticClass:"locations"},e._l(e.locations,(function(t,r){return n("div",{key:r,staticClass:"location"},[n("button",{staticClass:"button location-button",attrs:{disabled:e.$store.state.player.level<t.requiredLevel},on:{click:function(n){return e.onSelect(t)}}},[e._v(e._s(t.name))]),n("p",[e._v("required level: "+e._s(t.requiredLevel))])])})),0)])},ve=[],he={name:"locations",props:{},methods:{onSelect:function(e){this.$store.commit("goToLocation",e.id)}},computed:{locations:function(){return this.$store.state.master.locations}}},be=he,ge=(n("a305"),Object(u["a"])(be,fe,ve,!1,null,"c51b1372",null)),ye=ge.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-menu",{staticClass:"game-menu"},[n("b-menu-list",[n("b-menu-item",{attrs:{active:"battle"==e.$store.state.currentScene,icon:"information-outline",label:"battle"},on:{click:function(t){e.$store.state.currentScene="battle"}}}),n("b-menu-item",{attrs:{active:"shop"==e.$store.state.currentScene,icon:"information-outline",label:"shop"},on:{click:function(t){e.$store.state.currentScene="shop"}}}),n("b-menu-item",{attrs:{active:"inventory"==e.$store.state.currentScene,icon:"information-outline",label:"inventory"},on:{click:function(t){e.$store.state.currentScene="inventory"}}}),n("b-menu-item",{attrs:{active:"locations"==e.$store.state.currentScene,icon:"information-outline",label:"locations"},on:{click:function(t){e.$store.state.currentScene="locations"}}})],1)],1)},we=[],Ce={data:function(){return{isActive:!0}}},ke=Ce,$e=(n("e104"),Object(u["a"])(ke,_e,we,!1,null,"7399785c",null)),xe=$e.exports,Le={name:"App",components:{TopInfo:d,Battle:F,Shop:te,Inventory:ie,DebugPanel:me,Locations:ye,Menu:xe},computed:{currentScene:function(){return this.$store.state.currentScene}},mounted:function(){this.$store.commit("start")}},Se=Le,Ee=(n("034f"),Object(u["a"])(Se,o,a,!1,null,null,null)),Ae=Ee.exports,Oe=n("289d"),je=(n("5abe"),n("99af"),n("7db0"),n("4160"),n("d3b7"),n("159b"),{expTable:[[10,2],[20,3],[40,4],[40,5],[65,6],[100,7],[130,8],[160,9],[210,10],[280,11],[400,12]],locations:[{id:1,name:"forest",requiredLevel:0,enemies:[1,2,3]},{id:2,name:"cementary",requiredLevel:5,enemies:[4,5,6]},{id:3,name:"hell",requiredLevel:10,enemies:[7,8,9]}],enemies:[{id:1,atk:5,hp:7,name:"bad gnome",image:"bad-gnome",exp:5,drop:{gold:5}},{id:2,atk:6,hp:9,name:"slime",image:"transparent-slime",exp:5,drop:{gold:8}},{id:3,atk:7,hp:12,name:"tree",image:"tree-face",exp:5,drop:{gold:10}},{id:4,atk:9,hp:20,name:"ghost",image:"ghost",exp:5,drop:{gold:15}},{id:5,atk:12,hp:25,name:"spectre",image:"spectre",exp:5,drop:{gold:18}},{id:6,atk:12,hp:25,name:"mummy",image:"mummy-head",exp:5,drop:{gold:18}},{id:7,atk:12,hp:25,name:"gooey demon",image:"gooey-daemon",exp:5,drop:{gold:18}},{id:8,atk:12,hp:25,name:"evil fork",image:"evil-fork",exp:5,drop:{gold:18}},{id:9,atk:12,hp:25,name:"imp",image:"imp-laugh",exp:5,drop:{gold:18}},{id:999,atk:12,hp:25,name:"evil book",image:"evil-book",exp:5,drop:{gold:18}}],weapons:[{id:1,name:"fist",atk:4,price:0},{id:2,name:"dagger",atk:10,price:20},{id:3,name:"sword",atk:16,price:40},{id:4,name:"big sword",atk:20,price:100},{id:5,name:"sword with teeth",atk:25,price:150},{id:6,name:"huge axe",atk:33,price:220},{id:7,name:"katana",atk:40,price:300}],miscItems:[{name:"small-potion",itemType:"heal",heal:10}]}),Te=n("2f62"),qe=n("5f35"),Pe=n.n(qe);function Me(e){var t,n,r;for(r=e.length-1;r>0;r--)t=Math.floor(Math.random()*(r+1)),n=e[r],e[r]=e[t],e[t]=n;return e}r["a"].use(Te["a"]);var Ne=new Te["a"].Store({state:{master:je,publicPath:Pe.a.publicPath,answers:[],player:{hp:100,gold:0,exp:0,level:1,nextLevelExp:void 0,equipped:{hand:void 0}},battleLog:[],currentEnemy:void 0,currentLoot:void 0,currentCard:void 0,currentLocation:1,isMyTurn:!0,isShowAnswer:!1,previousAnswer:{question:void 0,yourAnswer:void 0,correctAnswer:void 0,wasCorrect:void 0},currentScene:"battle",isDebug:!1},mutations:{onAnswer:function(e,t){console.log(t);var n=e.previousAnswer,r=e.currentCard,o=t.display==r.back;console.log("iscorrect: ".concat(o,", ").concat(t.display,", ").concat(r.back)),n.question=r.front,n.correctAnswer=r.back,n.yourAnswer=t,n.wasCorrect=o,e.isMyTurn?this.attack(e):this.enemyAttack(e)},start:function(e){e.player.equipped.hand=e.master.weapons[0],this.updatePlayerLevel(e),this.loadCards(e)},collectLoot:function(e){this.collectLoot(e)},buyWeapon:function(e,t){var n=e.master.weapons.find((function(e){return e.id==t}));console.log("bought weapon: weapon.name"),e.player.equipped.hand=n,e.player.gold-=n.price},debugAddGold:function(e,t){e.player.gold+=t},debugLevelUp:function(e){var t=e.player.level+1,n=e.master.expTable.find((function(e){return e[1]==t}))[0];e.player.exp=n,this.updatePlayerLevel(e)},goToLocation:function(e,t){this.collectLoot(e),e.currentLocation=t,Ne.approachNewEnemy(e),e.currentScene="battle"},nextTurn:function(e){e.isShowAnswer=!1,Ne.loadNewCard(e)}}});Ne.loadCards=function(e){var t=n("86ec");fetch("".concat(e.publicPath,"spanish200.csv")).then((function(e){return e.text()})).then((function(n){var r=t(n,{columns:!0,skip_empty_lines:!0});e.master.cards=r,console.log(e.master.cards),Ne.approachNewEnemy(e),Ne.loadNewCard(e)}))},Ne.enemyAttack=function(e){if(e.previousAnswer.wasCorrect)e.battleLog.push("you have dodged the attack!");else{var t=e.currentEnemy.atk;e.player.hp-=t,e.battleLog.push("enemy hits you for ".concat(t," dmg"))}e.isMyTurn=!e.isMyTurn,e.isShowAnswer=!0},Ne.updatePlayerLevel=function(e){var t=1;e.master.expTable.forEach((function(n){var r=n[0],o=e.player.exp;o>=r&&(t=n[1])})),e.player.level=t,e.player.nextLevelExp=e.master.expTable[t][0]},Ne.getRandomEnemy=function(e){var t=e.currentLocation,n=e.master.locations.find((function(e){return e.id==t})),r=n.enemies,o=r[r.length*Math.random()<<0],a=e.master.enemies.find((function(e){return e.id==o})),s=JSON.parse(JSON.stringify(a));return s.maxHp=s.hp,s},Ne.approachNewEnemy=function(e){e.battleLog.push("you have approached new enemy!"),e.isShowAnswer=!1,e.currentEnemy=Ne.getRandomEnemy(e),e.isMyTurn=!0,Ne.loadNewCard(e)},Ne.getRandomCard=function(e){var t=e.master.cards;return t[t.length*Math.random()<<0]},Ne.loadNewCard=function(e){var t=Ne.getRandomCard(e);e.currentCard=t,e.answers=[{display:t.back,isCorrect:!0},{display:Ne.getRandomCard(e).back,isCorrect:!1},{display:Ne.getRandomCard(e).back,isCorrect:!1},{display:Ne.getRandomCard(e).back,isCorrect:!1}],Me(e.answers)},Ne.onEnemyKilled=function(e){e.player.exp+=e.currentEnemy.exp,Ne.updatePlayerLevel(e),e.currentEnemy=void 0;var t=[{name:"gold",amount:10,asString:"10 gold"}];e.currentLoot=t;var n="you have found: ";t.forEach((function(e){n+=e.asString+", "})),e.battleLog.push(n)},Ne.attack=function(e){if(e.previousAnswer.wasCorrect){var t=e.player.equipped.hand;console.log(t);var n=t.atk;e.battleLog.push("you hit enemy for ".concat(n," damage")),e.currentEnemy.hp-=n}else e.battleLog.push("you have missed!");e.isShowAnswer=!0,e.isMyTurn=!e.isMyTurn,console.log(e.currentEnemy),e.currentEnemy.hp<=0&&Ne.onEnemyKilled(e)},Ne.collectLoot=function(e){e.currentLoot&&(e.player.gold+=10,e.currentLoot=void 0),Ne.approachNewEnemy(e)};var We=Ne;r["a"].use(Oe["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(Ae)},store:We}).$mount("#app")},"5f35":function(e,t){e.exports={publicPath:"/language-learning-rpg/"}},"6e56":function(e,t,n){},7431:function(e,t,n){},7512:function(e,t,n){},7921:function(e,t,n){},8678:function(e,t,n){},a09b:function(e,t,n){"use strict";var r=n("39c9"),o=n.n(r);o.a},a305:function(e,t,n){"use strict";var r=n("8678"),o=n.n(r);o.a},aaf9:function(e,t,n){"use strict";var r=n("7921"),o=n.n(r);o.a},ae64:function(e,t,n){"use strict";var r=n("3a16"),o=n.n(r);o.a},b3ab:function(e,t,n){"use strict";var r=n("6e56"),o=n.n(r);o.a},bed2:function(e,t,n){"use strict";var r=n("7512"),o=n.n(r);o.a},c4d6:function(e,t,n){"use strict";var r=n("304a"),o=n.n(r);o.a},cd75:function(e,t,n){"use strict";var r=n("15be"),o=n.n(r);o.a},e104:function(e,t,n){"use strict";var r=n("31b8"),o=n.n(r);o.a},e469:function(e,t,n){"use strict";var r=n("169c"),o=n.n(r);o.a},ecfe:function(e,t,n){}});
//# sourceMappingURL=app.249ba1eb.js.map