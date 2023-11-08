
<template>
  <div class="h-screen session-page">
      <div class="primary-layer"></div>
       <div class="session-page-content">
    <vs-row class="w-full">
      <vs-col vs-xs="12" vs-md="12" vs-lg="6" class="mx-auto">
        <vs-card class="mt-10">
          <div class="vx-card__title">
            <h1 class="text-center">Coming Soon</h1>
          </div>

          <!-- <p>Thank you for checking out our app. We are under construction, we will be here soon with our new awesome app. </p> -->
          <div class="count-down">
            <countdown :time="new Date('03/09/2021 00:00:00').getTime() - new Date().getTime()">
              <template slot-scope="props">
                <div class="single-counter">
                  <span class="timer">{{ props.days }}</span>
                  <span>Days</span>
                </div>
                <div class="single-counter">
                  <span class="timer">{{ props.hours }}</span>
                  <span>Hours</span>
                </div>
                <div class="single-counter">
                  <span class="timer">{{ props.minutes }}</span>
                  <span>Minutes</span>
                </div>
                <div class="single-counter">
                  <span class="timer">{{ props.seconds }}</span>
                  <span>Seconds</span>
                </div>
              </template>
            </countdown>
          </div>
          <vs-divider position="center">Subscribe</vs-divider>
          <div class="subscription">
            <vs-input type="email" label-placeholder="Email" v-model="value1" class="w-full mb-4"/>
            <vs-button class="w-full">Subscribe</vs-button>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
       </div>
  </div>
</template>

<script>
import VueCountdown from "@chenfengyuan/vue-countdown";
export default {
  data() {
    return {
      value1: ""
    };
  },
  components: {
    countdown: VueCountdown
  }
};
</script>

<style lang="scss">
.session-page {
  background-image: url("../../assets/images/session.jpg");
  background-size: cover;
}
</style>