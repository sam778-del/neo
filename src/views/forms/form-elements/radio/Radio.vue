
<template>
    <div id="form-element-radio-demo">
        <radio-default></radio-default>
        <radio-color></radio-color>
        <radio-api></radio-api>
    </div>
</template>

<script>
import RadioDefault from './RadioDefault.vue'
import RadioColor from './RadioColor.vue'
import RadioApi from './RadioApi.vue'

export default{
    components: {
        RadioDefault,
        RadioColor,
        RadioApi,
    }
}
</script>