"use strict";(self["webpackChunksa1"]=self["webpackChunksa1"]||[]).push([[927],{927:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("el-button",{staticClass:"setB",attrs:{type:"primary",icon:" el-icon-s-operation"},on:{click:function(t){e.drawer=!0}}}),t("el-drawer",{attrs:{modal:!1,visible:e.drawer,"with-header":!1,size:"40%"},on:{"update:visible":function(t){e.drawer=t}}},[t("ul",{staticClass:"menuUl"},[t("li",{on:{click:function(t){return e.SetMenu("/ql")}}},[e._v("麒麟科技计算")]),t("li",{on:{click:function(t){return e.SetMenu("/sz")}}},[e._v("神主出战计算")]),t("li")])]),t("router-view")],1)},a=[],l=(r(560),r(6259)),i={name:"HomeView",data(){return{drawer:!1}},methods:{SetMenu(e){this.$router.push({path:e})}},created(){this.$router.push({path:"/pl"})},beforeCreate(){"undefined"!=(0,l.tv)("qlCalculateL").key&&this.$store.commit("SET_Ql_Calculate",(0,l.tv)("qlCalculateL"))}},u=i,s=r(1001),c=(0,s.Z)(u,n,a,!1,null,null,null),o=c.exports}}]);