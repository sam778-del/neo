
<template>
  <div class="h-screen flex w-full bg-img">
    <vs-row class="w-full">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="5" class="mx-auto">
        <vs-card class="vs-card-fluid">
          <div class="full-page-bg-color">
            <div class="session-header bg-primary text-center">
              <div class="vx-card__title mb-8">
                <h4 class="mb-4 vx-card__title text-white">Welcome John</h4>
                <p class="text-white">Please enter email.</p>
              </div>
            </div>

            <div class="p-8 w-full text-center">
              <div class="vx-card__title mb-8">
                <h4 class="mb-4">Your Session is locked</h4>
              </div>
              <vs-input
                icon="icon icon-user"
                icon-pack="feather"
                label-placeholder="Username"
                v-model="value1"
                class="w-full mb-6 no-icon-border"
              />
              <vs-input
                icon="icon icon-lock"
                icon-pack="feather"
                type="password"
                label-placeholder="Password"
                v-model="value2"
                class="w-full mb-6 no-icon-border"
              />

              <div class="mb-4">
                <router-link to="/pages/login">Are you not John Doe?</router-link>
                <div class="mt-4">
                  <vs-button>Unlock</vs-button>
                </div>
              </div>
            </div>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: ""
    };
  }
};
</script>
