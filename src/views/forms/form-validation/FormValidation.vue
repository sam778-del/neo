
<template>
    <div id="extra-component-form-validation-demo">

        <p class="mb-4"><a href="https://baianat.github.io/vee-validate/" target="_blank" rel="nofollow">vee-validate</a> is a Template Based Validation Framework for Vue.js. Read full documentation <a href="https://baianat.github.io/vee-validate/guide/" target="_blank" rel="nofollow">here</a></p>
        
        <form-validation-simple></form-validation-simple>
        <form-validation-multiple-rules></form-validation-multiple-rules>
      <vs-row>

            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <form-validation-custom-error-messages class="mb-base"></form-validation-custom-error-messages>
            </vs-col>
           <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <form-validation-events class="mb-base"></form-validation-events>
           </vs-col>
      </vs-row>
        <form-validation-types></form-validation-types>
    </div>
</template>

<script>
import FormValidationSimple from "./FormValidationSimple.vue"
import FormValidationMultipleRules from "./FormValidationMultipleRules.vue"
import FormValidationCustomErrorMessages from "./FormValidationCustomErrorMessages.vue"
import FormValidationEvents from "./FormValidationEvents.vue"
import FormValidationTypes from "./FormValidationTypes.vue"

export default {
    components: {
        FormValidationSimple,
        FormValidationMultipleRules,
        FormValidationCustomErrorMessages,
        FormValidationEvents,
        FormValidationTypes,
    }
}
</script>