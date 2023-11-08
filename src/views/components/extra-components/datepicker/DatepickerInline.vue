
<template>
    <vs-card code-toggler>

                     <div slot="header">
        <h3>
          Inline
        </h3>
      </div>
        <p>Create inline datepicker using <code>inline</code> prop</p>
        
        <div class="mt-5">
            <datepicker :inline="true"></datepicker>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;datepicker :inline=&quot;true&quot;&gt;&lt;/datepicker&gt;
&lt;/template&gt;

&lt;script&gt;
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    Datepicker
  }
}
&lt;/script&gt;
        </template>
    </vs-card>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
    components: {
        Datepicker
    }
}
</script>