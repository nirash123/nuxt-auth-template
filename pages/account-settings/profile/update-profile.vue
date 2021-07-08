<template>
  <div>
    <div class="row">
      <div class="col-12 my-3">
        <h5>Contact Information</h5>
        Update your account's contact information and email address
      </div>
    </div>
    <div class="col-sm-12 col-md-11">
      <b-form
        @submit.prevent="updateProfileInformation"
      >


        <!-- First name -->
        <div class="row">
          <div class="col-sm-12 col-md-3 ">
            <label> First Name </label>
          </div>
          <div class="col-sm-12 col-md-5">
            <b-form-group label-for="input-first_name">
              <b-form-input
                id="input-first_name"
                v-model="form.first_name"
                type="text"
                :state="errors && errors.first_name ? false : null"
                placeholder="Enter First Name"
              />
              <b-form-invalid-feedback
                v-if="errors && errors.first_name"
                id="input-first_name-feedback"
              >
                {{ errors.first_name[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
        </div>

        <!-- Last name -->
        <div class="row">
          <div class="col-sm-12 col-md-3 ">
            <label> Last Name </label>
          </div>
          <div class="col-sm-12 col-md-5">
            <b-form-group label-for="input-last_name">
              <b-form-input
                id="input-last_name"
                v-model="form.last_name"
                type="text"
                :state="errors && errors.last_name ? false : null"
                placeholder="Enter Last Name"
              />
              <b-form-invalid-feedback
                v-if="errors && errors.last_name"
                id="input-last_name-feedback"
              >
                {{ errors.last_name[0] }}
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
                save
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
  components: {

  },
  layout: 'fixed',
  layout: "auth",
 asyncData({$auth, redirect}){
    if (!$auth.loggedIn) {
      redirect('/')
    }
    },
  data() {
    return {
      errors:{},
      form: {
        first_name: this.$auth.user.first_name,
        last_name: this.$auth.user.last_name,
        email: this.$auth.user.email,
      },
    }
  },
  methods: {
    async updateProfileInformation() {

      try {
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.put('user/profile-information', this.form)

        await this.$router.replace({path: '/account_settings/profile/update-profile'})
        await this.$router.replace({path: '/education-content'})
      } catch (error) {
        if (error.response.status === 422) {
          this.errors = error.response.data.errors
        }
      }
      await this.$auth.fetchUser()
    },

  },
}
</script>


