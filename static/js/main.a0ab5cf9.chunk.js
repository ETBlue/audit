(this.webpackJsonpaudit=this.webpackJsonpaudit||[]).push([[0],{209:function(e,a,t){e.exports=t(376)},375:function(e,a,t){},376:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(51),o=t.n(c),l=t(22),i=t(16),s=t(38),m=t.n(s),u=t(62),d=t(89),p=t.n(d),h=t(90),f=function(e){if(e.includes("\u6f14\u8b1b"))return"talk";if(e.includes("\u5de5\u4f5c\u574a")){if(e.includes("60"))return"workshop_60";if(e.includes("90"))return"workshop_90";if(e.includes("120"))return"workshop_120"}if(e.includes("\u4e3b\u984c\u8ad6\u58c7")){if(e.includes("60"))return"panel_60";if(e.includes("90"))return"panel_90";if(e.includes("120"))return"panel_120"}console.error("missing format: ",e)},E=function(e){return e.is_slide_cc40&&e.is_presentation_cc40?"everything_open":e.is_presentation_cc40?"presentation_open":e.is_slide_cc40?"slides_open":"unlicensed"},y=function(e){for(var a=0,t=[",","\uff0c","\u3001","/"];a<t.length;a++){var n=t[a];if(e.includes(n))return e.split(n).map((function(e){return e.trim()}))}return[e]},v=function(e){var a,t=Object(h.last)(e.versions),n=t.related_url,r=t.speakers,c=t.summary,o=t.summary_en,l=t.title,i=t.title_en;return{id:e._id,version:e.versions_count,related_url:n,speakers:r,summary:c,summary_en:o,title:l,title_en:i,topic:(a=t.topic,a.includes("\u300c\u6c92\u6709\u4eba\u300d\u7684\u5cf6")?"nobody":a.includes("\u5cf6\u5dbc\u5927\u806f\u76df")?"federation":a.includes("\u5927\u5cf6\u958b\u653e")?"open":a.includes("\u6c92\u6709\u5cf6\u662f\u5c40\u5916\u5cf6")?"outside":a.includes("\u7b2c\u56db\u500b\u5cf6")?"fourth":a.includes("\u8ce2\u8005\u4e4b\u5cf6")?"academia":a.includes("\u6d77\u6d77\u4eba\u8072")?"voice":void console.error("missing topic: ",a)),format:f(t.format),license:E(t),keywords:y(t.three_keywords),languages:[t.oral_language,t.oral_languate_other].filter((function(e){return e.length>0})),url:"https://propose.summit2020.g0v.tw/proposal-detail/".concat(e._id)}},g=r.a.createContext(),k=function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://api.summit2020.g0v.tw/projects");case 3:return a=e.sent,e.abrupt("return",a.data.filter((function(e){return e.enable})).map((function(e){return v(e)})));case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),b=t(23),_=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],r=a[1],c=function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:a=e.sent,r(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),{proposals:t,refetch:c}},w=t(37),O="g0vsummit2020audit",j={status:void 0,achievement:!1,experience:!1,research:!1,resource:!1,plan:!1,tutorial:!1,taste:!1,discussion:!1,facet_misc:!1,localization:!1,gender:!1,area:!1,highlight_misc:!1,memo:"",version:void 0},C=r.a.createContext(),S=function(){var e=Object(n.useState)(function(){var e=window.localStorage.getItem(O);return e||(window.localStorage.setItem(O,JSON.stringify({template:Object(w.a)({},j)})),e=window.localStorage.getItem(O)),JSON.parse(e)}()),a=Object(b.a)(e,2),t=a[0],r=a[1],c=Object(n.useCallback)((function(e){return t[e]||Object(w.a)({},j)}),[t]);return{notes:t,getNote:c,setNote:function(e){var a=e.id,n=e.name,o=e.value,l=e.version,i=c(a);i[n]=o,i.version=l,t[a]=i,window.localStorage.setItem(O,JSON.stringify(t)),r(Object(w.a)({},t))},saveNotes:function(e){window.localStorage.setItem(O,e),r(JSON.parse(e))}}},x=t(123),N=t.n(x),I="https://docs.google.com/spreadsheets/d/e/2PACX-1vQOgMi9mafWNiVwaf279gX25Hh69ivGjwno0wQyKVAY_5YlWtyTH5hm0yMOS4j43ybo3wbZtrUe2i2I/pub?gid=928708383&single=true&output=csv",z=function(){var e=Object(u.a)(m.a.mark((function e(a){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(I);case 2:t=e.sent,N.a.parse(t.data,{header:!0,complete:function(e){e.data.some((function(e){return e[" Title"]}))?a(e.data):(console.error("error: importJSON still working. retrying..."),window.setTimeout((function(){window.open(I),z(a)}),1e3))},error:function(e){console.error(e)}});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),A=r.a.createContext(),T=t(42),D=t(394),P=t(72),F=t(385),M=t(377),J=t(40),q=t(395),H=t(32),W=t.n(H),R=t(43),Y=[{key:void 0,color:"grey",icon:"clipboard list",name:"TODO"},{key:"wip",color:"grey",icon:"hourglass half",name:"WIP"},{key:"skipped",color:"grey",icon:"step forward",name:"Skipped"},{key:"yes",color:"green",icon:"check",name:"Yes"},{key:"unsure",color:"yellow",icon:"question",name:"Unsure"},{key:"no",color:"red",icon:"ban",name:"No"}],B=[{key:void 0,name:"",name_en:"All topics"},{key:"nobody",name:"\u793e\u7fa4 - \u300c\u6c92\u6709\u4eba\u300d\u7684\u5cf6",name_en:"Community - Nobody\u2019s island"},{key:"federation",name:"\u570b\u969b - \u5cf6\u5dbc\u5927\u806f\u76df",name_en:"International - Island\u2019s federation"},{key:"open",name:"\u958b\u653e\u6587\u5316 - \u5927\u5cf6\u958b\u653e",name_en:"Open culture - Open island"},{key:"outside",name:"\u4eba\u6b0a - \u6c92\u6709\u5cf6\u662f\u5c40\u5916\u5cf6",name_en:"Human rights - No island is outside island"},{key:"fourth",name:"\u5a92\u9ad4 - \u7b2c\u56db\u500b\u5cf6",name_en:"Media - The fourth island"},{key:"academia",name:"\u5b78\u8853 - \u8ce2\u8005\u4e4b\u5cf6",name_en:"Acedamic - Academia Formosa"},{key:"voice",name:"\u9818\u57df\u8b70\u984c - \u6d77\u6d77\u4eba\u8072",name_en:"Domain issues - Voice of the islanders"}],U=[{key:void 0,icon:"",name:"",name_en:"All formats"},{key:"talk",icon:"user",name:"\u6f14\u8b1b",name_en:"Talk"},{key:"panel_60",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7 60 \u5206\u9418",name_en:"Panel discussion 60 mins"},{key:"panel_90",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7 90 \u5206\u9418",name_en:"Panel discussion 90 mins"},{key:"panel_120",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7 120 \u5206\u9418",name_en:"Panel discussion 120 mins"},{key:"workshop_60",icon:"hand paper",name:"\u5de5\u4f5c\u574a 60 \u5206\u9418",name_en:"Workshop 60 mins"},{key:"workshop_90",icon:"hand paper",name:"\u5de5\u4f5c\u574a 90 \u5206\u9418",name_en:"Workshop 90 mins"},{key:"workshop_120",icon:"hand paper",name:"\u5de5\u4f5c\u574a 120 \u5206\u9418",name_en:"Workshop 120 mins"}],G=[{key:void 0,name:"",name_en:"All licenses"},{key:"everything_open",icon:"check",color:"green",name:"\u6f14\u8b1b\u7d00\u9304\u8207\u6295\u5f71\u7247\u7686\u958b\u653e\u6388\u6b0a",name_en:"Everything open licensed"},{key:"presentation_open",icon:"warning sign",color:"yellow",name:"\u50c5\u6f14\u8b1b\u7d00\u9304\u958b\u653e\u6388\u6b0a",name_en:"Only presentation open licensed"},{key:"slides_open",icon:"warning sign",color:"yellow",name:"\u50c5\u6295\u5f71\u7247\u958b\u653e\u6388\u6b0a",name_en:"Only slides open licensed"},{key:"unlicensed",icon:"minus circle",color:"red",name:"\u672a\u958b\u653e\u6388\u6b0a",name_en:"Unlicensed"}],V=[{key:void 0,name:"",name_en:"All facets"},{key:"achievement",name:"\u5c08\u6848\u6210\u679c\u8207\u5f71\u97ff\u529b",name_en:"Project achievement"},{key:"experience",name:"\u5c08\u6848\u7d93\u9a57\u8ac7",name_en:"Project experience"},{key:"research",name:"\u5206\u6790\u8207\u7814\u7a76",name_en:"Research"},{key:"resource",name:"\u8cc7\u6e90\u4ecb\u7d39",name_en:"Resource"},{key:"plan",name:"\u884c\u52d5\u8a08\u756b",name_en:"Plan"},{key:"tutorial",name:"\u5be6\u52d9\u6559\u5b78",name_en:"Tutorial"},{key:"taste",name:"\u65b9\u6cd5\u9ad4\u9a57\u6216\u89d2\u8272\u626e\u6f14",name_en:"Taste"},{key:"discussion",name:"\u8b70\u984c\u8a0e\u8ad6",name_en:"Discussion"},{key:"facet_misc",name:"\u5176\u4ed6\u9762\u5411",name_en:"Other facets"}],L=[{key:void 0,name:"",name_en:"All highlights"},{key:"localization",name:"\u53f0\u7063\u3001\u6771\u5357\u4e9e\u3001\u6771\u4e9e",name_en:"Localization"},{key:"gender",name:"\u6027\u5225\u5747\u8861",name_en:"Gender balance"},{key:"area",name:"\u5730\u57df\u5747\u8861",name_en:"Area balance"},{key:"highlight_misc",name:"\u5176\u4ed6\u52a0\u5206\u689d\u4ef6",name_en:"Other highlights"}],Q=t(91),X=function(e){var a=e.queries,t=e.name,n=e.value,r=e.pathname,c=Object(w.a)({},a,Object(Q.a)({},t,n));return"".concat(r,"?").concat(W.a.stringify(c))};function K(){var e=Object(T.a)(["\n  padding: 0 !important;\n\n  & > .menu {\n    width: 100%;\n    max-width: ",";\n    margin: 0 auto;\n\n    .item .label {\n      background: hsla(0, 0%, 0%, 0.1) !important;\n      opacity: 0.5;\n      .active & {\n        opacity: 1;\n      }\n    }\n  }\n"]);return K=function(){return e},e}var Z=function(){var e=Object(i.h)().status,a=Object(i.g)(),t=a.pathname,c=a.search,o=Object(n.useContext)(g).proposals,s=Object(n.useContext)(C).getNote,m=W.a.parse(c),u=Object(n.useState)(m.search),d=Object(b.a)(u,2),p=d[0],h=d[1];return r.a.createElement($,null,r.a.createElement(D.a,{inverted:!0,borderless:!0,stackable:!0,color:"teal"},r.a.createElement(D.a.Item,{as:l.b,to:"/settings",active:t.includes("/settings")},"Audit Helper"),Y.map((function(a){var n;return r.a.createElement(D.a.Item,{key:a.name,as:l.b,to:"/".concat(a.key||"").concat(c),active:!t.includes("/settings")&&a.key===e},a.name,r.a.createElement(P.a,null,null===(n=o.filter((function(e){var t;return(null===(t=s(e.id))||void 0===t?void 0:t.status)===a.key})))||void 0===n?void 0:n.length))})),r.a.createElement(D.a.Menu,{position:"right"},r.a.createElement(D.a.Item,null,r.a.createElement(F.a,{transparent:!0,inverted:!0,action:!0,placeholder:"Search...",value:p||"",onChange:function(e,a){var t=a.value;h(t)}},r.a.createElement("input",null),r.a.createElement(M.a,{type:"submit",name:"submit",color:"teal",icon:!0,as:l.b,to:X({queries:m,name:"search",value:p||void 0,pathname:t})},r.a.createElement(J.a,{name:"search"})))))))},$=Object(R.a)((function(e){var a=e.className,t=e.children;return r.a.createElement(q.a,{inverted:!0,basic:!0,color:"teal",className:a},t)}))(K(),"1680px"),ee=t(391);function ae(){var e=Object(T.a)(["\n  width: 100%;\n  max-width: ",";\n  margin: 1rem auto;\n"]);return ae=function(){return e},e}var te=[{configs:B,type:"topic"},{configs:U,type:"format"},{configs:G,type:"license"},{configs:V,type:"facet"},{configs:L,type:"highlight"}],ne=function(){var e=Object(i.g)(),a=e.pathname,t=e.search,n=W.a.parse(t);return r.a.createElement(ce,null,r.a.createElement(D.a,{secondary:!0,stackable:!0,widths:5},te.map((function(e){var t,c=e.type,o=e.configs;return r.a.createElement(ee.a,{key:c,item:!0,className:n[c]?"active":"",text:(null===(t=re({queries:n,type:c,configs:o}))||void 0===t?void 0:t.name_en)||"All ".concat(c,"s")},r.a.createElement(ee.a.Menu,null,o.map((function(e){return r.a.createElement(ee.a.Item,{key:e.name,as:l.b,to:X({queries:n,pathname:a,name:c,value:e.key})},e.name,r.a.createElement("p",null,e.name_en," "))}))))}))))},re=function(e){var a=e.queries,t=e.type;return e.configs.find((function(e){return e.key===a[t]}))},ce=R.a.nav(ae(),"1680px"),oe=t(387),le=t(386),ie=function(e){var a=e.pages,t=Object(i.g)(),n=t.pathname,c=t.search,o=W.a.parse(c);return r.a.createElement(le.a,{textAlign:"center"},r.a.createElement(D.a,{pagination:!0,borderless:!0,stackable:!0},a.map((function(e,a){return r.a.createElement(D.a.Item,{as:l.b,to:X({queries:o,pathname:n,name:"page",value:0===a?void 0:a+1}),key:a+1,active:a+1===o.page||0===a&&!o.page},a+1)})),0===a.length&&r.a.createElement(D.a.Item,{active:!0,disabled:!0},"0")))},se=t(396),me=t(397),ue=t(392),de=function(e){var a=e.proposal,t=B.find((function(e){return e.key===a.topic})),n=U.find((function(e){return e.key===a.format})),c=G.find((function(e){return e.key===a.license}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{horizontal:!0},a.keywords&&a.keywords.map((function(e){return r.a.createElement(P.a,{key:e,horizontal:!0},e)}))),r.a.createElement(ue.a,null,r.a.createElement(ue.a.Item,null,r.a.createElement(J.a,{name:"talk"}),r.a.createElement(ue.a.Content,null,t.name,r.a.createElement("br",null),t.name_en)),r.a.createElement(ue.a.Item,null,r.a.createElement(J.a,{name:n.icon}),r.a.createElement(ue.a.Content,null,n.name,r.a.createElement("br",null),n.name_en)),r.a.createElement(ue.a.Item,null,r.a.createElement(J.a,{name:"language"}),r.a.createElement(ue.a.Content,null,a.languages.join(", ")))),r.a.createElement(ue.a,null,r.a.createElement(ue.a.Item,null,r.a.createElement(J.a,{name:c.icon,color:c.color}),r.a.createElement(ue.a.Content,null,c.name,r.a.createElement("br",null),c.name_en))))},pe=t(390),he=function(e){var a=e.speakers;return r.a.createElement(pe.a.Group,{divided:!0},a.map((function(e){return r.a.createElement(pe.a,{key:e.display_name},r.a.createElement(pe.a.Image,{rounded:!0,size:"tiny",src:e.avatar_url}),r.a.createElement(pe.a.Content,null,e.info_url?r.a.createElement(pe.a.Header,{size:"tiny",as:"a",href:e.info_url,target:"_blank"},e.display_name," ",r.a.createElement(J.a,{name:"linkify",size:"small"})):r.a.createElement(pe.a.Header,{size:"small"},e.display_name),r.a.createElement(pe.a.Meta,null,r.a.createElement(J.a,{name:"map marker alternate"})," ",e.city),r.a.createElement(pe.a.Meta,null,r.a.createElement(J.a,{name:"building"})," ",e.organization),r.a.createElement(pe.a.Description,null,e.bio),r.a.createElement(pe.a.Description,null,e.bio_en)))})))},fe=t(393),Ee=t(388),ye=function(e){var a=e.proposal,t=Object(n.useContext)(C),c=t.getNote,o=t.setNote,l=c(a.id),i=function(e,t){var n=t.name,r=t.value,c=t.checked;o({id:a.id,name:n,value:r||c,version:a.version})},s=a.version===l.version,m=Object.keys(l).some((function(e){return!!l[e]}));return r.a.createElement(r.a.Fragment,null,m&&!s&&r.a.createElement(fe.a,{icon:!0,warning:!0},r.a.createElement(J.a,{name:"exclamation triangle yellow"}),r.a.createElement(fe.a.Content,null,"Your review might be outdated")),r.a.createElement(se.a,{columns:2,stackable:!0},r.a.createElement(se.a.Column,{width:10},r.a.createElement(Ee.a,null,V.map((function(e){return e.key&&r.a.createElement(Ee.a.Checkbox,{key:e.key,label:"".concat(e.name," ").concat(e.name_en),name:e.key,checked:l[e.key],onChange:i})}))),r.a.createElement(oe.a,null),r.a.createElement(Ee.a,null,L.map((function(e){return e.key&&r.a.createElement(Ee.a.Checkbox,{key:e.key,label:"".concat(e.name," ").concat(e.name_en),name:e.key,checked:l[e.key],onChange:i})})))),r.a.createElement(se.a.Column,{width:6},r.a.createElement(D.a,{secondary:!0,vertical:!0,fluid:!0},Y.map((function(e){return r.a.createElement(D.a.Item,{key:e.key||"",name:"status",value:e.key,color:e.color,active:l.status===e.key,onClick:i},r.a.createElement(J.a,{name:e.icon}),e.name)}))),r.a.createElement(oe.a,null),r.a.createElement(Ee.a,null,r.a.createElement(Ee.a.TextArea,{name:"memo",value:l.memo||"",placeholder:"Auditor's memo...",onChange:i})),r.a.createElement(ue.a,null,r.a.createElement(ue.a.Item,null,r.a.createElement(P.a,{horizontal:!0},"Current version",r.a.createElement(P.a.Detail,{as:"code"},a.version))),m&&r.a.createElement(ue.a.Item,null,r.a.createElement(P.a,{horizontal:!0},"Reviewed version",r.a.createElement(P.a.Detail,{as:"code"},l.version)))))))};function ve(){var e=Object(T.a)(["\n  width: 100%;\n  max-width: ",";\n  margin: 0 auto;\n  padding: 0 1rem;\n\n  .grid > .column .menu {\n    margin-left: 0;\n  }\n"]);return ve=function(){return e},e}var ge=function(e){var a=e.proposal;return r.a.createElement(ke,null,r.a.createElement(se.a,{stackable:!0,columns:3,key:a.id},r.a.createElement(se.a.Column,{width:3},r.a.createElement(de,{proposal:a})),r.a.createElement(se.a.Column,{width:6},r.a.createElement(me.a,{as:"h3"},r.a.createElement("a",{href:a.url,target:"_blank"},a.title),r.a.createElement(me.a.Subheader,null,a.title_en)),a.related_url&&r.a.createElement("p",null,r.a.createElement("a",{href:a.related_url,target:"_blank"},"Related URL"," ",r.a.createElement(J.a,{name:"linkify",size:"small"}))),r.a.createElement("p",null,a.summary),r.a.createElement("p",null,a.summary_en),r.a.createElement(oe.a,null),r.a.createElement(he,{speakers:a.speakers})),r.a.createElement(se.a.Column,{width:7},r.a.createElement(ye,{proposal:a}))))},ke=R.a.section(ve(),"1680px");function be(){var e=Object(T.a)(["\n  text-align: center;\n  margin: 0.5rem 0;\n  font-size: 0.85rem;\n  opacity: 0.7;\n"]);return be=function(){return e},e}var _e=function(){var e=Object(i.h)().status,a=Object(i.g)().search,t=W.a.parse(a),c=Object(n.useContext)(g).proposals,o=Object(n.useContext)(C).getNote,l=c.filter((function(a){return we({proposal:a,note:o(a.id),status:e,queries:t})})),s=Object(h.chunk)(l,25),m=s[t.page-1||0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{pages:s}),r.a.createElement(Oe,null,l.length," proposals found"),(null===m||void 0===m?void 0:m.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(oe.a,{section:!0}),r.a.createElement(ge,{proposal:e}))})))||null,r.a.createElement(oe.a,null),r.a.createElement(ie,{pages:s}),r.a.createElement(oe.a,{hidden:!0}))},we=function(e){for(var a=e.proposal,t=e.note,n=e.status,r=e.queries,c=0,o=["topic","format","license"];c<o.length;c++){var l=o[c];if(r[l]&&a[l]!==r[l])return!1}return t.status===n&&(!(r.facet&&!t[r.facet])&&(!(r.highlight&&!t[r.highlight])&&!(r.search&&!JSON.stringify(a).includes(r.search))))},Oe=R.a.p(be()),je=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement(ne,null),r.a.createElement(_e,null))},Ce=function(e){var a=e.string,t=Object(n.useState)(!1),c=Object(b.a)(t,2),o=c[0],l=c[1];return r.a.createElement(M.a,{icon:!0,onClick:function(){Se(a),l(!0);var e=window.setTimeout((function(){l(!1),window.clearTimeout(e)}),5e3)}},r.a.createElement(J.a,{name:o?"green check":"copy"}))},Se=function(e){var a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)},xe=function(){var e=Object(n.useContext)(C),a=e.notes,t=e.saveNotes,c=JSON.stringify(a),o=Object(n.useState)(""),l=Object(b.a)(o,2),i=l[0],s=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{padded:"very",basic:!0},r.a.createElement(me.a,{as:"h3",color:"teal"},"Backup your notes"),r.a.createElement(me.a,{as:"h4"},"Step 1: Copy your notes to the clipboard"),r.a.createElement(F.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:c}),r.a.createElement(Ce,{string:c})),r.a.createElement(me.a,{as:"h4"},"Step 2: Paste to a new HackMD"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://hackmd.io/new",target:"_blank"},r.a.createElement(J.a,{name:"external alternate"}),"New HackMD"))),r.a.createElement(fe.a,{attached:"top",error:!0},"Danger zone below"),r.a.createElement(q.a,{padded:"very",color:"red",secondary:!0,attached:!0},r.a.createElement(me.a,{as:"h3",color:"teal"},"Recover your notes"),r.a.createElement(me.a,{as:"h4"},"Step 1:"," ",r.a.createElement(P.a,{horizontal:!0,color:"black"},"in HackMD")," ","Copy your notes to the clipboard"),r.a.createElement(me.a,{as:"h4"},"Step 2: Paste your notes here and click on the button"),r.a.createElement(F.a,{action:!0},r.a.createElement("input",{className:"code",placeholder:"paste here...",value:i,onChange:function(e){s(e.currentTarget.value)}}),r.a.createElement(M.a,{icon:"save",onClick:function(){t(i)}}))),r.a.createElement(fe.a,{attached:"bottom",error:!0},"Warning: You are going to overite your notes. This action can't be undone."),r.a.createElement(oe.a,{hidden:!0}))},Ne=function(){var e=Object(n.useContext)(C),a=e.notes,t=e.saveNotes,c=JSON.stringify(a),o=Object(n.useState)(""),l=Object(b.a)(o,2),i=l[0],s=l[1];return r.a.createElement(q.a,{padded:"very",basic:!0},r.a.createElement(me.a,{as:"h3",color:"teal"},"Transfer your notes to another device"),r.a.createElement(me.a,{as:"h4"},"Step 1: Copy your notes to the clipboard"),r.a.createElement(F.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:c}),r.a.createElement(Ce,{string:c})),r.a.createElement(me.a,{as:"h4"},"Step 2: Send your clipboard content to the target device"),r.a.createElement(me.a,{as:"h4"},"Step 3:"," ",r.a.createElement(P.a,{horizontal:!0,color:"black"},"on the target device")," ","open this web page"),r.a.createElement(me.a,{as:"h4"},"Step 4:"," ",r.a.createElement(P.a,{horizontal:!0,color:"black"},"on the target device")," ","paste your notes here and click on the button"),r.a.createElement(F.a,{action:!0},r.a.createElement("input",{className:"code",placeholder:"paste here...",value:i,onChange:function(e){s(e.currentTarget.value)}}),r.a.createElement(M.a,{icon:"save",onClick:function(){t(i)}})))},Ie=function(){var e=Object(n.useContext)(g).proposals,a=Object(n.useContext)(C).notes,t=Object(n.useContext)(A),c=t.sheet,o=t.fetchSheet,l=t.handleFetchDone;Object(n.useEffect)((function(){0===c.length&&o(l)}),[]);var i=function(e){return N.a.unparse(e,{header:!1})}(c.map((function(t){var n=e.find((function(e){return e.title===t.title||e.title_en===t.title_en}));if(n){var r=a[n.id]||{};return Object(w.a)({},Te(r),{},t)}return{}})));return r.a.createElement(q.a,{padded:"very",basic:!0},r.a.createElement(me.a,{as:"h3",color:"teal"},"Share your notes to the team sheet"),r.a.createElement(me.a,{as:"h4"},"Step 1: Copy the following csv string to the clipboard"),r.a.createElement(F.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:i}),r.a.createElement(Ce,{string:i})),r.a.createElement(me.a,{as:"h4"},"Step 2: Open a blank gsheet and paste the csv string into it"),r.a.createElement(me.a,{as:"h4"},"Step 3:"," ",r.a.createElement(P.a,{horizontal:!0,color:"black"},"in gsheet")," ","select Data > Split text to columns"),r.a.createElement(me.a,{as:"h4"},"Step 4:"," ",r.a.createElement(P.a,{horizontal:!0,color:"black"},"in gsheet")," ","set the seperator as"," ",r.a.createElement(P.a,{horizontal:!0,className:"code"},",")),r.a.createElement(me.a,{as:"h4"},"Step 5:"," ",r.a.createElement(P.a,{horizontal:!0,color:"black"},"in gsheet")," ","Copy the columns you need and paste to the team sheet"))},ze=function(e){var a=V.filter((function(a){return e[a.key]})).map((function(e){return e.name}));return a.length>0?"\u9762\u5411\uff1a".concat(a.join("\u3001")):null},Ae=function(e){var a=L.filter((function(a){return e[a.key]})).map((function(e){return e.name}));return a.length>0?"\u52a0\u5206\uff1a".concat(a.join("\u3001")):null},Te=function(e){return{score:(a=e.status,"yes"===a?3:"no"===a?1:"unsure"===a?2:""),notes:[e.memo||"",ze(e),Ae(e)].filter((function(e){return!!e})).join("\uff1b")};var a},De=function(){var e=Object(i.g)().pathname,a=Object(i.h)().action;return Pe.some((function(e){return e.key===a}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement(le.a,{textAlign:"center"},r.a.createElement(D.a,{secondary:!0,widths:3},Pe.map((function(a){return r.a.createElement(D.a.Item,{key:a.key,as:l.b,to:"/settings/".concat(a.key),active:e==="/settings/".concat(a.key)},a.name)}))),"backup"===a&&r.a.createElement(xe,null),"device"===a&&r.a.createElement(Ne,null),"convert"===a&&r.a.createElement(Ie,null))):r.a.createElement(i.a,{to:"/settings/backup"})},Pe=[{key:"backup",name:"Backup and recover"},{key:"device",name:"Switch between devices"},{key:"convert",name:"Convert to csv"}],Fe=function(){var e=_(),a=e.proposals,t=e.refetch,c=S(),o=c.notes,l=c.getNote,s=c.setNote,m=c.saveNotes,u=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],r=a[1];return{sheet:t,fetchSheet:z,handleFetchDone:function(e){r(e.map((function(e){return{title:e[" Title"],title_en:e[" Title En"]}})))}}}(),d=u.sheet,p=u.fetchSheet,h=u.handleFetchDone;return r.a.createElement(g.Provider,{value:{proposals:a,refetch:t}},r.a.createElement(C.Provider,{value:{notes:o,getNote:l,setNote:s,saveNotes:m}},r.a.createElement(A.Provider,{value:{sheet:d,fetchSheet:p,handleFetchDone:h}},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/settings/:action?"},r.a.createElement(De,null)),r.a.createElement(i.b,{path:"/proposal/:id"},r.a.createElement("div",null,"proposal")),r.a.createElement(i.b,{path:"/:status?"},r.a.createElement(je,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(374),t(375);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(Fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[209,1,2]]]);
//# sourceMappingURL=main.a0ab5cf9.chunk.js.map