

<template>
    <div id="tabs-demo">
        <tabs-default></tabs-default>
        <tabs-color></tabs-color>
        <tabs-alignments></tabs-alignments>
        <tabs-position></tabs-position>
    </div>
</template>

<script>
import TabsDefault from './TabsDefault.vue'
import TabsColor from './TabsColor.vue'
import TabsAlignments from './TabsAlignments.vue'
import TabsPosition from './TabsPosition.vue'

export default{
    components: {
        TabsDefault,
        TabsColor,
        TabsAlignments,
        TabsPosition,
    }   
}
</script>