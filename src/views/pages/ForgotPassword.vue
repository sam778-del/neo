
<template>
  <div class="h-screen session-page">
    <div class="session-page-content">
      
      <vs-row class="session-main" vs-align="flex-center " vs-type="flex" vs-justify="center">
       <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-xs="12"
          vs-sm="8"
          vs-md="6"
          vs-lg="4"
          class="mr-auto"
        >
          <div>
             <div class="session-head mb-2">
        <a href="#">
          <img src="@/assets/images/logo/logo-light.png" width="130" class="mb-4" alt>
        </a>
      </div>
            <h2 class="text-white">Making More Possible</h2>
            <p
              class="text-white"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magni illum voluptas dolorum vel.</p>
          </div>
        </vs-col>
        <vs-col
          vs-xs="12"
          vs-sm="8"
          vs-md="5"
          vs-lg="4"
          vs-type="flex"
          vs-align="center"
          class="ml-auto"
        >
          <vs-card class="vs-card-fluid">
            <div class="full-page-bg-color">
              <div class="p-8 w-full">
                  <h3 class="mb-10">Forgot Password</h3>
                <vs-input
                  type="email"
                  label-placeholder="Email"
                  v-model="value1"
                  class="w-full mb-8"
                />
                <vs-button>Recover Password</vs-button>
              </div>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
  
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: ""
    };
  }
};
</script>
<style lang="scss">
.session-page {
  background-image: url("../../assets/images/session.jpg");
  background-size: cover;
}
</style>