
<template>
    <div id="form-element-select-demo">
        <select-single-selection></select-single-selection>
        <select-color></select-color>
        <select-autocomplete></select-autocomplete>
        <select-multiple></select-multiple>
        <select-labels></select-labels>
        <select-validators></select-validators>
        <select-is-selected-item></select-is-selected-item>
        <select-group-items></select-group-items>
        <select-api></select-api>
    </div>
</template>

<script>
import SelectSingleSelection from './SelectSingleSelection.vue'
import SelectColor from './SelectColor.vue'
import SelectAutocomplete from './SelectAutocomplete.vue'
import SelectMultiple from './SelectMultiple.vue'
import SelectLabels from './SelectLabels.vue'
import SelectValidators from './SelectValidators.vue'
import SelectIsSelectedItem from './SelectIsSelectedItem.vue'
import SelectGroupItems from './SelectGroupItems.vue'
import SelectApi from './SelectApi.vue'

export default {
    components: {
        SelectSingleSelection,
        SelectColor,
        SelectAutocomplete,
        SelectMultiple,
        SelectLabels,
        SelectValidators,
        SelectIsSelectedItem,
        SelectGroupItems,
        SelectApi,
    }
}
</script>