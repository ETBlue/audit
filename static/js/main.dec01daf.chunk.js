(this.webpackJsonpaudit=this.webpackJsonpaudit||[]).push([[0],{213:function(e,a,t){e.exports=t(384)},383:function(e,a,t){},384:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(51),c=t.n(o),l=t(18),i=t(24),s=t(17),m=t(30),u=t.n(m),p=t(43),d=t(62),h=t.n(d),f=t(92),E=function(e){if(e.includes("\u6f14\u8b1b"))return"talk";if(e.includes("\u5de5\u4f5c\u574a")){if(e.includes("60"))return"workshop_60";if(e.includes("90"))return"workshop_90";if(e.includes("120"))return"workshop_120"}if(e.includes("\u4e3b\u984c\u8ad6\u58c7")){if(e.includes("60"))return"panel_60";if(e.includes("90"))return"panel_90";if(e.includes("120"))return"panel_120"}console.error("missing format: ",e)},g=function(e){return e.is_slide_cc40&&e.is_presentation_cc40?"everything_open":e.is_presentation_cc40?"presentation_open":e.is_slide_cc40?"slides_open":"unlicensed"},v=function(e){for(var a=0,t=[",","\uff0c","\u3001","/","\b\uff1b"];a<t.length;a++){var n=t[a];if(e.includes(n))return e.split(n).map((function(e){return e.trim()}))}return[e]},y=function(e){var a,t=Object(f.last)(e.versions),n=t.related_url,r=t.speakers,o=t.summary,c=t.summary_en,l=t.title,i=t.title_en;return{id:e._id,version:e.versions_count,related_url:n,speakers:r,summary:o,summary_en:c,title:l,title_en:i,topic:(a=t.topic,a.includes("\u300c\u6c92\u6709\u4eba\u300d\u7684\u5cf6")?"nobody":a.includes("\u5cf6\u5dbc\u5927\u806f\u76df")?"federation":a.includes("\u5927\u5cf6\u958b\u653e")?"open":a.includes("\u6c92\u6709\u5cf6\u662f\u5c40\u5916\u5cf6")?"outside":a.includes("\u7b2c\u56db\u500b\u5cf6")?"fourth":a.includes("\u8ce2\u8005\u4e4b\u5cf6")?"academia":a.includes("\u6d77\u6d77\u4eba\u8072")?"voice":void console.error("missing topic: ",a)),format:E(t.format),license:g(t),keywords:v(t.three_keywords),languages:[t.oral_language,t.oral_languate_other].filter((function(e){return e.length>0})),url:"https://propose.summit2020.g0v.tw/proposal-detail/".concat(e._id)}},b=r.a.createContext(),k=function(){var e=Object(p.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://api.summit2020.g0v.tw/projects");case 3:return a=e.sent,e.abrupt("return",a.data.filter((function(e){return e.enable})).map((function(e){return y(e)})));case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),_=t(16),O=function(){var e=Object(n.useState)([]),a=Object(_.a)(e,2),t=a[0],r=a[1],o=function(){var e=Object(p.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:a=e.sent,r(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),{proposals:t,refetch:o}},w=t(182),j="g0vsummit2020audit",C={status:void 0,achievement:!1,experience:!1,research:!1,resource:!1,plan:!1,tutorial:!1,taste:!1,discussion:!1,facet_misc:!1,localization:!1,gender:!1,area:!1,highlight_misc:!1,memo:"",tags:[],version:void 0,commentsVersion:0},S=function(e){var a=new Set;for(var t in e){var n=e[t].tags||[];if(n.length>0){var r,o=Object(w.a)(n);try{for(o.s();!(r=o.n()).done;){var c=r.value;a.add(c)}}catch(l){o.e(l)}finally{o.f()}}}return Array.from(a).sort()},x=[{key:void 0,color:"grey",icon:"clipboard list",name:"TODO"},{key:"wip",color:"grey",icon:"hourglass half",name:"WIP"},{key:"skipped",color:"grey",icon:"step forward",name:"Skipped"},{key:"hellyes",color:"green",icon:"rocket",name:"Hell YES"},{key:"yes",color:"green",icon:"check",name:"Yes"},{key:"unsure",color:"yellow",icon:"question",name:"Unsure"},{key:"no",color:"red",icon:"ban",name:"No"}],N=[{key:void 0,name:"",name_en:"All topics"},{key:"nobody",name:"\u793e\u7fa4 - \u300c\u6c92\u6709\u4eba\u300d\u7684\u5cf6",name_en:"Community - Nobody\u2019s island"},{key:"federation",name:"\u570b\u969b - \u5cf6\u5dbc\u5927\u806f\u76df",name_en:"International - Island\u2019s federation"},{key:"open",name:"\u958b\u653e\u6587\u5316 - \u5927\u5cf6\u958b\u653e",name_en:"Open culture - Open island"},{key:"outside",name:"\u4eba\u6b0a - \u6c92\u6709\u5cf6\u662f\u5c40\u5916\u5cf6",name_en:"Human rights - No island is outside island"},{key:"fourth",name:"\u5a92\u9ad4 - \u7b2c\u56db\u500b\u5cf6",name_en:"Media - The fourth island"},{key:"academia",name:"\u5b78\u8853 - \u8ce2\u8005\u4e4b\u5cf6",name_en:"Acedamic - Academia Formosa"},{key:"voice",name:"\u9818\u57df\u8b70\u984c - \u6d77\u6d77\u4eba\u8072",name_en:"Domain issues - Voice of the islanders"}],I=[{key:void 0,icon:"",name:"",name_en:"All formats"},{key:"talk",icon:"user",name:"\u6f14\u8b1b",name_en:"Talk"},{key:"panel",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7",name_en:"Panel discussion"},{key:"workshop",icon:"hand paper",name:"\u5de5\u4f5c\u574a",name_en:"Workshop"}],z=[{key:void 0,icon:"",name:"",name_en:"All formats"},{key:"talk",icon:"user",name:"\u6f14\u8b1b",name_en:"Talk"},{key:"panel_60",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7 60 \u5206\u9418",name_en:"Panel discussion 60 mins"},{key:"panel_90",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7 90 \u5206\u9418",name_en:"Panel discussion 90 mins"},{key:"panel_120",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7 120 \u5206\u9418",name_en:"Panel discussion 120 mins"},{key:"workshop_60",icon:"hand paper",name:"\u5de5\u4f5c\u574a 60 \u5206\u9418",name_en:"Workshop 60 mins"},{key:"workshop_90",icon:"hand paper",name:"\u5de5\u4f5c\u574a 90 \u5206\u9418",name_en:"Workshop 90 mins"},{key:"workshop_120",icon:"hand paper",name:"\u5de5\u4f5c\u574a 120 \u5206\u9418",name_en:"Workshop 120 mins"}],T=[{key:void 0,name:"",name_en:"All licenses"},{key:"everything_open",icon:"check",color:"green",name:"\u6f14\u8b1b\u7d00\u9304\u8207\u6295\u5f71\u7247\u7686\u958b\u653e\u6388\u6b0a",name_en:"Everything open licensed"},{key:"presentation_open",icon:"warning sign",color:"yellow",name:"\u50c5\u6f14\u8b1b\u7d00\u9304\u958b\u653e\u6388\u6b0a",name_en:"Only presentation open licensed"},{key:"slides_open",icon:"warning sign",color:"yellow",name:"\u50c5\u6295\u5f71\u7247\u958b\u653e\u6388\u6b0a",name_en:"Only slides open licensed"},{key:"unlicensed",icon:"minus circle",color:"red",name:"\u672a\u958b\u653e\u6388\u6b0a",name_en:"Unlicensed"}],A=[{key:void 0,name:"",name_en:"All facets"},{key:"achievement",name:"\u5c08\u6848\u6210\u679c\u8207\u5f71\u97ff\u529b",name_en:"Project achievement"},{key:"experience",name:"\u5c08\u6848\u7d93\u9a57\u8ac7",name_en:"Project experience"},{key:"research",name:"\u5206\u6790\u8207\u7814\u7a76",name_en:"Research"},{key:"resource",name:"\u8cc7\u6e90\u4ecb\u7d39",name_en:"Resource"},{key:"plan",name:"\u884c\u52d5\u8a08\u756b",name_en:"Plan"},{key:"tutorial",name:"\u5be6\u52d9\u6559\u5b78",name_en:"Tutorial"},{key:"taste",name:"\u65b9\u6cd5\u9ad4\u9a57\u6216\u89d2\u8272\u626e\u6f14",name_en:"Taste"},{key:"discussion",name:"\u8b70\u984c\u8a0e\u8ad6",name_en:"Discussion"},{key:"facet_misc",name:"\u5176\u4ed6\u9762\u5411",name_en:"Other facets"}],D=[{key:void 0,name:"",name_en:"All highlights"},{key:"localization",name:"\u53f0\u7063\u3001\u6771\u5357\u4e9e\u3001\u6771\u4e9e",name_en:"Localization"},{key:"gender",name:"\u6027\u5225\u5747\u8861",name_en:"Gender balance"},{key:"area",name:"\u5730\u57df\u5747\u8861",name_en:"Area balance"},{key:"highlight_misc",name:"\u5176\u4ed6\u52a0\u5206\u689d\u4ef6",name_en:"Other highlights"}],M=r.a.createContext(),V=function(){var e=Object(n.useState)(function(){var e=window.localStorage.getItem(j);e||(window.localStorage.setItem(j,JSON.stringify({template:Object(i.a)({},C)})),e=window.localStorage.getItem(j));var a=e.indexOf("{"),t=e.slice(a);return JSON.parse(t)}()),a=Object(_.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(S(t)),c=Object(_.a)(o,2),l=c[0],s=c[1],m=Object(n.useCallback)((function(e){var a=t[e];return a?(x.some((function(e){return e.key===a.status}))||(a.status=void 0),a.tags&&"object"===typeof a.tags||(a.tags=[]),isNaN(a.commentsVersion)&&(a.commentsVersion=0),a):Object(i.a)({},C)}),[t]);return{notes:t,tags:l,getNote:m,setNote:function(e){var a=e.id,n=e.name,o=e.value,c=e.version,l=e.commentsVersion,u=m(a);u[n]=o,u.version=c,u.commentsVersion=l,t[a]=u,window.localStorage.setItem(j,JSON.stringify(t)),r(Object(i.a)({},t)),"tags"===n&&s(S(t))},saveNotes:function(e){var a=e.indexOf("{"),t=e.slice(a);window.localStorage.setItem(j,e),r(JSON.parse(t))}}},Y=t(126),H=t.n(Y),F=function(){var e=Object(p.a)(u.a.mark((function e(a,t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vQOgMi9mafWNiVwaf279gX25Hh69ivGjwno0wQyKVAY_5YlWtyTH5hm0yMOS4j43ybo3wbZtrUe2i2I/pub?gid=928708383&single=true&output=csv");case 2:n=e.sent,H.a.parse(n.data,{header:!0,complete:function(e){e.data.some((function(e){return e[" Title"]}))?a(e.data):t()},error:function(e){console.error(e)}});case 4:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),q=function(e){return H.a.unparse(e)},P=r.a.createContext(),J=t(63),W=t(61),R=t(403),B=t(74),G=t(393),L=t(385),U=t(41),Q=t(404),X=t(33),K=t.n(X),Z=t(65),$=function(e){var a=e.queries,t=e.name,n=e.value,r=e.pathname,o=Object(i.a)({},a,Object(W.a)({},t,n));return"".concat(r,"?").concat(K.a.stringify(o))};function ee(){var e=Object(J.a)(["\n  padding: 0 !important;\n\n  & > .menu {\n    width: 100%;\n    max-width: ",";\n    margin: 0 auto;\n\n    .item .label {\n      background: hsla(0, 0%, 0%, 0.1) !important;\n      opacity: 0.5;\n      .active & {\n        opacity: 1;\n      }\n    }\n  }\n"]);return ee=function(){return e},e}var ae=function(){var e=Object(s.i)().status,a=Object(s.h)(),t=a.pathname,o=a.search,c=Object(s.g)(),i=Object(n.useContext)(b).proposals,m=Object(n.useContext)(M).getNote,u=K.a.parse(o),p=Object(n.useState)(u.search),d=Object(_.a)(p,2),h=d[0],f=d[1];return r.a.createElement(ne,null,r.a.createElement(R.a,{inverted:!0,borderless:!0,stackable:!0,color:"teal"},r.a.createElement(R.a.Item,{as:l.b,to:"/settings",active:t.includes("/settings")},"Audit Helper"),x.map((function(a){var n;return r.a.createElement(R.a.Item,{key:a.name,as:l.b,to:"/".concat(a.key||"").concat(o),active:!t.includes("/settings")&&a.key===e},a.name,r.a.createElement(B.a,null,null===(n=i.filter((function(e){var t;return(null===(t=m(e.id))||void 0===t?void 0:t.status)===a.key})))||void 0===n?void 0:n.length))})),r.a.createElement(R.a.Menu,{as:"form",onSubmit:function(e){e.preventDefault();var a=$({queries:u,name:"search",value:h||void 0,pathname:t});c.push(a)},position:"right"},r.a.createElement(R.a.Item,null,r.a.createElement(G.a,{transparent:!0,inverted:!0,action:!0,placeholder:"Search...",value:h||"",onChange:function(e,a){var t=a.value;f(t)}},r.a.createElement("input",null),r.a.createElement(L.a,{type:"submit",color:"teal",icon:!0},r.a.createElement(U.a,{name:"search"})))),r.a.createElement(R.a.Item,{as:l.b,to:"collapsed"===u.layout?te({queries:u,pathname:t,name:"layout",value:void 0}):te({queries:u,pathname:t,name:"layout",value:"collapsed"})},r.a.createElement(U.a,{name:"collapsed"===u.layout?"list layout":"content"})))))},te=function(e){var a=e.queries,t=e.pathname,n=e.name,r=e.value,o=Object(i.a)({},a,Object(W.a)({},n,r));return"".concat(t,"?").concat(K.a.stringify(o))},ne=Object(Z.a)((function(e){var a=e.className,t=e.children;return r.a.createElement(Q.a,{inverted:!0,basic:!0,color:"teal",className:a},t)}))(ee(),"1680px"),re=t(400);function oe(){var e=Object(J.a)(["\n  width: 100%;\n  max-width: ",";\n  margin: 1rem auto;\n"]);return oe=function(){return e},e}var ce=[{configs:N,type:"topic"},{configs:I,type:"format"},{configs:T,type:"license"},{configs:A,type:"facet"},{configs:D,type:"highlight"}],le=function(){var e=Object(s.h)(),a=e.pathname,t=e.search,o=K.a.parse(t),c=Object(n.useContext)(M).tags;return r.a.createElement(se,null,r.a.createElement(R.a,{secondary:!0,stackable:!0,widths:6},ce.map((function(e){var t,n=e.type,c=e.configs;return r.a.createElement(re.a,{key:n,item:!0,className:o[n]?"active":"",text:(null===(t=ie({queries:o,type:n,configs:c}))||void 0===t?void 0:t.name_en)||"All ".concat(n,"s")},r.a.createElement(re.a.Menu,null,c.map((function(e){return r.a.createElement(re.a.Item,{key:e.name,as:l.b,to:$({queries:o,pathname:a,name:n,value:e.key})},e.name,r.a.createElement("p",null,e.name_en," "))}))))})),r.a.createElement(re.a,{item:!0,className:o.track?"active":"",text:o.track||"All tracks"},r.a.createElement(re.a.Menu,null,r.a.createElement(re.a.Item,{as:l.b,to:$({queries:o,pathname:a,name:"track",value:void 0})},"All tracks"),c.map((function(e){return r.a.createElement(re.a.Item,{key:e,as:l.b,to:$({queries:o,pathname:a,name:"track",value:e})},e)}))))))},ie=function(e){var a=e.queries,t=e.type;return e.configs.find((function(e){return e.key===a[t]}))},se=Z.a.nav(oe(),"1680px"),me=t(395),ue=t(394),pe=function(e){var a=e.pages,t=Object(s.h)(),n=t.pathname,o=t.search,c=K.a.parse(o);return r.a.createElement(ue.a,{textAlign:"center"},r.a.createElement(R.a,{pagination:!0,borderless:!0,stackable:!0},a.map((function(e,a){return r.a.createElement(R.a.Item,{as:l.b,to:$({queries:c,pathname:n,name:"page",value:0===a?void 0:a+1}),key:a+1,active:a+1===parseInt(c.page)||0===a&&!c.page},a+1)})),0===a.length&&r.a.createElement(R.a.Item,{active:!0,disabled:!0},"0")))},de=t(405),he=t(406),fe=t(401),Ee=function(e){return N.find((function(a){return a.key===e}))},ge=function(e){return z.find((function(a){return a.key===e}))},ve=function(e){return T.find((function(a){return a.key===e}))},ye=function(e){var a=e.proposal,t=Ee(a.topic),n=ge(a.format),o=ve(a.license);return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{horizontal:!0},a.keywords&&a.keywords.map((function(e){return r.a.createElement(B.a,{key:e,horizontal:!0},e)}))),r.a.createElement(fe.a,null,r.a.createElement(fe.a.Item,null,r.a.createElement(U.a,{name:"talk"}),r.a.createElement(fe.a.Content,null,t.name,r.a.createElement("br",null),t.name_en)),r.a.createElement(fe.a.Item,null,r.a.createElement(U.a,{name:n.icon}),r.a.createElement(fe.a.Content,null,n.name,r.a.createElement("br",null),n.name_en)),r.a.createElement(fe.a.Item,null,r.a.createElement(U.a,{name:"language"}),r.a.createElement(fe.a.Content,null,a.languages.join(", ")))),r.a.createElement(fe.a,null,r.a.createElement(fe.a.Item,null,r.a.createElement(U.a,{name:o.icon,color:o.color}),r.a.createElement(fe.a.Content,null,o.name,r.a.createElement("br",null),o.name_en))))},be=t(399),ke=function(e){var a=e.speakers;return r.a.createElement(be.a.Group,{divided:!0},a.map((function(e){return r.a.createElement(be.a,{key:e.display_name},r.a.createElement(be.a.Image,{rounded:!0,size:"tiny",src:e.avatar_url}),r.a.createElement(be.a.Content,null,e.info_url?r.a.createElement(be.a.Header,{size:"tiny",as:"a",href:e.info_url,target:"_blank",rel:"noopener noreferrer"},e.display_name," ",r.a.createElement(U.a,{name:"linkify",size:"small"})):r.a.createElement(be.a.Header,{size:"small"},e.display_name),r.a.createElement(be.a.Meta,null,r.a.createElement(U.a,{name:"map marker alternate"})," ",e.city),r.a.createElement(be.a.Meta,null,r.a.createElement(U.a,{name:"building"})," ",e.organization),r.a.createElement(be.a.Description,null,e.bio),r.a.createElement(be.a.Description,null,e.bio_en)))})))},_e=t(402),Oe=t(396),we=t(200),je=t.n(we),Ce=(t(381),function(e){var a=e.proposal,t=e.commentsVersion,o=Object(n.useContext)(M),c=o.tags,l=o.getNote,i=o.setNote,s=l(a.id),m=function(e,n){var r=n.name,o=n.value,c=n.checked;i({id:a.id,name:r,value:o||c,version:a.version,commentsVersion:t})},u=a.version===s.version,p=t<=s.commentsVersion,d=Object.keys(s).some((function(e){return!!s[e]}));return r.a.createElement(r.a.Fragment,null,d&&!u&&r.a.createElement(_e.a,{icon:!0,warning:!0},r.a.createElement(U.a,{name:"exclamation triangle",color:"yellow"}),r.a.createElement(_e.a.Content,null,"Your review might be outdated")),d&&!p&&r.a.createElement(_e.a,{icon:!0,warning:!0},r.a.createElement(U.a,{name:"comment alternate",color:"yellow"}),r.a.createElement(_e.a.Content,null,"New comments arrival")),r.a.createElement(de.a,{columns:2,stackable:!0},r.a.createElement(de.a.Column,{width:10},r.a.createElement(Oe.a,null,A.map((function(e){return e.key&&r.a.createElement(Oe.a.Checkbox,{key:e.key,label:"".concat(e.name," ").concat(e.name_en),name:e.key,checked:s[e.key],onChange:m})}))),r.a.createElement(me.a,null),r.a.createElement(Oe.a,null,D.map((function(e){return e.key&&r.a.createElement(Oe.a.Checkbox,{key:e.key,label:"".concat(e.name," ").concat(e.name_en),name:e.key,checked:s[e.key],onChange:m})})))),r.a.createElement(de.a.Column,{width:6},r.a.createElement(R.a,{secondary:!0,vertical:!0,fluid:!0},x.map((function(e){return r.a.createElement(R.a.Item,{key:e.key||"",name:"status",value:e.key,color:e.color,active:s.status===e.key,onClick:m},r.a.createElement(U.a,{name:e.icon}),e.name)}))),r.a.createElement(me.a,null),r.a.createElement(Oe.a,null,r.a.createElement(Oe.a.TextArea,{name:"memo",value:s.memo||"",placeholder:"Auditor's memo...",onChange:m}),r.a.createElement(je.a,{placeholder:"Track names...",whitelist:c,dropdown:{enabled:0},value:s.tags.join(","),onChange:function(e){i({id:a.id,name:"tags",value:e.currentTarget.value?JSON.parse(e.currentTarget.value).map((function(e){return e.value.trim()})):[],version:a.version,commentsVersion:t})}})),r.a.createElement(fe.a,null,r.a.createElement(fe.a.Item,null,r.a.createElement(B.a,{horizontal:!0},"Current version",r.a.createElement(B.a.Detail,{as:"code"},a.version))),d&&r.a.createElement(fe.a.Item,null,r.a.createElement(B.a,{horizontal:!0},"Reviewed version",r.a.createElement(B.a.Detail,{as:"code"},s.version)))),r.a.createElement(fe.a,null,r.a.createElement(fe.a.Item,null,r.a.createElement(B.a,{horizontal:!0},"Current comments",r.a.createElement(B.a.Detail,{as:"code"},t))),d&&r.a.createElement(fe.a.Item,null,r.a.createElement(B.a,{horizontal:!0},"Viewed comments",r.a.createElement(B.a.Detail,{as:"code"},s.commentsVersion)))))))}),Se=t(99),xe=t.n(Se),Ne=t(398),Ie="https://discuss.summit2020.g0v.tw",ze=function(){var e=Object(p.a)(u.a.mark((function e(a,t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(Ie,"/comments/get/").concat(a,"/0"));case 2:n=e.sent,r=n.data,t({url:"".concat(Ie,"/topic/").concat(r.tid),comments:r.posts.map((function(e){return Te(e)}))});case 5:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),Te=function(e){return{url:"".concat(Ie,"/post/").concat(e.pid),author:e.user.username,profile:"".concat(Ie,"/uid/").concat(e.user.uid),timestamp:e.timestamp,content:Ae(e.content),groups:e.user.groupTitleArray.filter((function(e){return!!e}))}},Ae=function(e){return e.replace('<img src="/assets/','<img src="'.concat(Ie,"/assets/")).replace('class="img-responsive img-markdown"','class="ui image"')},De=function(e){var a=e.id,t=e.setCommentsVersion,o=Object(n.useState)(null),c=Object(_.a)(o,2),l=c[0],i=c[1],s=Object(n.useState)(null),m=Object(_.a)(s,2),u=m[0],p=m[1],d=Object(n.useState)(!1),h=Object(_.a)(d,2),f=h[0],E=h[1],g=function(e){E(!1),p(e.url),i(e.comments),t(e.comments.length)},v=function(){E(!0),ze(a,g)};Object(n.useEffect)((function(){l||v()}),[l]);var y={url:u,handleRefresh:v,loading:f};if(!l)return r.a.createElement("p",{className:"center aligned info message"},"Loading comments...");if(0===l.length)return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"center aligned info message"},"No comment"),r.a.createElement(Me,y));var b=l.sort((function(e,a){return e.timestamp<a.timestamp?-1:e.timestamp>a.timestamp?1:0}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne.a.Group,null,b.map((function(e){var a;return r.a.createElement(Ne.a,{key:e.content},r.a.createElement(Ne.a.Author,{as:"a",href:e.profile,target:"_blank",rel:"noopener noreferrer"},e.author),r.a.createElement(Ne.a.Metadata,{as:"a",href:e.url,target:"_blank",rel:"noopener noreferrer"},xe()(e.timestamp).format("YYYY-MM-DD HH:mm:ss")),null===(a=e.groups)||void 0===a?void 0:a.map((function(e){return r.a.createElement("span",{key:e,className:"info title"},e)})),r.a.createElement(Ne.a.Text,{dangerouslySetInnerHTML:{__html:e.content}}))}))),r.a.createElement(Me,y))},Me=function(e){var a=e.url,t=e.handleRefresh,n=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,null),r.a.createElement("p",{className:"action"},r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(U.a,{name:"external"}),"Join discussions"),r.a.createElement(L.a,{floated:"right",icon:!0,basic:!0,className:"borderless",loading:n,onClick:t},r.a.createElement(U.a,{name:"refresh"}))))};function Ve(){var e=Object(J.a)(["\n  width: 100%;\n  max-width: ",";\n  margin: 0 auto;\n  padding: 0 1rem;\n\n  .grid > .column .menu {\n    margin-left: 0;\n  }\n\n  .ui.header .button {\n    font-size: 1rem;\n    margin-top: -0.4em;\n    padding: 0.785714em;\n  }\n\n  .action .ui.button {\n    margin-top: -0.6rem;\n  }\n\n  .tags-input {\n    .tagify {\n      border-radius: 0.28571429rem;\n      transition: color 0.1s ease, border-color 0.1s ease;\n      border: 1px solid rgba(34, 36, 38, 0.15);\n      line-height: 1.2857rem;\n      font-size: 0;\n\n      tag,\n      .tagify__input {\n        font-size: 1rem;\n      }\n\n      .tagify__input::before {\n        color: rgba(0, 0, 0, 0.87);\n        opacity: 0.27;\n      }\n\n      &.tagify--focus {\n        border-color: #85b7d9;\n        .tagify__input::before {\n          color: rgba(0, 0, 0, 0.95);\n          opacity: 0.5;\n        }\n      }\n    }\n  }\n\n  .ui.comments .comment {\n    border-top: 1px dashed rgba(34, 36, 38, 0.15);\n\n    &:first-child {\n      border-top: none;\n    }\n\n    .info.title {\n      float: right;\n    }\n\n    .emoji {\n      height: 1.5em;\n      margin: -0.25em 0;\n      display: inline-block;\n    }\n\n    .js-lazyYT.lazyYT-container {\n      width: 100% !important;\n      padding-bottom: 0 !important;\n    }\n  }\n"]);return Ve=function(){return e},e}var Ye=function(e){var a=e.proposal,t=Object(s.i)().id,o=Object(s.h)().search,c=Object(n.useState)(0),l=Object(_.a)(c,2),i=l[0],m=l[1],u={proposal:a,id:t,search:o};return r.a.createElement(Fe,null,r.a.createElement(de.a,{stackable:!0,columns:3,key:a.id},r.a.createElement(de.a.Column,{width:3},r.a.createElement(ye,{proposal:a})),r.a.createElement(de.a.Column,{width:6},r.a.createElement(He,u),r.a.createElement(me.a,null),r.a.createElement(ke,{speakers:a.speakers}),r.a.createElement(me.a,null),r.a.createElement(De,{id:a.id,setCommentsVersion:m})),r.a.createElement(de.a.Column,{width:7},r.a.createElement(Ce,{proposal:a,commentsVersion:i}))))},He=function(e){var a,t=e.proposal,n=e.id,o=e.search;return r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,{as:"h3"},!n&&r.a.createElement(L.a,{basic:!0,icon:!0,className:"borderless",as:l.b,to:"/proposal/".concat(t.id).concat(o),floated:"right"},r.a.createElement(U.a,{name:"right chevron"})),r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.title),r.a.createElement(he.a.Subheader,null,t.title_en)),r.a.createElement(fe.a,null,null===(a=t.related_url)||void 0===a?void 0:a.split(",").map((function(e){return e.trim()})).filter((function(e){return!!e})).map((function(e){return r.a.createElement(fe.a.Item,{as:"a",key:e,href:e,target:"_blank",rel:"noopener noreferrer"},e)}))),r.a.createElement("p",null,t.summary),r.a.createElement("p",null,t.summary_en))},Fe=Z.a.section(Ve(),"1680px"),qe=function(e){var a=e.proposal,t={proposal:a,id:null,search:Object(s.h)().search},o=(0,Object(n.useContext)(M).getNote)(a.id),c=x.find((function(e){return e.key===o.status})),l=a.version===o.version,i=Object.keys(o).some((function(e){return!!o[e]}));return r.a.createElement(Fe,null,r.a.createElement(de.a,{stackable:!0,columns:3,key:a.id},r.a.createElement(de.a.Column,{width:4},r.a.createElement(ye,{proposal:a})),r.a.createElement(de.a.Column,{width:9},r.a.createElement(He,t)),r.a.createElement(de.a.Column,{width:3},i&&!l&&r.a.createElement(_e.a,{icon:!0,warning:!0},r.a.createElement(U.a,{name:"exclamation triangle",color:"yellow"}),r.a.createElement(_e.a.Content,null,"Your review might be outdated")),r.a.createElement(R.a,{secondary:!0,vertical:!0,fluid:!0},r.a.createElement(R.a.Item,{color:c.color,active:!0},r.a.createElement(U.a,{name:c.icon}),c.name)),r.a.createElement("p",{className:"info"},o.memo),r.a.createElement("p",null,o.tags.map((function(e){return r.a.createElement(B.a,{key:e,horizontal:!0},e)}))))))},Pe=function(){var e=Object(s.i)().status,a=Object(s.h)().search,t=K.a.parse(a),o=Object(n.useContext)(b).proposals,c=Object(n.useContext)(M).getNote,l=o.filter((function(a){return Je({proposal:a,note:c(a.id),status:e,queries:t})})),i=Object(f.chunk)(l,25),m=i[t.page-1||0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,{pages:i}),r.a.createElement("p",{className:"center aligned info",style:{marginTop:"0.5rem"}},l.length," proposals found"),(null===m||void 0===m?void 0:m.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(me.a,{section:!0}),"collapsed"===t.layout?r.a.createElement(qe,{proposal:e}):r.a.createElement(Ye,{proposal:e}))})))||null,r.a.createElement(me.a,null),r.a.createElement(pe,{pages:i}),r.a.createElement(me.a,{hidden:!0}))},Je=function(e){var a,t=e.proposal,n=e.note,r=e.status,o=e.queries;if(n.status!==r)return!1;for(var c=0,l=["topic","license"];c<l.length;c++){var i=l[c];if(o[i]&&t[i]!==o[i])return!1}if(o.format&&!(null===(a=t.format)||void 0===a?void 0:a.includes(o.format)))return!1;if(o.facet&&!n[o.facet])return!1;if(o.highlight&&!n[o.highlight])return!1;if(o.track&&!n.tags.includes(o.track))return!1;if(o.search){var s=new RegExp(o.search,"i");return!!JSON.stringify(t).match(s)}return!0},We=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null),r.a.createElement(le,null),r.a.createElement(Pe,null))},Re=function(e){var a=e.string,t=Object(n.useState)(!1),o=Object(_.a)(t,2),c=o[0],l=o[1];return r.a.createElement(L.a,{icon:!0,onClick:function(){Be(a),l(!0);var e=window.setTimeout((function(){l(!1),window.clearTimeout(e)}),5e3)}},r.a.createElement(U.a,{name:c?"green check":"copy"}))},Be=function(e){var a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)},Ge=function(){var e=Object(n.useContext)(M),a=e.notes,t=e.saveNotes,o=JSON.stringify(a),c="# Audit Helper backup ".concat(xe()().format("YYYY-MM-DD HH:mm:ss"),"\n\n  ").concat(o,"\n  "),l=Object(n.useState)(""),i=Object(_.a)(l,2),s=i[0],m=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{padded:"very",basic:!0},r.a.createElement(he.a,{as:"h3",color:"teal"},"Backup your notes"),r.a.createElement(he.a,{as:"h4"},"Step 1: Copy your notes to the clipboard"),r.a.createElement(G.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:c}),r.a.createElement(Re,{string:c})),r.a.createElement(he.a,{as:"h4"},"Step 2: Paste to a new HackMD"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://hackmd.io/new",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(U.a,{name:"external alternate"}),"New HackMD"))),r.a.createElement(_e.a,{attached:"top",error:!0},"Danger zone below"),r.a.createElement(Q.a,{padded:"very",color:"red",secondary:!0,attached:!0},r.a.createElement(he.a,{as:"h3",color:"teal"},"Recover your notes"),r.a.createElement(he.a,{as:"h4"},"Step 1:"," ",r.a.createElement(B.a,{horizontal:!0,color:"black"},"in HackMD")," ","Copy your notes to the clipboard"),r.a.createElement(he.a,{as:"h4"},"Step 2: Paste your notes here and click on the button"),r.a.createElement(G.a,{action:!0},r.a.createElement("input",{className:"code",placeholder:"paste here...",value:s,onChange:function(e){m(e.currentTarget.value)}}),r.a.createElement(L.a,{icon:"save",onClick:function(){t(s)}}))),r.a.createElement(_e.a,{attached:"bottom",error:!0},"Warning: You are going to overite your notes. This action can't be undone."),r.a.createElement(me.a,{hidden:!0}))},Le=function(){var e=Object(n.useContext)(M),a=e.notes,t=e.saveNotes,o=JSON.stringify(a),c=Object(n.useState)(""),l=Object(_.a)(c,2),i=l[0],s=l[1];return r.a.createElement(Q.a,{padded:"very",basic:!0},r.a.createElement(he.a,{as:"h3",color:"teal"},"Transfer your notes to another device"),r.a.createElement(he.a,{as:"h4"},"Step 1: Copy your notes to the clipboard"),r.a.createElement(G.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:o}),r.a.createElement(Re,{string:o})),r.a.createElement(he.a,{as:"h4"},"Step 2: Send your clipboard content to the target device"),r.a.createElement(he.a,{as:"h4"},"Step 3:"," ",r.a.createElement(B.a,{horizontal:!0,color:"black"},"on the target device")," ","open this web page"),r.a.createElement(he.a,{as:"h4"},"Step 4:"," ",r.a.createElement(B.a,{horizontal:!0,color:"black"},"on the target device")," ","paste your notes here and click on the button"),r.a.createElement(G.a,{action:!0},r.a.createElement("input",{className:"code",placeholder:"paste here...",value:i,onChange:function(e){s(e.currentTarget.value)}}),r.a.createElement(L.a,{icon:"save",onClick:function(){t(i)}})))},Ue=function(e){var a=A.filter((function(a){return e[a.key]})).map((function(e){return e.name}));return a.length>0?"\u9762\u5411\uff1a".concat(a.join("\u3001")):null},Qe=function(e){var a=D.filter((function(a){return e[a.key]})).map((function(e){return e.name}));return a.length>0?"\u52a0\u5206\uff1a".concat(a.join("\u3001")):null},Xe=function(e){return{score:(a=e.status,"hellyes"===a?"3+":"yes"===a?3:"no"===a?1:"unsure"===a?2:"skipped"===a?"skipped":"wip"===a?"wip":""),notes:[e.memo||"",Ue(e),Qe(e)].filter((function(e){return!!e})).join("\uff1b"),tracks:(e.tags||[]).join("\u3001")};var a},Ke=function(){var e=Object(n.useContext)(b).proposals,a=Object(n.useContext)(M).notes,t=e.map((function(e){var t=a[e.id]||{},n=e.title,r=e.title_en,o=e.keywords,c=e.languages,l=e.url;return Object(i.a)({},Xe(t),{title:n,title_en:r,topic:Ee(e.topic).name,format:ge(e.format).name,license:ve(e.license).name,keywords:o.join(" / "),languages:c.join(" / "),url:l})})),o=q(t);return r.a.createElement(Q.a,{padded:"very",basic:!0},r.a.createElement(he.a,{as:"h3",color:"teal"},"Share your notes with gsheet"),r.a.createElement(he.a,{as:"h4"},"Step 1: Copy the following csv string to the clipboard"),r.a.createElement(G.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:o}),r.a.createElement(Re,{string:o})),r.a.createElement(he.a,{as:"h4"},"Step 2: Open your working gsheet and paste the csv string into it"),r.a.createElement(he.a,{as:"h4"},"Step 3:"," ",r.a.createElement(B.a,{horizontal:!0,color:"black"},"in gsheet")," ","select Data > Split text to columns"),r.a.createElement(he.a,{as:"h4"},"Step 4:"," ",r.a.createElement(B.a,{horizontal:!0,color:"black"},"in gsheet")," ","set the seperator as"," ",r.a.createElement(B.a,{horizontal:!0,className:"code"},",")),r.a.createElement(he.a,{as:"h4"},"Step 5: Share the gsheet to your coworkers"))},Ze=function(){var e=Object(n.useContext)(b).proposals,a=Object(n.useContext)(M).notes,t=Object(n.useContext)(P),o=t.sheet,c=t.fetchSheet,l=t.handleFetchDone,s=Object(n.useState)(!1),m=Object(_.a)(s,2),u=m[0],p=m[1],d=Object(n.useState)(""),h=Object(_.a)(d,2),f=h[0],E=h[1],g=function(e){E(""),p(!1),l(e)},v=function(){E(""),p(!0)};Object(n.useEffect)((function(){0===o.length&&c(g,v)}),[o.length]);var y=o.map((function(t){var n=e.find((function(e){return e.title===t.title||e.title_en===t.title_en}));if(n){var r=a[n.id]||{};return Object(i.a)({},Xe(r),{},t)}return{}})),k=q(y);return r.a.createElement(Q.a,{padded:"very",basic:!0},r.a.createElement(he.a,{as:"h3",color:"teal"},"Share your notes to the team sheet (obsolete)"),r.a.createElement(he.a,{as:"h4"},"Step 1: Copy the following csv string to the clipboard"),r.a.createElement(G.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:k}),r.a.createElement(Re,{string:k})),u&&r.a.createElement(_e.a,{warning:!0},r.a.createElement("p",null,"Error: importJSON still working."),r.a.createElement(L.a,{color:"yellow",onClick:function(){E("loading"),c(g,v)},className:f},r.a.createElement(U.a,{name:"refresh"}),"retry")),r.a.createElement(he.a,{as:"h4"},"Step 2: Open a blank gsheet and paste the csv string into it"),r.a.createElement(he.a,{as:"h4"},"Step 3:"," ",r.a.createElement(B.a,{horizontal:!0,color:"black"},"in gsheet")," ","select Data > Split text to columns"),r.a.createElement(he.a,{as:"h4"},"Step 4:"," ",r.a.createElement(B.a,{horizontal:!0,color:"black"},"in gsheet")," ","set the seperator as"," ",r.a.createElement(B.a,{horizontal:!0,className:"code"},",")),r.a.createElement(he.a,{as:"h4"},"Step 5:"," ",r.a.createElement(B.a,{horizontal:!0,color:"black"},"in gsheet")," ","Copy the columns you need and paste to the team sheet"))},$e=function(){var e=Object(s.h)().pathname,a=Object(s.i)().action;return ea.some((function(e){return e.key===a}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null),r.a.createElement(ue.a,{textAlign:"center"},r.a.createElement(R.a,{secondary:!0,widths:4},ea.map((function(a){return r.a.createElement(R.a.Item,{key:a.key,as:l.b,to:"/settings/".concat(a.key),active:e==="/settings/".concat(a.key)},a.name)}))),"backup"===a&&r.a.createElement(Ge,null),"device"===a&&r.a.createElement(Le,null),"convert"===a&&r.a.createElement(Ke,null),"convert_v0"===a&&r.a.createElement(Ze,null))):r.a.createElement(s.a,{to:"/settings/backup"})},ea=[{key:"backup",name:"Backup and recover"},{key:"device",name:"Switch between devices"},{key:"convert",name:"Share notes"},{key:"convert_v0",name:"Convert to csv (obsolete)"}],aa=function(){var e=Object(s.i)().id,a=Object(n.useContext)(b).proposals.find((function(a){return a.id===e})),t=(0,Object(n.useContext)(M).getNote)(e).status,o=Object(s.h)().search,c="/".concat(t||"").concat(o);return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null,r.a.createElement(R.a,{inverted:!0,borderless:!0,stackable:!0,color:"teal"},r.a.createElement(R.a.Item,{as:l.b,to:c},r.a.createElement(U.a,{name:"left chevron"}),"Back"))),r.a.createElement(me.a,{hidden:!0}),r.a.createElement(Ye,{proposal:a})):null},ta=function(){var e=O(),a=e.proposals,t=e.refetch,o=V(),c=function(){var e=Object(n.useState)([]),a=Object(_.a)(e,2),t=a[0],r=a[1];return{sheet:t,fetchSheet:F,handleFetchDone:function(e){r(e.map((function(e){return{title:e[" Title"],title_en:e[" Title En"]}})))}}}();return r.a.createElement(b.Provider,{value:{proposals:a,refetch:t}},r.a.createElement(M.Provider,{value:Object(i.a)({},o)},r.a.createElement(P.Provider,{value:Object(i.a)({},c)},r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/settings/:action?"},r.a.createElement($e,null)),r.a.createElement(s.b,{path:"/proposal/:id"},r.a.createElement(aa,null)),r.a.createElement(s.b,{path:"/:status?"},r.a.createElement(We,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(382),t(383);c.a.render(r.a.createElement(l.a,null,r.a.createElement(ta,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[213,1,2]]]);
//# sourceMappingURL=main.dec01daf.chunk.js.map