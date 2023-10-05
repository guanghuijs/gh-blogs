import{d as c,a1 as x,H as i,a4 as z,h as d,j as A,z as D,l as r,o as e,b as C,w as b,c as p,k as l,n as h,e as F,t as f,T,g as q,r as k,N as w,a as u,p as I,m as P,a5 as $,F as N,D as V,_ as j,Q as H}from"./chunks/framework.a16c8809.js";import{T as O}from"./chunks/Frame.d8b1492c.js";const L={key:0,class:"toast-out"},J={class:"toast-main"},M=c({__name:"toast",props:{message:{type:String,default:"轻提示"},icon:String,wait:{type:Number,default:2e3}},setup(s){const n=s,o=d(),a=d(!1);return A(()=>{a.value=!0,n.wait!==-1&&(o.value=setTimeout(()=>{a.value=!1},n.wait))}),D(()=>{clearTimeout(r(o))}),(t,E)=>(e(),C(T,null,{default:b(()=>[a.value?(e(),p("div",L,[l("div",J,[s.icon?(e(),p("i",{key:0,class:h(`iconfont icon-${s.icon}`)},null,2)):F("",!0),l("p",null,f(s.message),1)])])):F("",!0)]),_:1}))}}),m=(s,n)=>{const o=s.__vccOpts||s;for(const[a,t]of n)o[a]=t;return o},Q=m(M,[["__scopeId","data-v-98884258"]]),R=s=>{var n;(n=document.querySelector("#toast-cont"))==null||n.remove();const o=document.createElement("div");o.id="toast-cont";const a=i(Q,s);z(a,o),document.querySelector("#app").appendChild(o)},U={name:{type:String,require:!0},size:{type:[String,Number],default:"20px"},color:{type:String,default:"#333"}},G=c({name:"HIcon",props:U,emits:["iconClick"],setup:s=>({calStyle:q(()=>({fontSize:typeof s.size=="number"?`${s.size}px`:s.size,color:s.color}))})}),K=s=>(I("data-v-8a25a839"),s=s(),P(),s),Z=K(()=>l("span",null,null,-1)),W={class:"badge"};function X(s,n,o,a,t,E){return e(),p("div",{class:"icon__cont",onClick:n[0]||(n[0]=S=>s.$emit("iconClick"))},[k(s.$slots,"default",{},()=>[l("i",{class:h(["iconfont",s.name]),style:w(s.calStyle)},null,6)],!0),Z,l("div",W,f(s.$attrs.badge),1)])}const Y=m(G,[["render",X],["__scopeId","data-v-8a25a839"]]),ss={open:{type:Boolean,require:!1},position:{type:String,default:"bottom"},width:{type:String,default:"50vw"},height:{type:String,default:"50vh"}},B=c({name:"HPopup",props:ss,emits:["update:open"],setup:s=>({position:s.position})}),_=()=>{x(s=>({"0324f62e":s.height,"3abd8bdf":s.width}))},v=B.setup;B.setup=v?(s,n)=>(_(),v(s,n)):_;const ns={type:String},os=c({name:"HButton",props:ns});function as(s,n,o,a,t,E){return e(),p("div",{class:h(["btn",s.type])},[k(s.$slots,"default",{},()=>[u("按钮")],!0)],2)}const ls=m(os,[["render",as],["__scopeId","data-v-61bb14ed"]]),es=["icon-menu","icon-star","icon-close","icon-shop","icon-time","icon-scan-code","icon-card","icon-banner","icon-music","icon-add","icon-message","icon-more","icon-right","icon-tips","icon-stop","icon-diamond","icon-bill","icon-mail","icon-brush","icon-plaint","icon-flower","icon-video","icon-like","icon-correct","icon-chart","icon-headset","icon-pause","icon-gift","icon-house","icon-share","icon-hot","icon-cat","icon-tip","icon-ipa","icon-money","icon-passed","icon-album","icon-love","icon-msg","icon-tags","icon-bad","icon-flame","icon-share-o","icon-trumpet","icon-phone","icon-adress","icon-set","icon-reduce","icon-add-o","icon-refresh","icon-phone-o","icon-smile","icon-id-card","icon-play","icon-medal","icon-wallet","icon-store","icon-trolley","icon-voucher","icon-todo"],ps={class:"icon-show-box"},ts=c({__name:"icon",setup(s){const n=d(""),o=g=>{n.value=g,t(),R({message:`${n.value}`})},{text:a,copy:t,copied:E,isSupported:S}=$({source:n});return(g,ds)=>(e(),p("div",null,[(e(!0),p(N,null,V(r(es),y=>(e(),C(r(ls),{key:y,onClick:hs=>o(`<h-icon name='${y}'></h-icon>`)},{default:b(()=>[l("div",ps,[i(r(Y),{name:y},null,8,["name"])])]),_:2},1032,["onClick"]))),128))]))}});const cs=j(ts,[["__scopeId","data-v-04daf9cc"]]),rs=l("h1",{id:"图标",tabindex:"-1"},[u("图标 "),l("a",{class:"header-anchor",href:"#图标","aria-label":'Permalink to "图标"'},"​")],-1),is=l("h2",{id:"附带图标库",tabindex:"-1"},[u("附带图标库 "),l("a",{class:"header-anchor",href:"#附带图标库","aria-label":'Permalink to "附带图标库"'},"​")],-1),Es=H("",8),gs=JSON.parse('{"title":"图标","description":"","frontmatter":{},"headers":[],"relativePath":"ghui/组件-icon.md","filePath":"ghui/组件-icon.md"}'),ys={name:"ghui/组件-icon.md"},Fs=Object.assign(ys,{setup(s){return(n,o)=>(e(),p("div",null,[rs,i(O,{src:"https://guanghuijs.gitee.io/ghui-next/#/icon"}),is,i(cs),Es]))}});export{gs as __pageData,Fs as default};
