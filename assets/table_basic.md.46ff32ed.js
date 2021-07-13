import{r as n,o as a,c as s,b as t,d as p,a as o}from"./app.4df48b0e.js";const e='{"title":"基础","description":"","frontmatter":{},"headers":[{"level":2,"title":"示例","slug":"示例"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Methods","slug":"methods"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"table/basic.md","lastUpdated":1626169790783}',c={},u=t("h1",{id:"基础"},[t("a",{class:"header-anchor",href:"#基础","aria-hidden":"true"},"#"),p(" 基础")],-1),l=t("h2",{id:"示例"},[t("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),p(" 示例")],-1),k=o('<details><summary>查看代码</summary><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>demo-container</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>elp-table</span>\n      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formData<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name"><span class="token namespace">v-model:</span>search</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>searchForm<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableData<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">:option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tableOption<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@rowSave</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSave<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@rowUpdate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleUpdate<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@rowDel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleDel<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@search</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSearch<span class="token punctuation">&quot;</span></span>\n      <span class="token attr-name">@searchReset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getData<span class="token punctuation">&quot;</span></span>\n    <span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>elp-table</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>demo-container</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;table-basic&quot;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ElMessage<span class="token punctuation">,</span> ElMessageBox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;element-plus&quot;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defaultOption<span class="token punctuation">,</span> defaultData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../defaults&quot;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">Data</span> <span class="token punctuation">{</span>\n  title<span class="token operator">:</span> string<span class="token punctuation">;</span>\n  content<span class="token operator">:</span> string<span class="token punctuation">;</span>\n  date<span class="token operator">:</span> string<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> formData <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Data<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> Data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> searchForm <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Data<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token keyword">as</span> Data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> tableOption <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>defaultOption<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> tableData <span class="token operator">=</span> ref<span class="token operator">&lt;</span>Data<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//模拟搜索</span>\n  tableData<span class="token punctuation">.</span>value <span class="token operator">=</span> defaultData<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>searchForm<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> item<span class="token punctuation">[</span>key <span class="token keyword">as</span> keyof Data<span class="token punctuation">]</span><span class="token operator">?.</span><span class="token function">includes</span><span class="token punctuation">(</span>searchForm<span class="token punctuation">.</span>value<span class="token punctuation">[</span>key <span class="token keyword">as</span> keyof Data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">handleSave</span><span class="token punctuation">(</span>data<span class="token operator">:</span> Data<span class="token punctuation">,</span> <span class="token function-variable function">done</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&quot;提交成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">handleUpdate</span><span class="token punctuation">(</span>data<span class="token operator">:</span> Data<span class="token punctuation">,</span> <span class="token function-variable function">done</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&quot;提交成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleDel</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token operator">:</span> Data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">await</span> ElMessageBox<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token string">&quot;确认删除？&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;提示&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  ElMessage<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">&quot;删除成功&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">handleSearch</span><span class="token punctuation">(</span>search<span class="token operator">:</span> Data<span class="token punctuation">,</span> <span class="token function-variable function">done</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-ts"><pre><code><span class="token comment">// defaults.ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineOption <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../../../../packages&quot;</span><span class="token punctuation">;</span> <span class="token comment">//ts环境下可以从elp-crud导入defineOption使用，来获取类型提示</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> defaultOption <span class="token operator">=</span> <span class="token function">defineOption</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  column<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;标题&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;title&quot;</span><span class="token punctuation">,</span> search<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;内容&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">&quot;textarea&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;日期&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;date&quot;</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">&quot;date&quot;</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> defaultData <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;夏夜晚风&quot;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&quot;不知道怎么搞得最老是做这个梦&quot;</span><span class="token punctuation">,</span> date<span class="token operator">:</span> <span class="token string">&quot;1996-06-18&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;挪威的森林&quot;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&quot;让我将你心儿摘下&quot;</span><span class="token punctuation">,</span> date<span class="token operator">:</span> <span class="token string">&quot;1996-06-18&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&quot;LastDance&quot;</span><span class="token punctuation">,</span> content<span class="token operator">:</span> <span class="token string">&quot;所以暂时将你眼睛闭了起来&quot;</span><span class="token punctuation">,</span> date<span class="token operator">:</span> <span class="token string">&quot;1996-06-18&quot;</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre></div></details><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>表单绑定数据</td><td>object</td><td>-</td></tr><tr><td>v-model:search</td><td>搜索表单绑定数据</td><td>object</td><td>-</td></tr><tr><td>data</td><td>表格数据</td><td>array</td><td>-</td></tr><tr><td>option</td><td>表格配置</td><td><a href="./../typedoc/interfaces/tableoption.html">TableOption</a></td><td>-</td></tr></tbody></table><h2 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>rowAdd</td><td>打开新增表单弹窗</td><td>-</td></tr><tr><td>rowEdit</td><td>打开编辑表单弹窗</td><td>(row:表格行数据)</td></tr><tr><td>rowView</td><td>打开查看表单弹窗</td><td>(row:表格行数据)</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>refresh</td><td>点击刷新图标按钮触发</td><td></td></tr><tr><td>rowDel</td><td>点击操作菜单的删除按钮触发</td><td>(row:表单数据)</td></tr><tr><td>rowSave</td><td>新增表单提交后触发</td><td>(row:表单数据,done:表单弹窗关闭函数)</td></tr><tr><td>rowUpdate</td><td>编辑表单提交后触发</td><td>(row:表单数据,done:表单弹窗关闭函数)</td></tr><tr><td>rowReset</td><td>点击表单的清空按钮触发</td><td></td></tr><tr><td>search</td><td>点击搜索按钮触发</td><td>(form:搜索表单数据,done:搜索表单关闭 loading 函数)</td></tr><tr><td>searchReset</td><td>点击搜索栏的清空按钮触发</td><td></td></tr></tbody></table>',7);c.render=function(p,o,e,c,r,i){const d=n("table-basic");return a(),s("div",null,[u,l,t(d),k])};export default c;export{e as __pageData};