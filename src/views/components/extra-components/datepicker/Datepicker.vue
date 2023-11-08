
<template>
    <div id="extra-component-datepicker-demo">

        <p class="mb-4">A simple Vue.js datepicker component. Supports disabling of dates, inline mode, translations. Read full documnetation <a href="https://github.com/charliekassel/vuejs-datepicker" target="_blank" rel="nofollow">here</a></p>
        
        <vs-row class="match-height">
            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <datepicker-default class="mb-base"></datepicker-default>
            </vs-col>
            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <datepicker-format class="mb-base"></datepicker-format>
            </vs-col>
        </vs-row>
        
        <vs-row>
            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <datepicker-min-max-date-range class="mb-base"></datepicker-min-max-date-range>
            </vs-col>
            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <datepicker-highlight-dates class="mb-base"></datepicker-highlight-dates>
            </vs-col>
        </vs-row>
        
        <vs-row>
             <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <datepicker-inline class="mb-base"></datepicker-inline>
             </vs-col>
             <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <datepicker-open-programatically class="mb-base"></datepicker-open-programatically>
             </vs-col>
        </vs-row>
        
       <vs-row>
            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <datepicker-translation class="mb-base"></datepicker-translation>
            </vs-col>
            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <datepicker-rtl class="mb-base"></datepicker-rtl>
            </vs-col>
       </vs-row>
      
        
      <vs-row>
            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <datepicker-day-view-only class="mb-base"></datepicker-day-view-only>
            </vs-col>
            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <datepicker-month-view-only class="mb-base"></datepicker-month-view-only>
            </vs-col>
      </vs-row>
        
        <vs-row>
            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <datepicker-date-month-view-only></datepicker-date-month-view-only>
            </vs-col>
            <vs-col vs-xs="12" vs-sm="6" vs-lg="6">
                <datepicker-month-year-view-only></datepicker-month-year-view-only>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import DatepickerDefault from './DatepickerDefault.vue'
import DatepickerFormat from './DatepickerFormat.vue'
import DatepickerMinMaxDateRange from './DatepickerMinMaxDateRange.vue'
import DatepickerHighlightDates from './DatepickerHighlightDates.vue'
import DatepickerInline from './DatepickerInline.vue'
import DatepickerOpenProgramatically from './DatepickerOpenProgramatically.vue'
import DatepickerTranslation from './DatepickerTranslation.vue'
import DatepickerRtl from './DatepickerRtl.vue'
import DatepickerDayViewOnly from './DatepickerDayViewOnly.vue'
import DatepickerMonthViewOnly from './DatepickerMonthViewOnly.vue'
import DatepickerDateMonthViewOnly from './DatepickerDateMonthViewOnly.vue'
import DatepickerMonthYearViewOnly from './DatepickerMonthYearViewOnly.vue'

export default {
    components: {
        DatepickerDefault,
        DatepickerFormat,
        DatepickerMinMaxDateRange,
        DatepickerHighlightDates,
        DatepickerInline,
        DatepickerOpenProgramatically,
        DatepickerTranslation,
        DatepickerRtl,
        DatepickerDayViewOnly,
        DatepickerMonthViewOnly,
        DatepickerDateMonthViewOnly,
        DatepickerMonthYearViewOnly,
    }
}
</script>