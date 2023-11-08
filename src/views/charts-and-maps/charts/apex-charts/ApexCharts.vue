
<template>
    <div id="extra-component-chartist-demo">
        <p class="mb-4">A Vue.js component for ApexCharts. Read full documnetation <a href="https://apexcharts.com/docs/installation/" target="_blank" rel="nofollow">here</a></p>
        
        <vs-row>
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <vs-card code-toggler>
                     <div slot="header">
        <h3>
          Line Chart
        </h3>
      </div>
                    <vue-apex-charts type="line" height="350" :options="apexChatData.lineChartSimple.chartOptions" :series="apexChatData.lineChartSimple.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.lineChartSimpleCode }}
                    </template>
                </vs-card>
             </vs-col>

            <!-- LINE AREA CHART -->
           <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <vs-card code-toggler>
                     <div slot="header">
        <h3>
          Line Area Chart
        </h3>
      </div>
                    <vue-apex-charts type="area" height="350" :options="apexChatData.lineAreaChartSpline.chartOptions" :series="apexChatData.lineAreaChartSpline.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.lineAreaChartSplineCode }}
                    </template>
                </vs-card>
            </vs-col>

            <!-- COLUMN CHART -->
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <vs-card code-toggler>
                     <div slot="header">
        <h3>
          Column Chart
        </h3>
      </div>
                    <vue-apex-charts type="bar" height="350" :options="apexChatData.columnChart.chartOptions" :series="apexChatData.columnChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.columnChartCode }}
                    </template>
                </vs-card>
             </vs-col>

            <!-- Bar CHART -->
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <vs-card code-toggler>
                     <div slot="header">
        <h3>
          Bar Chart
        </h3>
      </div>
                    <vue-apex-charts type="bar" height="350" :options="apexChatData.barChart.chartOptions" :series="apexChatData.barChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.barChartCode }}
                    </template>
                </vs-card>
             </vs-col>

            <!-- MIXED CHART -->
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <vs-card code-toggler>
                     <div slot="header">
        <h3>
          Mixed Chart
        </h3>
      </div>
                    <vue-apex-charts type="line" height="350" :options="apexChatData.mixedChart.chartOptions" :series="apexChatData.mixedChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.mixedChartCode }}
                    </template>
                </vs-card>
             </vs-col>

            <!-- CANDLESTICK CHART -->
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <vs-card code-toggler>
                     <div slot="header">
        <h3>
          Candlestick Chart
        </h3>
      </div>
                    <vue-apex-charts type="candlestick" height="350" :options="apexChatData.candlestickChart.chartOptions" :series="apexChatData.candlestickChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.candlestickChartCode }}
                    </template>
                </vs-card>
             </vs-col>

            <!-- BUBBLE CHART -->
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <vs-card code-toggler>
                     <div slot="header">
        <h3>
          3D Bubble Chart
        </h3>
      </div>
                    <vue-apex-charts type="bubble" height="350" :options="apexChatData.bubbleChart.chartOptions" :series="apexChatData.bubbleChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.bubbleChartCode }}
                    </template>
                </vs-card>
             </vs-col>

            <!-- SCATTER CHART -->
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <vs-card code-toggler>
                     <div slot="header">
        <h3>
          Scatter Chart
        </h3>
      </div>
                    <vue-apex-charts type="scatter" height="350" :options="apexChatData.scatterChart.chartOptions" :series="apexChatData.scatterChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.scatterChartCode }}
                    </template>
                </vs-card>
             </vs-col>

            <!-- HEAT MAP CHART -->
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <vs-card code-toggler>
                     <div slot="header">
        <h3>
          Heat Map Chart
        </h3>
      </div>
                    <vue-apex-charts type="heatmap" height="350" :options="apexChatData.heatMapChart.chartOptions" :series="apexChatData.heatMapChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.heatMapChartCode }}
                    </template>
                </vs-card>
             </vs-col>

            <!-- PIE CHART -->
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <vs-card code-toggler>
                     <div slot="header">
        <h3>
          Pie Chart
        </h3>
      </div>
                    <vue-apex-charts type="pie" height="350" :options="apexChatData.pieChart.chartOptions" :series="apexChatData.pieChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.pieChartCode }}
                    </template>
                </vs-card>
             </vs-col>

            <!-- DONUT CHART -->
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <vs-card code-toggler>
                     <div slot="header">
        <h3>
          Donut Chart
        </h3>
      </div>
                    <vue-apex-charts type="donut" height="350" :options="apexChatData.donutChart.chartOptions" :series="apexChatData.donutChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.donutChartCode }}
                    </template>
                </vs-card>
             </vs-col>

            <!-- RADIAL BAR CHART -->
             <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <vs-card code-toggler>
                     <div slot="header">
        <h3>
         Radial Bar Chart
        </h3>
      </div>
                    <vue-apex-charts type="radialBar" height="350" :options="apexChatData.radialBarChart.chartOptions" :series="apexChatData.radialBarChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.radialBarChartCode }}
                    </template>
                </vs-card>
            </vs-col>

            <!-- RADAR CHART -->
            <vs-col vs-xs="12" vs-md="12" vs-lg="6">
                <vs-card code-toggler>
                     <div slot="header">
        <h3>
          Radar Chart
        </h3>
      </div>
                    <vue-apex-charts type="radar" height="350" :options="apexChatData.radarChart.chartOptions" :series="apexChatData.radarChart.series"></vue-apex-charts>
                    <template slot="codeContainer">
{{ apexChatData.radarChartCode }}
                    </template>
                </vs-card>
            </vs-col>
        </vs-row>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './apexChartData.js'

export default {
    data() {
        return {
            apexChatData: apexChatData
        }
    },
    components: {
        VueApexCharts
    }
}
</script>