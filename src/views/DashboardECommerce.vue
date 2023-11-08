<template>
  <div>
    <vs-row>
      <vs-col vs-xs="12" vs-sm="4" vs-lg="4">
        <statistics-card-line
          icon="UsersIcon"
          statistic="92.6k"
          statisticTitle="Subscribers Gained"
          :chartData="analyticsData.subscribersGained"
          type="line"
        ></statistics-card-line>
      </vs-col>
      <vs-col vs-xs="12" vs-sm="4" vs-lg="4">
        <statistics-card-line
          icon="DollarSignIcon"
          statistic="97.5K"
          statisticTitle="Revenue Generated"
          :chartData="analyticsData.revenueGenerated"
          color="success"
          type="line"
        ></statistics-card-line>
      </vs-col>
      <vs-col vs-xs="12" vs-sm="4" vs-lg="4">
        <statistics-card-line
          icon="ShoppingCartIcon"
          statistic="36%"
          statisticTitle="Quarterly Sales"
          :chartData="analyticsData.quarterlySales"
          color="danger"
          type="line"
        ></statistics-card-line>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-xs="12" vs-sm="12" vs-lg="8">
        <vs-card>
          <div slot="header">
            <h3>Profit Retention</h3>
          </div>
          <vue-apex-charts
            type="bar"
            height="330"
            :options="analyticsData.columnBar.chartOptions"
            :series="analyticsData.columnBar.series"
          />
        </vs-card>
      </vs-col>
      <vs-col vs-xs="12" vs-sm="12" vs-lg="4">
        <vs-card>
          <div slot="header">
            <h3>Browser Statistics</h3>
          </div>
          <div
            v-for="(browser, index) in analyticsData.browserAnalytics"
            :key="browser.id"
            :class="{'mt-4': index}"
          >
            <div class="flex justify-between">
              <div class="flex flex-col">
                <span class="mb-1">{{ browser.name }}</span>
                <h4>{{ browser.ratio }}%</h4>
              </div>
              <div class="flex flex-col text-right">
                <span class="flex -mr-1">
                  <i class="fab fa-google text-success fa-lg"></i>
                </span>
              </div>
            </div>
            <vs-progress :percent="browser.ratio"></vs-progress>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-row>
      <!-- CARD 7: Sales Stats -->
      <vs-col vs-xs="12" vs-sm="12" vs-lg="6">
        <vs-card>
          <div slot="header">
            <h3>New Followers</h3>
          </div>
          <div class="followers-list__item flex mb-8">
            <div class="mr-5">
              <img class="rounded" src="@/assets/images/user-1.jpg" width="60" height="60">
            </div>
            <div>
              <h6 class="font-bold">Draco Malfoy</h6>
              <small>draco_malfoy27</small>
            </div>
            <div class="visit-profile">
              <vs-button size="small" color="danger">Message</vs-button>
            </div>
          </div>
          <div class="followers-list__item flex mb-8">
            <div class="mr-5">
              <img class="rounded" src="@/assets/images/user-2.jpg" width="60" height="60">
            </div>
            <div>
              <h6 class="font-bold">Sirius Black</h6>
              <small>siriusblack</small>
            </div>
            <div class="visit-profile">
              <vs-button size="small" color="danger">Message</vs-button>
            </div>
          </div>
          <div class="followers-list__item flex">
            <div class="mr-5">
              <img class="rounded" src="@/assets/images/user-3.jpg" width="60" height="60">
            </div>
            <div>
              <h6 class="font-bold">Severus Snape</h6>
              <small>severus_hogwarts</small>
            </div>
            <div class="visit-profile">
              <vs-button size="small" color="danger">Message</vs-button>
            </div>
          </div>
        </vs-card>
      </vs-col>
      <!-- CARD 8: Activity Timeline -->
      <vs-col vs-xs="12" vs-sm="12" vs-lg="6">
        <vs-card class="mb-8 bg-primary-gradient color-white">
          <div slot="header">
            <h3>Growth Rate</h3>
          </div>
          <h2 class="mb-2">28%</h2>
          <vs-progress :height="8" :percent="28" color="success"></vs-progress>
        </vs-card>
        <vs-card>
          <div slot="header">
            <h3>Branding</h3>
          </div>
          <h2 class="mb-2">14%</h2>
          <vs-progress :height="8" :percent="14" color="danger"></vs-progress>
        </vs-card>
      </vs-col>
    </vs-row>
    <vs-row>
      <!-- Sessions By Device -->
      <!-- CHAT CARD -->
      <vs-col vs-xs="12" vs-sm="12" vs-lg="6">
        <vs-card class="overflow-hidden">
          <div slot="header">
            <h3>Chat</h3>
          </div>
          <template>
            <div class="chat-card-log">
              <VuePerfectScrollbar
                ref="chatLogPS"
                class="scroll-area pt-6 px-6"
                :settings="settings"
              >
                <ul ref="chatLog">
                  <li
                    class="flex items-start"
                    :class="{'flex-row-reverse': msg.isSent, 'mt-4': index}"
                    v-for="(msg, index) in chatMsg"
                    :key="index"
                  >
                    <vs-avatar
                      size="40px"
                      class="m-0 flex-no-shrink"
                      :class="msg.isSent ? 'ml-5' : 'mr-5'"
                      :src="require(`@/assets/images/${msg.senderImg}`)"
                    ></vs-avatar>
                    <div
                      class="msg relative bg-white shadow-md py-3 px-4 mb-2 rounded-lg max-w-md"
                      :class="{'chat-sent-msg ': msg.isSent, 'border border-solid border-grey-light': !msg.isSent}"
                    >
                      <span>{{ msg.msg }}</span>
                    </div>
                  </li>
                </ul>
              </VuePerfectScrollbar>
            </div>
            <div class="flex bg-white chat-input-container p-6">
              <vs-input
                class="mr-3 w-full"
                v-model="chatMsgInput"
                @keyup.enter="chatMsgInput = ''"
                placeholder="Type Your Message"
              ></vs-input>
              <vs-button icon-pack="feather" icon="icon-send" @click="chatMsgInput = ''"></vs-button>
            </div>
          </template>
        </vs-card>
      </vs-col>
      <!-- CUSTOMERS CHART -->
      <!-- CARD 9: DISPATCHED ORDERS -->
      <vs-col vs-xs="12" vs-sm="12" vs-lg="6">
        <vs-card>
          <div slot="header">
            <h3>Project Status</h3>
          </div>
          <div class="mt-4">
            <vs-table :data="users">
              <template slot="thead">
                <vs-th>Project Thumb</vs-th>
                <vs-th>Project Name</vs-th>
                <vs-th>Views</vs-th>
                <vs-th>Rate</vs-th>
              </template>
              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].orderNo">
                    <img class="t-img" :src="require(`@/assets/images/${data[indextr].senderImg}`)">
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].usersLiked}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].location}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].startDate}}</span>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>

    <vs-row>
      <!-- CARD 9: DISPATCHED ORDERS -->
      <vs-col vs-w="12">
        <vs-card>
          <div slot="header">
            <h3>Project Status</h3>
          </div>
          <div class="mt-4">
            <vs-table :data="users2">
              <template slot="thead">
                <vs-th>Project ID.</vs-th>
                <vs-th>Project Name</vs-th>
                <vs-th>Team</vs-th>
                <vs-th>Client Info</vs-th>
                <vs-th>STATUS</vs-th>
                <vs-th>To be Complete</vs-th>
              </template>
              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].orderNo">
                    <span>#{{data[indextr].orderNo}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].usersLiked}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].location}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].startDate}}</span>
                  </vs-td>
                  <vs-td :data="data[indextr].status">
                    <span class="flex items-center px-2 py-1 rounded">
                      <div
                        class="h-3 w-3 rounded-full mr-2"
                        :class="'bg-' + data[indextr].statusColor"
                      ></div>
                      {{data[indextr].status}}
                    </span>
                  </vs-td>
                  <vs-td :data="data[indextr].orderNo">
                    <span>{{data[indextr].estDelDate}}</span>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";

