<template>
  <div>
    <div class="row">
      <div class="col-12 my-3">
        <h5>Two Factor Authontication</h5>
        Add additional security to your account using two factor authontication.
      </div>
    </div>
    <div class="col-sm-12 col-md-8">

      <!-- two_factor_enabled -->
      <template v-if="$auth.user.two_factor_enabled">

        <div class="row">
          <div class="col-12 my-3 col-md-7">
            <form @submit.prevent="disableTwoFactorAuthentication">
              <h6>Two factor authentication is enabled.</h6>
              <div>
                When two factor authentication is enabled. you will be prompted for a secure. random token during
                authentication. You may retrieve this token from your phone's Google Authenticator application.
              </div>
              <div>
                <b-button
                  class="bg-success mt-2"
                  type="submit"
                >
                  Disable
                </b-button>
              </div>
            </form>
          </div>
          <div class="col-12 my-3 col-md-5">
            <!-- <div
                  v-if="qrCode"
                  class="my-1 d-flex justify-content-center"
                  v-html="qrCode" /> -->
            <img
              v-if="qrCode"
              class="my-1 d-flex justify-content-center"
              :src="qrCode"
            >
          </div>
        </div>

        <h6>Recovery Codes</h6>
        <div>
          Use recovery codes to access your account in case you lose your device. and can't use your authentication app.
        </div>
        <b-card class="px-5">
          <ul
            v-if="recoveryCodes"
            class="mb-4"
          >
            <div
              v-for="(code, index) in recoveryCodes "
              :key="index"
            >
              <b-form-checkbox
                @click.native.stop
              >
                {{ code }}
              </b-form-checkbox>
            </div>
          </ul>
        </b-card>
      </template>

      <!-- two_factor_disabled -->
      <template v-if="!$auth.user.two_factor_enabled">
        <form @submit.prevent="enableTwoFactorAuthentication">
          <h6>You have not enable two factor authentication.</h6>
          <div>
            When two factor authentication is enabled. you will be prompted for a secure.
            random token during authentication. You may retrieve this token from your phone's
            Google Authenticator application
          </div>
          <!-- button-->
          <div class="row">
            <div class="col-sm-12 col-md-11">
              <div
                class="d-flex justify-content-end"
              >
                <b-button
                  class=" ml-2 bg-success"
                  type="submit"
                >
                  Enable
                </b-button>
              </div>
            </div>
          </div>
        </form>
      </template>
    </div>
    <div><hr></div>
  </div>
</template>

<script>



export default {
  components: {
  },
  layout: 'fixed',
   asyncData({$auth, redirect}){
    if (!$auth.loggedIn) {
      redirect('/')
    }
    },
  data() {
    return {
      qrCode: null,
      recoveryCodes:null,
    }
  },
  methods: {

    async enableTwoFactorAuthentication(){
      await this.$axios.get('sanctum/csrf-cookie')
      await this.$axios.post('user/two-factor-authentication')

      await  this.$auth.fetchUser()

      // this.qrCode = (await this.$axios.get('user/two-factor-qr-code')).data.svg
      const qrSvgString = (await this.$axios.get('user/two-factor-qr-code')).data.svg

      const qrBlob = new Blob([qrSvgString], {
          type: 'image/svg+xml'
      })

      console.log(URL.createObjectURL(qrBlob))

      this.qrCode = URL.createObjectURL(qrBlob)

      await this.getRecoveryCodes()

    },

    async disableTwoFactorAuthentication(){
      await this.$axios.delete('user/two-factor-authentication')
      await  this.$auth.fetchUser()
    },

    async getRecoveryCodes(){
      this.recoveryCodes = (await this.$axios.get('user/two-factor-recovery-codes')).data
    },

    async mounted() {
      if(this.$auth.user.two_factor_enabled){
        await this.getRecoveryCodes()
      }
    }
  }
}
</script>


