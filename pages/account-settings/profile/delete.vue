<template>
  <div>
    <div class="row">
      <div class="col-12 col-md-7 my-3">
        <h5>Delete Account</h5>
        <div class="text-warning">
          Deleting your Vapor account does not remove any remaining Vapor
          created resources from your AWS account. You may delete these resources manually
          via the AWS dashboard if you wish.
        </div>
      </div>
      <div class="col-sm-12 col-md-11">

        <!-- form -->
        <b-form
          @submit.prevent="deleteAccount"
        >
          <!-- current password  -->
          <div class="row">
            <div class="col-sm-12 col-md-3 ">
              <label> Current Password </label>
            </div>
            <div class="col-sm-12 col-md-5">
              <b-form-group label-for="password">
                <b-form-input
                  id="password"
                  v-model="form.password"
                  type="password"
                  :state="errors && errors.password ? false : null"
                  placeholder="Enter current password"
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

          <!-- button-->
          <div class="row">
            <div class="col-sm-12 col-md-8">
              <div class="d-flex justify-content-end">
                <b-button
                  class=" ml-2 bg-success"
                  type="submit"
                >
                  Delete Account
                </b-button>
              </div>
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>


<script>

export default {

  asyncData({$auth, redirect}){
    if (!$auth.loggedIn) {
      redirect('/education-content')
    }
  },
  data() {
    return {
      errors:{},
      form: {
         password: '',
      },
    }
  },
  methods: {
    async deleteAccount(){
      try{
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.post('user/confirm-password', this.form)
        await this.$axios.delete('api/user')
        await this.$auth.logout()

        this.$router.replace({path: '/'})
      } catch (error) {
        if(error.response.status === 422) {
          this.errors = error.response.data.errors
        }
      }
    },
  }
}
</script>


