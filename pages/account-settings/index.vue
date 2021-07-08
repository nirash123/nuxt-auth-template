<template>
  <div>
    <PageHeader
      :title="titles"
    />

    <div class="search-result-box card">
      <div class="card-body">
        <b-tabs nav-class="nav-bordered">
          <b-tab active>
            <template #title>
              Profile
            </template>
            <div>
              <Profile />
            </div>
          </b-tab>
          <b-tab>
            <template #title>
              Clinic Settings
            </template>
            <div>
              <ClinicSettings />
            </div>
          </b-tab>
          <b-tab>
            <template #title>
              Account
            </template>
            <div>
              <Account />
            </div>
          </b-tab>
        </b-tabs>

      </div>
    </div>
  </div>
</template>

<script>

import Profile from "@/pages/account-settings/profile"
import ClinicSettings from "@/pages/account-settings/clinic-settings"
import Account from "@/pages/account-settings/account"
export default {
    middlware: ['auth','verify'],
    components:{
        Profile,
        ClinicSettings,
        Account
    },
    middleware: 'router-auth',
    data() {
        return {
        }
    },
        head() {
        return {
            title: 'Account Settings',
        }
    }
}
</script>
