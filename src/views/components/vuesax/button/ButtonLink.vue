


<template>
    <vs-card code-toggler>

           <div slot="header">
        <h3>
          Link
        </h3>
      </div>
        
        <p>You can specify for <code>window.location.href</code></p>

        <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
            <span>You can use the <code>target</code> property to window.open()</span>
        </vs-alert>

        <div class="demo-alignment">

            <vs-button color="primary" type="filled" href="https://google.com/">String literal</vs-button>
            <vs-button color="primary" type="filled" :href="{url: 'https://google.com/'}">Object Path</vs-button>
            <vs-button color="primary" type="filled" target href="https://google.com/">Open New Tab</vs-button>

        </div>

        <template slot="codeContainer">
&lt;vs-button color=&quot;primary&quot; type=&quot;filled&quot; href=&quot;https://google.com/&quot;&gt;String literal&lt;/vs-button&gt;
&lt;vs-button color=&quot;primary&quot; type=&quot;filled&quot; :href=&quot;{url: 'https://google.com/'}&quot;&gt;Object Path&lt;/vs-button&gt;
&lt;vs-button color=&quot;primary&quot; type=&quot;filled&quot; target href=&quot;https://google.com/&quot;&gt;Open New Tab&lt;/vs-button&gt;
        </template>

    </vs-card>
</template>