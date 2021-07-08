<template>
  <div>
    <PageHeader :title="title" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mb-2">
              
              <!-- Search -->
              <div class="col-sm-12 col-md-4">
                <div class="dataTables_filter text-md-left m-1">
                  <label class="d-inline-flex align-items-center">
                    <b-form-input
                      type="search"
                      placeholder="Search..."
                      class="form-control form-control-sm"
                    />
                  </label>
                </div>
              </div>

              <!-- Start - End Datetime filter -->
              <div class="col-sm-12 col-md-4">
                <div class="dataTables_filter m-1">
                  <label class="d-flex align-items-center">
                    <b-form-input
                      type="search"
                      placeholder="Start-End Datetime filter..."
                      class="form-control form-control-sm"
                    />
                  </label>
                </div>
              </div>

              <!-- print button -->
              <div class="col-sm-12 col-md-4">
                <div class="d-flex justify-content-end m-1">
                  <nuxt-link
                    to="/"
                    class="btn btn-success mb-2"
                  >
                    <div class="mx-2">
                      Print
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>

            <!-- Table -->
            <div class="table-responsive mb-0">
              <b-table
                table-class="table table-centered w-100"
                thead-tr-class="bg-light"
                :items="dataProvider"
                :fields="fields"
                responsive="sm"
                :per-page="perPage"
                :current-page="currentPage"
              >
                <template #cell(check)="data">
                  <div class="custom-control custom-checkbox text-center">
                    <input
                      :id="`contacusercheck${data.item.id}`"
                      type="checkbox"
                      class="custom-control-input"
                    >
                    <label
                      class="custom-control-label"
                      :for="`contacusercheck${data.item.id}`"
                    />
                  </div>
                </template>

                <template #cell(identifier)="data">
                  <h5 class="m-0 d-inline-block align-middle">
                    <a
                      href="#"
                      class="text-info"
                    ><u>{{ data.item.identifier }}</u></a>
                  </h5>
                </template>
              </b-table>
            </div>

            <!-- Display sessions -->
            <div class="d-flex justify-content-between">
              <div class="d-flex justify-content-center p-2">
                <div
                  id="tickets-table_length"
                  class="dataTables_length"
                >
                  <label class="d-inline-flex align-items-center">
                    Display&nbsp;
                    <b-form-select
                      v-model="perPage"
                      size="sm"
                      :options="pageOptions"
                    />&nbsp;Sessions
                  </label>
                </div>
              </div>
              <div class="d-flex justify-content-center p-2">
                <!-- pagination -->
                <ul class="pagination pagination-rounded">
                  <b-pagination
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import organizations from "@/services/modules/organizations"

export default {
  middleware: "router-auth",

  data() {
    return {
      title: "Session History",
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      fields: [
        {
          key: "check",
          label: "",
        },
        {
          key: "identifier",
          label: "Identifier",
          sortable: true,
        },
        {
          key: "start",
          label: "Start Time",
          sortable: true,
        },
        {
          key: "end",
          label: "End Time",
          sortable: true,
        },
        {
          key: "note",
          label: "Duration",
          sortable: true,
        },
      ],
    }
  },
  head() {
    
    return {   
      title: `${this.title} `,
    }
  },
  methods: {
    async dataProvider(ctx) {
      const sessionResponse = (await organizations.teams().sessions().index(`page=${ctx.currentPage}&paginate=${ctx.perPage}`)).data
      this.currentPage = sessionResponse.meta.current_page,
      this.perPage =  sessionResponse.meta.per_page,
      this.totalRows =  sessionResponse.meta.total
      console.log(sessionResponse)
      return sessionResponse.data

      
    },
  }
}
</script>
