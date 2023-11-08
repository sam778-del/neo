
<template>
    <vs-card code-toggler>
 <div slot="header">
        <h3>
         Min - Max
        </h3>
      </div>
        <span>You can restrict the maximum number or the minimum with the properties <code>min</code>, <code>max</code></span>

        <div class="demo-alignment">
            <vs-input-number min="13" max="21" v-model="number1" />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div class=&quot;centerx&quot;&gt;
    &lt;vs-input-number min=&quot;13&quot; max=&quot;21&quot; v-model=&quot;number1&quot;/&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data(){
    return {
      number1:21,
    }
  }
}
&lt;/script&gt;
        </template>
    </vs-card>
</template>

<script>
export default {
    data() {
        return {
            number1: 21,
        }
    }
}
</script>