(this.webpackJsonpaudit=this.webpackJsonpaudit||[]).push([[0],{208:function(e,a,n){e.exports=n(375)},374:function(e,a,n){},375:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(49),l=n.n(c),o=n(21),i=n(16),s=n(60),m=n.n(s),u=n(88),p=n(178),d=n.n(p),h=n(89),f=function(e){if(e.includes("\u6f14\u8b1b"))return"talk";if(e.includes("\u5de5\u4f5c\u574a")){if(e.includes("60"))return"workshop_60";if(e.includes("90"))return"workshop_90";if(e.includes("120"))return"workshop_120"}if(e.includes("\u4e3b\u984c\u8ad6\u58c7")){if(e.includes("60"))return"panel_60";if(e.includes("90"))return"panel_90";if(e.includes("120"))return"panel_120"}console.error("missing format: ",e)},y=function(e){return e.is_slide_cc40&&e.is_presentation_cc40?"everything_open":e.is_presentation_cc40?"presentation_open":e.is_slide_cc40?"slides_open":"unlicensed"},E=function(e){for(var a=0,n=[",","\uff0c","\u3001","/"];a<n.length;a++){var t=n[a];if(e.includes(t))return e.split(t).map((function(e){return e.trim()}))}return[e]},g=function(e){var a,n=Object(h.last)(e.versions),t=n.related_url,r=n.speakers,c=n.summary,l=n.summary_en,o=n.title,i=n.title_en;return{id:e._id,related_url:t,speakers:r,summary:c,summary_en:l,title:o,title_en:i,topic:(a=n.topic,a.includes("\u300c\u6c92\u6709\u4eba\u300d\u7684\u5cf6")?"nobody":a.includes("\u5cf6\u5dbc\u5927\u806f\u76df")?"federation":a.includes("\u5927\u5cf6\u958b\u653e")?"open":a.includes("\u6c92\u6709\u5cf6\u662f\u5c40\u5916\u5cf6")?"outside":a.includes("\u7b2c\u56db\u500b\u5cf6")?"fourth":a.includes("\u8ce2\u8005\u4e4b\u5cf6")?"academia":a.includes("\u6d77\u6d77\u4eba\u8072")?"voice":void console.error("missing topic: ",a)),format:f(n.format),license:y(n),keywords:E(n.three_keywords),languages:[n.oral_language,n.oral_languate_other].filter((function(e){return e.length>0})),url:"https://propose.summit2020.g0v.tw/proposal-detail/".concat(e._id)}},k=function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://api.summit2020.g0v.tw/projects");case 3:return a=e.sent,e.abrupt("return",a.data.filter((function(e){return e.enable})).map((function(e){return g(e)})));case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),v=r.a.createContext(),b=n(31),_=function(){var e=Object(t.useState)([]),a=Object(b.a)(e,2),n=a[0],r=a[1],c=function(){var e=Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:a=e.sent,r(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(t.useEffect)((function(){c()}),[]),{proposals:n,refetch:c}},w=n(61),O="g0vsummit2020audit",j={status:void 0,achievement:!1,experience:!1,research:!1,resource:!1,plan:!1,tutorial:!1,taste:!1,discussion:!1,facet_misc:!1,localization:!1,gender:!1,area:!1,highlight_misc:!1,memo:""},C=r.a.createContext(),x=function(){var e=Object(t.useState)(function(){var e=window.localStorage.getItem(O);return e||(window.localStorage.setItem(O,JSON.stringify({template:Object(w.a)({},j)})),e=window.localStorage.getItem(O)),JSON.parse(e)}()),a=Object(b.a)(e,2),n=a[0],r=a[1],c=Object(t.useCallback)((function(e){return n[e]||Object(w.a)({},j)}),[n]);return{notes:n,getNote:c,setNote:function(e){var a=e.id,t=e.name,l=e.value,o=c(a);o[t]=l,n[a]=o,window.localStorage.setItem(O,JSON.stringify(n)),r(Object(w.a)({},n))},saveNotes:function(e){window.localStorage.setItem(O,e),r(JSON.parse(e))}}},N=n(41),S=n(392),I=n(71),A=n(384),z=n(376),J=n(39),P=n(393),q=n(30),T=n.n(q),F=n(37),M=[{key:void 0,color:"grey",icon:"clipboard list",name:"TODO"},{key:"wip",color:"grey",icon:"hourglass half",name:"WIP"},{key:"skipped",color:"grey",icon:"step forward",name:"Skipped"},{key:"yes",color:"green",icon:"check",name:"Yes"},{key:"unsure",color:"yellow",icon:"question",name:"Unsure"},{key:"no",color:"red",icon:"ban",name:"No"}],D=[{key:void 0,name:"",name_en:"All topics"},{key:"nobody",name:"\u793e\u7fa4 - \u300c\u6c92\u6709\u4eba\u300d\u7684\u5cf6",name_en:"Community - Nobody\u2019s island"},{key:"federation",name:"\u570b\u969b - \u5cf6\u5dbc\u5927\u806f\u76df",name_en:"International - Island\u2019s federation"},{key:"open",name:"\u958b\u653e\u6587\u5316 - \u5927\u5cf6\u958b\u653e",name_en:"Open culture - Open island"},{key:"outside",name:"\u4eba\u6b0a - \u6c92\u6709\u5cf6\u662f\u5c40\u5916\u5cf6",name_en:"Human rights - No island is outside island"},{key:"fourth",name:"\u5a92\u9ad4 - \u7b2c\u56db\u500b\u5cf6",name_en:"Media - The fourth island"},{key:"academia",name:"\u5b78\u8853 - \u8ce2\u8005\u4e4b\u5cf6",name_en:"Acedamic - Academia Formosa"},{key:"voice",name:"\u9818\u57df\u8b70\u984c - \u6d77\u6d77\u4eba\u8072",name_en:"Domain issues - Voice of the islanders"}],H=[{key:void 0,icon:"",name:"",name_en:"All formats"},{key:"talk",icon:"user",name:"\u6f14\u8b1b",name_en:"Talk"},{key:"panel_60",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7 60 \u5206\u9418",name_en:"Panel discussion 60 mins"},{key:"panel_90",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7 90 \u5206\u9418",name_en:"Panel discussion 90 mins"},{key:"panel_120",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7 120 \u5206\u9418",name_en:"Panel discussion 120 mins"},{key:"workshop_60",icon:"hand paper",name:"\u5de5\u4f5c\u574a 60 \u5206\u9418",name_en:"Workshop 60 mins"},{key:"workshop_90",icon:"hand paper",name:"\u5de5\u4f5c\u574a 90 \u5206\u9418",name_en:"Workshop 90 mins"},{key:"workshop_120",icon:"hand paper",name:"\u5de5\u4f5c\u574a 120 \u5206\u9418",name_en:"Workshop 120 mins"}],W=[{key:void 0,name:"",name_en:"All licenses"},{key:"everything_open",icon:"check",color:"green",name:"\u6f14\u8b1b\u7d00\u9304\u8207\u6295\u5f71\u7247\u7686\u958b\u653e\u6388\u6b0a",name_en:"Everything open licensed"},{key:"presentation_open",icon:"warning sign",color:"yellow",name:"\u50c5\u6f14\u8b1b\u7d00\u9304\u958b\u653e\u6388\u6b0a",name_en:"Only presentation open licensed"},{key:"slides_open",icon:"warning sign",color:"yellow",name:"\u50c5\u6295\u5f71\u7247\u958b\u653e\u6388\u6b0a",name_en:"Only slides open licensed"},{key:"unlicensed",icon:"minus circle",color:"red",name:"\u672a\u958b\u653e\u6388\u6b0a",name_en:"Unlicensed"}],B=[{key:void 0,name:"",name_en:"All facets"},{key:"achievement",name:"\u5c08\u6848\u6210\u679c\u8207\u5f71\u97ff\u529b",name_en:"Project achievement"},{key:"experience",name:"\u5c08\u6848\u7d93\u9a57\u8ac7",name_en:"Project experience"},{key:"research",name:"\u5206\u6790\u8207\u7814\u7a76",name_en:"Research"},{key:"resource",name:"\u8cc7\u6e90\u4ecb\u7d39",name_en:"Resource"},{key:"plan",name:"\u884c\u52d5\u8a08\u756b",name_en:"Plan"},{key:"tutorial",name:"\u5be6\u52d9\u6559\u5b78",name_en:"Tutorial"},{key:"taste",name:"\u65b9\u6cd5\u8ad6\u9ad4\u9a57",name_en:"Taste"},{key:"discussion",name:"\u8b70\u984c\u8a0e\u8ad6",name_en:"Discussion"},{key:"facet_misc",name:"\u5176\u4ed6\u9762\u5411",name_en:"Other facets"}],R=[{key:void 0,name:"",name_en:"All highlights"},{key:"localization",name:"\u53f0\u7063\u3001\u6771\u5357\u4e9e\u3001\u6771\u4e9e",name_en:"Localization"},{key:"gender",name:"\u6027\u5225\u5747\u8861",name_en:"Gender balance"},{key:"area",name:"\u5730\u57df\u5747\u8861",name_en:"Area balance"},{key:"highlight_misc",name:"\u5176\u4ed6\u52a0\u5206\u689d\u4ef6",name_en:"Other highlights"}],U=n(90),G=function(e){var a=e.queries,n=e.name,t=e.value,r=e.pathname,c=Object(w.a)({},a,Object(U.a)({},n,t));return"".concat(r,"?").concat(T.a.stringify(c))};function L(){var e=Object(N.a)(["\n  padding: 0 !important;\n\n  & > .menu {\n    width: 100%;\n    max-width: ",";\n    margin: 0 auto;\n\n    .item .label {\n      background: hsla(0, 0%, 0%, 0.1) !important;\n      opacity: 0.5;\n      .active & {\n        opacity: 1;\n      }\n    }\n  }\n"]);return L=function(){return e},e}var V=function(){var e=Object(i.h)().status,a=Object(i.g)(),n=a.pathname,c=a.search,l=Object(t.useContext)(v).proposals,s=Object(t.useContext)(C).getNote,m=T.a.parse(c),u=Object(t.useState)(m.search),p=Object(b.a)(u,2),d=p[0],h=p[1];return r.a.createElement(Y,null,r.a.createElement(S.a,{inverted:!0,borderless:!0,stackable:!0,color:"teal"},r.a.createElement(S.a.Item,{as:o.b,to:"/settings",active:n.includes("/settings")},"Audit Helper"),M.map((function(a){var t;return r.a.createElement(S.a.Item,{key:a.name,as:o.b,to:"/".concat(a.key||"").concat(c),active:!n.includes("/settings")&&a.key===e},a.name,r.a.createElement(I.a,null,null===(t=l.filter((function(e){var n;return(null===(n=s(e.id))||void 0===n?void 0:n.status)===a.key})))||void 0===t?void 0:t.length))})),r.a.createElement(S.a.Menu,{position:"right"},r.a.createElement(S.a.Item,null,r.a.createElement(A.a,{transparent:!0,inverted:!0,action:!0,placeholder:"Search...",value:d||"",onChange:function(e,a){var n=a.value;h(n)}},r.a.createElement("input",null),r.a.createElement(z.a,{type:"submit",name:"submit",color:"teal",icon:!0,as:o.b,to:G({queries:m,name:"search",value:d||void 0,pathname:n})},r.a.createElement(J.a,{name:"search"})))))))},Y=Object(F.a)((function(e){var a=e.className,n=e.children;return r.a.createElement(P.a,{inverted:!0,basic:!0,color:"teal",className:a},n)}))(L(),"1680px"),$=n(390);function K(){var e=Object(N.a)(["\n  width: 100%;\n  max-width: ",";\n  margin: 1rem auto;\n"]);return K=function(){return e},e}var Q=[{configs:D,type:"topic"},{configs:H,type:"format"},{configs:W,type:"license"},{configs:B,type:"facet"},{configs:R,type:"highlight"}],X=function(){var e=Object(i.g)(),a=e.pathname,n=e.search,t=T.a.parse(n);return r.a.createElement(ee,null,r.a.createElement(S.a,{secondary:!0,stackable:!0,widths:5},Q.map((function(e){var n,c=e.type,l=e.configs;return r.a.createElement($.a,{key:c,item:!0,className:t[c]?"active":"",text:(null===(n=Z({queries:t,type:c,configs:l}))||void 0===n?void 0:n.name_en)||"All ".concat(c,"s")},r.a.createElement($.a.Menu,null,l.map((function(e){return r.a.createElement($.a.Item,{key:e.name,as:o.b,to:G({queries:t,pathname:a,name:c,value:e.key})},e.name,r.a.createElement("p",null,e.name_en," "))}))))}))))},Z=function(e){var a=e.queries,n=e.type;return e.configs.find((function(e){return e.key===a[n]}))},ee=F.a.nav(K(),"1680px"),ae=n(386),ne=n(385),te=function(e){var a=e.pages,n=Object(i.g)(),t=n.pathname,c=n.search,l=T.a.parse(c);return r.a.createElement(ne.a,{textAlign:"center"},r.a.createElement(S.a,{pagination:!0,borderless:!0,stackable:!0},a.map((function(e,a){return r.a.createElement(S.a.Item,{as:o.b,to:G({queries:l,pathname:t,name:"page",value:0===a?void 0:a+1}),key:a+1,active:a+1===l.page||0===a&&!l.page},a+1)})),0===a.length&&r.a.createElement(S.a.Item,{active:!0,disabled:!0},"0")))},re=n(394),ce=n(395),le=n(391),oe=function(e){var a=e.proposal,n=D.find((function(e){return e.key===a.topic})),t=H.find((function(e){return e.key===a.format})),c=W.find((function(e){return e.key===a.license}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,{horizontal:!0},a.keywords&&a.keywords.map((function(e){return r.a.createElement(I.a,{key:e,horizontal:!0},e)}))),r.a.createElement(le.a,null,r.a.createElement(le.a.Item,null,r.a.createElement(J.a,{name:"talk"}),r.a.createElement(le.a.Content,null,n.name,r.a.createElement("br",null),n.name_en)),r.a.createElement(le.a.Item,null,r.a.createElement(J.a,{name:t.icon}),r.a.createElement(le.a.Content,null,t.name,r.a.createElement("br",null),t.name_en)),r.a.createElement(le.a.Item,null,r.a.createElement(J.a,{name:"language"}),r.a.createElement(le.a.Content,null,a.languages.join(", ")))),r.a.createElement(le.a,null,r.a.createElement(le.a.Item,null,r.a.createElement(J.a,{name:c.icon,color:c.color}),r.a.createElement(le.a.Content,null,c.name,r.a.createElement("br",null),c.name_en))))},ie=n(389),se=function(e){var a=e.speakers;return r.a.createElement(ie.a.Group,{divided:!0},a.map((function(e){return r.a.createElement(ie.a,{key:e.display_name},r.a.createElement(ie.a.Image,{rounded:!0,size:"tiny",src:e.avatar_url}),r.a.createElement(ie.a.Content,null,e.info_url?r.a.createElement(ie.a.Header,{size:"tiny",as:"a",href:e.info_url,target:"_blank"},e.display_name," ",r.a.createElement(J.a,{name:"linkify",size:"small"})):r.a.createElement(ie.a.Header,{size:"small"},e.display_name),r.a.createElement(ie.a.Meta,null,r.a.createElement(J.a,{name:"map marker alternate"})," ",e.city),r.a.createElement(ie.a.Meta,null,r.a.createElement(J.a,{name:"building"})," ",e.organization),r.a.createElement(ie.a.Description,null,e.bio),r.a.createElement(ie.a.Description,null,e.bio_en)))})))},me=n(387),ue=function(e){var a=e.proposal,n=Object(t.useContext)(C),c=n.getNote,l=n.setNote,o=c(a.id),i=function(e,n){var t=n.name,r=n.value,c=n.checked;l({id:a.id,name:t,value:r||c})};return r.a.createElement(re.a,{columns:2,stackable:!0},r.a.createElement(re.a.Column,{width:10},r.a.createElement(me.a,null,B.map((function(e){return e.key&&r.a.createElement(me.a.Checkbox,{key:e.key,label:"".concat(e.name," ").concat(e.name_en),name:e.key,checked:o[e.key],onChange:i})}))),r.a.createElement(ae.a,null),r.a.createElement(me.a,null,R.map((function(e){return e.key&&r.a.createElement(me.a.Checkbox,{key:e.key,label:"".concat(e.name," ").concat(e.name_en),name:e.key,checked:o[e.key],onChange:i})})))),r.a.createElement(re.a.Column,{width:6},r.a.createElement(S.a,{secondary:!0,vertical:!0,fluid:!0},M.map((function(e){return r.a.createElement(S.a.Item,{key:e.key||"",name:"status",value:e.key,color:e.color,active:o.status===e.key,onClick:i},r.a.createElement(J.a,{name:e.icon}),e.name)}))),r.a.createElement(ae.a,null),r.a.createElement(me.a,null,r.a.createElement(me.a.TextArea,{name:"memo",value:o.memo||"",placeholder:"Auditor's memo...",onChange:i}))))};function pe(){var e=Object(N.a)(["\n  width: 100%;\n  max-width: ",";\n  margin: 0 auto;\n  padding: 0 1rem;\n\n  .grid > .column .menu {\n    margin-left: 0;\n  }\n"]);return pe=function(){return e},e}var de=function(e){var a=e.proposal;return r.a.createElement(he,null,r.a.createElement(re.a,{stackable:!0,columns:3,key:a.id},r.a.createElement(re.a.Column,{width:3},r.a.createElement(oe,{proposal:a})),r.a.createElement(re.a.Column,{width:6},r.a.createElement(ce.a,{as:"h3"},r.a.createElement("a",{href:a.url,target:"_blank"},a.title),r.a.createElement(ce.a.Subheader,null,a.title_en)),a.related_url&&r.a.createElement("p",null,r.a.createElement("a",{href:a.related_url,target:"_blank"},"Related URL"," ",r.a.createElement(J.a,{name:"linkify",size:"small"}))),r.a.createElement("p",null,a.summary),r.a.createElement("p",null,a.summary_en),r.a.createElement(ae.a,null),r.a.createElement(se,{speakers:a.speakers})),r.a.createElement(re.a.Column,{width:7},r.a.createElement(ue,{proposal:a}))))},he=F.a.section(pe(),"1680px");function fe(){var e=Object(N.a)(["\n  text-align: center;\n  margin: 0.5rem 0;\n  font-size: 0.85rem;\n  opacity: 0.7;\n"]);return fe=function(){return e},e}var ye=function(){var e=Object(i.h)().status,a=Object(i.g)().search,n=T.a.parse(a),c=Object(t.useContext)(v).proposals,l=Object(t.useContext)(C).getNote,o=c.filter((function(a){return Ee({proposal:a,note:l(a.id),status:e,queries:n})})),s=Object(h.chunk)(o,25),m=s[n.page-1||0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{pages:s}),r.a.createElement(ge,null,o.length," proposals found"),(null===m||void 0===m?void 0:m.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(ae.a,{section:!0}),r.a.createElement(de,{proposal:e}))})))||null,r.a.createElement(ae.a,null),r.a.createElement(te,{pages:s}),r.a.createElement(ae.a,{hidden:!0}))},Ee=function(e){for(var a=e.proposal,n=e.note,t=e.status,r=e.queries,c=0,l=["topic","format","license"];c<l.length;c++){var o=l[c];if(r[o]&&a[o]!==r[o])return!1}return n.status===t&&(!(r.facet&&!n[r.facet])&&(!(r.highlight&&!n[r.highlight])&&!(r.search&&!JSON.stringify(a).includes(r.search))))},ge=F.a.p(fe()),ke=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),r.a.createElement(X,null),r.a.createElement(ye,null))},ve=function(e){var a=e.string,n=Object(t.useState)(!1),c=Object(b.a)(n,2),l=c[0],o=c[1];return r.a.createElement(z.a,{icon:!0,onClick:function(){be(a),o(!0);var e=window.setTimeout((function(){o(!1),window.clearTimeout(e)}),5e3)}},r.a.createElement(J.a,{name:l?"green check":"copy"}))},be=function(e){var a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)},_e=function(){var e=Object(t.useContext)(C).notes,a=JSON.stringify(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,{as:"h3",color:"teal"},"Backup your notes"),r.a.createElement(ce.a,{as:"h4"},"Step 1: Copy your notes to the clipboard"),r.a.createElement(A.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:a}),r.a.createElement(ve,{string:a})),r.a.createElement(ce.a,{as:"h4"},"Step 2: Paste to a new HackMD"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://hackmd.io/new",target:"_blank"},r.a.createElement(J.a,{name:"external alternate"}),"New HackMD")))},we=function(){var e=Object(t.useContext)(C),a=e.notes,n=e.saveNotes,c=JSON.stringify(a),l=Object(t.useState)(""),o=Object(b.a)(l,2),i=o[0],s=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,{as:"h3",color:"teal"},"Transfer your notes to another device"),r.a.createElement(ce.a,{as:"h4"},"Step 1: Copy your notes to the clipboard"),r.a.createElement(A.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:c}),r.a.createElement(ve,{string:c})),r.a.createElement(ce.a,{as:"h4"},"Step 2: Send your clipboard content to the target device"),r.a.createElement(ce.a,{as:"h4"},"Step 3: ",r.a.createElement(I.a,{horizontal:!0},"on the target device")," open this web page"),r.a.createElement(ce.a,{as:"h4"},"Step 4: ",r.a.createElement(I.a,{horizontal:!0},"on the target device")," paste your notes here"),r.a.createElement(A.a,{action:!0},r.a.createElement("input",{className:"code",placeholder:"paste here...",value:i,onChange:function(e,a){var n=a.value;s(n)}}),r.a.createElement(z.a,{icon:"save",onClick:function(){n(i)}})))},Oe=function(){var e=Object(t.useContext)(C).notes;JSON.stringify(e);return r.a.createElement("p",null,"convert")},je=function(){var e=Object(i.g)().pathname,a=Object(i.h)().action;return Ce.some((function(e){return e.key===a}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),r.a.createElement(ne.a,{textAlign:"center"},r.a.createElement(S.a,{secondary:!0,widths:3},Ce.map((function(a){return r.a.createElement(S.a.Item,{key:a.key,as:o.b,to:"/settings/".concat(a.key),active:e==="/settings/".concat(a.key)},a.name)}))),"backup"===a&&r.a.createElement(_e,null),"device"===a&&r.a.createElement(we,null),"convert"===a&&r.a.createElement(Oe,null))):r.a.createElement(i.a,{to:"/settings/backup"})},Ce=[{key:"backup",name:"Backup your notes"},{key:"device",name:"Switch between devices"},{key:"convert",name:"Convert format"}],xe=function(){var e=_(),a=e.proposals,n=e.refetch,t=x(),c=t.notes,l=t.getNote,o=t.setNote,s=t.saveNotes;return r.a.createElement(v.Provider,{value:{proposals:a,refetch:n}},r.a.createElement(C.Provider,{value:{notes:c,getNote:l,setNote:o,saveNotes:s}},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/settings/:action?"},r.a.createElement(je,null)),r.a.createElement(i.b,{path:"/proposal/:id"},r.a.createElement("div",null,"proposal")),r.a.createElement(i.b,{path:"/:status?"},r.a.createElement(ke,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(373),n(374);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(xe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[208,1,2]]]);
//# sourceMappingURL=main.d52d3c83.chunk.js.map