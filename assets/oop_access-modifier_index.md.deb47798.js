import{_ as s,c as a,o as n,a as p}from"./app.0d663ad5.js";const F=JSON.parse('{"title":"Access Modifier","description":"","frontmatter":{},"headers":[],"relativePath":"oop/access-modifier/index.md"}'),l={name:"oop/access-modifier/index.md"},o=p(`<h1 id="access-modifier" tabindex="-1">Access Modifier <a class="header-anchor" href="#access-modifier" aria-hidden="true">#</a></h1><p>Di dart kita dapat merubah akses modifier menggunakan <code>_</code> didepan nama variable atau method, dengan menggunakan <code>_</code> maka variable atau method tersebut tidak dapat diakses dari luar library/file (private).</p><div class="language-dart"><button class="copy"></button><span class="lang">dart</span><pre><code><span class="line"><span style="color:#676E95;">// person.dart</span></span>
<span class="line"><span style="color:#89DDFF;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> _name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> _age</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// private property</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;">(this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_age)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// main.dart</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;person.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> person </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;John&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_name)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Error: The getter &#39;_name&#39; isn&#39;t defined for the class &#39;Person&#39;.</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p>lalu bagaimana jika kita ingin mengakses variable atau method yang private? kita dapat mengaksesnya dengan menggunakan getter dan setter.</p><div class="language-dart"><button class="copy"></button><span class="lang">dart</span><pre><code><span class="line"><span style="color:#676E95;">// person.dart</span></span>
<span class="line"><span style="color:#89DDFF;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> _name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> _age</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// private property</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;">(this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_age)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">name</span><span style="color:#A6ACCD;"> =&gt; _name</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// getter digunakan untuk mengambil nilai dari variable private</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">get</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">age</span><span style="color:#A6ACCD;"> =&gt; _age</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// getter digunakan untuk mengambil nilai dari variable private</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">name</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> name) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> _name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// setter digunakan untuk mengubah nilai dari variable private</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">age</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> age) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> _age </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// setter digunakan untuk mengubah nilai dari variable private</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// main.dart</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;person.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> person </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Person</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;John&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// John</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// 20</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,5),e=[o];function t(r,c,C,A,y,D){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{F as __pageData,d as default};
