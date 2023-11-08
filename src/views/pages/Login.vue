
<template>
  <div class="session-page" id="page-login">
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
          vs-md="6"
          vs-lg="4"
          vs-type="flex"
          vs-align="center"
          class="ml-auto"
        >
          <vs-card class="vs-card-fluid">
            <div class="full-page-bg-color">
              <div class="p-8 w-full">
                <vs-input
                  v-validate="'required|email|min:3'"
                  data-vv-validate-on="blur"
                  name="email"
                  icon="icon icon-user"
                  icon-pack="feather"
                  label-placeholder="Email"
                  v-model="email"
                  class="w-full no-icon-border mb-10"
                />
                <span class="text-sm">{{ errors.first('email') }}</span>
                <vs-input
                  data-vv-validate-on="blur"
                  v-validate="'required|min:6|max:10'"
                  type="password"
                  name="password"
                  icon="icon icon-lock"
                  icon-pack="feather"
                  label-placeholder="Password"
                  v-model="password"
                  class="w-full mt-6 no-icon-border"
                />
                <span class="text-danger text-sm">{{ errors.first('password') }}</span>
                <div class="flex flex-wrap justify-between my-5">
                  <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox>
                  <router-link to="/pages/forgot-password">Forgot Password?</router-link>
                </div>
                <div class="text-center mb-4">
                  <vs-button class :disabled="!validateForm" @click="login">Login</vs-button>
                </div>
                <div class="text-center">
                  <span>
                    <strong>
                      Are You New To Neor?
                      <a href="#">Register Now</a>
                    </strong>
                  </span>
                </div>
                <vs-divider>OR</vs-divider>
                <div class="full-page-bg-color text-center">
                  <div class="social-login flex flex-wrap justify-center">
                    <vs-button class="mt-4" @click="loginAuth0" color="#eb5424">Auth0</vs-button>
                  </div>
                </div>
              </div>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
      <vs-row class="session-abs">
        <vs-col
          vs-type="flex"
          vs-justify
          vs-align="end"
          vs-xs="12"
          vs-sm="12"
          vs-md="12"
          vs-lg="12"
        >
        
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "demo@trendsetter.com",
      password: "123456789",
      checkbox_remember_me: false
    };
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.email != "" && this.password != "";
    }
  },
  methods: {
    login() {
      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          email: this.email,
          password: this.password
        },
        notify: this.$vs.notify
      };
      this.$store.dispatch("auth/loginAttempt", payload);
    },

    loginAuth0() {
      if (this.$store.state.auth.isUserLoggedIn()) {
        this.notifyAlreadyLogedIn();
        return false;
      }
      this.$auth.login({ target: this.$route.query.to });
    },

    // Google login
    loginWithGoogle() {
      this.$store.dispatch("auth/loginWithGoogle", { notify: this.$vs.notify });
    },

    // Facebook login
    loginWithFacebook() {
      this.$store.dispatch("auth/loginWithFacebook", {
        notify: this.$vs.notify
      });
    },

    // Twitter login
    loginWithTwitter() {
      this.$store.dispatch("auth/loginWithTwitter", {
        notify: this.$vs.notify
      });
    },

    // Github login
    loginWithGithub() {
      this.$store.dispatch("auth/loginWithGithub", { notify: this.$vs.notify });
    },

    notifyAlreadyLogedIn() {
      this.$vs.notify({
        title: "Login Attempt",
        text: "You are already logged in!",
        iconPack: "feather",
        icon: "icon-alert-circle",
        color: "warning"
      });
    },
    registerUser() {
      if (this.$store.state.auth.isUserLoggedIn()) {
        this.notifyAlreadyLogedIn();
        return false;
      }
      this.$router.push("/pages/register");
    }
  }
};
</script>
<style lang="scss">
.session-page {
  background-image: url("../../assets/images/session.jpg");
  background-size: cover;
}
</style>

