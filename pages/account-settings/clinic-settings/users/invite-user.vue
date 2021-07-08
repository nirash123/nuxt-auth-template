<template>
  <div>
    <b-card class="demo-alignment">
      <div class="d-flex justify-content-start mb-5">
        <nuxt-link to="/account-settings">
          <b-button
            variant="white border-0"
            size="lg"
          >
            <i class="mdi mdi-close" />
          </b-button>
        </nuxt-link>
      </div>
      <div class="d-flex justify-content-center my-5">
   
        <form class="my-5 col-sm-3">
          <div class="auth-logo">
            <div class="logo logo-dark text-center">
              <span class="logo-lg mt-2">
                <img
                  src="~/assets/images/avatars/15user.png"
                  width="100"
                >
              </span>
            </div>
          </div>
          <div>
            <h2 class="text-dark mb-5 text-md-center">
              Invite Team
            </h2>
          </div>

          <!-- enter invite link-->
          <b-form-group
            label-for="input-name"
            class="mb-5"
          >
            <h4 class="header-title">
              Enter Invite Email
            </h4>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <b-form-input
                id="input-email"
                placeholder="contact@mail.co.uk"
              />
              <button
                class="btn btn-primary width-sm"
                type="button"
              >
                Invite
              </button>
            </div>
          </b-form-group>

        

          <!-- share invitation link-->
          <b-form-group
            label-for="input-name"
            class="mb-5"
          >
            <h4 class="header-title">
              Share an invitation link
            </h4>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-5">
              <b-form-input
                id="text"
                placeholder="https://app.hyre.co.uk/invite.me/"
              />
              <button
                class="btn btn-primary width-sm"
                type="button"
              >
                Copy
              </button>
            </div>
          </b-form-group>

        </form>
        <div class="mb-5" />
      </div>

    </b-card>
  </div>
</template>



<script>

export default {
  layout: 'auth-2',
    middleware: "router-auth",
    data() {
        return {
        }
    },
}
</script>
