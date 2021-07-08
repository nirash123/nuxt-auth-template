<template>
  <div>
    <PageHeader :title="title" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">

            <div class="row mb-4">
              <div class="col-sm-12 col-md-12">
                <div class="d-flex justify-content-end">

                  <!-- Session Identifier -->
                  <div class="col-sm-12 col-md-12 ">
                    <div class="d-flex justify-content-end">
                      <div class="col-sm-4 col-md-4">
                        <div class="dataTables_filter">
                          <label class="d-flex align-items-center">
                            <b-form-input
                              v-model="filter"
                              type="search"
                              placeholder="Session Identifier (will be auto filled)"
                              class="form-control form-control-sm"
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-xl-8 col-lg-8">

                        <!-- search button -->
                        <div class="d-flex justify-content-start">
                          <div class="mr-2">
                            <div class="dataTables_filter text-md-left">
                              <label class="d-inline-flex align-items-center">
                                <b-form-input
                                  v-model="filter"
                                  type="search"
                                  placeholder="Search..."
                                  class="form-control form-control-sm"
                                />
                              </label>
                            </div>
                          </div>

                          <!-- all_conditions button -->
                          <div>
                            <div class="d-flex justify-content-start ">
                              <div class="d-flex justify-content-end ml-1">
                                <div>
                                  <b-button
                                    block
                                    variant="success"
                                    size="sm"
                                    class="mx-2"
                                  >
                                    All Condition
                                  </b-button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <!-- anotations button -->
                          <div>
                            <div class="d-flex justify-content-start ml-1">
                              <div>
                                <b-button
                                  block
                                  variant="success"
                                  size="sm"
                                  class="mx-2"
                                >
                                  Annotation
                                </b-button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- video/photos -->
                        <div class="card mt-3">
                          <div class="card-body  my-5">
                            <h3
                              id="active-users-count"
                              class="my-5 text-center"
                            >
                              Video/photos
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div class="col-xl-4 col-lg-4">

                        <!-- Subcondition/Treatment Tabs -->

                        <b-tabs nav-class="nav-bordered">
                          <b-tab active>
                            <template #title>
                              <h5>Subcondition</h5>
                            </template>
                            <Subcondition />
                          </b-tab>
                          <b-tab>
                            <template #title>
                              <h5>Treatment</h5>
                            </template>
                            <Treatment />
                          </b-tab>
                        </b-tabs>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Subcondition from "@/pages/education-content/condition/subcondition"
import Treatment from "@/pages/education-content/condition/treatment"

export default {
    components:{
        Subcondition,
        Treatment
    },
    data() {
        return {
            title: "Education Content",
        }
    },
    head() {
        return {
            title: `${this.title} `,
        }
    },
}
</script>
