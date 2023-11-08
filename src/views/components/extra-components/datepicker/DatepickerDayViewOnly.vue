
<template>
    <vs-card code-toggler>

             <div slot="header">
        <h3>
          Day View Only
        </h3>
      </div>

        <p>Rendering default DatePicker with Day view only</p>
        
        <div class="mt-5">
            <datepicker :minimumView="'day'" :maximumView="'day'"></datepicker>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;datepicker :minimumView=&quot;'day'&quot; :maximumView=&quot;'day'&quot;&gt;&lt;/datepicker&gt;
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