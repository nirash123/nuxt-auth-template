<template>
  <div>
    <div>
      <Users />
    </div>
    <div>
      <Teams />
    </div>
  </div>
</template>

<script>

import Users from "@/pages/account-settings/clinic-settings/users"
import Teams from "@/pages/account-settings/clinic-settings/teams"

export default {
    components:{
        Users,
        Teams,
    },
    middleware: 'router-auth',

    data() {
        return { 
        }
    }
}
</script>