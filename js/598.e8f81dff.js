"use strict";(self["webpackChunksa1"]=self["webpackChunksa1"]||[]).push([[598],{5598:function(e,r,t){t.r(r),t.d(r,{default:function(){return n}});var l=function(){var e=this,r=e._self._c;return r("div",{staticClass:"ql"},[r("div",{staticClass:"top"},[e._v(" 麒麟丹掉落所需科技计算 ")]),r("el-form",{ref:"qlRuleForm",staticClass:"demo-ruleForm",attrs:{model:e.qlRuleForm,"status-icon":"",rules:e.rules,"label-width":"15vw"}},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"你想要获得的麒麟数量",placement:"top"}},[r("el-form-item",{attrs:{label:"预期:",prop:"expect"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入预期麒麟数"},model:{value:e.qlRuleForm.expect,callback:function(r){e.$set(e.qlRuleForm,"expect",e._n(r))},expression:"qlRuleForm.expect"}})],1)],1),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"初始为1,按战斗后杀戮值每2000加1,上限5(暂时)",placement:"top"}},[r("el-form-item",{attrs:{label:"基数:",prop:"cardinal"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入麒麟基数"},model:{value:e.qlRuleForm.cardinal,callback:function(r){e.$set(e.qlRuleForm,"cardinal",e._n(r))},expression:"qlRuleForm.cardinal"}})],1)],1),r("el-form-item",{attrs:{label:"虎符:",prop:"huFu"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入虎符数量"},model:{value:e.qlRuleForm.huFu,callback:function(r){e.$set(e.qlRuleForm,"huFu",e._n(r))},expression:"qlRuleForm.huFu"}})],1),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"所有战斗奖励源阵的百分比,示例:如加成4.5%直接输入4.5",placement:"top"}},[r("el-form-item",{attrs:{label:"源阵:",prop:"Source"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入源阵加成%"},model:{value:e.qlRuleForm.Source,callback:function(r){e.$set(e.qlRuleForm,"Source",e._n(r))},expression:"qlRuleForm.Source"}})],1)],1),r("el-form-item",{staticClass:"clearM"},[r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("qlRuleForm")}}},[e._v("计算")]),r("el-button",{on:{click:function(r){return e.resetForm("qlRuleForm")}}},[e._v("重置")])],1)],1)],1)},u=[],o=(t(560),{name:"SAql",data(){return{qlRuleForm:{expect:"",cardinal:"",huFu:"",Source:""},rules:{expect:[{validator:(e,r,t)=>{let l=[],u=0|(r+"").split("").length;if(!r)return t(new Error("预期麒麟数量不能为空"));if(r<0)return setTimeout((()=>{this.qlRuleForm.expect=0}),1e3),t(new Error("预期麒麟数量不能为负数"));if(u>=10){for(let e=0;e<10;e++)l.push((r+"").split("")[e]);return this.qlRuleForm.expect=Number(l.join("")),t(new Error("输入最大字符为10位"))}return t()},trigger:"change"}],cardinal:[{validator:(e,r,t)=>r?r<0?(setTimeout((()=>{this.qlRuleForm.cardinal=0}),1e3),t(new Error("麒麟基数不能为负数"))):r>5?(setTimeout((()=>{this.qlRuleForm.cardinal=5}),1e3),t(new Error("麒麟基数为1-5"))):t():t(new Error("麒麟基数不能为空")),trigger:"change"}],huFu:[{validator:(e,r,t)=>r||0===r?r<0?(setTimeout((()=>{this.qlRuleForm.huFu=0}),1e3),t(new Error("虎符范围为0-10000"))):r>1e4?(setTimeout((()=>{this.qlRuleForm.huFu=1e4}),1e3),t(new Error("虎符范围为0-10000"))):t():t(new Error("虎符不能为空")),trigger:"change"}],Source:[{validator:(e,r,t)=>{let l=[],u=0|(r+"").split("").length;if(!r&&0!==r)return t(new Error("源阵加成不能为空"));if(r<0)return setTimeout((()=>{this.qlRuleForm.Source=0}),1e3),t(new Error("源阵加成最小值为0"));if(u>=10){for(let e=0;e<10;e++)l.push((r+"").split("")[e]);return this.qlRuleForm.Source=Number(l.join("")),t(new Error("输入最大字符为10位"))}return t()},trigger:"change"}]}}},methods:{openTip(e){this.$notify({title:"结果",dangerouslyUseHTMLString:!0,message:`您当前想获得<span class='rs'> ${e.num} </span>颗麒麟,需要神域科技等级为<span class='rs'> ${e.class} </span>级 `,type:"success",duration:1e4})},submitForm(e){this.$refs[e].validate((e=>{if(!e)return!1;{let e=0,r=0,t=0,l=0;this.$store.commit("SET_Ql_Calculate",this.qlRuleForm),e=Number(this.qlRuleForm.huFu.mul(.05).div(100).add(1)),r=Number(this.qlRuleForm.Source.div(100).add(1)),t=Number(this.qlRuleForm.cardinal.mul(e.add(r))),l=Number(Number(this.qlRuleForm.expect).div(3).sub(1));let u={};u.num=this.qlRuleForm.expect,u.class=Math.round(l.div(e).div(r).div(Number(.05)).mul(100)).div(100),this.openTip(u)}}))},resetForm(e){this.$refs[e].resetFields()}},mounted(){let e=this.$store.state.qlCalculate;void 0!=e&&(this.qlRuleForm=e)}}),s=o,i=t(1001),a=(0,i.Z)(s,l,u,!1,null,null,null),n=a.exports}}]);