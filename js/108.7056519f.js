"use strict";(self["webpackChunksa1"]=self["webpackChunksa1"]||[]).push([[108],{9059:function(t,a,e){e.d(a,{Z:function(){return n}});var r=function(){var t=this,a=t._self._c;return void 0!=this.armDataS.iArmData?a("div",{staticClass:"DetailsOfArms"},[a("el-dialog",{attrs:{title:t.armsData.armName,visible:t.isShow,width:"80%",center:""},on:{"update:visible":function(a){t.isShow=a},close:t.clickIsShow}},[a("el-form",{attrs:{"label-position":"right","label-width":"20vw",model:t.armsData}},[a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:[1].includes(t.armsData.aId),expression:"[1].includes(armsData.aId)"}],staticClass:"cfB",attrs:{label:"觉醒"}},[a("el-rate",{attrs:{"show-text":"",max:3,texts:t.textList},model:{value:t.armsData.iArmData.arousalLevel,callback:function(a){t.$set(t.armsData.iArmData,"arousalLevel",a)},expression:"armsData.iArmData.arousalLevel"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:[1,3,4,5].includes(t.armsData.aId),expression:"[1, 3, 4, 5].includes(armsData.aId)"}],attrs:{label:"攻击"}},[a("el-input",{attrs:{maxlength:10},model:{value:t.armsData.iArmData.atk,callback:function(a){t.$set(t.armsData.iArmData,"atk",t._n(a))},expression:"armsData.iArmData.atk"}})],1),a("el-form-item",{attrs:{label:"生命"}},[a("el-input",{attrs:{maxlength:10},model:{value:t.armsData.iArmData.hp,callback:function(a){t.$set(t.armsData.iArmData,"hp",t._n(a))},expression:"armsData.iArmData.hp"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:[4].includes(t.armsData.aId),expression:"[4].includes(armsData.aId)"}],attrs:{label:"防御"}},[a("el-input",{model:{value:t.armsData.iArmData.def,callback:function(a){t.$set(t.armsData.iArmData,"def",t._n(a))},expression:"armsData.iArmData.def"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:[1,3,4,5].includes(t.armsData.aId),expression:"[1, 3, 4, 5].includes(armsData.aId)"}],attrs:{label:"武器"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.QWChang},model:{value:t.armsData.iArmData.weaponry,callback:function(a){t.$set(t.armsData.iArmData,"weaponry",a)},expression:"armsData.iArmData.weaponry"}},t._l(t.weaponryList[(t.armsData.aId+"").split("")[0]-1].data,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),[1,2,21,22].includes(t.armsData.aId)?a("el-form-item",{attrs:{label:"防具"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.armsData.iArmData.armor,callback:function(a){t.$set(t.armsData.iArmData,"armor",a)},expression:"armsData.iArmData.armor"}},t._l(t.armorList[(t.armsData.aId+"").split("")[0]-1].data,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1):t._e(),[4,5].includes(t.armsData.aId)?a("el-form-item",{attrs:{label:"防具"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.armsData.iArmData.armor,callback:function(a){t.$set(t.armsData.iArmData,"armor",a)},expression:"armsData.iArmData.armor"}},t._l(t.armorList[(t.armsData.aId+"").split("")[0]-2].data,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1):t._e()],1)],1)],1):t._e()},i=[],m={name:"DetailsOfArms",props:["bIsShow","armDataS"],data(){return{isShow:this.bIsShow,armsData:this.armDataS,textList:["简单","完美","极限"],weaponryList:[{armId:"Q",data:[{id:"Qw3",name:"短木剑"},{id:"Qw1",name:"兽王剑"},{id:"Qw2",name:"石中剑"},{id:"Qw4",name:"王权剑60+"}]},{armId:"Z",data:[{id:"Zw1",name:"其他"}]},{armId:"ZJ",data:[{id:"ZJw1",name:"加特林"},{id:"ZJw2",name:"迫击炮"}]},{armId:"DC",data:[{id:"DCw1",name:"电磁步枪"}]},{armId:"YH",data:[{id:"YHw1",name:"星际导弹"}]}],armorList:[{armId:"Q",data:[{id:"Qa1",name:"军旗-杀"},{id:"Qa2",name:"军旗-风"},{id:"Qa3",name:"其他"}]},{armId:"Z",data:[{id:"Za1",name:"弑神号角"},{id:"Za2",name:"其他"}]},{armId:"DC",data:[{id:"DCa1",name:"纳米甲"},{id:"DCa2",name:"其他"}]},{armId:"YH",data:[{id:"YHa1",name:"原子甲"},{id:"YHa2",name:"其他"}]}]}},methods:{clickIsShow(t){this.isShow=!this.isShow,this.$emit("setShow",!1),this.$emit("callData",this.armsData)},QWChang(t){this.$emit("QWChange",t)}},watch:{bIsShow(t,a){this.isShow=t},armDataS(t){this.armsData=t}}},s=m,l=e(1001),o=(0,l.Z)(s,r,i,!1,null,null,null),n=o.exports},3108:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});var r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"mb"},[a("div",{staticClass:"top"},[t._v(" 募兵计算 ")]),a("el-tooltip",{attrs:{content:"当前总加成",placement:"top"}},[a("el-form",{attrs:{"label-width":"50vw"}},[a("el-form-item",{attrs:{label:"当前总加成:",prop:"TotalAdditionRate"}},[a("div",{staticClass:"showALL"},[t._v(t._s(t.RecruitmentData.TotalAdditionRate))])])],1)],1),a("el-collapse",{model:{value:t.activeNames,callback:function(a){t.activeNames=a},expression:"activeNames"}},[a("el-collapse-item",{staticClass:"centerBox",attrs:{name:"1"}},[a("template",{slot:"title"},[a("div",[t._v("需要填写的选项")])]),void 0!=t.RecruitmentData?a("el-form",{ref:"RecRulS",attrs:{model:t.RecruitmentData,"label-width":"30vw","status-icon":"",rules:t.RecRulS}},[a("el-tooltip",{attrs:{content:"募兵令数量",placement:"top"}},[a("el-form-item",{attrs:{label:"募兵令:",prop:"DraftOrder"}},[a("el-input",{attrs:{type:"number"},on:{input:t.setRate},model:{value:t.RecruitmentData.DraftOrder,callback:function(a){t.$set(t.RecruitmentData,"DraftOrder",t._n(a))},expression:"RecruitmentData.DraftOrder"}})],1)],1),a("el-tooltip",{attrs:{content:"旧日-无光层(10m-100m)-幻觉草药数量",placement:"top"}},[a("el-form-item",{attrs:{label:"幻觉草药:",prop:"herb"}},[a("el-input",{attrs:{type:"number"},on:{input:t.setRate},model:{value:t.RecruitmentData.herb,callback:function(a){t.$set(t.RecruitmentData,"herb",t._n(a))},expression:"RecruitmentData.herb"}})],1)],1),a("el-tooltip",{attrs:{content:"旧日-至暗层(100m-1000m)-邪密暗铃数量",placement:"top"}},[a("el-form-item",{attrs:{label:"邪密暗铃:",prop:"DarkBell"}},[a("el-input",{attrs:{type:"number"},on:{input:t.setRate},model:{value:t.RecruitmentData.DarkBell,callback:function(a){t.$set(t.RecruitmentData,"DarkBell",t._n(a))},expression:"RecruitmentData.DarkBell"}})],1)],1),a("el-tooltip",{attrs:{content:"募兵旧日-深渊层(1000m-1wm)-海界石刻数量",placement:"top"}},[a("el-form-item",{attrs:{label:"海界石刻:",prop:"stoneCarving"}},[a("el-input",{attrs:{type:"number"},on:{input:t.setRate},model:{value:t.RecruitmentData.stoneCarving,callback:function(a){t.$set(t.RecruitmentData,"stoneCarving",t._n(a))},expression:"RecruitmentData.stoneCarving"}})],1)],1),a("el-tooltip",{attrs:{content:"扩建-小镇数量(募兵有效加成最高200个小镇)",placement:"top"}},[a("el-form-item",{attrs:{label:"小镇数量:",prop:"cities"}},[a("el-input",{attrs:{type:"number"},on:{input:t.setRate},model:{value:t.RecruitmentData.cities,callback:function(a){t.$set(t.RecruitmentData,"cities",t._n(a))},expression:"RecruitmentData.cities"}})],1)],1),a("el-tooltip",{attrs:{content:"产业-蒸汽工厂等级",placement:"top"}},[a("el-form-item",{attrs:{label:"蒸汽工厂:",prop:"factory"}},[a("el-input",{attrs:{type:"number"},on:{input:t.setRate},model:{value:t.RecruitmentData.factory,callback:function(a){t.$set(t.RecruitmentData,"factory",t._n(a))},expression:"RecruitmentData.factory"}})],1)],1)],1):t._e()],2)],1),a("el-table",{staticClass:"tB",staticStyle:{width:"100%"},attrs:{data:t.ZMData,height:"100vh"}},t._l(t.RecColList,(function(e){return a("el-table-column",{key:e.aId,attrs:{align:"center",prop:e.id,label:e.labContent,"show-overflow-tooltip":""},scopedSlots:t._u([{key:"header",fn:function(r){return["customTRecruit"==e.id?a("el-tooltip",{attrs:{content:e.tipContent,placement:"top"}},[a("el-form",{ref:"RecRulS1",refInFor:!0,attrs:{model:t.customTData,"label-width":"0vw","status-icon":"",rules:t.RecRulS1}},[a("el-form-item",{attrs:{label:"",prop:"customT"}},[a("el-input",{attrs:{type:"number",placeholder:"自定义招募时间(分钟)"},on:{input:t.setCustomT},model:{value:t.customTData.customT,callback:function(a){t.$set(t.customTData,"customT",t._n(a))},expression:"customTData.customT"}})],1)],1)],1):a("el-tooltip",{attrs:{content:e.tipContent,placement:"top"}},[a("div",[t._v(t._s(e.labContent))])])]}}],null,!0)})})),1)],1)},i=[],m=e(9059),s=(e(9094),{name:"SAjg",components:{DetailsOfArms:m.Z},data(){return{RecruitmentData:{DraftOrder:0,herb:0,DarkBell:0,stoneCarving:0,cities:0,factory:0,TotalAdditionRate:"100%"},customTData:{customT:0},RecColList:[{id:"armName",tipContent:"兵种名",labContent:"兵种名"},{id:"initTime",tipContent:"当前兵种的初始招募时间",labContent:"初始时间(s)"},{id:"addTime",tipContent:"当前兵种加成后的招募时间",labContent:"加成时间(s)"},{id:"oneHT",tipContent:"1小时最大能招募的数量",labContent:"1小时招募数量"},{id:"customTRecruit",tipContent:"自定义时间(单位min|分钟),最大自定义时间为1440分钟",labContent:"自定义时间(分钟)"}],ZMData:[],ZMOldData:[{Id:"WL",armName:"未来战士",initTime:10,addTime:10,oneHT:0,customTRecruit:0},{Id:"YH",armName:"宇航兵",initTime:8,addTime:8,oneHT:0,customTRecruit:0},{Id:"QB",armName:"轻步兵",initTime:2,addTime:2,oneHT:0,customTRecruit:0},{Id:"DD",armName:"刀盾兵",initTime:2.5,addTime:2.5,oneHT:0,customTRecruit:0},{Id:"CQ",armName:"长枪兵",initTime:3,addTime:3,oneHT:0,customTRecruit:0},{Id:"ZJ",armName:"装甲兵",initTime:5.5,addTime:5.5,oneHT:0,customTRecruit:0},{Id:"DC",armName:"电磁兵",initTime:6,addTime:6,oneHT:0,customTRecruit:0},{Id:"ZD",armName:"炸弹兵",initTime:2,addTime:2,oneHT:0,customTRecruit:0},{Id:"ZQ",armName:"重骑兵",initTime:4,addTime:4,oneHT:0,customTRecruit:0},{Id:"MS",armName:"魔术师",initTime:3.5,addTime:3.5,oneHT:0,customTRecruit:0},{Id:"ZJB",armName:"重甲兵",initTime:3.5,addTime:3.5,oneHT:0,customTRecruit:0},{Id:"MD",armName:"末代骑士",initTime:20,addTime:20,oneHT:0,customTRecruit:0},{Id:"LQ",armName:"龙骑兵",initTime:3,addTime:3,oneHT:0,customTRecruit:0},{Id:"TZ",armName:"特种兵",initTime:5,addTime:5,oneHT:0,customTRecruit:0},{Id:"TJ",armName:"藤甲兵",initTime:1,addTime:1,oneHT:0,customTRecruit:0},{Id:"GJ",armName:"工具人1-5",initTime:1,addTime:1,oneHT:0,customTRecruit:0}],activeNames:[],RecRulS:{DraftOrder:[{validator:(t,a,e)=>a||0===a?a<0?(setTimeout((()=>{this.RecruitmentData.DraftOrder=0,this.setRate()}),1e3),e(new Error("募兵令不能为负数"))):a>2e3?(setTimeout((()=>{this.RecruitmentData.DraftOrder=2e3,this.setRate()}),1e3),e(new Error("当前募兵令上限为2000"))):e():e(new Error("募兵令不能为空")),trigger:"change"}],herb:[{validator:(t,a,e)=>a||0===a?a<0?(setTimeout((()=>{this.RecruitmentData.herb=0,this.setRate()}),1e3),e(new Error("幻觉草药不能为负数"))):a>300?(setTimeout((()=>{this.RecruitmentData.herb=300,this.setRate()}),1e3),e(new Error("当前幻觉草药上限为300"))):e():e(new Error("幻觉草药不能为空")),trigger:"change"}],DarkBell:[{validator:(t,a,e)=>a||0===a?a<0?(setTimeout((()=>{this.RecruitmentData.DarkBell=0,this.setRate()}),1e3),e(new Error("邪密暗铃不能为负数"))):a>200?(setTimeout((()=>{this.RecruitmentData.DarkBell=200,this.setRate()}),1e3),e(new Error("当前邪密暗铃上限为200"))):e():e(new Error("邪密暗铃不能为空")),trigger:"change"}],stoneCarving:[{validator:(t,a,e)=>a||0===a?a<0?(setTimeout((()=>{this.RecruitmentData.stoneCarving=0,this.setRate()}),1e3),e(new Error("海界石刻不能为负数"))):a>100?(setTimeout((()=>{this.RecruitmentData.stoneCarving=100,this.setRate()}),1e3),e(new Error("当前海界石刻上限为100"))):e():e(new Error("海界石刻不能为空")),trigger:"change"}],cities:[{validator:(t,a,e)=>a||0===a?a<0?(setTimeout((()=>{this.RecruitmentData.cities=0,this.setRate()}),1e3),e(new Error("小镇不能为负数"))):a>200?(setTimeout((()=>{this.RecruitmentData.cities=200,this.setRate()}),1e3),e(new Error("当前小镇加成上限为200"))):e():e(new Error("小镇不能为空")),trigger:"change"}],factory:[{validator:(t,a,e)=>a||0===a?a<0?(setTimeout((()=>{this.RecruitmentData.factory=0,this.setRate()}),1e3),e(new Error("蒸汽工厂不能为负数"))):a>100?(setTimeout((()=>{this.RecruitmentData.factory=100,this.setRate()}),1e3),e(new Error("当前蒸汽工厂等级上限为100"))):e():e(new Error("蒸汽工厂不能为空")),trigger:"change"}]},RecRulS1:{customT:[{validator:(t,a,e)=>a||0===a?a<0?(setTimeout((()=>{this.customTData.customT=0,this.setCustomT()}),1e3),e(new Error("自定义时间不能为负数"))):a>1440?(setTimeout((()=>{this.customTData.customT=1440,this.setCustomT()}),1e3),e(new Error("当前自定义时间最大为1440分钟"))):e():e(new Error("自定义时间不能为空")),trigger:"change"}]}}},methods:{setRate(){let t=0;t=this.RecruitmentData.DraftOrder.mul(1.5)+this.RecruitmentData.herb+this.RecruitmentData.DarkBell.mul(2)+this.RecruitmentData.stoneCarving.mul(8)+this.RecruitmentData.cities.mul(.5)+this.RecruitmentData.factory+100,this.RecruitmentData.TotalAdditionRate=t+"%",this.ZMData.map(((a,e)=>(a.addTime=a.initTime.div(t.div(100)),a.oneHT=Math.ceil(Number(3600).div(a.addTime)),a.customTRecruit=Math.ceil(this.customTData.customT.div(60).mul(a.oneHT)),a))),this.savaData()},setCustomT(){this.ZMData.map(((t,a)=>(t.customTRecruit=Math.ceil(this.customTData.customT.div(60).mul(t.oneHT)),t))),this.savaData()}},mounted(){this.ZMData=JSON.parse(JSON.stringify(this.ZMOldData));let t=this.$store.state.MBDataS;null!=t&&(this.RecruitmentData=this.$store.state.MBDataS.mbForm,this.customTData=this.$store.state.MBDataS.mbCusForm,this.ZMData=this.$store.state.MBDataS.mbZMData)},beforeUpdate(){this.$store.commit("Set_MB_Data",{mbForm:this.RecruitmentData,mbCusForm:this.customTData,mbZMData:this.ZMData})}}),l=s,o=e(1001),n=(0,o.Z)(l,r,i,!1,null,null,null),u=n.exports},9094:function(t,a){let e={Qw3:()=>0,Zw1:()=>0,Qa3:()=>0,Za2:()=>0,awakeningCalculate:t=>{let a=0;return 1==t.aId&&(a=Number(t.iArmData.atk).mul(.1).mul(Number(t.iArmData.arousalLevel).mul(50).mul(.002))),a},Qw1:()=>1,Qw2:t=>{let a="";return a=Number(1).add(t.iArmData.atk.mul(.1).mul(.04)).add(Math.floor(Number(t.iArmData.hp).div(900))),a},Qw4:t=>{let a="";return a=Number(1).add(Math.floor(Number(t.iArmData.hp).div(1e3))),a},Qa1:t=>{let a="";return a=Number(1).add(Math.floor(Number(t.iArmData.hp).div(Number(400)))),a},Qa2:t=>{let a="";return a=Number(1).add(Math.floor(Number(t.iArmData.hp).div(Number(1200)))),a},Za1:t=>{let a="";return a=1==t.isFive?Number(1).add(Math.floor(Number(t.iArmData.hp).div(Number(1800)))).mul(5):Number(1).add(Math.floor(Number(t.iArmData.hp).div(Number(1800)))).mul(1),a},ZJw1:t=>{let a="";return a=Number(t.upperLimitValue).mul(.3)>Number(t.foeDef)?Number(Number(t.upperLimitValue).mul(.3).sub(t.foeDef)).mul(Math.floor(Number(t.iArmData.hp).div(1300)).mul(.3).add(1)):Number(Number(t.upperLimitValue).mul(.3).mul(.1)).mul(Math.floor(Number(t.iArmData.hp).div(1300)).mul(.3).add(1)),a},ZJw2:t=>{let a="";return a=Number(t.upperLimitValue).mul(1.2).mul(.9)>Number(t.foeDef)?Number(Number(t.upperLimitValue).mul(1.2).sub(t.foeDef)).mul(Math.floor(Number(t.iArmData.hp).div(1300)).mul(.3).add(1)):Number(t.iArmData.atk).mul(Number(t.mulriple)).mul(.1).add(Number(t.iArmData.atk).div(90).mul(Number(1.2).mul(Math.floor(Number(t.iArmData.hp).div(1300)).mul(.3)).add(1))),a},DCw1:t=>{let a="",e=0;return e="DCa1"==t.iArmData.armor?Math.floor(Number(t.iArmData.def).mul(Math.floor(Number(t.iArmData.hp)/550).mul(.3).add(2))):0,a=Number(t.upperLimitValue).mul(.32).mul(.9)<Number(t.foeDef)?Math.floor(Number(t.upperLimitValue).mul(.32).mul(.681695).mul(5).add(e)):Math.floor(Number(Number(t.upperLimitValue).add(e.sub(t.iArmData.def)).mul(.32)).mul(Math.floor(Number(t.iArmData.hp).div(550)).mul(.3).add(1)).mul(5)),a},YHw1:t=>{let a="";if("YHa1"==t.iArmData.armor){let e=Number(t.iArmData.atk).mul(.1).mul(Math.floor(Number(t.iArmData.hp).div(800))).mul(.15).mul(10);a=Number(t.upperLimitValue).add(e).mul(.07).mul(Math.floor(Number(t.iArmData.hp).div(1e3)).mul(.3).add(1))}else a=Number(t.upperLimitValue).mul(.07).mul(Math.floor(Number(t.iArmData.hp).div(1e3)).mul(.3).add(1));return a}};a.Z=e}}]);