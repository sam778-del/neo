
<template>
  <div class="h-screen session-page" id="page-login">
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
					<h3 class="mb-6"> Please Fill your Details</h3>
              <vs-input
                v-validate="'required|alpha_dash|min:3'"
                data-vv-validate-on="blur"
                label-placeholder="Username"
                name="username"
                placeholder="Username"
                v-model="username"
                class="w-full"
              />
              <span class="text-danger text-sm">{{ errors.first('username') }}</span>

              <vs-input
                v-validate="'required|email'"
                data-vv-validate-on="blur"
                name="email"
                type="email"
                label-placeholder="Email"
                placeholder="Email"
                v-model="email"
                class="w-full mt-8"
              />
              <span class="text-danger text-sm">{{ errors.first('email') }}</span>

              <vs-input
                ref="password"
                type="password"
                data-vv-validate-on="blur"
                v-validate="'required|min:6|max:10'"
                name="password"
                label-placeholder="Password"
                placeholder="Password"
                v-model="password"
                class="w-full mt-8"
              />
              <span class="text-danger text-sm">{{ errors.first('password') }}</span>

              <vs-input
                type="password"
                v-validate="'min:6|max:10|confirmed:password'"
                data-vv-validate-on="blur"
                data-vv-as="password"
                name="confirm_password"
                label-placeholder="Confirm Password"
                placeholder="Confirm Password"
                v-model="confirm_password"
                class="w-full mt-6"
              />
              <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>

              <vs-checkbox
                v-model="isTermsConditionAccepted"
                class="mt-6"
              >I accept the terms & conditions.</vs-checkbox>
				  <div class="text-center">
              <!-- <vs-button type="border" to="/pages/login" class="mt-6 mx-2">Login</vs-button> -->
               <vs-button class="mt-6 mx-2" @click="registerUser" :disabled="!validateForm">Register</vs-button>
</div>
				     <div class="text-center mt-4">
                  <span>
                    <strong>
                      Already Have Account?
                      <a href="#">Sign In</a>
                    </strong>
                  </span>
                </div>
            </div>
          </div>
        </vs-card>
        </vs-col>
      </vs-row>
     
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      isTermsConditionAccepted: true
    };
  },
  computed: {
    validateForm() {
      return (
        !this.errors.any() &&
        this.username != "" &&
        this.email != "" &&
        this.password != "" &&
        this.confirm_password != "" &&
        this.isTermsConditionAccepted === true
      );
    }
  },
  methods: {
    registerUser() {
      if (!this.validateForm) return false;
      if (this.$store.state.auth.isUserLoggedIn()) {
        this.notifyAlreadyLogedIn();
        return;
      }

      // create user using firebase
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$vs.notify({
              title: "Account Created",
              text: "You are successfully registered!",
              iconPack: "feather",
              icon: "icon-check",
              color: "success"
            });
          },
          error => {
            this.$vs.notify({
              title: "Error",
              text: error.message,
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "danger"
            });
          }
        );

      // update user profile. In this case add username
      const username = this.username;
      const loginPayload = {
        userDetails: {
          email: this.email,
          password: this.password
        },
        notify: this.$vs.notify
      };
      const store = this.$store;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          user
            .updateProfile({
              displayName: username
            })
            .then(
              function() {
                // Profile updated successfully!
                // Login user
                store.dispatch("auth/login", loginPayload);
              },
              function(error) {
                this.$vs.notify({
                  title: "Error",
                  text: error.message,
                  iconPack: "feather",
                  icon: "icon-alert-circle",
                  color: "danger"
                });
              }
            );
        }
      });
    },
    notifyAlreadyLogedIn() {
      this.$vs.notify({
        title: "Login Attempt",
        text: "You are already logged in!",
        iconPack: "feather",
        icon: "icon-alert-circle",
        color: "warning"
      });
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