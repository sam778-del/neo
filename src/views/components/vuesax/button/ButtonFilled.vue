


<template>
    <vs-card code-toggler>

           <div slot="header">
        <h3>
          Filled
        </h3>
      </div>
        
        <p>To define the type of button the directive is used <code>type</code> with the value of some type of button like it can be: <code>filled</code></p>

        <div class="demo-alignment">

            <vs-button color="primary" type="filled">Primary</vs-button>
            <vs-button color="success" type="filled">Success</vs-button>
            <vs-button color="danger" type="filled">Danger</vs-button>
            <vs-button color="warning" type="filled">Warning</vs-button>
            <vs-button color="dark" type="filled">Dark</vs-button>
            <vs-button color="rgb(134, 4, 98)" type="filled">RGB</vs-button>
            <vs-button disabled type="filled">Disabled</vs-button>
        </div>

        <template slot="codeContainer">
&#x3C;vs-button color=&#x22;primary&#x22; type=&#x22;filled&#x22;&#x3E;Primary&#x3C;/vs-button&#x3E;
&#x3C;vs-button color=&#x22;success&#x22; type=&#x22;filled&#x22;&#x3E;Success&#x3C;/vs-button&#x3E;
&#x3C;vs-button color=&#x22;danger&#x22; type=&#x22;filled&#x22;&#x3E;Danger&#x3C;/vs-button&#x3E;
&#x3C;vs-button color=&#x22;warning&#x22; type=&#x22;filled&#x22;&#x3E;Warning&#x3C;/vs-button&#x3E;
&#x3C;vs-button color=&#x22;dark&#x22; type=&#x22;filled&#x22;&#x3E;Dark&#x3C;/vs-button&#x3E;
&#x3C;vs-button color=&#x22;rgb(134, 4, 98)&#x22; type=&#x22;filled&#x22;&#x3E;RGB&#x3C;/vs-button&#x3E;
&#x3C;vs-button disabled type=&#x22;filled&#x22;&#x3E;Disabled&#x3C;/vs-button&#x3E;
        </template>

    </vs-card>
</template>