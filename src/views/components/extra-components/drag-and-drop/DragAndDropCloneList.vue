
<template>
    <vs-card code-toggler>

                    <div slot="header">
        <h3>
          Clone List
        </h3>
      </div>

        <p>Clone list items from another existing list. Add <code>pull</code> and <code>put</code> to <code>group</code> prop</p>

        <!-- List 1 -->
       <vs-row>

<vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <h6 class="mt-5 mb-3">Tag Source</h6>
                <draggable :list="list1" :group="{name:'tags',  pull:'clone', put:false }" class="p-2 cursor-move">
                    <vs-chip v-for="(listItem, index) in list1" :key="index">{{ listItem }}</vs-chip>
                </draggable>
</vs-col>
           <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <h6 class="mt-5 mb-3">Your Tags</h6>
                <draggable :list="list2" :group="{name: 'tags'}" class="p-2 cursor-move">
                    <vs-chip v-for="(listItem, index) in list2" :key="index">{{ listItem }}</vs-chip>
                </draggable>
           </vs-col>
       </vs-row>
      

        <!-- List 2 -->
        <vs-row>
            
<vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <prism language="js" class="rounded-lg">
Tag Source: {{ list1 }}
                </prism>
</vs-col>
           
<vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <prism language="js" class="rounded-lg">
Added tags: {{ list2 }}
                </prism>
</vs-col>
        </vs-row>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;div&gt;
    &lt;h6 class=&quot;mt-5 mb-3&quot;&gt;Tag Source&lt;/h6&gt;
    &lt;draggable :list=&quot;list1&quot; :group=&quot;{name:'tags',  pull:'clone', put:false }&quot; class=&quot;p-2 cursor-move&quot;&gt;
      &lt;vs-chip v-for=&quot;(listItem, index) in list1&quot; :key=&quot;index&quot;&gt; {{ "\{\{ listItem \}\}" }} &lt;/vs-chip&gt;
    &lt;/draggable&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;h6 class=&quot;mt-5 mb-3&quot;&gt;Your Tags&lt;/h6&gt;
    &lt;draggable :list=&quot;list2&quot; :group=&quot;{name: 'tags'}&quot; class=&quot;p-2 cursor-move&quot;&gt;
      &lt;vs-chip v-for=&quot;(listItem, index) in list2&quot; :key=&quot;index&quot;&gt; {{ "\{\{ listItem \}\}" }} &lt;/vs-chip&gt;
    &lt;/draggable&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import draggable from 'vuedraggable'

export default {
  data() {
    return {
      list1: [&quot;youtube&quot;, &quot;google&quot;, &quot;facebook&quot;, &quot;twitter&quot;, &quot;instagram&quot;, &quot;pinterest&quot;, &quot;tinder&quot;, &quot;slack&quot;, &quot;discord&quot;, &quot;github&quot;, &quot;gitlab&quot;],
      list2: [&quot;google&quot;, &quot;youtube&quot;]
    }
  },
  components: {
    draggable,
  }
}
&lt;/script&gt;
        </template>
    </vs-card>
</template>

<script>
import draggable from 'vuedraggable'
import Prism from 'vue-prism-component'

export default {
    data() {
        return {
            list1: ["youtube", "google", "facebook", "twitter", "instagram", "pinterest", "tinder", "slack", "discord", "github", "gitlab"],
            list2: ["google", "youtube"]
        }
    },
    components: {
        draggable,
        Prism
    }
}
</script>
