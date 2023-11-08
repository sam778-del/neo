
<template>
    <vs-card  code-toggler>
          <div slot="header">
        <h3>
         Multiple
        </h3>
      </div>
        <p>You can upload multiple files by adding the <code>multiple</code> property within the component</p>

        <div class="mt-5">
            <vs-upload multiple text="Upload Multiple" action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-upload multiple text=&quot;Upload Multiple&quot; action=&quot;https://jsonplaceholder.typicode.com/posts/&quot; @on-success=&quot;successUpload&quot; /&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  methods:{
    successUpload(){
      this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
    }
  }
}
&lt;/script&gt;
        </template>

    </vs-card>
</template>

<script>
export default {
    methods: {
        successUpload() {
            this.$vs.notify({ color: 'success', title: 'Upload Success', text: 'Lorem ipsum dolor sit amet, consectetur' })
        }
    }
}
</script>