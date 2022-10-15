import{_ as s,c as a,o as n,a as p}from"./app.3eda78d0.js";const D=JSON.parse('{"title":"Import","description":"","frontmatter":{},"headers":[],"relativePath":"oop/import/index.md"}'),l={name:"oop/import/index.md"},o=p(`<h1 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h1><p>Import merupakan sebuah cara dalam memanage source code yang sudah terlalu banyak, biasanya kita memisahkan kedalam file file berbeda lalu mengimport nya kedalam 1 file utama atau file yang membutuhkan.</p><div class="language-dart"><button class="copy"></button><span class="lang">dart</span><pre><code><span class="line"><span style="color:#676E95;">// Anggap file ini berada pada folder data</span></span>
<span class="line"><span style="color:#89DDFF;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ClassImported</span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">?;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">ClassImported</span><span style="color:#A6ACCD;">({this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name})</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-dart"><button class="copy"></button><span class="lang">dart</span><pre><code><span class="line"><span style="color:#676E95;">// Anggap file ini berada pada folder main</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;data/class_imported.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">ClassImported</span><span style="color:#A6ACCD;"> classImported </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ClassImported</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;Class ini dapat digunakan&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(classImported</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Class ini dapat digunakan</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,4),e=[o];function t(r,c,i,C,d,A){return n(),a("div",null,e)}const m=s(l,[["render",t]]);export{D as __pageData,m as default};
