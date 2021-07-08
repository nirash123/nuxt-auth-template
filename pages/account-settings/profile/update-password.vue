<template>
  <div>
    <div class="row">
      <div class="col-12 my-3">
        <h5>Password</h5>
        Ensure your account is using a long. random password to stay secure.
        <div class="text-warning">
          Changing your password revokes all existing API Tokens.
        </div>
      </div>
    </div>
    <div class="col-sm-12 col-md-11">
      <!-- form -->
      <b-form
        @submit.prevent="updatePassword"
      >



        <!-- Current password  -->
        <div class="row">
          <div class="col-sm-12 col-md-3 ">
            <label> Current Password </label>
          </div>
          <div class="col-sm-12 col-md-5">
            <b-form-group label-for="current_password">
              <b-form-input
                id="password"
                v-model="form.current_password"
                type="password"
                :state="errors && errors.current_password ? false : null"
                placeholder="Enter current password"
              />
              <b-form-invalid-feedback
                v-if="errors && errors.current_password"
                id="password-feedback"
              >
                {{ errors.current_password[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </div>


        <!-- new password  -->
        <div class="row">
          <div class="col-sm-12 col-md-3 ">
            <label> New Password </label>
          </div>
          <div class="col-sm-12 col-md-5">
            <b-form-group label-for="password">
              <b-form-input
                id="password"
                v-model="form.password"
                type="password"
                :state="errors && errors.password ? false : null"
                placeholder="Enter New password"
              />
              <b-form-invalid-feedback
                v-if="errors && errors.password"
                id="password-feedback"
              >
                {{ errors.password[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </div>


        <!-- Comfirm password  -->
        <div class="row">
          <div class="col-sm-12 col-md-3 ">
            <label> Comfirmed Password </label>
          </div>
          <div class="col-sm-12 col-md-5">
            <b-form-group label-for="input-password">
              <b-form-input
                id="password_confirmation"
                v-model="form.password_confirmation"
                type="password"
                :state="errors && errors.password_confirmation ? false : null"
                placeholder="Enter New password"
              />
              <b-form-invalid-feedback
                v-if="errors && errors.password_confirmation"
                id="password_confirmation-feedback"
              >
                {{ errors.password_confirmation[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </div>

        <!-- button-->
        <div class="row">
          <div class="col-sm-12 col-md-8">
            <div
              class="d-flex justify-content-end"
            >
              <b-button
                class=" ml-2 bg-success"
                type="submit"
              >
                Set Password
              </b-button>
            </div>
          </div>
        </div>
      </b-form>
    </div>
    <div><hr></div>
  </div>
</template>


<script>
export default {
  layout: "auth",
   asyncData({$auth, redirect}){
    if (!$auth.loggedIn) {
      redirect('/')
    }
    },
  data(){
    return{
      errors:{},
      form: {
        current_password: '',
        password: '',
        password_confirmation: '',
      }
    }
  },
  methods:{

    async updatePassword() {
      try{
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.put('user/password', this.form)

        await this.$router.replace({path: '/account_settings/profile/update-password'})
        await this.$router.replace({path: '/account_settings/profile/'})

      }catch (error) {
        if(error.response.status === 422) {
          this.errors = error.response.data.errors
        }
        console.log(this.errors)
      }
    },
  },
}
</script>




