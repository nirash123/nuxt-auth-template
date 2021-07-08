<template>
  <div>
    <div class="row">
      <div class="col-xl-12">

        <!-- Pricing -->

        <div class="card-body">
          <div class="text-center pb-2">
            <h1 class="mb-2">
              <span class="">Pricing</span>
            </h1>
            <h5 class="text-muted w-50 m-auto">
              Pick a package perfect for your practice (excludes VAT).
            </h5>
          </div>
          <div class="card-body">
            
            <div class="mb-3">
              <b-tabs
                align="center"
                pills
              >
                <!-- Monthly Plans -->

                <b-tab
                  title="Monthly"
                  active
                >
                  <div class="row my-3">

                    <!-- Education Pro Monthly -->

                    <div class="col-xl-4 col-md-6 mt-4">
                      <div class="shadow-lg mb-5 bg-body rounded">
                        <div class="card-body text-center">
                          <h3 class="a font-weight-bold ">
                            Education Pro
                          </h3>
                          <h1 class="a font-weight-bold ">
                            $9.99
                          </h1>
                          <div>Per Month</div>
                          <p class="font-weight-bold ">
                            Education content only
                          </p>
                          <div>
                            <p>7 Days Free Trial</p>
                            <p>15 Education session</p>
                            <p>20 Video consultation session</p>
                          </div>
                          <button class="btn mt-4 btn-block btn-rounded btn-dark">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Chairsyde Pro Monthly -->

                    <div class="col-xl-4 col-md-6">
                      <div class="shadow-lg mb-1 bg-body rounded">
                        <div class="card-body text-center">
                          <p class="b font-weight-bold text-danger">
                            Most Popular
                          </p>
                          <h3 class="a font-weight-bold ">
                            Chairsyde Pro
                          </h3>
                          <h1 class="a font-weight-bold ">
                            $69.99
                          </h1>
                          <div>Per Month</div>
                          <p class="font-weight-bold mt-2">
                            Education Content <br> & <br> Video Consultation
                          </p>
                          <div>
                            <p>7 Days Free Trial</p>
                            <p>15 Education session</p>
                            <p>20 Video consultation session</p>
                          </div>
                          <button class="btn mt-4 btn-block btn-rounded btn-danger">
                            Get Started
                          </button>

                        </div>
                      </div>
                    </div>

                    <!-- Virtual Pro Monthly -->

                    <div class="col-xl-4 col-md-6 mt-4">
                      <div class="shadow-lg mb-5 bg-body rounded">
                        <div class="card-body text-center">
                          <h3 class="a font-weight-bold ">
                            Virtual Pro
                          </h3>
                          <h1 class="a font-weight-bold ">
                            $39.99
                          </h1>
                          <div>Per Month</div>
                          <p class="font-weight-bold ">
                            Video content only
                          </p>
                          <div>
                            <p>7 Days Free Trial</p>
                            <p>15 Education session</p>
                            <p>20 Video consultation session</p>
                          </div>
                          <button class="btn mt-4 btn-block btn-rounded btn-dark">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-tab>
                
                <!-- Annual Plans -->
                
                <b-tab
                  title="Annual"
                  pills
                >
                  <div class="row my-3">
                    <div class="col-xl-4 col-md-6 mt-4">
                      <div class="shadow-lg mb-5 bg-body rounded">

                        <!-- Education Pro Annual-->

                        <div class="card-body text-center">
                          <h3 class="a font-weight-bold ">
                            Education Pro
                          </h3>
                          <h1 class="a font-weight-bold ">
                            $99.99
                          </h1>
                          <div>Per Year</div>
                          <p class="font-weight-bold ">
                            Education content only
                          </p>
                          <div>
                            <p>7 Days Free Trial</p>
                            <p>15 Education session</p>
                            <p>20 Video consultation session</p>
                          </div>
                          <button class="btn mt-4 btn-block btn-rounded btn-dark">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Chairsyde Pro Annual -->

                    <div class="col-xl-4 col-md-6">
                      <div class="shadow-lg mb-1 bg-body rounded">
                        <div class="card-body text-center">
                          <p class="b font-weight-bold text-danger">
                            Most Popular
                          </p>
                          <h3 class="a font-weight-bold ">
                            Chairsyde Pro
                          </h3>
                          <h1 class="a font-weight-bold ">
                            $699.99
                          </h1>
                          <div>Per Year</div>
                          <p class="font-weight-bold mt-2">
                            Education Content <br> & <br> Video Consultation
                          </p>
                          <div>
                            <p>7 Days Free Trial</p>
                            <p>15 Education session</p>
                            <p>20 Video consultation session</p>
                          </div>
                          <button class="btn mt-4 btn-block btn-rounded btn-danger">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Virtual Pro Annual -->

                    <div class="col-xl-4 col-md-6 mt-4">
                      <div class="shadow-lg mb-5 bg-body rounded">
                        <div class="card-body text-center">
                          <h3 class="a font-weight-bold ">
                            Virtual Pro
                          </h3>
                          <h1 class="a font-weight-bold ">
                            $399.99
                          </h1>
                          <div>Per Year</div>
                          <p class="font-weight-bold ">
                            Video content only
                          </p>
                          <div>
                            <p>7 Days Free Trial</p>
                            <p>15 Education session</p>
                            <p>20 Video consultation session</p>
                          </div>
                          <button class="btn mt-4 btn-block btn-rounded btn-dark">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
/**
 * Pricing component
 */
export default {
      layout: "auth",
    middleware: 'router-auth',
    data() {
        return {
            title: 'Pricing',
            items: [
            ],
           
        }
    },
    head() {
        return {
        }
    },
}
</script>

<style>
h3.a,h1.a,h4 {
  font-family: "Times New Roman", Times, serif;
}

p.b {
  font-family: Arial, Helvetica, sans-serif;
}
</style>

