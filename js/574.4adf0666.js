"use strict";(self["webpackChunksa1"]=self["webpackChunksa1"]||[]).push([[574],{6574:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("el-button",{staticClass:"setB",attrs:{type:"primary",icon:" el-icon-s-operation"},on:{click:function(e){t.drawer=!0}}}),e("el-drawer",{attrs:{modal:!1,visible:t.drawer,"with-header":!1,size:t.drawerSize},on:{"update:visible":function(e){t.drawer=e}}},[e("ul",{staticClass:"menuUl"},[e("el-button",{staticStyle:{margin:"2vh 0"},attrs:{type:"danger"},on:{click:t.clearAllData}},[t._v("重置数据")]),t._l(t.routerList,(function(i){return e("li",{directives:[{name:"show",rawName:"v-show",value:i.isShow,expression:"item.isShow"}],key:i.id,class:t.activeShow==i.id?"aLi":"",on:{click:function(e){return t.SetMenu(i.id)}}},[t._v(" "+t._s(i.rContent)+" ")])}))],2)]),e("router-view")],1)},s=[],r=(i(560),i(6259)),n={name:"HomeView",data(){return{routerList:[{id:"/ql",rContent:"麒麟掉落计算",isShow:!0},{id:"/jg",rContent:"兵种相关计算",isShow:!0},{id:"/mb",rContent:"募兵计算",isShow:!0},{id:"/sz",rContent:"神主出战计算",isShow:!1}],drawer:!1,drawerSize:"",activeShow:"/ql"}},methods:{SetMenu(t){this.activeShow=t,this.$router.push({path:t})},clearAllData(){this.$confirm("此操作将清除所有数据，并恢复成初始状态, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{window.localStorage.clear(),this.$store.commit("CLEAR"),setTimeout((()=>{this.$router.go(0)}),500),this.$message({type:"success",message:"重置成功!"})})).catch((()=>{this.$message({type:"info",message:"已取消重置"})}))}},created(){let t=0|window.screen.availWidth;this.drawerSize=0<=t&&t<=1200?"40%":"25%",this.$router.push({path:"/pl"})},beforeCreate(){"undefined"!=(0,r.tv)("qlCalculateL").key&&this.$store.commit("SET_Ql_Calculate",(0,r.tv)("qlCalculateL")),"undefined"!=(0,r.tv)("JGDataS").key&&this.$store.commit("Set_JG_Data",(0,r.tv)("JGDataS"))}},o=n,l=i(1001),c=(0,l.Z)(o,a,s,!1,null,null,null),u=c.exports}}]);