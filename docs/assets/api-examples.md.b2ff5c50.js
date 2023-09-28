import{_ as u,C as p,o as r,b as g,w as l,a as s,u as E,c as _,k as a,t as n,l as t,H as o,Q as y}from"./chunks/framework.4dc46fed.js";const f={};function b(c,i){const e=p("a-button");return r(),g(e,null,{default:l(()=>[s("按钮")]),_:1})}const P=u(f,[["render",b]]),v=y(`<h1 id="runtime-api-examples" tabindex="-1">Runtime API Examples <a class="header-anchor" href="#runtime-api-examples" aria-label="Permalink to &quot;Runtime API Examples&quot;">​</a></h1><p>This page demonstrates usage of some of the runtime APIs provided by VitePress.</p><p>The main <code>useData()</code> API can be used to access site, theme, and page data for the current page. It works in both <code>.md</code> and <code>.vue</code> files:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">## Results</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Theme Data</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Page Data</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Page Frontmatter</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="color:#24292E;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">## Results</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Theme Data</span></span>
<span class="line"><span style="color:#24292E;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Page Data</span></span>
<span class="line"><span style="color:#24292E;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Page Frontmatter</span></span>
<span class="line"><span style="color:#24292E;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre></div><h2 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-label="Permalink to &quot;Results&quot;">​</a></h2><h3 id="theme-data" tabindex="-1">Theme Data <a class="header-anchor" href="#theme-data" aria-label="Permalink to &quot;Theme Data&quot;">​</a></h3>`,6),k=a("h3",{id:"page-data",tabindex:"-1"},[s("Page Data "),a("a",{class:"header-anchor",href:"#page-data","aria-label":'Permalink to "Page Data"'},"​")],-1),D=a("h3",{id:"page-frontmatter",tabindex:"-1"},[s("Page Frontmatter "),a("a",{class:"header-anchor",href:"#page-frontmatter","aria-label":'Permalink to "Page Frontmatter"'},"​")],-1),x=a("h2",{id:"more",tabindex:"-1"},[s("More "),a("a",{class:"header-anchor",href:"#more","aria-label":'Permalink to "More"'},"​")],-1),C=a("h2",{id:"demo",tabindex:"-1"},[s("demo "),a("a",{class:"header-anchor",href:"#demo","aria-label":'Permalink to "demo"'},"​")],-1),A=a("div",{class:"language-vue vp-adaptive-theme"},[a("span",{class:"lang"},"vue"),a("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#E1E4E8"}},"<"),a("span",{style:{color:"#85E89D"}},"template"),a("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#E1E4E8"}},"  <"),a("span",{style:{color:"#85E89D"}},"a-button"),a("span",{style:{color:"#E1E4E8"}},">按钮</"),a("span",{style:{color:"#85E89D"}},"a-button"),a("span",{style:{color:"#E1E4E8"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#E1E4E8"}},"</"),a("span",{style:{color:"#85E89D"}},"template"),a("span",{style:{color:"#E1E4E8"}},">")])])]),a("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[a("code",null,[a("span",{class:"line"},[a("span",{style:{color:"#24292E"}},"<"),a("span",{style:{color:"#22863A"}},"template"),a("span",{style:{color:"#24292E"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292E"}},"  <"),a("span",{style:{color:"#22863A"}},"a-button"),a("span",{style:{color:"#24292E"}},">按钮</"),a("span",{style:{color:"#22863A"}},"a-button"),a("span",{style:{color:"#24292E"}},">")]),s(`
`),a("span",{class:"line"},[a("span",{style:{color:"#24292E"}},"</"),a("span",{style:{color:"#22863A"}},"template"),a("span",{style:{color:"#24292E"}},">")])])])],-1),T=a("p",null,[s("Check out the documentation for the "),a("a",{href:"https://vitepress.dev/reference/runtime-api#usedata",target:"_blank",rel:"noreferrer"},"full list of runtime APIs"),s(".")],-1),B=JSON.parse('{"title":"Runtime API Examples","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api-examples.md","filePath":"api-examples.md"}'),F={name:"api-examples.md"},V=Object.assign(F,{setup(c){const{site:i,theme:e,page:d,frontmatter:h}=E();return(w,I)=>{const m=p("demo");return r(),_("div",null,[v,a("pre",null,n(t(e)),1),k,a("pre",null,n(t(d)),1),D,a("pre",null,n(t(h)),1),x,C,o(m,{customClass:"",sourceCode:`<template>
  <a-button>按钮</a-button>
</template>
`},{highlight:l(()=>[A]),default:l(()=>[o(P)]),_:1}),T])}}});export{B as __pageData,V as default};