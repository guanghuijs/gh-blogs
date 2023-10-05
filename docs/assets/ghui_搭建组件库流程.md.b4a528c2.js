import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.a16c8809.js";const q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"ghui/搭建组件库流程.md","filePath":"ghui/搭建组件库流程.md"}'),p={name:"ghui/搭建组件库流程.md"},o=l(`<h2 id="组件库编写目录" tabindex="-1">组件库编写目录 <a class="header-anchor" href="#组件库编写目录" aria-label="Permalink to &quot;组件库编写目录&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">components&#39;,           </span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;</span><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.ts&#39;,         </span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;</span><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package.json&#39;,     </span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;</span><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">button&#39;,           </span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;</span><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">button.ts&#39;,    </span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;</span><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">button.vue&#39;,   </span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;</span><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">utils&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package.json&#39;,</span></span>
<span class="line"><span style="color:#9ECBFF;">  &#39;</span><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">|</span><span style="color:#B392F0;">--</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">with-install.ts&#39;,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">components&#39;,           </span></span>
<span class="line"><span style="color:#032F62;">  &#39;</span><span style="color:#24292E;">    </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">   </span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.ts&#39;,         </span></span>
<span class="line"><span style="color:#032F62;">  &#39;</span><span style="color:#24292E;">    </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">   </span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package.json&#39;,     </span></span>
<span class="line"><span style="color:#032F62;">  &#39;</span><span style="color:#24292E;">    </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">   </span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">button&#39;,           </span></span>
<span class="line"><span style="color:#032F62;">  &#39;</span><span style="color:#24292E;">    </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">   </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">   </span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">button.ts&#39;,    </span></span>
<span class="line"><span style="color:#032F62;">  &#39;</span><span style="color:#24292E;">    </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">   </span><span style="color:#D73A49;">|</span><span style="color:#24292E;">   </span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">button.vue&#39;,   </span></span>
<span class="line"><span style="color:#032F62;">  &#39;</span><span style="color:#24292E;">    </span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">utils&#39;,</span></span>
<span class="line"><span style="color:#032F62;">  &#39;</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package.json&#39;,</span></span>
<span class="line"><span style="color:#032F62;">  &#39;</span><span style="color:#24292E;">        </span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">--</span><span style="color:#24292E;"> </span><span style="color:#032F62;">with-install.ts&#39;,</span></span></code></pre></div><h2 id="给组件添加install方法-实现项目中全局使用" tabindex="-1">给组件添加install方法(实现项目中全局使用) <a class="header-anchor" href="#给组件添加install方法-实现项目中全局使用" aria-label="Permalink to &quot;给组件添加install方法(实现项目中全局使用)&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { App } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { HButton } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./Button&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> { useCountDown } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./CountDown&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 实现组件库全局注册</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">HUI</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">install</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">app</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">App</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    [HButton].</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(item.name, item);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用组件库时可局部导出</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  HButton,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">HUI</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { App } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { HButton } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./Button&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> { useCountDown } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./CountDown&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 实现组件库全局注册</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">HUI</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">install</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">app</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">App</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    [HButton].</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">item</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      app.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(item.name, item);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 使用组件库时可局部导出</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  HButton,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">HUI</span><span style="color:#24292E;">;</span></span></code></pre></div><h2 id="vite打包成库" tabindex="-1">vite打包成库 <a class="header-anchor" href="#vite打包成库" aria-label="Permalink to &quot;vite打包成库&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// vite.config.ts</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  build: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    outDir: </span><span style="color:#9ECBFF;">&#39;lib&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    emptyOutDir: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    lib: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 入口指向组件库入口模块</span></span>
<span class="line"><span style="color:#E1E4E8;">      entry: </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;packages/components/index.ts&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;ghui&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 构建生成的文件名，与package.json中配置一致</span></span>
<span class="line"><span style="color:#E1E4E8;">      fileName: </span><span style="color:#9ECBFF;">&#39;ghui&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    rollupOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 确保外部化处理那些你不想打包进库的依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">      external: [</span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        globals: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量</span></span>
<span class="line"><span style="color:#E1E4E8;">          vue: </span><span style="color:#9ECBFF;">&#39;Vue&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// vite.config.ts</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  build: {</span></span>
<span class="line"><span style="color:#24292E;">    outDir: </span><span style="color:#032F62;">&#39;lib&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    emptyOutDir: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    lib: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 入口指向组件库入口模块</span></span>
<span class="line"><span style="color:#24292E;">      entry: </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;packages/components/index.ts&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;ghui&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 构建生成的文件名，与package.json中配置一致</span></span>
<span class="line"><span style="color:#24292E;">      fileName: </span><span style="color:#032F62;">&#39;ghui&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    rollupOptions: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 确保外部化处理那些你不想打包进库的依赖</span></span>
<span class="line"><span style="color:#24292E;">      external: [</span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      output: {</span></span>
<span class="line"><span style="color:#24292E;">        globals: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量</span></span>
<span class="line"><span style="color:#24292E;">          vue: </span><span style="color:#032F62;">&#39;Vue&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="npm发布package配置" tabindex="-1">npm发布package配置 <a class="header-anchor" href="#npm发布package配置" aria-label="Permalink to &quot;npm发布package配置&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vue-ghui&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.0.2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;private&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;scripts&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;dev&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vite&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;build&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;run-p type-check build-only&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;preview&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vite preview&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;test:unit&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vitest --environment jsdom --root src/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;build-only&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vite build&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;type-check&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;vue-tsc --noEmit -p tsconfig.vitest.json --composite false&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;lint&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;main&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./lib/ghui.umd.js&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;module&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./lib/ghui.mjs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;exports&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;.&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;import&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./lib/ghui.mjs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;require&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./lib/ghui.umd.js&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;./lib/style.css&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;./lib/style.css&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;files&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;package.json&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;README.md&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;LICENSE&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;lib&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;packages&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;index.d.ts&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vue-ghui&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;version&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1.0.2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;private&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;scripts&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;dev&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vite&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;build&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;run-p type-check build-only&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;preview&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vite preview&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;test:unit&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vitest --environment jsdom --root src/&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;build-only&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vite build&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;type-check&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;vue-tsc --noEmit -p tsconfig.vitest.json --composite false&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;lint&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;main&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./lib/ghui.umd.js&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;module&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./lib/ghui.mjs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;exports&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;.&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;import&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./lib/ghui.mjs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;require&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./lib/ghui.umd.js&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;./lib/style.css&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;./lib/style.css&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;files&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;package.json&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;README.md&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;LICENSE&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;lib&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;packages&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;index.d.ts&quot;</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,8),e=[o];function t(c,r,E,y,i,u){return a(),n("div",null,e)}const C=s(p,[["render",t]]);export{q as __pageData,C as default};
