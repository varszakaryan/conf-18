(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],f=0,v=[];f<o.length;f++)r=o[f],n[r]&&v.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0489":function(t,e,a){"use strict";var s=a("c247"),n=a.n(s);n.a},2360:function(t,e,a){"use strict";var s=a("d57d"),n=a.n(s);n.a},"24f4":function(t,e,a){"use strict";var s=a("a125"),n=a.n(s);n.a},"25dc":function(t,e,a){},2675:function(t,e,a){},"2aab":function(t,e,a){"use strict";var s=a("25dc"),n=a.n(s);n.a},"2c31":function(t,e,a){"use strict";var s=a("d383"),n=a.n(s);n.a},3084:function(t,e,a){"use strict";var s=a("85aa"),n=a.n(s);n.a},"38f0":function(t,e,a){"use strict";var s=a("39f2"),n=a.n(s);e["default"]=n.a},"39f2":function(t,e){},"3f79":function(t,e,a){"use strict";var s=a("d60e"),n=a("38f0"),i=(a("24f4"),a("2877")),r=Object(i["a"])(n["default"],s["a"],s["b"],!1,null,"5c2a6a5c",null);r.options.__file="Faq.vue",e["default"]=r.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d"),a("357d"),a("2aeb8");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("AppHeader"),a("Intro"),a("About"),a("Faq"),a("Quiz"),a("AppFooter")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Header",class:{"-sticked":t.scrollPos>20}},[a("div",{staticClass:"Container HeaderContainer"},[a("div",{staticClass:"LogoContainer"},[a("Logo")],1),t._m(0)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"Navigation"},[a("a",{staticClass:"Item",attrs:{href:"#About"}},[t._v("About")]),a("a",{staticClass:"Item",attrs:{href:"#Schedule"}},[t._v("Schedule")]),a("a",{staticClass:"Item",attrs:{href:"#Speakers"}},[t._v("Speakers")]),a("a",{staticClass:"Item",attrs:{href:"#Sponsors"}},[t._v("Sponsors")]),a("a",{staticClass:"Item",attrs:{href:"#Team"}},[t._v("Team")]),a("a",{staticClass:"Item",attrs:{href:"#Location"}},[t._v("Location")]),a("a",{staticClass:"Item",attrs:{href:"#Faq"}},[t._v("Faq")]),a("a",{staticClass:"Item",attrs:{href:"#Quizz"}},[t._v("Quizz")]),a("a",{staticClass:"Item RequestInvite",attrs:{href:"",target:"_blank"}},[t._v("Request an Invite")])])}],c=a("0f32"),l=a.n(c),u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Logo"},[s("img",{attrs:{src:a("e2e0")}})])}],v={},d=v,h=(a("aca3"),a("2877")),p=Object(h["a"])(d,u,f,!1,null,"fd5eaa74",null);p.options.__file="Logo.vue";var _=p.exports,m={components:{Logo:_},data:function(){return{scrollPos:window.scrollY}},methods:{handleScroll:function(){this.scrollPos=window.scrollY}},created:function(){window.addEventListener("scroll",l()(this.handleScroll,100))},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},C=m,g=(a("2360"),Object(h["a"])(C,r,o,!1,null,"2880f06f",null));g.options.__file="Header.vue";var b=g.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"Intro",attrs:{id:"Intro"}},[a("div",{staticClass:"Container"},[a("h1",{staticClass:"Title"},[t._v("JavaScript Conference "),a("br"),t._v(" Armenia")]),a("h3",{staticClass:"Subtitle"},[t._v("November 3, 2018")]),a("a",{staticClass:"Button -default",attrs:{href:""}},[t._v("\n      Request an Invite\n    ")])]),a("div",{staticClass:"IntroBgMain"}),a("div",{staticClass:"IntroBgLeft"}),a("div",{staticClass:"IntroBgRight"})])}],S={},A=S,k=(a("2c31"),Object(h["a"])(A,w,I,!1,null,"7f639853",null));k.options.__file="Intro.vue";var y=k.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"About",attrs:{id:"About"}},[a("div",{staticClass:"Container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col col-md-3 offset-md-1"},[a("Ninja")],1),t._m(0)])])])},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col col-md-7 offset-md-1"},[a("h1",{staticClass:"Title"},[t._v("What Is")]),a("h3",{staticClass:"Subtitle"},[t._v("JavaScript Conference Armenia?")]),a("h4",{staticClass:"Answer"},[t._v("Where JavaScript Ninjas meet!")]),a("p",{staticClass:"Description"},[t._v("\n          JavaScript Conference provides a platform for developers to share their ideas,\n          experiences and knowledge. Come and learn about the modern\n          development ecosystem by attending talks and workshops.\n          Network with other developers who love what they do.\n        ")])])}],j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Ninja"},[a("div",{staticClass:"NinjaImage"}),a("div",{staticClass:"NinjaShadow"})])}],x={},O=x,N=(a("3084"),Object(h["a"])(O,j,Q,!1,null,"bd72963e",null));N.options.__file="Ninja.vue";var B=N.exports,J={components:{Ninja:B}},L=J,$=(a("0489"),Object(h["a"])(L,T,E,!1,null,"35d3ac55",null));$.options.__file="About.vue";var F=$.exports,W=a("3f79"),z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Quiz"},[a("div",{staticClass:"Context"},[a("div",{staticClass:"Title"},[t._v("\n      QUIZ\n    ")]),a("div",{staticClass:"Description"},[t._v("\n      PARTICIPATE IN QUIZZES, WIN BADGES, BECOME A TRUE JAVASCRIPT NI\n    ")]),a("div",{staticClass:"row justify-content-center Badges"},[a("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3  col-xl-3"},[a("a",{staticClass:"Badge Badge-JavaScript",attrs:{href:"#js"}},[a("div",{staticClass:"Image"}),a("h3",{staticClass:"Name"},[t._v("JavaScript")])])]),a("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3  col-xl-3"},[a("a",{staticClass:"Badge Badge-Node",attrs:{href:"#node"}},[a("div",{staticClass:"Image"}),a("h3",{staticClass:"Name"},[t._v("Node.JS")])])]),a("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3  col-xl-3"},[a("a",{staticClass:"Badge Badge-React",attrs:{href:"#react"}},[a("div",{staticClass:"Image"}),a("h3",{staticClass:"Name"},[t._v("React")])])]),a("div",{staticClass:"col-6 col-sm-6 col-md-4 col-lg-3  col-xl-3"},[a("a",{staticClass:"Badge Badge-Angular",attrs:{href:"#angular"}},[a("div",{staticClass:"Image"}),a("h3",{staticClass:"Name"},[t._v("Angular")])])])])]),a("div",{staticClass:"VectorLeft"}),a("div",{staticClass:"VectorRight"})])}],P=void 0,q=(a("cb0c"),Object(h["a"])(P,z,H,!1,null,"16a9d868",null));q.options.__file="Quiz.vue";var R=q.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Footer"},[a("div",{staticClass:"LogoContainer"},[a("Logo")],1),t._m(0),a("p",{staticClass:"Credits"},[t._v("\n    Lorem Ipsum is simply dummy text of the printing and\n    typesetting industry. Lorem Ipsum has been the industry's\n  ")]),a("div",{staticClass:"FooterBgLeft"})])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"SocialLinks"},[a("a",{staticClass:"SocialIcon Icon-Github",attrs:{href:"https://github.com/JSConfArmenia/",target:"_blank"}}),a("a",{staticClass:"SocialIcon Icon-Facebook",attrs:{href:"https://www.facebook.com/jsconf.am/",target:"_blank"}}),a("a",{staticClass:"SocialIcon Icon-Twitter",attrs:{href:"https://twitter.com/jsconf_am/",target:"_blank"}}),a("a",{staticClass:"SocialIcon Icon-Instagram",attrs:{href:"https://www.instagram.com/jsconf.am/",target:"_blank"}}),a("a",{staticClass:"SocialIcon Icon-Youtube",attrs:{href:"https://www.youtube.com/channel/UCkzEOKU959F6_T0OaQBH4VQ/featured",target:"_blank"}})])}],D={components:{Logo:_}},M=D,V=(a("2aab"),Object(h["a"])(M,U,Y,!1,null,"b90dcdba",null));V.options.__file="Footer.vue";var G=V.exports,Z={name:"app",components:{AppHeader:b,Intro:y,About:F,Faq:W["default"],Quiz:R,AppFooter:G}},K=Z,X=(a("5c0b"),Object(h["a"])(K,n,i,!1,null,null,null));X.options.__file="App.vue";var tt=X.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(tt)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("5e27"),n=a.n(s);n.a},"5e27":function(t,e,a){},"6e2c":function(t,e,a){},"85aa":function(t,e,a){},a125:function(t,e,a){},aca3:function(t,e,a){"use strict";var s=a("6e2c"),n=a.n(s);n.a},c247:function(t,e,a){},cb0c:function(t,e,a){"use strict";var s=a("2675"),n=a.n(s);n.a},d383:function(t,e,a){},d57d:function(t,e,a){},d60e:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Faq"},[a("h2",{staticClass:"Title"},[t._v(" FREQUENTLY ASKED QUESTIONS")]),a("div",{staticClass:"row Answers"},[a("div",{staticClass:"col-md-6"},[a("h3",{staticClass:"Question"},[t._v("What is JavaScript Conference Armenia?")]),a("p",{staticClass:"Answer"},[t._v("\n        JS Conference is a big IT event that brings together a huge number of IT\n        professionals to attend talks, workshops, participate in\n        competitions, get informed about open positions at sponsor IT companies and more.\n      ")]),a("h3",{staticClass:"Question"},[t._v("Who are the speakers?")]),a("p",{staticClass:"Answer"},[t._v("\n        To learn more about our speakers, please,\n        "),a("a",{attrs:{href:"#Speakers"}},[t._v("click here")]),t._v(".\n      ")]),a("h3",{staticClass:"Question"},[t._v("What are the talk topics?")]),a("p",{staticClass:"Answer"},[t._v("\n        To see the talk sessions timetable and topics, please\n        "),a("a",{attrs:{href:"#Schedule"}},[t._v("click here")]),t._v(".\n      ")]),a("h3",{staticClass:"Question"},[t._v("What is the conference language?")]),a("p",{staticClass:"Answer"},[t._v("\n        The conference will be held mainly in Armenian but there are also\n        English talks included in the program.\n      ")]),a("h3",{staticClass:"Question"},[t._v("When is it going to take place?")]),a("p",{staticClass:"Answer"},[t._v("\n        The conference will take place from 10:00 to 18:00 on December 9, 2017.\n      ")]),a("h3",{staticClass:"Question"},[t._v("Where is it going to be held?")]),a("p",{staticClass:"Answer"},[t._v("\n        JavaScript Cօnference Yerevan will be held at the B Building of\n        "),a("a",{attrs:{href:"https://goo.gl/maps/HmDBXyu3G9z",target:"_blank"}},[t._v("American University of Armenia")]),t._v("\n        (40 Marshal Baghramyan Ave, Yerevan)․\n      ")]),a("h3",{staticClass:"Question"},[t._v("How to participate?")]),a("p",{staticClass:"Answer"},[t._v("\n        The entry of JS Conference Yerevan 2017 is invitation-only so\n        please make sure to request your invite\n        "),a("a",{attrs:{href:"https://goo.gl/forms/QWQzhSb7HqNn2Hem2",target:"_blank"}},[t._v("here")]),t._v(".\n      ")])]),a("div",{staticClass:"col-md-6"},[a("h3",{staticClass:"Question"},[t._v("How much is the entry-ticket?")]),a("p",{staticClass:"Answer"},[t._v("\n        The event entry is free of charge.\n      ")]),a("h3",{staticClass:"Question"},[t._v("When is the deadline for registration?")]),a("p",{staticClass:"Answer"},[t._v("\n        There is no deadline but the sooner you register the more\n        interesting it will be for you as a participant as you will\n        have the chance to take part in the preconference activities.\n      ")]),a("h3",{staticClass:"Question"},[t._v("Who are behind the JS Conference Armenia? ")]),a("p",{staticClass:"Answer"},[t._v("\n        To see the JS Conference Armenia team, please,\n        "),a("a",{attrs:{href:"#Team"}},[t._v("click here")]),t._v(".\n      ")]),a("h3",{staticClass:"Question"},[t._v("How can I help the team?")]),a("p",{staticClass:"Answer"},[t._v("\n        Oh, thank you for your kindness.\n        To help us make the JavaScript Conference Armenia happen please "),a("a",{attrs:{href:"https://goo.gl/cwwyiz",target:"_blank"}},[t._v("apply here")]),t._v("\n        to become a JS Conf ninja volunteer!\n      ")]),a("h3",{staticClass:"Question"},[t._v("Who supports JS Conference Armenia?")]),a("p",{staticClass:"Answer"},[t._v("\n        To learn about our sponsors and partners, please,\n        "),a("a",{attrs:{href:"#Sponsors"}},[t._v("click here")]),t._v(".\n      ")]),a("h3",{staticClass:"Question"},[t._v("Will I get a certificate of participation?")]),a("p",{staticClass:"Answer"},[t._v("\n        Your certificate of participation in JS Conference is going to be\n        your larger network in IT, updated knowledge,\n        nice little gifts and good memories. Do you still need that piece of paper?\n      ")])])])])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n})},e2e0:function(t,e,a){t.exports=a.p+"img/Logo.9ce4d7ab.png"}});
//# sourceMappingURL=app.bbec6716.js.map