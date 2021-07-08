<template>
  <div>
    <PageHeader :title="title" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mb-2">
              
              <!-- Search -->
              <div class="col-sm-12 col-md-7" />

              <!-- Session Identifier -->
              <div class="col-sm-12 col-md-4">
                <div class="dataTables_filter m-1 mr-2">
                  <label class="d-flex align-items-center">
                    <b-form-input
                      type="search"
                      placeholder="Session Identifier (will be auto filled)"
                      class="form-control form-control-sm"
                    />
                  </label>
                </div>
              </div>

              <!-- start button -->
              <div class="col-sm-12 col-md-1">
                <div class="d-flex justify-content-end m-1">
                  <nuxt-link
                    to="/education-content/condition"
                    class="btn btn-success mb-2"
                  ><div class="mx-2">
                    Start
                  </div></nuxt-link>
                </div>
              </div>
            </div>

            <!-- Condition -->
            <div class="row">
              <nuxt-link
                v-for="index in 10"
                :key="index"
                to="/education-content/condition"
                class="col-xl-3 col-lg-3"
              >
                <div>
                  <div class="card">
                    <div class="card-body">
                      <h6
                        id="active-users-count"
                        class="my-5 text-center"
                      >
                        {{ index }}
                      </h6>

                    </div>
                  </div>
                  <div class="d-flex justify-content-center">
                    <h5 class="m-0 font-16 mb-3">
                      Condition
                    </h5>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Education Content"
    }
  },

  head() {
    return {
      title: `${this.title} `
    }
  }
}
</script>
