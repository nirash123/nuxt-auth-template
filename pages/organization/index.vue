<template>
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
            <h4 class="text-muted mb-2 mt-2">
              Choose an organization
            </h4>
          </div>

          <form>
            <!-- <b-alert
              v-model="isResetError"
              class="mb-4"
              variant="danger"
              dismissible
            >
              {{ error }}
            </b-alert> -->
            <div class="form-group mb-2">
              <div class="row">
                <div class="col-lg-12">
                  <b-card
                    no-body
                    class="mb-0"
                  >
                    <div
                      v-for="(organization_user, index) in organization_users"
                      :key="organization_user.id"
                      class="border-top"
                      :class="{ 'border-top' : index == 0 }"
                      @click="selectOrganization(organization_user)"
                    >
                      <b-card-body class="p-2">
                        <div class="d-flex">
                          <div class="px-2">
                            <b-avatar
                              src="~/assets/images/users/avatar-1.jpg"
                              alt="image"
                              size="lg"
                            /></div>
                          <div class="px-2">
                            <div class="mt-1">
                              <h4 class="card-title text-info">
                                {{ organization_user.organization.name }}
                              </h4>
                            </div>
                            <div class="mt-n2">
                              {{ organization_user.roles[0].name }}
                            </div>
                          </div>
                          <div class="ml-auto mt-1 ">
                            <b-button
                              variant="white border-0"
                              size="lg"
                            >
                              <i class="ri-arrow-right-s-line" />
                            </b-button>
                          </div>
                        </div>
                      </b-card-body>
                    </div>
                  </b-card>
                </div>
              </div>
            </div>

            <div class="form-group mb-0 text-center">
              <nuxt-link to="/organization/create">
                <button
                  class="btn btn-primary btn-block"
                  type="submit"
                >
                  Create Organization
                </button>
              </nuxt-link>
            </div>

          </form>

        </div>
      </div>

      <div class="row mt-3">
        <div class="col-12 text-center">
          <p class="text-muted">Back to <nuxt-link
            to="/education-content"
            class="text-primary font-weight-medium ml-1"
          >
            Home
          </nuxt-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import organizationsApi from '@/services/modules/organizations'

export default {
  layout: 'auth',
  async asyncData({$auth,redirect, route}){
    const organization_users = (await organizationsApi.index()).data.data
    if (organization_users.length > 0 && route.query.select === undefined){
      $auth.$storage.setUniversal('organization', organization_users[0].organization)
       $auth.$storage.setUniversal('team', organization_users[0].organization.teams[0])
      redirect('/education-content')
    }
    return { organization_users }
  },
  data() {
    return {
      organization_users: []
    }
  },
  methods: {
    async selectOrganization(organization_user){
      this.$auth.$storage.setUniversal('organization', organization_user.organization)
      this.$auth.$storage.setUniversal('team', organization_user.organization.teams[0])
      await this.$router.replace({path:'/education-content'})
    }
  }
}
</script>