<template>
  <div>
    <PageHeader
      :title="title"
    />
                     
    <div class="col-sm-12 col-md-12">
      <div class="row">

        <!-- Search -->
        <div class="col-sm-6 col-md-6">
          <div class="dataTables_filter text-md-left m-1">
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

        <!-- Invite user button -->
        <div class="col-sm-6 col-md-6">
          <div
            class="text-md-right"
          >
            <nuxt-link
              to="/account-settings/clinic-settings/users/invite-user"
              class="btn btn-success mb-2"
            >
              <div class="mx-2">Invite User
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>

    </div>

    <!-- Table -->
    <div class="table-responsive mb-0">
      <b-table 
        table-class="table table-centered w-100" 
        thead-tr-class="bg-light" 
        :items="UserData" 
        :fields="fields" 
        responsive="sm" 
        :per-page="perPage" 
        :current-page="currentPage" 
        :sort-by.sync="sortBy" 
        :sort-desc.sync="sortDesc" 
        :filter="filter" 
        :filter-included-fields="filterOn" 
        @filtered="onFiltered"
      >


        <template #cell(actions)="data">
          <span
            class="badge badge-soft-success" 
            :class="{'badge-soft-warning': data.item.actions === 'block',
                     'badge-soft-light': data.item.actions === ''}"
          >
            {{ data.item.actions }}</span>
        </template>
      </b-table>
    </div>

    <!-- Display sessions -->
    <div class="d-flex justify-content-between">
      <div class="p-2">
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
            />&nbsp;Users
          </label>
        </div>
      </div>         
      <div class="p-2">

        <!-- pagination -->                           
        <ul class="pagination pagination-rounded">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
          />
        </ul>                    
      </div>
    </div>
  </div>
</template>

<script>
import {UserData} from "./data"

export default {
    middleware: 'router-auth',
    data() {
        return {
            UserData: UserData,
            title: "Users",
            items: [
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "age",
            sortDesc: false,
            fields: [
                {
                    key: "name",
                    label: "Name",
                    sortable: true
                },
                 {
                    key: "email",
                    label: "Email",
                    sortable: true
                },
                 {
                    key: "role",
                    label: "Role",
                    sortable: true
                },
                {
                    key: "status",
                    label: "Status",
                    sortable: true
                },
                {
                    key: "actions",
                    label: "Actions",
                    sortable: true
                }
            ]
        }
    },
    head() {
        return {
            title: `${this.title} `,
        }
    },
    computed: {
        /**
         * Total no. of records
         */
        rows() {
            return this.UserData.length
        }
    },
    mounted() {
        // Set the initial number of users
        this.totalRows = this.items.length
    },
    methods: {
        /**
         * Search the table data with search input
         */
        onFiltered(filteredItems) {
            this.totalRows = filteredItems.length
            this.currentPage = 1
        }
    },
}
</script>
