(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Developer"],{3408:function(t,e,i){},"3ccb":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-card",{attrs:{"max-width":"740px"}},[a("v-app-bar",{attrs:{flat:"",color:"indigo"}},[a("v-btn",{attrs:{icon:"",to:"/"}},[a("v-icon",{attrs:{color:"white",size:"lg"}},[t._v(" mdi-arrow-left ")])],1),a("v-app-bar-title",{staticStyle:{color:"white"}},[t._v("Developer")])],1),a("v-card-title",[a("v-avatar",{attrs:{size:"100"}},[a("img",{attrs:{alt:"user",src:i("a87b")}})]),t._v("Danver Kanyemba ")],1),a("v-card-subtitle",{staticStyle:{"padding-top":"20px"}},[t._v(" Student at Bindura University currently studying IT specialising in Software engineering. Skilled in web application development, Java Desktop Application development and User interface Design. Posses a knock for taking part in engineering involving innovative technology. "),a("br"),a("strong",[t._v("Technology skills: ")]),t._v("HTML, css, JavaScript, Java, Typescript. "),a("br"),a("strong",[t._v("Frameworks skills: ")]),t._v("Angular, Vue js and Laravel ")]),a("v-card-text",[a("div",{staticClass:"font-weight-bold ml-8 mb-2"},[t._v("Today")])])],1)],1)],1)},s=[],n={name:"Developer"},r=n,l=i("2877"),o=i("6544"),c=i.n(o),d=i("40dc"),p=i("3206"),v=i("80d2"),h=i("0246"),u=Object(p["a"])("VAppBar","v-app-bar-title","v-app-bar"),f=u.extend().extend({name:"v-app-bar-title",data:function(){return{contentWidth:0,left:0,width:0}},watch:{"$vuetify.breakpoint.width":"updateDimensions"},computed:{styles:function(){if(!this.contentWidth)return{};var t=this.width,e=this.contentWidth,i=Object(h["easeInOutCubic"])(Math.min(1,1.5*this.VAppBar.scrollRatio));return{width:Object(v["f"])(t+(e-t)*i),visibility:this.VAppBar.scrollRatio?"visible":"hidden"}}},mounted:function(){this.updateDimensions()},methods:{updateDimensions:function(){var t=this.$refs.placeholder.getBoundingClientRect();this.width=t.width,this.left=t.left,this.contentWidth=this.$refs.content.scrollWidth}},render:function(t){return t("div",{class:"v-toolbar__title v-app-bar-title"},[t("div",{class:"v-app-bar-title__content",style:this.styles,ref:"content"},[this.$slots.default]),t("div",{class:"v-app-bar-title__placeholder",style:{visibility:this.VAppBar.scrollRatio?"hidden":"visible"},ref:"placeholder"},[this.$slots.default])])}}),b=i("5530"),g=(i("a9e3"),i("3408"),i("a9ad")),m=i("24b2"),w=i("a236"),y=i("58df"),_=Object(y["a"])(g["a"],m["a"],w["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(b["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(b["a"])({height:Object(v["f"])(this.size),minWidth:Object(v["f"])(this.size),width:Object(v["f"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),V=i("8336"),j=i("b0af"),k=i("99d9"),B=i("a523"),C=i("132d"),O=i("0fd9"),x=Object(l["a"])(r,a,s,!1,null,null,null);e["default"]=x.exports;c()(x,{VAppBar:d["a"],VAppBarTitle:f,VAvatar:_,VBtn:V["a"],VCard:j["a"],VCardSubtitle:k["b"],VCardText:k["c"],VCardTitle:k["d"],VContainer:B["a"],VIcon:C["a"],VRow:O["a"]})},a87b:function(t,e,i){t.exports=i.p+"img/danver.6812938f.jpg"}}]);