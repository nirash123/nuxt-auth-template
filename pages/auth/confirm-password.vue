<template>
  <!-- confirm password form -->
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-6 col-xl-5 mt-5">
      <div class="card">

        <div class="card-body p-4">

          <div class="text-center w-75 m-auto">
            <div class="auth-logo">
              <span class="logo-lg">
                <img
                  src="~/assets/images/favicon.png"
                  width="50"
                >
              </span>
            </div>
            <div class="logo-lg mt-2">
              <span>
                <img
                  src="~/assets/images/logo-new.png"
                  width="200"
                >
              </span>
            </div>
          </div>

          <b-form @submit.prevent="confirmPassword">


            <!-- password -->
            <b-form-group label-for="input-password">
              <template #label>
                Password
              </template>
              <b-form-input
                id="input-password"
                v-model="form.password"
                type="password"
                :state="errors && errors.password ? false : null"
                placeholder="Enter password"
              />
              <b-form-invalid-feedback
                v-if="errors && errors.password"
                id="input-password-feedback"
              >
                {{ errors.password[0] }}
              </b-form-invalid-feedback>
            </b-form-group>


            <!-- button-->
            <div class="form-group mb-0 text-center">
              <button
                class="btn btn-primary btn-block"
                type="submit"
              >
                Confirm Password
              </button>
            </div>
          </b-form>
        </div> 
      </div>
        

      <div class="row mt-3">
        <div class="col-12 text-center">
          <p class="text-muted">Back to <nuxt-link
            to="/account_settings/profile"
            class="text-primary font-weight-medium ml-1"
          >
            profile
          </nuxt-link>
          </p>
        </div> 
      </div>
    </div> 
  </div>
</template>


<script>
export default {
  layout: 'auth',
  data(){
    return{
      errors:{},
      form: {
        password: '',
      }
    }
  },
  methods:{
    async confirmPassword(){
      try{
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.post('user/confirm-password', this.form)
        this.$router.replace({name: this.$route.query.return || 'index'})

      }catch (error) {
        if(error.response.status === 422) {
          this.errors = error.response.data.errors
        }
      }
    }
  }
}
</script>