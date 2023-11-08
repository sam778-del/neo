
<template>
    <vs-card code-toggler>

   <div slot="header">
        <h3>
          Default
        </h3>
      </div>
        <span>To add a Textarea we have the component <code>vs-textarea</code></span>

        <div class="mt-5">
            <vs-textarea v-model="textarea" />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div&gt;
    &lt;vs-textarea v-model=&quot;textarea&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data:()=&gt;({
    textarea: &apos;&apos;,
  })
}
&lt;/script&gt;         
        </template>
    </vs-card>
</template>

<script>
export default {
    data: () => ({
        textarea: '',
    })
}
</script>