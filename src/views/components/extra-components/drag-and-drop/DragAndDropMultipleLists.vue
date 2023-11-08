<template>
    <vs-card code-toggler>
                    <div slot="header">
        <h3>
      Multiple Lists
        </h3>
      </div>

        <p>Drag and drop items of more than one list. Add same <code>group</code> to <code>group</code> prop</p>

        <!-- List 1 -->
       <vs-row>

<vs-col vs-xs="12" vs-sm="6" vs-lg="6">

                <vs-list>
                    <vs-list-header title="People Group 1" color="primary"></vs-list-header>
                    <draggable :list="list1" group="people" class="p-2 cursor-move">
                        <vs-list-item v-for="(listItem, index) in list1" :key="index" :title="listItem.name" :subtitle="listItem.email"><vs-avatar slot="avatar" :text="listItem.name" /></vs-list-item>
                    </draggable>
                </vs-list>
</vs-col>
            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">

                <vs-list class="mt-5">
                    <vs-list-header title="People Group 2" color="primary"></vs-list-header>
                    <draggable :list="list2" group="people" class="p-2 cursor-move">
                    <vs-list-item v-for="(listItem, index) in list2" :key="index" :title="listItem.name" :subtitle="listItem.email"><vs-avatar slot="avatar" :text="listItem.name" /></vs-list-item>
                    </draggable>
                </vs-list>
            </vs-col>

       </vs-row>

        <!-- List 2 -->
        <vs-row>

           <vs-col vs-xs="12" vs-sm="6" vs-lg="6">

                <prism language="js" class="rounded-lg">
People Group 1: {{ list1 }}
                </prism>
           </vs-col>
          <vs-col vs-xs="12" vs-sm="6" vs-lg="6">

                <prism language="js" class="rounded-lg">
People Group 2: {{ list2 }}
                </prism>
          </vs-col>
        </vs-row>

        <template slot="codeContainer">
&lt;template&gt;
  &lt;vs-list&gt;
    &lt;vs-list-header title=&quot;People Group 1&quot; color=&quot;primary&quot;&gt;&lt;/vs-list-header&gt;

    &lt;draggable :list=&quot;list1&quot; group=&quot;people&quot; class=&quot;p-2 cursor-move&quot;&gt;
      &lt;vs-list-item v-for=&quot;(listItem, index) in list1&quot; :key=&quot;index&quot; :title=&quot;listItem.name&quot; :subtitle=&quot;listItem.email&quot;&gt;
        &lt;vs-avatar slot=&quot;avatar&quot; :text=&quot;listItem.name&quot; /&gt;
      &lt;/vs-list-item&gt;
    &lt;/draggable&gt;

  &lt;/vs-list&gt;

  &lt;vs-list class=&quot;mt-5&quot;&gt;
    &lt;vs-list-header title=&quot;People Group 2&quot; color=&quot;primary&quot;&gt;&lt;/vs-list-header&gt;

    &lt;draggable :list=&quot;list2&quot; group=&quot;people&quot; class=&quot;p-2 cursor-move&quot;&gt;
      &lt;vs-list-item v-for=&quot;(listItem, index) in list2&quot; :key=&quot;index&quot; :title=&quot;listItem.name&quot; :subtitle=&quot;listItem.email&quot;&gt;
        &lt;vs-avatar slot=&quot;avatar&quot; :text=&quot;listItem.name&quot; /&gt;
      &lt;/vs-list-item&gt;
    &lt;/draggable&gt;

  &lt;/vs-list&gt;
&lt;/template&gt;

&lt;script&gt;
import draggable from 'vuedraggable'

export default {
  data() {
    return {
      list1: [
        {
          name: &quot;Paz Joya&quot;,
          email: &quot;girliness@spotlike.co.uk&quot;,
        },
        {
          name: &quot;Sunshine Cose&quot;,
          email: &quot;executrixship@equisized.edu&quot;,
        },
        {
          name: &quot;Alba Dobbin&quot;,
          email: &quot;bidding@demibob.or&quot;,
        },
        {
          name: &quot;Marlin Hinchee&quot;,
          email: &quot;preholding@scuffly.co.uk&quot;,
        }
      ],
      list2: [
        {
          name: &quot;Leia Atienza&quot;,
          email: &quot;unmeasurableness@interlamellar.co.uk&quot;
        },
        {
          name: &quot;Lashawna Vaudrainm&quot;,
          email: &quot;soaking@khubber.com&quot;
        },
        {
          name: &quot;Liliana Henscheid&quot;,
          email: &quot;lecideine@turndown.org&quot;
        },
        {
          name: &quot;Keven Kolter&quot;,
          email: &quot;nontenure@anglicanum.co.uk&quot;
        }
      ]
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
            list1: [
                {
                    name: "Paz Joya",
                    email: "girliness@spotlike.co.uk",
                },
                {
                    name: "Sunshine Cose",
                    email: "executrixship@equisized.edu",
                },
                {
                    name: "Alba Dobbin",
                    email: "bidding@demibob.or",
                },
                {
                    name: "Marlin Hinchee",
                    email: "preholding@scuffly.co.uk",
                }
            ],
            list2: [
                {
                    name: "Leia Atienza",
                    email: "unmeasurableness@interlamellar.co.uk"
                },
                {
                    name: "Lashawna Vaudrainm",
                    email: "soaking@khubber.com"
                },
                {
                    name: "Liliana Henscheid",
                    email: "lecideine@turndown.org"
                },
                {
                    name: "Keven Kolter",
                    email: "nontenure@anglicanum.co.uk"
                }
            ]
        }
    },
    components: {
        draggable,
        Prism
    }
}
</script>
