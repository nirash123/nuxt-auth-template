<template>
  <!-- Reset Password form -->
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-6 col-xl-5 mt-5">
      <div class="card">
        <div class="card-body p-4">
          <div class="text-center w-75 m-auto">
            <div class="auth-logo">
              <div class="logo logo-dark text-center">
                <span class="logo-lg">
                  <img
                    src="~/assets/images/favicon.png"
                    width="50"
                  >
                </span>
                <span class="logo-lg mt-2">
                  <img
                    src="~/assets/images/logo-new.png"
                    width="200"
                  >
                </span>
              </div>
            </div>
            <p class="text-muted mb-4 mt-3">
              Enter your email address and password for reset password.
            </p>
          </div>
          <!-- form -->
          <b-form
            @submit.prevent="resetPassword"
          >


            <!-- email -->
            <b-form-group label-for="email">
              <template #label>
                Email
              </template>
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                :state="errors && errors.email ? false : null"
                placeholder="Enter Email"
              />
              <b-form-invalid-feedback
                v-if="errors && errors.email"
                id="email-feedback"
              >
                {{ errors.email[0] }}
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- password -->
            <b-form-group label-for="password">
              <template #label>
                Password
              </template>
              <b-form-input
                id="password"
                v-model="form.password"
                type="password"
                :state="errors && errors.password ? false : null"
                placeholder="Enter password"
              />
              <b-form-invalid-feedback
                v-if="errors && errors.password"
                id="password-feedback"
              >
                {{ errors.password[0] }}
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- Comfirm password -->
            <b-form-group label-for="input-password">
              <template #label>
                Confirmed Password
              </template>
              <b-form-input
                id="password_confirmation"
                v-model="form.password_confirmation"
                type="password"
                :state="errors && errors.password_confirmation ? false : null"
                placeholder="Enter password"
              />
              <b-form-invalid-feedback
                v-if="errors && errors.password_confirmation"
                id="password_confirmation-feedback"
              >
                {{ errors.password_confirmation[0] }}
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- button-->
            <div class="form-group mb-0 text-center">
              <button
                class="btn btn-primary btn-block"
                type="submit"
              >
                Set Password
              </button>
            </div>
          </b-form>
        </div>
      </div>

      <!-- forgot password & sign up  -->  
      <div class="row mt-3">
        <div class="col-12 text-center">
          <p class="text-muted">
            Remember password ?
            <nuxt-link
              to="/"
              class="text-primary font-weight-medium ml-1"
            >
              Log In
            </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  layout: "auth",
  asyncData({$auth, redirect}){
    if ($auth.loggedIn) {
      redirect('/education-content')
    }
  },
  data(){
    return{
      errors:{},
      form: {
        email: this.$route.query.email || '',
        password: '',
        password_confirmation: '',
        token: this.$route.query.token || '',
      }
    }
  },
  mounted() {
    console.log(this.$route.query)
  },
  methods:{
     async resetPassword() {
       try{
         await this.$axios.get('sanctum/csrf-cookie')
         await this.$axios.post('reset-password', this.form)
         await this.$router.replace({path: '/'})
       }catch (error) {
         if(error.response.status === 422) {
           this.errors = error.response.data.errors
         }
       }
    }
  },
}
</script>

