<template>
  <!-- verify form -->
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
            <p class="text-muted mb-4 mt-3"> Hey {{ $auth.user.name }} , you're almost ready to start enjoying Template.
              Please check your email and verify confirmation message</p>
          </div>

          <b-form @submit.prevent="resendEmailVerification">

            <!--alert-->
            <div>
              <b-alert
                variant="white"
                fade
                :show="showDismissibleAlert"
              >
                <div class="text-success ">
                  Please check your Email .....
                </div>
              </b-alert>
            </div>


            <!-- button-->
            <div class="form-group mb-0 text-center">
              <button
                class="btn btn-primary btn-block"
                type="submit"
              >
                Verify email address
              </button>
            </div>
          </b-form>
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
      showDismissibleAlert: false,
    }
  },
  methods:{
    async resendEmailVerification(){
      await this.$axios.post('email/verification-notification')

      this.showDismissibleAlert=true
    }
  }
}
</script>