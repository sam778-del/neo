
<template>
    <div id="extra-component-echarts-demo">
        <p class="mb-4">ECharts component for Vue.js. Read full documnetation <a href="https://github.com/ecomfe/vue-echarts" target="_blank" rel="nofollow">here</a></p>
        
        <vs-row class="match-height">
            <vs-col vs-w="12">
                <echarts-bar-chart></echarts-bar-chart>
            </vs-col>
            <vs-col vs-w="12">
                <echarts-line-chart></echarts-line-chart>
            </vs-col>
            <vs-col vs-w="12">
                <echarts-pie-chart></echarts-pie-chart>
            </vs-col>
            <vs-col vs-w="12">
                <echarts-scatter-chart></echarts-scatter-chart>
            </vs-col>
            <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <echarts-polar-chart></echarts-polar-chart>
            </vs-col>
           <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <echarts-radar-chart></echarts-radar-chart>
           </vs-col>
        </vs-row>


    </div>
</template>

<script>
import EchartsBarChart from './EchartsBarChart.vue'
import EchartsLineChart from './EchartsLineChart.vue'
import EchartsPieChart from './EchartsPieChart.vue'
import EchartsPolarChart from './EchartsPolarChart.vue'
import EchartsScatterChart from './EchartsScatterChart.vue'
import EchartsRadarChart from './EchartsRadarChart.vue'

export default {
    components: {
        EchartsBarChart,
        EchartsLineChart,
        EchartsPieChart,
        EchartsPolarChart,
        EchartsScatterChart,
        EchartsRadarChart,
    }
}
</script>