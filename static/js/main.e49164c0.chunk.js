(this.webpackJsonpaudit=this.webpackJsonpaudit||[]).push([[0],{210:function(e,t,n){e.exports=n(377)},376:function(e,t,n){},377:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(53),o=n.n(c),l=n(23),i=n(16),s=n(29),m=n.n(s),u=n(43),p=n(63),d=n.n(p),h=n(91),f=function(e){if(e.includes("\u6f14\u8b1b"))return"talk";if(e.includes("\u5de5\u4f5c\u574a")){if(e.includes("60"))return"workshop_60";if(e.includes("90"))return"workshop_90";if(e.includes("120"))return"workshop_120"}if(e.includes("\u4e3b\u984c\u8ad6\u58c7")){if(e.includes("60"))return"panel_60";if(e.includes("90"))return"panel_90";if(e.includes("120"))return"panel_120"}console.error("missing format: ",e)},E=function(e){return e.is_slide_cc40&&e.is_presentation_cc40?"everything_open":e.is_presentation_cc40?"presentation_open":e.is_slide_cc40?"slides_open":"unlicensed"},y=function(e){for(var t=0,n=[",","\uff0c","\u3001","/"];t<n.length;t++){var a=n[t];if(e.includes(a))return e.split(a).map((function(e){return e.trim()}))}return[e]},g=function(e){var t,n=Object(h.last)(e.versions),a=n.related_url,r=n.speakers,c=n.summary,o=n.summary_en,l=n.title,i=n.title_en;return{id:e._id,version:e.versions_count,related_url:a,speakers:r,summary:c,summary_en:o,title:l,title_en:i,topic:(t=n.topic,t.includes("\u300c\u6c92\u6709\u4eba\u300d\u7684\u5cf6")?"nobody":t.includes("\u5cf6\u5dbc\u5927\u806f\u76df")?"federation":t.includes("\u5927\u5cf6\u958b\u653e")?"open":t.includes("\u6c92\u6709\u5cf6\u662f\u5c40\u5916\u5cf6")?"outside":t.includes("\u7b2c\u56db\u500b\u5cf6")?"fourth":t.includes("\u8ce2\u8005\u4e4b\u5cf6")?"academia":t.includes("\u6d77\u6d77\u4eba\u8072")?"voice":void console.error("missing topic: ",t)),format:f(n.format),license:E(n),keywords:y(n.three_keywords),languages:[n.oral_language,n.oral_languate_other].filter((function(e){return e.length>0})),url:"https://propose.summit2020.g0v.tw/proposal-detail/".concat(e._id)}},v=r.a.createContext(),k=function(){var e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://api.summit2020.g0v.tw/projects");case 3:return t=e.sent,e.abrupt("return",t.data.filter((function(e){return e.enable})).map((function(e){return g(e)})));case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),b=n(21),_=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1],c=function(){var e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){c()}),[]),{proposals:n,refetch:c}},w=n(38),O="g0vsummit2020audit",j={status:void 0,achievement:!1,experience:!1,research:!1,resource:!1,plan:!1,tutorial:!1,taste:!1,discussion:!1,facet_misc:!1,localization:!1,gender:!1,area:!1,highlight_misc:!1,memo:"",version:void 0},C=r.a.createContext(),S=function(){var e=Object(a.useState)(function(){var e=window.localStorage.getItem(O);return e||(window.localStorage.setItem(O,JSON.stringify({template:Object(w.a)({},j)})),e=window.localStorage.getItem(O)),JSON.parse(e)}()),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useCallback)((function(e){return n[e]||Object(w.a)({},j)}),[n]);return{notes:n,getNote:c,setNote:function(e){var t=e.id,a=e.name,o=e.value,l=e.version,i=c(t);i[a]=o,i.version=l,n[t]=i,window.localStorage.setItem(O,JSON.stringify(n)),r(Object(w.a)({},n))},saveNotes:function(e){window.localStorage.setItem(O,e),r(JSON.parse(e))}}},x=n(123),N=n.n(x),I="https://docs.google.com/spreadsheets/d/e/2PACX-1vQOgMi9mafWNiVwaf279gX25Hh69ivGjwno0wQyKVAY_5YlWtyTH5hm0yMOS4j43ybo3wbZtrUe2i2I/pub?gid=928708383&single=true&output=csv",z=function(){var e=Object(u.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(I);case 2:n=e.sent,N.a.parse(n.data,{header:!0,complete:function(e){e.data.some((function(e){return e[" Title"]}))?t(e.data):(console.error("error: importJSON still working. retrying..."),window.setTimeout((function(){window.open(I),z(t)}),1e3))},error:function(e){console.error(e)}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=r.a.createContext(),A=n(44),D=n(396),M=n(73),P=n(386),F=n(378),H=n(41),Y=n(397),J=n(33),q=n.n(J),W=n(45),R=[{key:void 0,color:"grey",icon:"clipboard list",name:"TODO"},{key:"wip",color:"grey",icon:"hourglass half",name:"WIP"},{key:"skipped",color:"grey",icon:"step forward",name:"Skipped"},{key:"yes",color:"green",icon:"check",name:"Yes"},{key:"unsure",color:"yellow",icon:"question",name:"Unsure"},{key:"no",color:"red",icon:"ban",name:"No"}],B=[{key:void 0,name:"",name_en:"All topics"},{key:"nobody",name:"\u793e\u7fa4 - \u300c\u6c92\u6709\u4eba\u300d\u7684\u5cf6",name_en:"Community - Nobody\u2019s island"},{key:"federation",name:"\u570b\u969b - \u5cf6\u5dbc\u5927\u806f\u76df",name_en:"International - Island\u2019s federation"},{key:"open",name:"\u958b\u653e\u6587\u5316 - \u5927\u5cf6\u958b\u653e",name_en:"Open culture - Open island"},{key:"outside",name:"\u4eba\u6b0a - \u6c92\u6709\u5cf6\u662f\u5c40\u5916\u5cf6",name_en:"Human rights - No island is outside island"},{key:"fourth",name:"\u5a92\u9ad4 - \u7b2c\u56db\u500b\u5cf6",name_en:"Media - The fourth island"},{key:"academia",name:"\u5b78\u8853 - \u8ce2\u8005\u4e4b\u5cf6",name_en:"Acedamic - Academia Formosa"},{key:"voice",name:"\u9818\u57df\u8b70\u984c - \u6d77\u6d77\u4eba\u8072",name_en:"Domain issues - Voice of the islanders"}],G=[{key:void 0,icon:"",name:"",name_en:"All formats"},{key:"talk",icon:"user",name:"\u6f14\u8b1b",name_en:"Talk"},{key:"panel_60",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7 60 \u5206\u9418",name_en:"Panel discussion 60 mins"},{key:"panel_90",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7 90 \u5206\u9418",name_en:"Panel discussion 90 mins"},{key:"panel_120",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7 120 \u5206\u9418",name_en:"Panel discussion 120 mins"},{key:"workshop_60",icon:"hand paper",name:"\u5de5\u4f5c\u574a 60 \u5206\u9418",name_en:"Workshop 60 mins"},{key:"workshop_90",icon:"hand paper",name:"\u5de5\u4f5c\u574a 90 \u5206\u9418",name_en:"Workshop 90 mins"},{key:"workshop_120",icon:"hand paper",name:"\u5de5\u4f5c\u574a 120 \u5206\u9418",name_en:"Workshop 120 mins"}],U=[{key:void 0,name:"",name_en:"All licenses"},{key:"everything_open",icon:"check",color:"green",name:"\u6f14\u8b1b\u7d00\u9304\u8207\u6295\u5f71\u7247\u7686\u958b\u653e\u6388\u6b0a",name_en:"Everything open licensed"},{key:"presentation_open",icon:"warning sign",color:"yellow",name:"\u50c5\u6f14\u8b1b\u7d00\u9304\u958b\u653e\u6388\u6b0a",name_en:"Only presentation open licensed"},{key:"slides_open",icon:"warning sign",color:"yellow",name:"\u50c5\u6295\u5f71\u7247\u958b\u653e\u6388\u6b0a",name_en:"Only slides open licensed"},{key:"unlicensed",icon:"minus circle",color:"red",name:"\u672a\u958b\u653e\u6388\u6b0a",name_en:"Unlicensed"}],L=[{key:void 0,name:"",name_en:"All facets"},{key:"achievement",name:"\u5c08\u6848\u6210\u679c\u8207\u5f71\u97ff\u529b",name_en:"Project achievement"},{key:"experience",name:"\u5c08\u6848\u7d93\u9a57\u8ac7",name_en:"Project experience"},{key:"research",name:"\u5206\u6790\u8207\u7814\u7a76",name_en:"Research"},{key:"resource",name:"\u8cc7\u6e90\u4ecb\u7d39",name_en:"Resource"},{key:"plan",name:"\u884c\u52d5\u8a08\u756b",name_en:"Plan"},{key:"tutorial",name:"\u5be6\u52d9\u6559\u5b78",name_en:"Tutorial"},{key:"taste",name:"\u65b9\u6cd5\u9ad4\u9a57\u6216\u89d2\u8272\u626e\u6f14",name_en:"Taste"},{key:"discussion",name:"\u8b70\u984c\u8a0e\u8ad6",name_en:"Discussion"},{key:"facet_misc",name:"\u5176\u4ed6\u9762\u5411",name_en:"Other facets"}],V=[{key:void 0,name:"",name_en:"All highlights"},{key:"localization",name:"\u53f0\u7063\u3001\u6771\u5357\u4e9e\u3001\u6771\u4e9e",name_en:"Localization"},{key:"gender",name:"\u6027\u5225\u5747\u8861",name_en:"Gender balance"},{key:"area",name:"\u5730\u57df\u5747\u8861",name_en:"Area balance"},{key:"highlight_misc",name:"\u5176\u4ed6\u52a0\u5206\u689d\u4ef6",name_en:"Other highlights"}],Q=n(92),X=function(e){var t=e.queries,n=e.name,a=e.value,r=e.pathname,c=Object(w.a)({},t,Object(Q.a)({},n,a));return"".concat(r,"?").concat(q.a.stringify(c))};function K(){var e=Object(A.a)(["\n  padding: 0 !important;\n\n  & > .menu {\n    width: 100%;\n    max-width: ",";\n    margin: 0 auto;\n\n    .item .label {\n      background: hsla(0, 0%, 0%, 0.1) !important;\n      opacity: 0.5;\n      .active & {\n        opacity: 1;\n      }\n    }\n  }\n"]);return K=function(){return e},e}var Z=function(){var e=Object(i.h)().status,t=Object(i.g)(),n=t.pathname,c=t.search,o=Object(a.useContext)(v).proposals,s=Object(a.useContext)(C).getNote,m=q.a.parse(c),u=Object(a.useState)(m.search),p=Object(b.a)(u,2),d=p[0],h=p[1];return r.a.createElement($,null,r.a.createElement(D.a,{inverted:!0,borderless:!0,stackable:!0,color:"teal"},r.a.createElement(D.a.Item,{as:l.b,to:"/settings",active:n.includes("/settings")},"Audit Helper"),R.map((function(t){var a;return r.a.createElement(D.a.Item,{key:t.name,as:l.b,to:"/".concat(t.key||"").concat(c),active:!n.includes("/settings")&&t.key===e},t.name,r.a.createElement(M.a,null,null===(a=o.filter((function(e){var n;return(null===(n=s(e.id))||void 0===n?void 0:n.status)===t.key})))||void 0===a?void 0:a.length))})),r.a.createElement(D.a.Menu,{position:"right"},r.a.createElement(D.a.Item,null,r.a.createElement(P.a,{transparent:!0,inverted:!0,action:!0,placeholder:"Search...",value:d||"",onChange:function(e,t){var n=t.value;h(n)}},r.a.createElement("input",null),r.a.createElement(F.a,{type:"submit",name:"submit",color:"teal",icon:!0,as:l.b,to:X({queries:m,name:"search",value:d||void 0,pathname:n})},r.a.createElement(H.a,{name:"search"})))))))},$=Object(W.a)((function(e){var t=e.className,n=e.children;return r.a.createElement(Y.a,{inverted:!0,basic:!0,color:"teal",className:t},n)}))(K(),"1680px"),ee=n(393);function te(){var e=Object(A.a)(["\n  width: 100%;\n  max-width: ",";\n  margin: 1rem auto;\n"]);return te=function(){return e},e}var ne=[{configs:B,type:"topic"},{configs:G,type:"format"},{configs:U,type:"license"},{configs:L,type:"facet"},{configs:V,type:"highlight"}],ae=function(){var e=Object(i.g)(),t=e.pathname,n=e.search,a=q.a.parse(n);return r.a.createElement(ce,null,r.a.createElement(D.a,{secondary:!0,stackable:!0,widths:5},ne.map((function(e){var n,c=e.type,o=e.configs;return r.a.createElement(ee.a,{key:c,item:!0,className:a[c]?"active":"",text:(null===(n=re({queries:a,type:c,configs:o}))||void 0===n?void 0:n.name_en)||"All ".concat(c,"s")},r.a.createElement(ee.a.Menu,null,o.map((function(e){return r.a.createElement(ee.a.Item,{key:e.name,as:l.b,to:X({queries:a,pathname:t,name:c,value:e.key})},e.name,r.a.createElement("p",null,e.name_en," "))}))))}))))},re=function(e){var t=e.queries,n=e.type;return e.configs.find((function(e){return e.key===t[n]}))},ce=W.a.nav(te(),"1680px"),oe=n(388),le=n(387),ie=function(e){var t=e.pages,n=Object(i.g)(),a=n.pathname,c=n.search,o=q.a.parse(c);return r.a.createElement(le.a,{textAlign:"center"},r.a.createElement(D.a,{pagination:!0,borderless:!0,stackable:!0},t.map((function(e,t){return r.a.createElement(D.a.Item,{as:l.b,to:X({queries:o,pathname:a,name:"page",value:0===t?void 0:t+1}),key:t+1,active:t+1===o.page||0===t&&!o.page},t+1)})),0===t.length&&r.a.createElement(D.a.Item,{active:!0,disabled:!0},"0")))},se=n(398),me=n(399),ue=n(394),pe=function(e){var t=e.proposal,n=B.find((function(e){return e.key===t.topic})),a=G.find((function(e){return e.key===t.format})),c=U.find((function(e){return e.key===t.license}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{horizontal:!0},t.keywords&&t.keywords.map((function(e){return r.a.createElement(M.a,{key:e,horizontal:!0},e)}))),r.a.createElement(ue.a,null,r.a.createElement(ue.a.Item,null,r.a.createElement(H.a,{name:"talk"}),r.a.createElement(ue.a.Content,null,n.name,r.a.createElement("br",null),n.name_en)),r.a.createElement(ue.a.Item,null,r.a.createElement(H.a,{name:a.icon}),r.a.createElement(ue.a.Content,null,a.name,r.a.createElement("br",null),a.name_en)),r.a.createElement(ue.a.Item,null,r.a.createElement(H.a,{name:"language"}),r.a.createElement(ue.a.Content,null,t.languages.join(", ")))),r.a.createElement(ue.a,null,r.a.createElement(ue.a.Item,null,r.a.createElement(H.a,{name:c.icon,color:c.color}),r.a.createElement(ue.a.Content,null,c.name,r.a.createElement("br",null),c.name_en))))},de=n(392),he=function(e){var t=e.speakers;return r.a.createElement(de.a.Group,{divided:!0},t.map((function(e){return r.a.createElement(de.a,{key:e.display_name},r.a.createElement(de.a.Image,{rounded:!0,size:"tiny",src:e.avatar_url}),r.a.createElement(de.a.Content,null,e.info_url?r.a.createElement(de.a.Header,{size:"tiny",as:"a",href:e.info_url,target:"_blank"},e.display_name," ",r.a.createElement(H.a,{name:"linkify",size:"small"})):r.a.createElement(de.a.Header,{size:"small"},e.display_name),r.a.createElement(de.a.Meta,null,r.a.createElement(H.a,{name:"map marker alternate"})," ",e.city),r.a.createElement(de.a.Meta,null,r.a.createElement(H.a,{name:"building"})," ",e.organization),r.a.createElement(de.a.Description,null,e.bio),r.a.createElement(de.a.Description,null,e.bio_en)))})))},fe=n(395),Ee=n(389),ye=function(e){var t=e.proposal,n=Object(a.useContext)(C),c=n.getNote,o=n.setNote,l=c(t.id),i=function(e,n){var a=n.name,r=n.value,c=n.checked;o({id:t.id,name:a,value:r||c,version:t.version})},s=t.version===l.version,m=Object.keys(l).some((function(e){return!!l[e]}));return r.a.createElement(r.a.Fragment,null,m&&!s&&r.a.createElement(fe.a,{icon:!0,warning:!0},r.a.createElement(H.a,{name:"exclamation triangle",color:"yellow"}),r.a.createElement(fe.a.Content,null,"Your review might be outdated")),r.a.createElement(se.a,{columns:2,stackable:!0},r.a.createElement(se.a.Column,{width:10},r.a.createElement(Ee.a,null,L.map((function(e){return e.key&&r.a.createElement(Ee.a.Checkbox,{key:e.key,label:"".concat(e.name," ").concat(e.name_en),name:e.key,checked:l[e.key],onChange:i})}))),r.a.createElement(oe.a,null),r.a.createElement(Ee.a,null,V.map((function(e){return e.key&&r.a.createElement(Ee.a.Checkbox,{key:e.key,label:"".concat(e.name," ").concat(e.name_en),name:e.key,checked:l[e.key],onChange:i})})))),r.a.createElement(se.a.Column,{width:6},r.a.createElement(D.a,{secondary:!0,vertical:!0,fluid:!0},R.map((function(e){return r.a.createElement(D.a.Item,{key:e.key||"",name:"status",value:e.key,color:e.color,active:l.status===e.key,onClick:i},r.a.createElement(H.a,{name:e.icon}),e.name)}))),r.a.createElement(oe.a,null),r.a.createElement(Ee.a,null,r.a.createElement(Ee.a.TextArea,{name:"memo",value:l.memo||"",placeholder:"Auditor's memo...",onChange:i})),r.a.createElement(ue.a,null,r.a.createElement(ue.a.Item,null,r.a.createElement(M.a,{horizontal:!0},"Current version",r.a.createElement(M.a.Detail,{as:"code"},t.version))),m&&r.a.createElement(ue.a.Item,null,r.a.createElement(M.a,{horizontal:!0},"Reviewed version",r.a.createElement(M.a.Detail,{as:"code"},l.version)))))))},ge=n(198),ve=n.n(ge),ke=n(391),be=function(){var e=Object(u.a)(m.a.mark((function e(t,n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://discuss.summit2020.g0v.tw/comments/get/".concat(t,"/0"));case 2:a=e.sent,r=a.data,n(r.posts.map((function(e){return _e(e)})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),_e=function(e){return{author:e.user.username,timestamp:e.timestamp,content:e.content,groups:e.user.groupTitleArray.filter((function(e){return!!e}))}},we=function(e){var t=e.id,n=Object(a.useState)(null),c=Object(b.a)(n,2),o=c[0],l=c[1];return Object(a.useEffect)((function(){o||be(t,l)}),[]),o&&0!==o.length?r.a.createElement(ke.a.Group,null,o.map((function(e){var t;return r.a.createElement(ke.a,{key:e.content},r.a.createElement(ke.a.Author,{as:"span"},e.author),r.a.createElement(ke.a.Metadata,{as:"span"},ve()(e.timestamp).format("YYYY-MM-DD HH:mm:ss")),null===(t=e.groups)||void 0===t?void 0:t.map((function(e){return r.a.createElement("span",{key:e,className:"info title"},e)})),r.a.createElement(ke.a.Text,{dangerouslySetInnerHTML:{__html:e.content}}))}))):r.a.createElement("p",{className:"info message"},"No comments")};function Oe(){var e=Object(A.a)(["\n  width: 100%;\n  max-width: ",";\n  margin: 0 auto;\n  padding: 0 1rem;\n\n  .grid > .column .menu {\n    margin-left: 0;\n  }\n\n  .ui.comments .comment {\n    border-top: 1px dashed rgba(34, 36, 38, 0.15);\n\n    &:first-child {\n      border-top: none;\n    }\n\n    .title {\n      float: right;\n    }\n\n    .emoji {\n      height: 1.5em;\n      margin: -0.25em 0;\n      display: inline-block;\n    }\n\n    .js-lazyYT.lazyYT-container {\n      width: 100% !important;\n    }\n  }\n\n  .message {\n    text-align: center;\n  }\n"]);return Oe=function(){return e},e}var je=function(e){var t=e.proposal;return r.a.createElement(Ce,null,r.a.createElement(se.a,{stackable:!0,columns:3,key:t.id},r.a.createElement(se.a.Column,{width:3},r.a.createElement(pe,{proposal:t})),r.a.createElement(se.a.Column,{width:6},r.a.createElement(me.a,{as:"h3"},r.a.createElement("a",{href:t.url,target:"_blank"},t.title),r.a.createElement(me.a.Subheader,null,t.title_en)),t.related_url&&r.a.createElement("p",null,r.a.createElement("a",{href:t.related_url,target:"_blank"},"Related URL"," ",r.a.createElement(H.a,{name:"linkify",size:"small"}))),r.a.createElement("p",null,t.summary),r.a.createElement("p",null,t.summary_en),r.a.createElement(oe.a,null),r.a.createElement(he,{speakers:t.speakers}),r.a.createElement(oe.a,null),r.a.createElement(we,{id:t.id})),r.a.createElement(se.a.Column,{width:7},r.a.createElement(ye,{proposal:t}))))},Ce=W.a.section(Oe(),"1680px");function Se(){var e=Object(A.a)(["\n  text-align: center;\n  margin: 0.5rem 0;\n  font-size: 0.85rem;\n  opacity: 0.7;\n"]);return Se=function(){return e},e}var xe=function(){var e=Object(i.h)().status,t=Object(i.g)().search,n=q.a.parse(t),c=Object(a.useContext)(v).proposals,o=Object(a.useContext)(C).getNote,l=c.filter((function(t){return Ne({proposal:t,note:o(t.id),status:e,queries:n})})),s=Object(h.chunk)(l,25),m=s[n.page-1||0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{pages:s}),r.a.createElement(Ie,null,l.length," proposals found"),(null===m||void 0===m?void 0:m.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(oe.a,{section:!0}),r.a.createElement(je,{proposal:e}))})))||null,r.a.createElement(oe.a,null),r.a.createElement(ie,{pages:s}),r.a.createElement(oe.a,{hidden:!0}))},Ne=function(e){for(var t=e.proposal,n=e.note,a=e.status,r=e.queries,c=0,o=["topic","format","license"];c<o.length;c++){var l=o[c];if(r[l]&&t[l]!==r[l])return!1}return n.status===a&&(!(r.facet&&!n[r.facet])&&(!(r.highlight&&!n[r.highlight])&&!(r.search&&!JSON.stringify(t).includes(r.search))))},Ie=W.a.p(Se()),ze=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement(ae,null),r.a.createElement(xe,null))},Te=function(e){var t=e.string,n=Object(a.useState)(!1),c=Object(b.a)(n,2),o=c[0],l=c[1];return r.a.createElement(F.a,{icon:!0,onClick:function(){Ae(t),l(!0);var e=window.setTimeout((function(){l(!1),window.clearTimeout(e)}),5e3)}},r.a.createElement(H.a,{name:o?"green check":"copy"}))},Ae=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)},De=function(){var e=Object(a.useContext)(C),t=e.notes,n=e.saveNotes,c=JSON.stringify(t),o=Object(a.useState)(""),l=Object(b.a)(o,2),i=l[0],s=l[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{padded:"very",basic:!0},r.a.createElement(me.a,{as:"h3",color:"teal"},"Backup your notes"),r.a.createElement(me.a,{as:"h4"},"Step 1: Copy your notes to the clipboard"),r.a.createElement(P.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:c}),r.a.createElement(Te,{string:c})),r.a.createElement(me.a,{as:"h4"},"Step 2: Paste to a new HackMD"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://hackmd.io/new",target:"_blank"},r.a.createElement(H.a,{name:"external alternate"}),"New HackMD"))),r.a.createElement(fe.a,{attached:"top",error:!0},"Danger zone below"),r.a.createElement(Y.a,{padded:"very",color:"red",secondary:!0,attached:!0},r.a.createElement(me.a,{as:"h3",color:"teal"},"Recover your notes"),r.a.createElement(me.a,{as:"h4"},"Step 1:"," ",r.a.createElement(M.a,{horizontal:!0,color:"black"},"in HackMD")," ","Copy your notes to the clipboard"),r.a.createElement(me.a,{as:"h4"},"Step 2: Paste your notes here and click on the button"),r.a.createElement(P.a,{action:!0},r.a.createElement("input",{className:"code",placeholder:"paste here...",value:i,onChange:function(e){s(e.currentTarget.value)}}),r.a.createElement(F.a,{icon:"save",onClick:function(){n(i)}}))),r.a.createElement(fe.a,{attached:"bottom",error:!0},"Warning: You are going to overite your notes. This action can't be undone."),r.a.createElement(oe.a,{hidden:!0}))},Me=function(){var e=Object(a.useContext)(C),t=e.notes,n=e.saveNotes,c=JSON.stringify(t),o=Object(a.useState)(""),l=Object(b.a)(o,2),i=l[0],s=l[1];return r.a.createElement(Y.a,{padded:"very",basic:!0},r.a.createElement(me.a,{as:"h3",color:"teal"},"Transfer your notes to another device"),r.a.createElement(me.a,{as:"h4"},"Step 1: Copy your notes to the clipboard"),r.a.createElement(P.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:c}),r.a.createElement(Te,{string:c})),r.a.createElement(me.a,{as:"h4"},"Step 2: Send your clipboard content to the target device"),r.a.createElement(me.a,{as:"h4"},"Step 3:"," ",r.a.createElement(M.a,{horizontal:!0,color:"black"},"on the target device")," ","open this web page"),r.a.createElement(me.a,{as:"h4"},"Step 4:"," ",r.a.createElement(M.a,{horizontal:!0,color:"black"},"on the target device")," ","paste your notes here and click on the button"),r.a.createElement(P.a,{action:!0},r.a.createElement("input",{className:"code",placeholder:"paste here...",value:i,onChange:function(e){s(e.currentTarget.value)}}),r.a.createElement(F.a,{icon:"save",onClick:function(){n(i)}})))},Pe=function(){var e=Object(a.useContext)(v).proposals,t=Object(a.useContext)(C).notes,n=Object(a.useContext)(T),c=n.sheet,o=n.fetchSheet,l=n.handleFetchDone;Object(a.useEffect)((function(){0===c.length&&o(l)}),[]);var i=function(e){return N.a.unparse(e,{header:!1})}(c.map((function(n){var a=e.find((function(e){return e.title===n.title||e.title_en===n.title_en}));if(a){var r=t[a.id]||{};return Object(w.a)({},Ye(r),{},n)}return{}})));return r.a.createElement(Y.a,{padded:"very",basic:!0},r.a.createElement(me.a,{as:"h3",color:"teal"},"Share your notes to the team sheet"),r.a.createElement(me.a,{as:"h4"},"Step 1: Copy the following csv string to the clipboard"),r.a.createElement(P.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:i}),r.a.createElement(Te,{string:i})),r.a.createElement(me.a,{as:"h4"},"Step 2: Open a blank gsheet and paste the csv string into it"),r.a.createElement(me.a,{as:"h4"},"Step 3:"," ",r.a.createElement(M.a,{horizontal:!0,color:"black"},"in gsheet")," ","select Data > Split text to columns"),r.a.createElement(me.a,{as:"h4"},"Step 4:"," ",r.a.createElement(M.a,{horizontal:!0,color:"black"},"in gsheet")," ","set the seperator as"," ",r.a.createElement(M.a,{horizontal:!0,className:"code"},",")),r.a.createElement(me.a,{as:"h4"},"Step 5:"," ",r.a.createElement(M.a,{horizontal:!0,color:"black"},"in gsheet")," ","Copy the columns you need and paste to the team sheet"))},Fe=function(e){var t=L.filter((function(t){return e[t.key]})).map((function(e){return e.name}));return t.length>0?"\u9762\u5411\uff1a".concat(t.join("\u3001")):null},He=function(e){var t=V.filter((function(t){return e[t.key]})).map((function(e){return e.name}));return t.length>0?"\u52a0\u5206\uff1a".concat(t.join("\u3001")):null},Ye=function(e){return{score:(t=e.status,"yes"===t?3:"no"===t?1:"unsure"===t?2:""),notes:[e.memo||"",Fe(e),He(e)].filter((function(e){return!!e})).join("\uff1b")};var t},Je=function(){var e=Object(i.g)().pathname,t=Object(i.h)().action;return qe.some((function(e){return e.key===t}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement(le.a,{textAlign:"center"},r.a.createElement(D.a,{secondary:!0,widths:3},qe.map((function(t){return r.a.createElement(D.a.Item,{key:t.key,as:l.b,to:"/settings/".concat(t.key),active:e==="/settings/".concat(t.key)},t.name)}))),"backup"===t&&r.a.createElement(De,null),"device"===t&&r.a.createElement(Me,null),"convert"===t&&r.a.createElement(Pe,null))):r.a.createElement(i.a,{to:"/settings/backup"})},qe=[{key:"backup",name:"Backup and recover"},{key:"device",name:"Switch between devices"},{key:"convert",name:"Convert to csv"}],We=function(){var e=_(),t=e.proposals,n=e.refetch,c=S(),o=c.notes,l=c.getNote,s=c.setNote,m=c.saveNotes,u=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1];return{sheet:n,fetchSheet:z,handleFetchDone:function(e){r(e.map((function(e){return{title:e[" Title"],title_en:e[" Title En"]}})))}}}(),p=u.sheet,d=u.fetchSheet,h=u.handleFetchDone;return r.a.createElement(v.Provider,{value:{proposals:t,refetch:n}},r.a.createElement(C.Provider,{value:{notes:o,getNote:l,setNote:s,saveNotes:m}},r.a.createElement(T.Provider,{value:{sheet:p,fetchSheet:d,handleFetchDone:h}},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/settings/:action?"},r.a.createElement(Je,null)),r.a.createElement(i.b,{path:"/proposal/:id"},r.a.createElement("div",null,"proposal")),r.a.createElement(i.b,{path:"/:status?"},r.a.createElement(ze,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(375),n(376);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(We,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[210,1,2]]]);
//# sourceMappingURL=main.e49164c0.chunk.js.map