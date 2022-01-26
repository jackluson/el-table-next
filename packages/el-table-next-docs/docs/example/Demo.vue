<!--
 * @Date: 2022-01-25 17:49:30
 * @LastEditTime: 2022-01-26 15:19:32
 * @Description: 
-->
<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>
<template>
  <div>
    <demo-block>
      <template v-slot:demo>
        <div>
  <h1>{{ msg }}</h1>
  <p>
    Recommended ID setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>Se<code>README.md</code> for more information.</p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  </div>
      </template>
      <template v-slot:description>
        <p>Here might be a page title desji</p>
      </template>
      <template v-slot:source>
        <div class="language-js">
    <pre v-pre class="shiki shiki-dark" style="background-color: #121212"><code><span class="line"><span style="color: #858585">&lt;</span><span style="color: #429988">script</span><span style="color: #DBD7CA"> </span><span style="color: #E0A569">setup</span><span style="color: #DBD7CA"> </span><span style="color: #E0A569">lang</span><span style="color: #DBD7CA">=</span><span style="color: #C98A7D">&quot;ts&quot;</span><span style="color: 
#858585">&gt;</span></span>
<span class="line"><span style="color: #4D9375">import</span><span style="color: #DBD7CA"> </span><span style="color: #858585">{</span><span style="color: #DBD7CA"> </span><span style="color: #B8A965">ref</span><span style="color: #DBD7CA"> </span><span style="color: #858585">}</span><span style="color: #DBD7CA"> </span><span style="color: #4D9375">from</span><span style="color: #DBD7CA"> </span><span style="color: #C98A7D">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #A1B567">defineProps</span><span style="color: #858585">&lt;{</span><span style="color: #DBD7CA"> </span><span style="color: #B8A965">msg</span><span style="color: #CB7676">:</span><span style="color: #DBD7CA"> </span><span style="color: #E0A569">string</span><span style="color: #DBD7CA"> </span><span style="color: #858585">}&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #CB7676">const</span><span style="color: #DBD7CA"> </span><span style="color: #D4976C">count</span><span style="color: #DBD7CA"> 
</span><span style="color: #CB7676">=</span><span style="color: #DBD7CA"> </span><span style="color: #A1B567">ref</span><span style="color: #858585">(</span><span style="color: #6394BF">0</span><span style="color: #858585">)</span></span>
<span class="line"><span style="color: #858585">&lt;/</span><span style="color: #429988">script</span><span style="color: #858585">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #858585">&lt;</span><span style="color: #429988">template</span><span style="color: #858585">&gt;</span></span>
<span class="line"><span style="color: #858585">&lt;</span><span style="color: #429988">div</span><span style="color: #858585">&gt;</span></span>
<span class="line"><span style="color: #DBD7CA">  </span><span style="color: #858585">&lt;</span><span style="color: #429988">h1</span><span style="color: #858585">&gt;{{</span><span style="color: #DBD7CA"> </span><span style="color: #B8A965">msg</span><span style="color: #DBD7CA"> </span><span style="color: #858585">}}&lt;/</span><span style="color: #429988">h1</span><span style="color: #858585">&gt;</span></span>
<span class="line"><span style="color: #DBD7CA">  </span><span style="color: #858585">&lt;</span><span style="color: #429988">p</span><span style="color: #858585">&gt;</span></span>
<span class="line"><span style="color: #DBD7CA">    Recommended ID setup:</span></span>
<span class="line"><span style="color: #DBD7CA">    </span><span style="color: #858585">&lt;</span><span style="color: #429988">a</span><span style="color: #858585"> </span><span style="color: #E0A569">href</span><span style="color: #858585">=</span><span style="color: #C98A7D">&quot;https://code.visualstudio.com/&quot;</span><span style="color: #858585"> </span><span style="color: #E0A569">target</span><span style="color: #858585">=</span><span style="color: #C98A7D">&quot;_blank&quot;</span><span 
style="color: #858585">&gt;</span><span style="color: #DBD7CA">VSCode</span><span style="color: #858585">&lt;/</span><span style="color: #429988">a</span><span style="color: #858585">&gt;</span></span>
<span class="line"><span style="color: #DBD7CA">    +</span></span>
<span class="line"><span style="color: #DBD7CA">    </span><span style="color: #858585">&lt;</span><span style="color: #429988">a</span><span style="color: #858585"> </span><span style="color: #E0A569">href</span><span style="color: #858585">=</span><span style="color: #C98A7D">&quot;https://github.com/johnsoncodehk/volar&quot;</span><span style="color: #858585"> </span><span style="color: #E0A569">target</span><span style="color: #858585">=</span><span style="color: #C98A7D">&quot;_blank&quot;</span><span style="color: #858585">&gt;</span><span style="color: #DBD7CA">Volar</span><span style="color: #858585">&lt;/</span><span style="color: #429988">a</span><span style="color: #858585">&gt;</span></span>
<span class="line"><span style="color: #DBD7CA">  </span><span style="color: #858585">&lt;/</span><span style="color: #429988">p</span><span style="color: #858585">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #DBD7CA">  </span><span style="color: #858585">&lt;</span><span style="color: #429988">p</span><span style="color: #858585">&gt;</span><span style="color: #DBD7CA">Se</span><span style="color: #858585">&lt;</span><span style="color: #429988">code</span><span style="color: #858585">&gt;</span><span style="color: #DBD7CA">README.md</span><span style="color: #858585">&lt;/</span><span style="color: #429988">code</span><span style="color: #858585">&gt;</span><span 
style="color: #DBD7CA"> for more information.</span><span style="color: #858585">&lt;/</span><span style="color: #429988">p</span><span style="color: #858585">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #DBD7CA">  </span><span style="color: #858585">&lt;</span><span style="color: #429988">button</span><span style="color: #858585"> </span><span style="color: #E0A569">type</span><span style="color: #858585">=</span><span style="color: #C98A7D">&quot;button&quot;</span><span style="color: #858585"> @</span><span style="color: #E0A569">click</span><span style="color: #858585">=</span><span style="color: #C98A7D">&quot;</span><span style="color: #B8A965">count</span><span style="color: #CB7676">++</span><span style="color: #C98A7D">&quot;</span><span style="color: #858585">&gt;</span><span style="color: #DBD7CA">count is: </span><span style="color: #858585">{{</span><span style="color: #DBD7CA"> </span><span style="color: #B8A965">count</span><span style="color: #DBD7CA"> </span><span style="color: #858585">}}&lt;/</span><span style="color: #429988">button</span><span style="color: #858585">&gt;</span></span>
<span class="line"><span style="color: #DBD7CA">  </span><span style="color: #858585">&lt;</span><span style="color: #429988">p</span><span style="color: #858585">&gt;</span></span>
<span class="line"><span style="color: #DBD7CA">    Edit</span></span>
<span class="line"><span style="color: #DBD7CA">    </span><span style="color: #858585">&lt;</span><span style="color: #429988">code</span><span style="color: #858585">&gt;</span><span style="color: #DBD7CA">components/HelloWorld.vue</span><span style="color: #858585">&lt;/</span><span style="color: #429988">code</span><span style="color: #858585">&gt;</span><span style="color: #DBD7CA"> to test hot module replacement.</span></span>
<span class="line"><span style="color: #DBD7CA">  </span><span style="color: #858585">&lt;/</span><span style="color: #429988">p</span><span style="color: #858585">&gt;</span></span>
<span class="line"><span style="color: #DBD7CA">  </span><span style="color: #858585">&lt;/</span><span style="color: #429988">div</span><span style="color: #858585">&gt;</span></span>
<span class="line"><span style="color: #858585">&lt;/</span><span style="color: #429988">template</span><span style="color: #858585">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #858585">&lt;</span><span style="color: #429988">style</span><span style="color: #DBD7CA"> </span><span style="color: #E0A569">scoped</span><span style="color: #858585">&gt;</span></span>
<span class="line"><span style="color: #429988">a</span><span style="color: #DBD7CA"> </span><span style="color: #858585">{</span></span>
<span class="line"><span style="color: #DBD7CA">  </span><span style="color: #E0A569">color</span><span style="color: #858585">:</span><span style="color: #DBD7CA"> </span><span style="color: #858585">#</span><span style="color: #D4976C">42b983</span><span style="color: #858585">;</span></span>
<span class="line"><span style="color: #858585">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #429988">label</span><span style="color: #DBD7CA"> </span><span style="color: #858585">{</span></span>
<span class="line"><span style="color: #DBD7CA">  </span><span style="color: #E0A569">margin</span><span style="color: #858585">:</span><span style="color: #DBD7CA"> </span><span style="color: #6394BF">0</span><span style="color: #DBD7CA"> </span><span style="color: #6394BF">0.5</span><span style="color: #CB7676">em</span><span style="color: #858585">;</span></span>
<span class="line"><span style="color: #DBD7CA">  </span><span style="color: #E0A569">font-weight</span><span style="color: #858585">:</span><span style="color: #DBD7CA"> </span><span style="color: #D4976C">bold</span><span style="color: #858585">;</span></span>
<span class="line"><span style="color: #858585">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #429988">code</span><span style="color: #DBD7CA"> </span><span style="color: #858585">{</span></span>
<span class="line"><span style="color: #DBD7CA">  </span><span style="color: #758575">/* background-color: #eee; */</span></span>
<span class="line"><span style="color: #DBD7CA">  </span><span style="color: #E0A569">padding</span><span style="color: #858585">:</span><span style="color: #DBD7CA"> </span><span style="color: #6394BF">2</span><span style="color: #CB7676">px</span><span style="color: #DBD7CA"> </span><span style="color: #6394BF">4</span><span style="color: #CB7676">px</span><span style="color: #858585">;</span></span>
<span class="line"><span style="color: #DBD7CA">  </span><span style="color: #E0A569">border-radius</span><span style="color: #858585">:</span><span style="color: #DBD7CA"> </span><span style="color: #6394BF">4</span><span style="color: #CB7676">px</span><span style="color: #858585">;</span></span>
<span class="line"><span style="color: #DBD7CA">  </span><span style="color: #E0A569">color</span><span style="color: #858585">:</span><span style="color: #DBD7CA"> </span><span style="color: #858585">#</span><span style="color: #D4976C">304455</span><span style="color: #858585">;</span></span>
<span class="line"><span style="color: #858585">}</span></span>
<span class="line"><span style="color: #858585">&lt;/</span><span style="color: #429988">style</span><span style="color: #858585">&gt;</span></span>
<span class="line"></span></code></pre><pre v-pre class="shiki shiki-light" style="background-color: #ffffff"><code><span class="line"><span style="color: #8E8F8B">&lt;</span><span style="color: #2F8A89">script</span><span style="color: #393A34"> </span><span style="color: #B58451">setup</span><span style="color: #393A34"> </span><span style="color: #B58451">lang</span><span style="color: #393A34">=</span><span style="color: #B56959">&quot;ts&quot;</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"><span style="color: #1C6B48">import</span><span style="color: #393A34"> </span><span style="color: #8E8F8B">{</span><span style="color: #393A34"> </span><span style="color: #8C862B">ref</span><span style="color: #393A34"> </span><span style="color: #8E8F8B">}</span><span style="color: #393A34"> </span><span style="color: #1C6B48">from</span><span style="color: #393A34"> </span><span style="color: #B56959">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #6C7834">defineProps</span><span style="color: #8E8F8B">&lt;{</span><span style="color: #393A34"> </span><span style="color: #8C862B">msg</span><span style="color: #AB5959">:</span><span style="color: #393A34"> </span><span style="color: #B58451">string</span><span style="color: #393A34"> </span><span style="color: #8E8F8B">}&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color: #AB5959">const</span><span style="color: #393A34"> </span><span style="color: #A65E2B">count</span><span style="color: #393A34"> 
</span><span style="color: #AB5959">=</span><span style="color: #393A34"> </span><span style="color: #6C7834">ref</span><span style="color: #8E8F8B">(</span><span style="color: #296AA3">0</span><span style="color: #8E8F8B">)</span></span>
<span class="line"><span style="color: #8E8F8B">&lt;/</span><span style="color: #2F8A89">script</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #8E8F8B">&lt;</span><span style="color: #2F8A89">template</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"><span style="color: #8E8F8B">&lt;</span><span style="color: #2F8A89">div</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"><span style="color: #393A34">  </span><span style="color: #8E8F8B">&lt;</span><span style="color: #2F8A89">h1</span><span style="color: #8E8F8B">&gt;{{</span><span style="color: #393A34"> </span><span style="color: #8C862B">msg</span><span style="color: #393A34"> </span><span style="color: #8E8F8B">}}&lt;/</span><span style="color: #2F8A89">h1</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"><span style="color: #393A34">  </span><span style="color: #8E8F8B">&lt;</span><span style="color: #2F8A89">p</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"><span style="color: #393A34">    Recommended ID setup:</span></span>
<span class="line"><span style="color: #393A34">    </span><span style="color: #8E8F8B">&lt;</span><span style="color: #2F8A89">a</span><span style="color: #8E8F8B"> </span><span style="color: #B58451">href</span><span style="color: #8E8F8B">=</span><span style="color: #B56959">&quot;https://code.visualstudio.com/&quot;</span><span style="color: #8E8F8B"> </span><span style="color: #B58451">target</span><span style="color: #8E8F8B">=</span><span style="color: #B56959">&quot;_blank&quot;</span><span 
style="color: #8E8F8B">&gt;</span><span style="color: #393A34">VSCode</span><span style="color: #8E8F8B">&lt;/</span><span style="color: #2F8A89">a</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"><span style="color: #393A34">    +</span></span>
<span class="line"><span style="color: #393A34">    </span><span style="color: #8E8F8B">&lt;</span><span style="color: #2F8A89">a</span><span style="color: #8E8F8B"> </span><span style="color: #B58451">href</span><span style="color: #8E8F8B">=</span><span style="color: #B56959">&quot;https://github.com/johnsoncodehk/volar&quot;</span><span style="color: #8E8F8B"> </span><span style="color: #B58451">target</span><span style="color: #8E8F8B">=</span><span style="color: #B56959">&quot;_blank&quot;</span><span style="color: #8E8F8B">&gt;</span><span style="color: #393A34">Volar</span><span style="color: #8E8F8B">&lt;/</span><span style="color: #2F8A89">a</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"><span style="color: #393A34">  </span><span style="color: #8E8F8B">&lt;/</span><span style="color: #2F8A89">p</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #393A34">  </span><span style="color: #8E8F8B">&lt;</span><span style="color: #2F8A89">p</span><span style="color: #8E8F8B">&gt;</span><span style="color: #393A34">Se</span><span style="color: #8E8F8B">&lt;</span><span style="color: #2F8A89">code</span><span style="color: #8E8F8B">&gt;</span><span style="color: #393A34">README.md</span><span style="color: #8E8F8B">&lt;/</span><span style="color: #2F8A89">code</span><span style="color: #8E8F8B">&gt;</span><span 
style="color: #393A34"> for more information.</span><span style="color: #8E8F8B">&lt;/</span><span style="color: #2F8A89">p</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #393A34">  </span><span style="color: #8E8F8B">&lt;</span><span style="color: #2F8A89">button</span><span style="color: #8E8F8B"> </span><span style="color: #B58451">type</span><span style="color: #8E8F8B">=</span><span style="color: #B56959">&quot;button&quot;</span><span style="color: #8E8F8B"> @</span><span style="color: #B58451">click</span><span style="color: #8E8F8B">=</span><span style="color: #B56959">&quot;</span><span style="color: #8C862B">count</span><span style="color: #AB5959">++</span><span style="color: #B56959">&quot;</span><span style="color: #8E8F8B">&gt;</span><span style="color: #393A34">count is: </span><span style="color: #8E8F8B">{{</span><span style="color: #393A34"> </span><span style="color: #8C862B">count</span><span style="color: #393A34"> </span><span style="color: #8E8F8B">}}&lt;/</span><span style="color: #2F8A89">button</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"><span style="color: #393A34">  </span><span style="color: #8E8F8B">&lt;</span><span style="color: #2F8A89">p</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"><span style="color: #393A34">    Edit</span></span>
<span class="line"><span style="color: #393A34">    </span><span style="color: #8E8F8B">&lt;</span><span style="color: #2F8A89">code</span><span style="color: #8E8F8B">&gt;</span><span style="color: #393A34">components/HelloWorld.vue</span><span style="color: #8E8F8B">&lt;/</span><span style="color: #2F8A89">code</span><span style="color: #8E8F8B">&gt;</span><span style="color: #393A34"> to test hot module replacement.</span></span>
<span class="line"><span style="color: #393A34">  </span><span style="color: #8E8F8B">&lt;/</span><span style="color: #2F8A89">p</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"><span style="color: #393A34">  </span><span style="color: #8E8F8B">&lt;/</span><span style="color: #2F8A89">div</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"><span style="color: #8E8F8B">&lt;/</span><span style="color: #2F8A89">template</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #8E8F8B">&lt;</span><span style="color: #2F8A89">style</span><span style="color: #393A34"> </span><span style="color: #B58451">scoped</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"><span style="color: #2F8A89">a</span><span style="color: #393A34"> </span><span style="color: #8E8F8B">{</span></span>
<span class="line"><span style="color: #393A34">  </span><span style="color: #B58451">color</span><span style="color: #8E8F8B">:</span><span style="color: #393A34"> </span><span style="color: #8E8F8B">#</span><span style="color: #A65E2B">42b983</span><span style="color: #8E8F8B">;</span></span>
<span class="line"><span style="color: #8E8F8B">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #2F8A89">label</span><span style="color: #393A34"> </span><span style="color: #8E8F8B">{</span></span>
<span class="line"><span style="color: #393A34">  </span><span style="color: #B58451">margin</span><span style="color: #8E8F8B">:</span><span style="color: #393A34"> </span><span style="color: #296AA3">0</span><span style="color: #393A34"> </span><span style="color: #296AA3">0.5</span><span style="color: #AB5959">em</span><span style="color: #8E8F8B">;</span></span>
<span class="line"><span style="color: #393A34">  </span><span style="color: #B58451">font-weight</span><span style="color: #8E8F8B">:</span><span style="color: #393A34"> </span><span style="color: #A65E2B">bold</span><span style="color: #8E8F8B">;</span></span>
<span class="line"><span style="color: #8E8F8B">}</span></span>
<span class="line"></span>
<span class="line"><span style="color: #2F8A89">code</span><span style="color: #393A34"> </span><span style="color: #8E8F8B">{</span></span>
<span class="line"><span style="color: #393A34">  </span><span style="color: #A0ADA0">/* background-color: #eee; */</span></span>
<span class="line"><span style="color: #393A34">  </span><span style="color: #B58451">padding</span><span style="color: #8E8F8B">:</span><span style="color: #393A34"> </span><span style="color: #296AA3">2</span><span style="color: #AB5959">px</span><span style="color: #393A34"> </span><span style="color: #296AA3">4</span><span style="color: #AB5959">px</span><span style="color: #8E8F8B">;</span></span>
<span class="line"><span style="color: #393A34">  </span><span style="color: #B58451">border-radius</span><span style="color: #8E8F8B">:</span><span style="color: #393A34"> </span><span style="color: #296AA3">4</span><span style="color: #AB5959">px</span><span style="color: #8E8F8B">;</span></span>
<span class="line"><span style="color: #393A34">  </span><span style="color: #B58451">color</span><span style="color: #8E8F8B">:</span><span style="color: #393A34"> </span><span style="color: #8E8F8B">#</span><span style="color: #A65E2B">304455</span><span style="color: #8E8F8B">;</span></span>
<span class="line"><span style="color: #8E8F8B">}</span></span>
<span class="line"><span style="color: #8E8F8B">&lt;/</span><span style="color: #2F8A89">style</span><span style="color: #8E8F8B">&gt;</span></span>
<span class="line"></span></code></pre>
  </div>
      </template>
    </demo-block>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  /* background-color: #eee; */
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
