
<template>
    <div id="extra-component-chartjs-demo">
        <p class="mb-4">You can easily create reuseable chart components. <a href="https://vue-chartjs.org/" target="_blank" rel="nofollow">vue-chartjs</a> is a wrapper for Chart.js. Read full documnetation <a href="https://vue-chartjs.org/guide/" target="_blank" rel="nofollow">here</a></p>
    
        <vs-row>
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <chartjs-line-chart></chartjs-line-chart>
             </vs-col>
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <chartjs-bar-chart></chartjs-bar-chart>                 
             </vs-col>
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <chartjs-horizontal-bar-chart></chartjs-horizontal-bar-chart>
            </vs-col>
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <chartjs-pie-chart></chartjs-pie-chart>
            </vs-col>
            <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <chartjs-doughnut-chart></chartjs-doughnut-chart>
            </vs-col>
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <chartjs-radar-chart></chartjs-radar-chart>
            </vs-col>
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <chartjs-polar-area-chart></chartjs-polar-area-chart>
            </vs-col>
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <chartjs-bubble-chart></chartjs-bubble-chart>
            </vs-col>
             <vs-col vs-xs="12" vs-md="12" vs-lg="12">
                <chartjs-scatter-chart></chartjs-scatter-chart>
             </vs-col>
        </vs-row>
    </div>
</template>

<script>
import ChartjsBarChart from "./ChartjsBarChart.vue"
import ChartjsLineChart from "./ChartjsLineChart.vue"
import ChartjsPieChart from "./ChartjsPieChart.vue"
import ChartjsRadarChart from "./ChartjsRadarChart.vue"
import ChartjsPolarAreaChart from "./ChartjsPolarAreaChart.vue"
import ChartjsDoughnutChart from "./ChartjsDoughnutChart.vue"
import ChartjsHorizontalBarChart from "./ChartjsHorizontalBarChart.vue"
import ChartjsBubbleChart from "./ChartjsBubbleChart.vue"
import ChartjsScatterChart from "./ChartjsScatterChart.vue"

export default {
    components: {
        ChartjsBarChart,
        ChartjsLineChart,
        ChartjsPieChart,
        ChartjsRadarChart,
        ChartjsPolarAreaChart,
        ChartjsDoughnutChart,
        ChartjsHorizontalBarChart,
        ChartjsScatterChart,
        ChartjsBubbleChart,
    }
}
</script>