import VueApexCharts from "vue-apexcharts";

import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";

import analyticsData from "./ui-elements/card/analyticsData.js";

import ChangeTimeDurationDropdown from "@/components/ChangeTimeDurationDropdown.vue";

export default {
  data() {
    return {
      analyticsData: analyticsData,

      chatMsgInput: "",

      contentImg1: "content-img-1.jpg",

      profileUser1: "user-1.jpg",

      profileUser2: "user-2.jpg",

      profileUser3: "user-3.jpg",

      overlayImg2: "user-1.jpg",

      settings: {
        // perfectscrollbar settings

        maxScrollbarLength: 60,

        wheelSpeed: 0.6
      },

      users: [
        {
          senderImg: "user-1.jpg",

          operator: "Cinar Knowles",

          usersLiked: "Apple Mac",

          location: "256",

          startDate: "4.9"
        },

        {
          senderImg: "user-2.jpg",

          operator: "Cinar Knowles",

          usersLiked: "Apple Mac",

          location: "256",

          startDate: "4.9"
        },

        {
          senderImg: "user-3.jpg",

          operator: "Cinar Knowles",

          usersLiked: "Apple Mac",

          location: "256",

          startDate: "4.9"
        },

        {
          senderImg: "user-1.jpg",

          operator: "Cinar Knowles",

          usersLiked: "Apple Mac",

          location: "256",

          startDate: "4.9"
        },
        {
          senderImg: "user-2.jpg",

          operator: "Cinar Knowles",

          usersLiked: "Apple Mac",

          location: "256",

          startDate: "4.9"
        },
        {
          senderImg: "user-3.jpg",

          operator: "Cinar Knowles",

          usersLiked: "Apple Mac",

          location: "256",

          startDate: "4.9"
        }
      ],

      users2: [
        {
          orderNo: 879985,

          status: "Under Construction",

          statusColor: "success",

          operator: "Cinar Knowles",

          operatorImg: "user-1.jpg",

          usersLiked: "Gryffindor",

          location: "Edison",

          distPercent: 80,

          startDate: "Katie Bell",

          estDelDate: "28/07/2018"
        },

        {
          orderNo: 156897,

          status: "Completed",

          statusColor: "warning",

          operator: "Britany Ryder",

          operatorImg: "user-2.jpg",

          usersLiked: "Slytherin",

          location: "Einstein",

          distPercent: 60,

          startDate: "Alphard Black",

          estDelDate: "28/07/2018"
        },

        {
          orderNo: 568975,

          status: "Under Construction",

          statusColor: "success",

          operator: "Kishan Ashton",

          operatorImg: "user-3.jpg",

          usersLiked: "Ravenclaw",

          location: "Flamingo",

          distPercent: 70,

          startDate: "Regulus Black",

          estDelDate: "28/07/2018"
        },

        {
          orderNo: 245689,

          status: "Hold",

          statusColor: "danger",

          operator: "Anabella Elliott",

          operatorImg: "user-1.jpg",

          usersLiked: "Gemini",

          location: "Phineas Nigellus",

          distPercent: 95,

          startDate: "Phineas Nigellus",

          estDelDate: "28/07/2018"
        }
      ],

      chatMsg: [
        {
          senderImg: "user-1.jpg",

          msg: "Cake sesame snaps cupcake gingerbread",

          isSent: true
        },

        {
          senderImg: "user-2.jpg",

          msg: "Apple pie pie jujubes chupa chups muffin",

          isSent: false
        },

        {
          senderImg: "user-1.jpg",

          msg: "Chocolate cake",

          isSent: true
        },

        {
          senderImg: "user-1.jpg",

          msg: "Donut sweet pie oat cake dragée fruitcake",

          isSent: false
        },

        {
          senderImg: "user-2.jpg",

          msg: "Liquorice chocolate bar jelly beans icing",

          isSent: true
        },

        {
          senderImg: "user-3.jpg",

          msg: "Powder toffee tootsie roll macaroon cupcake.",

          isSent: false
        },

        {
          senderImg: "user-1.jpg",

          msg:
            "Apple pie oat cake brownie cotton candy cupcake chocolate bar dessert.",

          isSent: true
        },

        {
          senderImg: "user-3.jpg",

          msg: "Biscuit cake jujubes carrot cake topping sweet cake.",

          isSent: false
        }
      ]
    };
  },

  components: {
    VueApexCharts,

    StatisticsCardLine,

    VuePerfectScrollbar,

    ChangeTimeDurationDropdown
  },

  mounted() {
    this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
  }
};
</script>
<style lang="scss">
.chat-card-log {
  height: 400px;
  .chat-sent-msg {
    background-color: #f2f4f7 !important;
  }
}
#dashboard-analytics {
  .greet-user {
    position: relative;
    .decore-left {
      position: absolute;
      left: 0;
      top: 0;
    }
    .decore-right {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  @media (max-width: 576px) {
    .decore-left,
    .decore-right {
      width: 140px;
    }
  }
}
</style>

