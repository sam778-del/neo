
<template>
    <vs-card code-toggler>

                    <div slot="header">
        <h3>
        Open Programatically
        </h3>
      </div>

        <p>Open datepicker programatically using <strong>ref</strong> and <strong>click-event</strong></p>
        
        <div class="mt-5">
            <vs-button class="mb-4" @click="$refs.programaticOpen.showCalendar()">Open Picker</vs-button>
            <datepicker ref="programaticOpen"></datepicker>
        </div>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-button class=&quot;mb-4&quot; @click=&quot;$refs.programaticOpen.showCalendar()&quot;&gt;Open Picker&lt;/vs-button&gt;
  &lt;datepicker ref=&quot;programaticOpen&quot;&gt;&lt;/datepicker&gt;
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