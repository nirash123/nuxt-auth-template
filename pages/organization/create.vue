<template>
  <div>
    <b-card class="demo-alignment">
      <div class="d-flex justify-content-start mb-5">
        <nuxt-link to="/education-content">
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
          <div class=" mt-5  auth-logo">
            <div class="logo logo-dark text-center">
              <span class="logo-lg mt-2">
                <img
                  src="~/assets/images/icon.png"
                  width="100"
                >
              </span>
            </div>
          </div>
          <div>
            <h2 class="text-dark mb-3 text-md-center">
              Create Organization
            </h2>
          </div>

          <!-- organization name-->
          <b-form-group
            label-for="input-name"
          >
            <h4 class="header-title">
              Name
            </h4>
            <b-form-input
              id="input-name"
              placeholder="Enter Organization Name"
            />
          </b-form-group>

          <!-- create button-->
          <div class="d-flex justify-content-center mb-5">
            <nuxt-link to="/education-content">
              <div class="mb-5">
                <button
                  class="btn btn-primary mb-5"
                  type="submit"
                >
                  <div class="mx-3 ">
                    Create
                  </div>
                </button>
              </div>
            </nuxt-link>
          </div>
        </form>
        <div />
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


