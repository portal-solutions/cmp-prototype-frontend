(this["webpackJsonprmp-prototype-frontend"]=this["webpackJsonprmp-prototype-frontend"]||[]).push([[0],{188:function(e){e.exports=JSON.parse('[{"uid":"45aba0d3-e7f1-4209-859e-48a467886527","username":"gregory.j.baker@hrsdc-rhdcc.gc.ca","password":"p@ssword1","name":"Greg Baker"}]')},200:function(e,t,a){e.exports=a(422)},420:function(e,t,a){},421:function(e,t,a){},422:function(e,t,a){"use strict";a.r(t);a(201),a(210);var n=a(0),r=a.n(n),l=a(187),c=a.n(l),o=a(32),m=a(53),i=a(34),s=a(188),u=Object(n.createContext)(),d=function(){return Object(n.useContext)(u)},p=function(e){var t=e.children,a=Object(n.useState)(JSON.parse(localStorage.getItem("authContext")||sessionStorage.getItem("authContext"))),l=Object(i.a)(a,2),c=l[0],o=l[1];return r.a.createElement(u.Provider,{value:{authContext:c,authenticate:function(e,t,a){var n=s.find((function(a){return a.username===e&&a.password===t}));if(n){var r={name:n.name,uid:n.uid};a?localStorage.setItem("authContext",JSON.stringify(r)):sessionStorage.setItem("authContext",JSON.stringify(r)),o(r)}return n},deauthenticate:function(){localStorage.removeItem("authContext"),sessionStorage.removeItem("authContext"),o(null)}}},t)},b=a(189),E=a(198),g=a(190),h=a(191),f=a(33);E.a.use(h.a).use(g.a).use(f.a).init({backend:{loadPath:"".concat("/rmp-prototype-frontend","/locales/{{lng}}/{{ns}}.json")},detection:{caches:["localStorage"],lookupLocalStorage:"locale",lookupQuerystring:"locale",order:["querystring","localStorage","navigator"]},fallbackLng:"en",interpolation:{escapeValue:!1},load:"languageOnly",ns:["wet-boew"],whitelist:["en","fr"]});var v={dateModified:"2019-12-09",debug:Object({NODE_ENV:"production",PUBLIC_URL:"/rmp-prototype-frontend",REACT_APP_VERSION:"0.0.0"}).REACT_APP_DEBUG,gitCommit:"e959eafd",version:"0.0.0"};function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var y=v.dateModified,O=v.gitCommit,w=v.version,j=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{},t)},x=Object(n.createContext)(),S=function(){return Object(n.useContext)(x)},k=function(e){var t=e.children,a=Object(n.useReducer)(j,{dateModified:y,gitCommit:O,version:w}),l=Object(i.a)(a,2),c=l[0],o=l[1];return r.a.createElement(x.Provider,{value:{pageDetails:c,setPageDetails:Object(n.useCallback)(o)}},t)},C=a(199),I=function(e){var t=e.component,a=(e.authorities,e.path),n=Object(C.a)(e,["component","authorities","path"]),l=d().authContext;return r.a.createElement(m.b,n,l?r.a.createElement(t,n):r.a.createElement(m.a,{push:!0,to:{pathname:"/sign-in",state:{from:a,showWarning:!0}}}))};I.defaultProps={authorities:[]};var P=I,W=a(13),D=a(15),z=function(e){return new Promise((function(t){return setTimeout(t,e)}))},T=function(e){var t=e.showSignIn,a=d(),l=Object(m.g)(),c=Object(f.b)().t,s=Object(n.useState)(),u=Object(i.a)(s,2),p=u[0],b=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-default"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"nav navbar-nav navbar-left"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{className:"btn btn-lg btn-link z-depth-0",type:"button"},r.a.createElement("span",{style:{color:"#f77",fontWeight:"bold",marginRight:"0.5rem"}},c("relationship")),r.a.createElement("span",null,r.a.createElement("em",null,c("management-portal"))))))),r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},t&&!a.authContext&&r.a.createElement("li",null,r.a.createElement(o.b,{to:"/sign-in"},r.a.createElement("button",{className:"btn btn-lg btn-primary z-depth-1",type:"button"},r.a.createElement(D.a,{fixedWidth:!0,icon:W.i})," Sign in"))),a.authContext&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/profile"},r.a.createElement("button",{className:"btn btn-lg btn-link z-depth-0",style:{fontWeight:"bold"},type:"button"},r.a.createElement("span",{className:"fa-layers fa-fw"},r.a.createElement(D.a,{fixedWidth:!0,icon:W.l,style:{marginRight:"1rem"}})),a.authContext.name))),r.a.createElement("li",{style:{padding:"13.5px 15px"}},r.a.createElement("button",{className:"btn btn-lg btn-danger z-depth-1",type:"button",onClick:function(){b(!0),z(500).then((function(){return b(!1)})).then((function(){a.deauthenticate(),l.push("/")}))}},r.a.createElement(D.a,{fixedWidth:!0,icon:p?W.j:W.g,spin:p})," Sign out")))))))};T.defaultProps={showSignIn:!0};var B=T,L=function(){var e=Object(f.b)("wet-boew"),t=e.i18n,a=e.t;return r.a.createElement("div",{className:"global-header"},r.a.createElement("nav",null,r.a.createElement("ul",{id:"wb-tphp"},r.a.createElement("li",{className:"wb-slc"},r.a.createElement("a",{className:"wb-sl",href:"#wb-cont"},a("header.skip-links.main-content"))),r.a.createElement("li",{className:"wb-slc"},r.a.createElement("a",{className:"wb-sl",href:"#wb-info"},a("header.skip-links.about-government"))))),r.a.createElement("header",null,r.a.createElement("div",{id:"wb-bnr",className:"container"},r.a.createElement("section",{id:"wb-lng",className:"text-right"},r.a.createElement("h2",{className:"wb-inv"},a("language-selection")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("ul",{className:"list-inline margin-bottom-none"},r.a.createElement("li",null,r.a.createElement("button",{lang:a("language-lang"),type:"button",className:"btn btn-link",onClick:function(){var e=t.language.startsWith("fr");t.changeLanguage(e?"en":"fr")},style:{padding:"0rem"}},a("header.language-toggle"))))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"brand col-xs-5 col-md-4",property:"publisher",typeof:"GovernmentOrganization"},r.a.createElement("a",{href:a("header.canada-href"),property:"url"},r.a.createElement("img",{src:a("header.brand-img-href"),alt:"",property:"logo"}),r.a.createElement("span",{className:"wb-inv",property:"name"},a("header.brand-text"))),r.a.createElement("meta",{property:"areaServed",typeof:"Country",content:"Canada"}),r.a.createElement("link",{property:"logo",href:a("header.brand-logo.href")}))))))},F=(a(420),function(){var e=Object(f.b)("wet-boew").t,t=S().pageDetails;return r.a.createElement("div",{className:"pagedetails clearfix"},(t.pageId||t.dateModified||t.version)&&r.a.createElement("dl",{id:"wb-dtmd"},t.pageId&&r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",null,e("page-details.screen-identifier")),r.a.createElement("dd",{property:"identifier"},t.pageId)),t.dateModified&&r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",null,e("page-details.date-modified")),r.a.createElement("dd",null,r.a.createElement("time",{property:"dateModified"},t.dateModified))),t.version&&r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",null,e("page-details.version")),r.a.createElement("dd",{property:"version"},t.version,"-",t.gitCommit))))}),A=function(e){var t=e.children,a=e.to,n=Object(m.h)();return r.a.createElement("li",{role:"presentation",className:n.pathname===a?"active":null},r.a.createElement(o.b,{to:a},t))},R=function(){return r.a.createElement("ul",{className:"nav nav-pills nav-stacked"},r.a.createElement(A,{to:"/"},r.a.createElement(D.a,{fixedWidth:!0,icon:W.d,style:{marginRight:"1rem"}}),r.a.createElement("span",null,"Home")),r.a.createElement(A,{to:"/profile"},r.a.createElement(D.a,{fixedWidth:!0,icon:W.k,style:{marginRight:"1rem"}}),r.a.createElement("span",null,"Profile")))},M=function(e){var t=e.children,a=e.showSignIn;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement(B,{showSignIn:a}),r.a.createElement("main",{property:"mainContentOfPage",typeof:"WebPageElement"},r.a.createElement("div",{className:"container",style:{marginTop:"5rem"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-4"},r.a.createElement(R,null)),r.a.createElement("div",{className:"col-lg-9 col-md-9 col-sm-8"},t," ",r.a.createElement(F,null))))))};M.defaultProps={showSignIn:!0};var J=M,V=function(){return r.a.createElement(J,null,r.a.createElement("p",null,"Not Found"))},_={home:"SE-0001",profile:"SE-0002",stakeholders:"SE-0003"},U=function(){return r.a.createElement("div",{className:"mrgn-tp-lg"},r.a.createElement("button",{type:"button",className:"btn btn-block btn-lg btn-default z-depth-1",style:{paddingTop:"2rem",paddingBottom:"2rem"}},r.a.createElement(D.a,{fixedWidth:!0,icon:W.c})," ",r.a.createElement("span",null,"Meetings")),r.a.createElement("p",{className:"text-muted"},"View or edit past stakeholder meetings & engagements."))},G=function(){return r.a.createElement("div",{className:"mrgn-tp-lg"},r.a.createElement("form",{action:"#",method:"get",role:"search"},r.a.createElement("label",{htmlFor:"search",className:"sr-only"},"Search website"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{id:"search",className:"form-control",name:"q",type:"search",placeholder:"Search (name, location, subject, date...)"}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{type:"submit",id:"search-submit",className:"btn btn-default",style:{padding:"0rem 5rem"}},r.a.createElement(D.a,{fixedWidth:!0,icon:W.h,title:"Search"}))))))},q=function(){return r.a.createElement("div",{className:"mrgn-tp-lg"},r.a.createElement(o.b,{to:"/stakeholders",className:"btn btn-block btn-lg btn-default z-depth-1",style:{paddingTop:"2rem",paddingBottom:"2rem"}},r.a.createElement(D.a,{fixedWidth:!0,icon:W.a})," ",r.a.createElement("span",null,"List Stakeholders")),r.a.createElement("p",{className:"text-muted"},"View or edit the list of stakeholders and see their profiles, statuses or engagements."))},H=function(){var e=S().setPageDetails;return Object(n.useEffect)((function(){return e({pageId:_.home})}),[e]),r.a.createElement(J,null,r.a.createElement("h1",{id:"wb-cont",property:"name"},"Stakeholder engagement"),r.a.createElement("p",{className:"lead mrgn-bttm-0"},"What do you wish to do?"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(G,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(q,null)),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(U,null))))},K=function(){var e=S().setPageDetails;return Object(n.useEffect)((function(){return e({pageId:_.profile})}),[e]),r.a.createElement(J,null,r.a.createElement("h1",{id:"wb-cont",property:"name"},"Your profile"))},Q=function(){return r.a.createElement("div",{role:"alert",className:"alert alert-danger"},r.a.createElement("span",null,"Invalid username or password."))},Y=function(){var e=Object(f.b)().t;return r.a.createElement("h1",{className:"h2 text-center",style:{border:"none",margin:"0rem",padding:"0rem"}},r.a.createElement("span",{style:{color:"#f77",display:"block"}},e("relationship")),r.a.createElement("span",{style:{color:"#777",display:"block",fontStyle:"italic",fontWeight:"normal",marginTop:"-0.75rem"}},e("management-portal")))},X=function(){var e=Object(f.b)().t;return r.a.createElement("div",{role:"alert",className:"alert alert-warning",style:{marginTop:"3rem"}},r.a.createElement("span",null,e("sign-in.you-must-login")))},Z=function(){var e=d(),t=Object(m.g)(),a=Object(m.h)(),l=Object(f.b)().t,c=Object(n.useState)("gregory.j.baker@hrsdc-rhdcc.gc.ca"),o=Object(i.a)(c,2),s=o[0],u=o[1],p=Object(n.useState)("p@ssword1"),b=Object(i.a)(p,2),E=b[0],g=b[1],h=Object(n.useState)(!1),v=Object(i.a)(h,2),N=v[0],y=v[1],O=Object(n.useState)(),w=Object(i.a)(O,2),j=w[0],x=w[1],S=Object(n.useState)(),k=Object(i.a)(S,2),C=k[0],I=k[1],P=(a.state||{from:"/"}).from,T=(a.state||{showWarning:!1}).showWarning;return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement(B,{showSignIn:!1}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{marginTop:"3rem"}},r.a.createElement("div",{className:"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"},r.a.createElement("div",{className:"panel panel-default z-depth-1"},r.a.createElement("div",{className:"panel-body"},r.a.createElement(Y,null),T&&r.a.createElement(X,null),r.a.createElement("form",{style:{marginTop:"3rem"},onSubmit:function(a){a.preventDefault(),I(!0),z(500).then((function(){return I(!1)})).then((function(){e.authenticate(s,E,N)?t.push(P):x(!0)}))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("span",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement(D.a,{fixedWidth:!0,icon:W.b})),r.a.createElement("label",{htmlFor:"email-address",className:"sr-only control-label"},l("sign-in.email-address")),r.a.createElement("input",{type:"text",id:"email-address",placeholder:l("sign-in.email-address"),className:"form-control",value:s,onChange:function(e){return u(e.target.value)}}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("span",{className:"input-group"},r.a.createElement("span",{className:"input-group-addon"},r.a.createElement(D.a,{fixedWidth:!0,icon:W.e})),r.a.createElement("label",{htmlFor:"password",className:"sr-only control-label"},l("sign-in.password")),r.a.createElement("input",{type:"password",id:"password",placeholder:l("sign-in.password"),className:"form-control",value:E,onChange:function(e){return g(e.target.value)}}))),r.a.createElement("div",{className:"checkbox"},r.a.createElement("label",{htmlFor:"remember-me"},r.a.createElement("input",{type:"checkbox",id:"remember-me",value:N,onChange:function(e){return y(e.target.checked)}}),l("sign-in.remember-me"))),j&&r.a.createElement(Q,null),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("button",{className:"btn btn-lg btn-primary z-depth-1",type:"submit",style:{flexGrow:"1"}},r.a.createElement(D.a,{fixedWidth:!0,icon:C?W.j:W.i,spin:C})," ",l("sign-in.sign-in")),r.a.createElement("a",{className:"btn btn-lg btn-link z-depth-0",type:"button",href:"#"},l("sign-in.forgot-password"))))),r.a.createElement("div",{className:"panel-footer text-center"},r.a.createElement("a",{className:"btn btn-lg btn-link z-depth-0",type:"button",href:"#"},l("sign-in.create-account"))))))))},$=function(e){var t=e.size;return r.a.createElement(D.a,{spin:!0,icon:W.j,size:t,className:"center-block",style:{marginBottom:"1.5rem",marginTop:"1.5rem"}})};$.defaultProps={size:"1x"};var ee=$,te=[{name:"CIBC",location:"Amman, Jordan",type:"Banking",contactName:"IITB",contactEmail:"iitb@shareables.ca",contactPerson:"Omar Al-Dib"},{name:"LinkdIn",location:"Ottawa, Ontario",type:"Social/E-Learning",contactName:"IITB",contactEmail:"iitb@shareables.ca",contactPerson:"Omar Al-Dib"},{name:"Instagram",location:"Ottawa, Ontario",type:"Social/E-Learning",contactName:"IITB",contactEmail:"iitb@shareables.ca",contactPerson:"Omar Al-Dib"},{name:"CarletonU",location:"Ottawa, Ontario",type:"Social/E-Learning",contactName:"IITB",contactEmail:"iitb@shareables.ca",contactPerson:"Omar Al-Dib"},{name:"RBC",location:"Ottawa, Ontario",type:"Social/E-Learning",contactName:"IITB",contactEmail:"iitb@shareables.ca",contactPerson:"Omar Al-Dib"},{name:"Udemy",location:"Ottawa, Ontario",type:"Social/E-Learning",contactName:"IITB",contactEmail:"iitb@shareables.ca",contactPerson:"Omar Al-Dib"}],ae=function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("button",{type:"button",className:"btn btn-lg btn-block z-depth-1"},"Print report")),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("button",{type:"button",className:"btn btn-lg btn-block z-depth-1"},"Add comments")),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("button",{type:"button",className:"btn btn-lg btn-block z-depth-1"},"View profile")))},ne=function(){return r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{type:"button",className:"btn z-depth-1"},"New ",r.a.createElement(D.a,{fixedWidth:!0,icon:W.f})))},re=function(){return r.a.createElement("div",{className:"mrgn-tp-lg"},r.a.createElement("form",{action:"#",method:"get",role:"search"},r.a.createElement("label",{htmlFor:"search",className:"sr-only"},"Search website"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{id:"search",className:"form-control",name:"q",type:"search",placeholder:"Search (name, location, subject, date...)"}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{type:"submit",id:"search-submit",className:"btn btn-default",style:{padding:"0rem 5rem"}},r.a.createElement(D.a,{fixedWidth:!0,icon:W.h,title:"Search"}))))))},le=function(){return r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-bordered table-condensed table-striped mrgn-tp-lg"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Location"),r.a.createElement("th",{scope:"col"},"Theme/Type"),r.a.createElement("th",{scope:"col"},"Key Contact + Email"),r.a.createElement("th",{scope:"col"},"ESDC Contact"))),r.a.createElement("tbody",null,te.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.location),r.a.createElement("td",null,e.type),r.a.createElement("td",null,e.contactName," (",r.a.createElement("a",{href:"mailto:".concat(e.contactEmail)},e.contactEmail),")"),r.a.createElement("td",null,r.a.createElement("a",{href:"#"},e.contactPerson)))})))))},ce=function(){var e=S().setPageDetails;return Object(n.useEffect)((function(){return e({pageId:_.stakeholders})}),[e]),r.a.createElement(J,null,r.a.createElement("h1",{id:"wb-cont",property:"name"},"List of stakeholders"),r.a.createElement(ne,null),r.a.createElement(re,null),r.a.createElement(le,null),r.a.createElement(ae,null))};a(421);c.a.render(r.a.createElement((function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(ee,{size:"5x"})},r.a.createElement(p,null,r.a.createElement(k,null,r.a.createElement(o.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",component:H}),r.a.createElement(m.b,{exact:!0,path:"/sign-in",component:Z}),r.a.createElement(P,{exact:!0,path:"/profile",component:K}),r.a.createElement(P,{exact:!0,path:"/stakeholders",component:ce}),r.a.createElement(m.b,{component:V}))))))}),null),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.e4608c4b.chunk.js.map