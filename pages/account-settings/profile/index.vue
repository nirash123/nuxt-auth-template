<template>
  <div>
    <div><UpdateFrofile /></div>
    <div><UpdatePassword /></div>
    <div><TwoFactor /></div>
    <div><Delete /></div>
      
  </div>
</template>



<script>
 import UpdateFrofile from '../profile/update-profile.vue'
 import Delete from "../profile/delete.vue"
 import TwoFactor from "../profile/two-factor.vue"
 import UpdatePassword from "../profile/update-password.vue"

export default {
  components: {
    
    UpdateFrofile,
    Delete,
    TwoFactor,
    UpdatePassword,
  },
  layout: "auth",
  asyncData({$auth, redirect}){
    if ($auth.loggedIn) {
      redirect('/')
    }
  },
  data(){
    return{
    }
  },
}
</script>

