


<template>
    <vs-card code-toggler>

                   <div slot="header">
        <h3>
          Slot
        </h3>
      </div>
        
        <p>A default Vue slot that can be used instead of passing in an array of object. This allows for greater control of the breadcrumbs</p>

        <div class="demo-alignment">

            <vs-breadcrumb>
                <li><a href="/" title="Home">Home</a><span class="vs-breadcrum--separator">/</span></li>
                <li><a href="/pages/profile" title="Profile">Profile</a><span class="vs-breadcrum--separator">/</span></li>
                <li aria-current="page" class="active">Infos</li>
            </vs-breadcrumb>

        </div>

        <template slot="codeContainer">
&lt;vs-breadcrumb&gt;
   &lt;li&gt;&lt;a href=&quot;/&quot; title=&quot;Home&quot;&gt;Home&lt;/a&gt;&lt;span class=&quot;vs-breadcrum--separator&quot;&gt;/&lt;/span&gt;&lt;/li&gt;
   &lt;li&gt;&lt;a href=&quot;/pages/profile&quot; title=&quot;Profile&quot;&gt;Profile&lt;/a&gt;&lt;span class=&quot;vs-breadcrum--separator&quot;&gt;/&lt;/span&gt;&lt;/li&gt;
   &lt;li aria-current=&quot;page&quot; class=&quot;active&quot;&gt;Infos&lt;/li&gt;
&lt;/vs-breadcrumb&gt;
        </template>

    </vs-card>
</template>