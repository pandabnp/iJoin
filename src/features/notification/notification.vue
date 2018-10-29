<template>
  <div>

    <v-alert
      :value="true"
      type="info"
    >
      Thanks for applying to Travelers! As a first step in the process we would like you to go through our pre-assessment process. Request you to please click on the<a> link </a> to start assessment
    </v-alert>

    
  </div>
</template>

<script>
export default {
  name: 'Notification',

  data () {
    return {
    }
  },

  mounted () {
  },

  methods: {

  }
}
</script>

<style lang="stylus" scoped>
.my-Notification

  &__hero
    opacity 0.4

  &__cone
    width 100px

</style>
