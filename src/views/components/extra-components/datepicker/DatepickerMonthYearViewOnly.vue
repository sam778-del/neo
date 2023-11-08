
<template>
    <vs-card code-toggler>

                    <div slot="header">
        <h3>
         Month and Year View Only
        </h3>
      </div>

        <p>Rendering default DatePicker with month and year view only</p>
        
        <div class="mt-5">
            <datepicker :minimumView="'month'" :maximumView="'year'"></datepicker>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;datepicker :minimumView=&quot;'month'&quot; :maximumView=&quot;'year'&quot;&gt;&lt;/datepicker&gt;
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