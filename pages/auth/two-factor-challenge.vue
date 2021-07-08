<template>
  <!-- two factor challenge  form -->
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
              Enter your email address and password to access admin panel.
            </p>
          </div>
          <!-- form -->
          <b-form
            @submit.prevent="twoFactorChallenge"
          >

            <!-- code -->
            <b-form-group label-for="code">
              <template #label>
                Code
              </template>
              <b-form-input
                id="code"
                v-model="form.code"
                name="code"
                :state="errors && errors.code ? false : null"
                placeholder="Enter code"
              />
              <b-form-invalid-feedback
                v-if="errors && errors.code"
                id="code-feedback"
              >
                {{ errors.code[0] }}
              </b-form-invalid-feedback>
            </b-form-group>

            <!-- link -->
            <div class="mb-2">
              <nuxt-link
                :to="{path: '/auth/two-factor-challenge-recovery'}"
              >
                <u>Or enter recovery code</u>
              </nuxt-link>
            </div>

            <!-- button-->
            <div class="form-group mb-0 text-center">
              <button
                class="btn btn-primary btn-block"
                type="submit"
              >
                Submit code
              </button>
            </div>
          </b-form>
        </div>
      </div>

      <!-- sign In -->  
      <div class="row mt-3">
        <div class="col-12 text-center">
          <p class="text-muted">
            Back to
            <nuxt-link
              to="/"
              class="text-primary font-weight-medium ml-1"
            >
              Sign In
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
        code:'',
      }
    }
  },
  methods:{
    async twoFactorChallenge(){
      try{
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.post('two-factor-challenge' ,this.form)

        await this.$auth.fetchUser()

        await this.$router.replace({path:'/sessions'})
      }catch (error) {
        if(error.response.status === 422) {
          this.errors = error.response.data.errors
        }
      }
    }
  },
}
</script>

