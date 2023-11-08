


<template>
    <vs-card code-toggler>
          <div slot="header">
        <h3>
         Default
        </h3>
      </div>
        <p>The pagination component consists of several elements, all of which are optional. So with no extra class, your pagination links will look as follow</p>
        
        <div class="my-5">
            <vs-pagination :total="40" v-model="currentx"></vs-pagination>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-pagination :total=&quot;40&quot; v-model=&quot;currentx&quot;&gt;&lt;/vs-pagination&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data: () =&gt; ({
    currentx: 14
  })
}
&lt;/script&gt;
        </template>

    </vs-card>
</template>

<script>
export default {
    data: () => ({
        currentx: 14
    })
}
</script>