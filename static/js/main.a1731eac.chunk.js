(this.webpackJsonpaudit=this.webpackJsonpaudit||[]).push([[0],{210:function(e,t,a){e.exports=a(377)},376:function(e,t,a){},377:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(51),o=a.n(c),l=a(18),i=a(16),s=a(30),m=a.n(s),u=a(43),p=a(61),d=a.n(p),h=a(92),f=function(e){if(e.includes("\u6f14\u8b1b"))return"talk";if(e.includes("\u5de5\u4f5c\u574a")){if(e.includes("60"))return"workshop_60";if(e.includes("90"))return"workshop_90";if(e.includes("120"))return"workshop_120"}if(e.includes("\u4e3b\u984c\u8ad6\u58c7")){if(e.includes("60"))return"panel_60";if(e.includes("90"))return"panel_90";if(e.includes("120"))return"panel_120"}console.error("missing format: ",e)},E=function(e){return e.is_slide_cc40&&e.is_presentation_cc40?"everything_open":e.is_presentation_cc40?"presentation_open":e.is_slide_cc40?"slides_open":"unlicensed"},g=function(e){for(var t=0,a=[",","\uff0c","\u3001","/","\b\uff1b"];t<a.length;t++){var n=a[t];if(e.includes(n))return e.split(n).map((function(e){return e.trim()}))}return[e]},v=function(e){var t,a=Object(h.last)(e.versions),n=a.related_url,r=a.speakers,c=a.summary,o=a.summary_en,l=a.title,i=a.title_en;return{id:e._id,version:e.versions_count,related_url:n,speakers:r,summary:c,summary_en:o,title:l,title_en:i,topic:(t=a.topic,t.includes("\u300c\u6c92\u6709\u4eba\u300d\u7684\u5cf6")?"nobody":t.includes("\u5cf6\u5dbc\u5927\u806f\u76df")?"federation":t.includes("\u5927\u5cf6\u958b\u653e")?"open":t.includes("\u6c92\u6709\u5cf6\u662f\u5c40\u5916\u5cf6")?"outside":t.includes("\u7b2c\u56db\u500b\u5cf6")?"fourth":t.includes("\u8ce2\u8005\u4e4b\u5cf6")?"academia":t.includes("\u6d77\u6d77\u4eba\u8072")?"voice":void console.error("missing topic: ",t)),format:f(a.format),license:E(a),keywords:g(a.three_keywords),languages:[a.oral_language,a.oral_languate_other].filter((function(e){return e.length>0})),url:"https://propose.summit2020.g0v.tw/proposal-detail/".concat(e._id)}},y=r.a.createContext(),b=function(){var e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://api.summit2020.g0v.tw/projects");case 3:return t=e.sent,e.abrupt("return",t.data.filter((function(e){return e.enable})).map((function(e){return v(e)})));case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),k=a(17),_=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),a=t[0],r=t[1],c=function(){var e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),{proposals:a,refetch:c}},O=a(27),w="g0vsummit2020audit",j={status:void 0,achievement:!1,experience:!1,research:!1,resource:!1,plan:!1,tutorial:!1,taste:!1,discussion:!1,facet_misc:!1,localization:!1,gender:!1,area:!1,highlight_misc:!1,memo:"",version:void 0},C=[{key:void 0,color:"grey",icon:"clipboard list",name:"TODO"},{key:"wip",color:"grey",icon:"hourglass half",name:"WIP"},{key:"skipped",color:"grey",icon:"step forward",name:"Skipped"},{key:"yes",color:"green",icon:"check",name:"Yes"},{key:"unsure",color:"yellow",icon:"question",name:"Unsure"},{key:"no",color:"red",icon:"ban",name:"No"}],S=[{key:void 0,name:"",name_en:"All topics"},{key:"nobody",name:"\u793e\u7fa4 - \u300c\u6c92\u6709\u4eba\u300d\u7684\u5cf6",name_en:"Community - Nobody\u2019s island"},{key:"federation",name:"\u570b\u969b - \u5cf6\u5dbc\u5927\u806f\u76df",name_en:"International - Island\u2019s federation"},{key:"open",name:"\u958b\u653e\u6587\u5316 - \u5927\u5cf6\u958b\u653e",name_en:"Open culture - Open island"},{key:"outside",name:"\u4eba\u6b0a - \u6c92\u6709\u5cf6\u662f\u5c40\u5916\u5cf6",name_en:"Human rights - No island is outside island"},{key:"fourth",name:"\u5a92\u9ad4 - \u7b2c\u56db\u500b\u5cf6",name_en:"Media - The fourth island"},{key:"academia",name:"\u5b78\u8853 - \u8ce2\u8005\u4e4b\u5cf6",name_en:"Acedamic - Academia Formosa"},{key:"voice",name:"\u9818\u57df\u8b70\u984c - \u6d77\u6d77\u4eba\u8072",name_en:"Domain issues - Voice of the islanders"}],x=[{key:void 0,icon:"",name:"",name_en:"All formats"},{key:"talk",icon:"user",name:"\u6f14\u8b1b",name_en:"Talk"},{key:"panel_60",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7 60 \u5206\u9418",name_en:"Panel discussion 60 mins"},{key:"panel_90",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7 90 \u5206\u9418",name_en:"Panel discussion 90 mins"},{key:"panel_120",icon:"users",name:"\u4e3b\u984c\u8ad6\u58c7 120 \u5206\u9418",name_en:"Panel discussion 120 mins"},{key:"workshop_60",icon:"hand paper",name:"\u5de5\u4f5c\u574a 60 \u5206\u9418",name_en:"Workshop 60 mins"},{key:"workshop_90",icon:"hand paper",name:"\u5de5\u4f5c\u574a 90 \u5206\u9418",name_en:"Workshop 90 mins"},{key:"workshop_120",icon:"hand paper",name:"\u5de5\u4f5c\u574a 120 \u5206\u9418",name_en:"Workshop 120 mins"}],N=[{key:void 0,name:"",name_en:"All licenses"},{key:"everything_open",icon:"check",color:"green",name:"\u6f14\u8b1b\u7d00\u9304\u8207\u6295\u5f71\u7247\u7686\u958b\u653e\u6388\u6b0a",name_en:"Everything open licensed"},{key:"presentation_open",icon:"warning sign",color:"yellow",name:"\u50c5\u6f14\u8b1b\u7d00\u9304\u958b\u653e\u6388\u6b0a",name_en:"Only presentation open licensed"},{key:"slides_open",icon:"warning sign",color:"yellow",name:"\u50c5\u6295\u5f71\u7247\u958b\u653e\u6388\u6b0a",name_en:"Only slides open licensed"},{key:"unlicensed",icon:"minus circle",color:"red",name:"\u672a\u958b\u653e\u6388\u6b0a",name_en:"Unlicensed"}],I=[{key:void 0,name:"",name_en:"All facets"},{key:"achievement",name:"\u5c08\u6848\u6210\u679c\u8207\u5f71\u97ff\u529b",name_en:"Project achievement"},{key:"experience",name:"\u5c08\u6848\u7d93\u9a57\u8ac7",name_en:"Project experience"},{key:"research",name:"\u5206\u6790\u8207\u7814\u7a76",name_en:"Research"},{key:"resource",name:"\u8cc7\u6e90\u4ecb\u7d39",name_en:"Resource"},{key:"plan",name:"\u884c\u52d5\u8a08\u756b",name_en:"Plan"},{key:"tutorial",name:"\u5be6\u52d9\u6559\u5b78",name_en:"Tutorial"},{key:"taste",name:"\u65b9\u6cd5\u9ad4\u9a57\u6216\u89d2\u8272\u626e\u6f14",name_en:"Taste"},{key:"discussion",name:"\u8b70\u984c\u8a0e\u8ad6",name_en:"Discussion"},{key:"facet_misc",name:"\u5176\u4ed6\u9762\u5411",name_en:"Other facets"}],z=[{key:void 0,name:"",name_en:"All highlights"},{key:"localization",name:"\u53f0\u7063\u3001\u6771\u5357\u4e9e\u3001\u6771\u4e9e",name_en:"Localization"},{key:"gender",name:"\u6027\u5225\u5747\u8861",name_en:"Gender balance"},{key:"area",name:"\u5730\u57df\u5747\u8861",name_en:"Area balance"},{key:"highlight_misc",name:"\u5176\u4ed6\u52a0\u5206\u689d\u4ef6",name_en:"Other highlights"}],T=r.a.createContext(),D=function(){var e=Object(n.useState)(function(){var e=window.localStorage.getItem(w);e||(window.localStorage.setItem(w,JSON.stringify({template:Object(O.a)({},j)})),e=window.localStorage.getItem(w));var t=e.indexOf("{"),a=e.slice(t);return JSON.parse(a)}()),t=Object(k.a)(e,2),a=t[0],r=t[1],c=Object(n.useCallback)((function(e){var t=a[e];return t?(C.some((function(e){return e.key===t.status}))||(t.status=void 0),t):Object(O.a)({},j)}),[a]);return{notes:a,getNote:c,setNote:function(e){var t=e.id,n=e.name,o=e.value,l=e.version,i=c(t);i[n]=o,i.version=l,a[t]=i,window.localStorage.setItem(w,JSON.stringify(a)),r(Object(O.a)({},a))},saveNotes:function(e){var t=e.indexOf("{"),a=e.slice(t);window.localStorage.setItem(w,e),r(JSON.parse(a))}}},A=a(124),F=a.n(A),M=function(){var e=Object(u.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vQOgMi9mafWNiVwaf279gX25Hh69ivGjwno0wQyKVAY_5YlWtyTH5hm0yMOS4j43ybo3wbZtrUe2i2I/pub?gid=928708383&single=true&output=csv");case 2:n=e.sent,F.a.parse(n.data,{header:!0,complete:function(e){e.data.some((function(e){return e[" Title"]}))?t(e.data):a()},error:function(e){console.error(e)}});case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Y=function(e){return F.a.unparse(e)},H=r.a.createContext(),P=a(63),q=a(62),J=a(396),W=a(74),R=a(386),B=a(378),G=a(41),L=a(397),U=a(33),V=a.n(U),Q=a(65),X=function(e){var t=e.queries,a=e.name,n=e.value,r=e.pathname,c=Object(O.a)({},t,Object(q.a)({},a,n));return"".concat(r,"?").concat(V.a.stringify(c))};function K(){var e=Object(P.a)(["\n  padding: 0 !important;\n\n  & > .menu {\n    width: 100%;\n    max-width: ",";\n    margin: 0 auto;\n\n    .item .label {\n      background: hsla(0, 0%, 0%, 0.1) !important;\n      opacity: 0.5;\n      .active & {\n        opacity: 1;\n      }\n    }\n  }\n"]);return K=function(){return e},e}var Z=function(){var e=Object(i.h)().status,t=Object(i.g)(),a=t.pathname,c=t.search,o=Object(n.useContext)(y).proposals,s=Object(n.useContext)(T).getNote,m=V.a.parse(c),u=Object(n.useState)(m.search),p=Object(k.a)(u,2),d=p[0],h=p[1];return r.a.createElement(ee,null,r.a.createElement(J.a,{inverted:!0,borderless:!0,stackable:!0,color:"teal"},r.a.createElement(J.a.Item,{as:l.b,to:"/settings",active:a.includes("/settings")},"Audit Helper"),C.map((function(t){var n;return r.a.createElement(J.a.Item,{key:t.name,as:l.b,to:"/".concat(t.key||"").concat(c),active:!a.includes("/settings")&&t.key===e},t.name,r.a.createElement(W.a,null,null===(n=o.filter((function(e){var a;return(null===(a=s(e.id))||void 0===a?void 0:a.status)===t.key})))||void 0===n?void 0:n.length))})),r.a.createElement(J.a.Menu,{position:"right"},r.a.createElement(J.a.Item,null,r.a.createElement(R.a,{transparent:!0,inverted:!0,action:!0,placeholder:"Search...",value:d||"",onChange:function(e,t){var a=t.value;h(a)}},r.a.createElement("input",null),r.a.createElement(B.a,{type:"submit",name:"submit",color:"teal",icon:!0,as:l.b,to:X({queries:m,name:"search",value:d||void 0,pathname:a})},r.a.createElement(G.a,{name:"search"})))),r.a.createElement(J.a.Item,{as:l.b,to:"collapsed"===m.layout?$({queries:m,pathname:a,name:"layout",value:void 0}):$({queries:m,pathname:a,name:"layout",value:"collapsed"})},r.a.createElement(G.a,{name:"collapsed"===m.layout?"list layout":"content"})))))},$=function(e){var t=e.queries,a=e.pathname,n=e.name,r=e.value,c=Object(O.a)({},t,Object(q.a)({},n,r));return"".concat(a,"?").concat(V.a.stringify(c))},ee=Object(Q.a)((function(e){var t=e.className,a=e.children;return r.a.createElement(L.a,{inverted:!0,basic:!0,color:"teal",className:t},a)}))(K(),"1680px"),te=a(393);function ae(){var e=Object(P.a)(["\n  width: 100%;\n  max-width: ",";\n  margin: 1rem auto;\n"]);return ae=function(){return e},e}var ne=[{configs:S,type:"topic"},{configs:x,type:"format"},{configs:N,type:"license"},{configs:I,type:"facet"},{configs:z,type:"highlight"}],re=function(){var e=Object(i.g)(),t=e.pathname,a=e.search,n=V.a.parse(a);return r.a.createElement(oe,null,r.a.createElement(J.a,{secondary:!0,stackable:!0,widths:5},ne.map((function(e){var a,c=e.type,o=e.configs;return r.a.createElement(te.a,{key:c,item:!0,className:n[c]?"active":"",text:(null===(a=ce({queries:n,type:c,configs:o}))||void 0===a?void 0:a.name_en)||"All ".concat(c,"s")},r.a.createElement(te.a.Menu,null,o.map((function(e){return r.a.createElement(te.a.Item,{key:e.name,as:l.b,to:X({queries:n,pathname:t,name:c,value:e.key})},e.name,r.a.createElement("p",null,e.name_en," "))}))))}))))},ce=function(e){var t=e.queries,a=e.type;return e.configs.find((function(e){return e.key===t[a]}))},oe=Q.a.nav(ae(),"1680px"),le=a(388),ie=a(387),se=function(e){var t=e.pages,a=Object(i.g)(),n=a.pathname,c=a.search,o=V.a.parse(c);return r.a.createElement(ie.a,{textAlign:"center"},r.a.createElement(J.a,{pagination:!0,borderless:!0,stackable:!0},t.map((function(e,t){return r.a.createElement(J.a.Item,{as:l.b,to:X({queries:o,pathname:n,name:"page",value:0===t?void 0:t+1}),key:t+1,active:t+1===o.page||0===t&&!o.page},t+1)})),0===t.length&&r.a.createElement(J.a.Item,{active:!0,disabled:!0},"0")))},me=a(398),ue=a(399),pe=a(394),de=function(e){return S.find((function(t){return t.key===e}))},he=function(e){return x.find((function(t){return t.key===e}))},fe=function(e){return N.find((function(t){return t.key===e}))},Ee=function(e){var t=e.proposal,a=de(t.topic),n=he(t.format),c=fe(t.license);return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe.a,{horizontal:!0},t.keywords&&t.keywords.map((function(e){return r.a.createElement(W.a,{key:e,horizontal:!0},e)}))),r.a.createElement(pe.a,null,r.a.createElement(pe.a.Item,null,r.a.createElement(G.a,{name:"talk"}),r.a.createElement(pe.a.Content,null,a.name,r.a.createElement("br",null),a.name_en)),r.a.createElement(pe.a.Item,null,r.a.createElement(G.a,{name:n.icon}),r.a.createElement(pe.a.Content,null,n.name,r.a.createElement("br",null),n.name_en)),r.a.createElement(pe.a.Item,null,r.a.createElement(G.a,{name:"language"}),r.a.createElement(pe.a.Content,null,t.languages.join(", ")))),r.a.createElement(pe.a,null,r.a.createElement(pe.a.Item,null,r.a.createElement(G.a,{name:c.icon,color:c.color}),r.a.createElement(pe.a.Content,null,c.name,r.a.createElement("br",null),c.name_en))))},ge=a(392),ve=function(e){var t=e.speakers;return r.a.createElement(ge.a.Group,{divided:!0},t.map((function(e){return r.a.createElement(ge.a,{key:e.display_name},r.a.createElement(ge.a.Image,{rounded:!0,size:"tiny",src:e.avatar_url}),r.a.createElement(ge.a.Content,null,e.info_url?r.a.createElement(ge.a.Header,{size:"tiny",as:"a",href:e.info_url,target:"_blank",rel:"noopener noreferrer"},e.display_name," ",r.a.createElement(G.a,{name:"linkify",size:"small"})):r.a.createElement(ge.a.Header,{size:"small"},e.display_name),r.a.createElement(ge.a.Meta,null,r.a.createElement(G.a,{name:"map marker alternate"})," ",e.city),r.a.createElement(ge.a.Meta,null,r.a.createElement(G.a,{name:"building"})," ",e.organization),r.a.createElement(ge.a.Description,null,e.bio),r.a.createElement(ge.a.Description,null,e.bio_en)))})))},ye=a(395),be=a(389),ke=function(e){var t=e.proposal,a=Object(n.useContext)(T),c=a.getNote,o=a.setNote,l=c(t.id),i=function(e,a){var n=a.name,r=a.value,c=a.checked;o({id:t.id,name:n,value:r||c,version:t.version})},s=t.version===l.version,m=Object.keys(l).some((function(e){return!!l[e]}));return r.a.createElement(r.a.Fragment,null,m&&!s&&r.a.createElement(ye.a,{icon:!0,warning:!0},r.a.createElement(G.a,{name:"exclamation triangle",color:"yellow"}),r.a.createElement(ye.a.Content,null,"Your review might be outdated")),r.a.createElement(me.a,{columns:2,stackable:!0},r.a.createElement(me.a.Column,{width:10},r.a.createElement(be.a,null,I.map((function(e){return e.key&&r.a.createElement(be.a.Checkbox,{key:e.key,label:"".concat(e.name," ").concat(e.name_en),name:e.key,checked:l[e.key],onChange:i})}))),r.a.createElement(le.a,null),r.a.createElement(be.a,null,z.map((function(e){return e.key&&r.a.createElement(be.a.Checkbox,{key:e.key,label:"".concat(e.name," ").concat(e.name_en),name:e.key,checked:l[e.key],onChange:i})})))),r.a.createElement(me.a.Column,{width:6},r.a.createElement(J.a,{secondary:!0,vertical:!0,fluid:!0},C.map((function(e){return r.a.createElement(J.a.Item,{key:e.key||"",name:"status",value:e.key,color:e.color,active:l.status===e.key,onClick:i},r.a.createElement(G.a,{name:e.icon}),e.name)}))),r.a.createElement(le.a,null),r.a.createElement(be.a,null,r.a.createElement(be.a.TextArea,{name:"memo",value:l.memo||"",placeholder:"Auditor's memo...",onChange:i})),r.a.createElement(pe.a,null,r.a.createElement(pe.a.Item,null,r.a.createElement(W.a,{horizontal:!0},"Current version",r.a.createElement(W.a.Detail,{as:"code"},t.version))),m&&r.a.createElement(pe.a.Item,null,r.a.createElement(W.a,{horizontal:!0},"Reviewed version",r.a.createElement(W.a.Detail,{as:"code"},l.version)))))))},_e=a(99),Oe=a.n(_e),we=a(391),je=function(){var e=Object(u.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://discuss.summit2020.g0v.tw/comments/get/".concat(t,"/0"));case 2:n=e.sent,r=n.data,a({url:"https://discuss.summit2020.g0v.tw/topic/".concat(r.tid),comments:r.posts.map((function(e){return Ce(e)}))});case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Ce=function(e){return{url:"https://discuss.summit2020.g0v.tw/post/".concat(e.pid),author:e.user.username,profile:"https://discuss.summit2020.g0v.tw/uid/".concat(e.user.uid),timestamp:e.timestamp,content:e.content,groups:e.user.groupTitleArray.filter((function(e){return!!e}))}},Se=function(e){var t=e.id,a=Object(n.useState)(null),c=Object(k.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(null),s=Object(k.a)(i,2),m=s[0],u=s[1],p=Object(n.useState)(!1),d=Object(k.a)(p,2),h=d[0],f=d[1],E=function(e){f(!1),u(e.url),l(e.comments)},g=function(){f(!0),je(t,E)};Object(n.useEffect)((function(){o||g()}),[o]);var v={url:m,handleRefresh:g,loading:h};if(!o)return r.a.createElement("p",{className:"center aligned info message"},"Loading comments...");if(0===o.length)return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"center aligned info message"},"No comment"),r.a.createElement(xe,v));var y=o.sort((function(e,t){return e.timestamp<t.timestamp?-1:e.timestamp>t.timestamp?1:0}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(we.a.Group,null,y.map((function(e){var t;return r.a.createElement(we.a,{key:e.content},r.a.createElement(we.a.Author,{as:"a",href:e.profile,target:"_blank",rel:"noopener noreferrer"},e.author),r.a.createElement(we.a.Metadata,{as:"a",href:e.url,target:"_blank",rel:"noopener noreferrer"},Oe()(e.timestamp).format("YYYY-MM-DD HH:mm:ss")),null===(t=e.groups)||void 0===t?void 0:t.map((function(e){return r.a.createElement("span",{key:e,className:"info title"},e)})),r.a.createElement(we.a.Text,{dangerouslySetInnerHTML:{__html:e.content}}))}))),r.a.createElement(xe,v))},xe=function(e){var t=e.url,a=e.handleRefresh,n=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(le.a,null),r.a.createElement("p",{className:"action"},r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(G.a,{name:"external"}),"Join discussions"),r.a.createElement(B.a,{floated:"right",icon:!0,basic:!0,className:"borderless",loading:n,onClick:a},r.a.createElement(G.a,{name:"refresh"}))))};function Ne(){var e=Object(P.a)(["\n  width: 100%;\n  max-width: ",";\n  margin: 0 auto;\n  padding: 0 1rem;\n\n  .grid > .column .menu {\n    margin-left: 0;\n  }\n\n  .ui.header .button {\n    font-size: 1rem;\n    margin-top: -0.4em;\n    padding: 0.785714em;\n  }\n\n  .action .ui.button {\n    margin-top: -0.6rem;\n  }\n\n  .ui.comments .comment {\n    border-top: 1px dashed rgba(34, 36, 38, 0.15);\n\n    &:first-child {\n      border-top: none;\n    }\n\n    .info.title {\n      float: right;\n    }\n\n    .emoji {\n      height: 1.5em;\n      margin: -0.25em 0;\n      display: inline-block;\n    }\n\n    .js-lazyYT.lazyYT-container {\n      width: 100% !important;\n    }\n  }\n"]);return Ne=function(){return e},e}var Ie=function(e){var t=e.proposal,a={proposal:t,id:Object(i.h)().id,search:Object(i.g)().search};return r.a.createElement(Te,null,r.a.createElement(me.a,{stackable:!0,columns:3,key:t.id},r.a.createElement(me.a.Column,{width:3},r.a.createElement(Ee,{proposal:t})),r.a.createElement(me.a.Column,{width:6},r.a.createElement(ze,a),r.a.createElement(le.a,null),r.a.createElement(ve,{speakers:t.speakers}),r.a.createElement(le.a,null),r.a.createElement(Se,{id:t.id})),r.a.createElement(me.a.Column,{width:7},r.a.createElement(ke,{proposal:t}))))},ze=function(e){var t=e.proposal,a=e.id,n=e.search;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{as:"h3"},!a&&r.a.createElement(B.a,{basic:!0,icon:!0,className:"borderless",as:l.b,to:"/proposal/".concat(t.id).concat(n),floated:"right"},r.a.createElement(G.a,{name:"right chevron"})),r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.title),r.a.createElement(ue.a.Subheader,null,t.title_en)),t.related_url&&r.a.createElement("p",null,r.a.createElement("a",{href:t.related_url,target:"_blank",rel:"noopener noreferrer"},"Related URL"," ",r.a.createElement(G.a,{name:"linkify",size:"small"}))),r.a.createElement("p",null,t.summary),r.a.createElement("p",null,t.summary_en))},Te=Q.a.section(Ne(),"1680px"),De=function(e){var t=e.proposal,a={proposal:t,id:null,search:Object(i.g)().search},c=(0,Object(n.useContext)(T).getNote)(t.id),o=C.find((function(e){return e.key===c.status}));return r.a.createElement(Te,null,r.a.createElement(me.a,{stackable:!0,columns:3,key:t.id},r.a.createElement(me.a.Column,{width:4},r.a.createElement(Ee,{proposal:t})),r.a.createElement(me.a.Column,{width:9},r.a.createElement(ze,a)),r.a.createElement(me.a.Column,{width:3},r.a.createElement(J.a,{secondary:!0,vertical:!0,fluid:!0},r.a.createElement(J.a.Item,{color:o.color,active:!0},r.a.createElement(G.a,{name:o.icon}),o.name)),r.a.createElement("p",{className:"info"},c.memo))))},Ae=function(){var e=Object(i.h)().status,t=Object(i.g)().search,a=V.a.parse(t),c=Object(n.useContext)(y).proposals,o=Object(n.useContext)(T).getNote,l=c.filter((function(t){return Fe({proposal:t,note:o(t.id),status:e,queries:a})})),s=Object(h.chunk)(l,25),m=s[a.page-1||0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{pages:s}),r.a.createElement("p",{className:"center aligned info",style:{marginTop:"0.5rem"}},l.length," proposals found"),(null===m||void 0===m?void 0:m.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(le.a,{section:!0}),"collapsed"===a.layout?r.a.createElement(De,{proposal:e}):r.a.createElement(Ie,{proposal:e}))})))||null,r.a.createElement(le.a,null),r.a.createElement(se,{pages:s}),r.a.createElement(le.a,{hidden:!0}))},Fe=function(e){for(var t=e.proposal,a=e.note,n=e.status,r=e.queries,c=0,o=["topic","format","license"];c<o.length;c++){var l=o[c];if(r[l]&&t[l]!==r[l])return!1}return a.status===n&&(!(r.facet&&!a[r.facet])&&(!(r.highlight&&!a[r.highlight])&&!(r.search&&!JSON.stringify(t).includes(r.search))))},Me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement(re,null),r.a.createElement(Ae,null))},Ye=function(e){var t=e.string,a=Object(n.useState)(!1),c=Object(k.a)(a,2),o=c[0],l=c[1];return r.a.createElement(B.a,{icon:!0,onClick:function(){He(t),l(!0);var e=window.setTimeout((function(){l(!1),window.clearTimeout(e)}),5e3)}},r.a.createElement(G.a,{name:o?"green check":"copy"}))},He=function(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)},Pe=function(){var e=Object(n.useContext)(T),t=e.notes,a=e.saveNotes,c=JSON.stringify(t),o="# Audit Helper backup ".concat(Oe()().format("YYYY-MM-DD"),"\n\n  ").concat(c,"\n  "),l=Object(n.useState)(""),i=Object(k.a)(l,2),s=i[0],m=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{padded:"very",basic:!0},r.a.createElement(ue.a,{as:"h3",color:"teal"},"Backup your notes"),r.a.createElement(ue.a,{as:"h4"},"Step 1: Copy your notes to the clipboard"),r.a.createElement(R.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:o}),r.a.createElement(Ye,{string:o})),r.a.createElement(ue.a,{as:"h4"},"Step 2: Paste to a new HackMD"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://hackmd.io/new",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(G.a,{name:"external alternate"}),"New HackMD"))),r.a.createElement(ye.a,{attached:"top",error:!0},"Danger zone below"),r.a.createElement(L.a,{padded:"very",color:"red",secondary:!0,attached:!0},r.a.createElement(ue.a,{as:"h3",color:"teal"},"Recover your notes"),r.a.createElement(ue.a,{as:"h4"},"Step 1:"," ",r.a.createElement(W.a,{horizontal:!0,color:"black"},"in HackMD")," ","Copy your notes to the clipboard"),r.a.createElement(ue.a,{as:"h4"},"Step 2: Paste your notes here and click on the button"),r.a.createElement(R.a,{action:!0},r.a.createElement("input",{className:"code",placeholder:"paste here...",value:s,onChange:function(e){m(e.currentTarget.value)}}),r.a.createElement(B.a,{icon:"save",onClick:function(){a(s)}}))),r.a.createElement(ye.a,{attached:"bottom",error:!0},"Warning: You are going to overite your notes. This action can't be undone."),r.a.createElement(le.a,{hidden:!0}))},qe=function(){var e=Object(n.useContext)(T),t=e.notes,a=e.saveNotes,c=JSON.stringify(t),o=Object(n.useState)(""),l=Object(k.a)(o,2),i=l[0],s=l[1];return r.a.createElement(L.a,{padded:"very",basic:!0},r.a.createElement(ue.a,{as:"h3",color:"teal"},"Transfer your notes to another device"),r.a.createElement(ue.a,{as:"h4"},"Step 1: Copy your notes to the clipboard"),r.a.createElement(R.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:c}),r.a.createElement(Ye,{string:c})),r.a.createElement(ue.a,{as:"h4"},"Step 2: Send your clipboard content to the target device"),r.a.createElement(ue.a,{as:"h4"},"Step 3:"," ",r.a.createElement(W.a,{horizontal:!0,color:"black"},"on the target device")," ","open this web page"),r.a.createElement(ue.a,{as:"h4"},"Step 4:"," ",r.a.createElement(W.a,{horizontal:!0,color:"black"},"on the target device")," ","paste your notes here and click on the button"),r.a.createElement(R.a,{action:!0},r.a.createElement("input",{className:"code",placeholder:"paste here...",value:i,onChange:function(e){s(e.currentTarget.value)}}),r.a.createElement(B.a,{icon:"save",onClick:function(){a(i)}})))},Je=function(e){var t=I.filter((function(t){return e[t.key]})).map((function(e){return e.name}));return t.length>0?"\u9762\u5411\uff1a".concat(t.join("\u3001")):null},We=function(e){var t=z.filter((function(t){return e[t.key]})).map((function(e){return e.name}));return t.length>0?"\u52a0\u5206\uff1a".concat(t.join("\u3001")):null},Re=function(e){return{score:(t=e.status,"yes"===t?3:"no"===t?1:"unsure"===t?2:""),notes:[e.memo||"",Je(e),We(e)].filter((function(e){return!!e})).join("\uff1b")};var t},Be=function(){var e=Object(n.useContext)(y).proposals,t=Object(n.useContext)(T).notes,a=e.map((function(e){var a=t[e.id]||{},n=e.title,r=e.title_en,c=e.keywords,o=e.languages,l=e.url;return Object(O.a)({},Re(a),{title:n,title_en:r,topic:de(e.topic).name,format:he(e.format).name,license:fe(e.license).name,keywords:c.join(" / "),languages:o.join(" / "),url:l})})),c=Y(a);return r.a.createElement(L.a,{padded:"very",basic:!0},r.a.createElement(ue.a,{as:"h3",color:"teal"},"Share your notes with gsheet"),r.a.createElement(ue.a,{as:"h4"},"Step 1: Copy the following csv string to the clipboard"),r.a.createElement(R.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:c}),r.a.createElement(Ye,{string:c})),r.a.createElement(ue.a,{as:"h4"},"Step 2: Open your working gsheet and paste the csv string into it"),r.a.createElement(ue.a,{as:"h4"},"Step 3:"," ",r.a.createElement(W.a,{horizontal:!0,color:"black"},"in gsheet")," ","select Data > Split text to columns"),r.a.createElement(ue.a,{as:"h4"},"Step 4:"," ",r.a.createElement(W.a,{horizontal:!0,color:"black"},"in gsheet")," ","set the seperator as"," ",r.a.createElement(W.a,{horizontal:!0,className:"code"},",")),r.a.createElement(ue.a,{as:"h4"},"Step 5: Share the gsheet to your coworkers"))},Ge=function(){var e=Object(n.useContext)(y).proposals,t=Object(n.useContext)(T).notes,a=Object(n.useContext)(H),c=a.sheet,o=a.fetchSheet,l=a.handleFetchDone,i=Object(n.useState)(!1),s=Object(k.a)(i,2),m=s[0],u=s[1],p=Object(n.useState)(""),d=Object(k.a)(p,2),h=d[0],f=d[1],E=function(e){f(""),u(!1),l(e)},g=function(){f(""),u(!0)};Object(n.useEffect)((function(){0===c.length&&o(E,g)}),[c.length]);var v=c.map((function(a){var n=e.find((function(e){return e.title===a.title||e.title_en===a.title_en}));if(n){var r=t[n.id]||{};return Object(O.a)({},Re(r),{},a)}return{}})),b=Y(v);return r.a.createElement(L.a,{padded:"very",basic:!0},r.a.createElement(ue.a,{as:"h3",color:"teal"},"Share your notes to the team sheet (obsolete)"),r.a.createElement(ue.a,{as:"h4"},"Step 1: Copy the following csv string to the clipboard"),r.a.createElement(R.a,{readOnly:!0,action:!0},r.a.createElement("input",{style:{background:"#fafafa"},className:"code",value:b}),r.a.createElement(Ye,{string:b})),m&&r.a.createElement(ye.a,{warning:!0},r.a.createElement("p",null,"Error: importJSON still working."),r.a.createElement(B.a,{color:"yellow",onClick:function(){f("loading"),o(E,g)},className:h},r.a.createElement(G.a,{name:"refresh"}),"retry")),r.a.createElement(ue.a,{as:"h4"},"Step 2: Open a blank gsheet and paste the csv string into it"),r.a.createElement(ue.a,{as:"h4"},"Step 3:"," ",r.a.createElement(W.a,{horizontal:!0,color:"black"},"in gsheet")," ","select Data > Split text to columns"),r.a.createElement(ue.a,{as:"h4"},"Step 4:"," ",r.a.createElement(W.a,{horizontal:!0,color:"black"},"in gsheet")," ","set the seperator as"," ",r.a.createElement(W.a,{horizontal:!0,className:"code"},",")),r.a.createElement(ue.a,{as:"h4"},"Step 5:"," ",r.a.createElement(W.a,{horizontal:!0,color:"black"},"in gsheet")," ","Copy the columns you need and paste to the team sheet"))},Le=function(){var e=Object(i.g)().pathname,t=Object(i.h)().action;return Ue.some((function(e){return e.key===t}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement(ie.a,{textAlign:"center"},r.a.createElement(J.a,{secondary:!0,widths:4},Ue.map((function(t){return r.a.createElement(J.a.Item,{key:t.key,as:l.b,to:"/settings/".concat(t.key),active:e==="/settings/".concat(t.key)},t.name)}))),"backup"===t&&r.a.createElement(Pe,null),"device"===t&&r.a.createElement(qe,null),"convert"===t&&r.a.createElement(Be,null),"convert_v0"===t&&r.a.createElement(Ge,null))):r.a.createElement(i.a,{to:"/settings/backup"})},Ue=[{key:"backup",name:"Backup and recover"},{key:"device",name:"Switch between devices"},{key:"convert",name:"Share notes"},{key:"convert_v0",name:"Convert to csv (obsolete)"}],Ve=function(){var e=Object(i.h)().id,t=Object(n.useContext)(y).proposals.find((function(t){return t.id===e})),a=(0,Object(n.useContext)(T).getNote)(e).status,c=Object(i.g)().search,o="/".concat(a||"").concat(c);return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null,r.a.createElement(J.a,{inverted:!0,borderless:!0,stackable:!0,color:"teal"},r.a.createElement(J.a.Item,{as:l.b,to:o},r.a.createElement(G.a,{name:"left chevron"}),"Back"))),r.a.createElement(le.a,{hidden:!0}),r.a.createElement(Ie,{proposal:t})):null},Qe=function(){var e=_(),t=e.proposals,a=e.refetch,c=D(),o=c.notes,l=c.getNote,s=c.setNote,m=c.saveNotes,u=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),a=t[0],r=t[1];return{sheet:a,fetchSheet:M,handleFetchDone:function(e){r(e.map((function(e){return{title:e[" Title"],title_en:e[" Title En"]}})))}}}(),p=u.sheet,d=u.fetchSheet,h=u.handleFetchDone;return r.a.createElement(y.Provider,{value:{proposals:t,refetch:a}},r.a.createElement(T.Provider,{value:{notes:o,getNote:l,setNote:s,saveNotes:m}},r.a.createElement(H.Provider,{value:{sheet:p,fetchSheet:d,handleFetchDone:h}},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/settings/:action?"},r.a.createElement(Le,null)),r.a.createElement(i.b,{path:"/proposal/:id"},r.a.createElement(Ve,null)),r.a.createElement(i.b,{path:"/:status?"},r.a.createElement(Me,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(375),a(376);o.a.render(r.a.createElement(l.a,null,r.a.createElement(Qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[210,1,2]]]);
//# sourceMappingURL=main.a1731eac.chunk.js.map