<template lang="pug">
v-container.my-dashboard(
  fluid
  fill-height
  text-xs-center
  v-bind:grid-list-sm="$vuetify.breakpoint.smAndDown"
  v-bind:grid-list-lg="$vuetify.breakpoint.mdAndUp"
)
  v-layout(row wrap)

    // Top Row
    v-flex(d-flex xs12 sm12 md6)
      v-card
       <br>
          <div>
            <h3 class="text-sm-left">Hi Joanna - Welcome to IBM!</h3>
            <div class="text-sm-left">Thank you for applying to a position with us. It’s exciting times out here. Our vision is to continue to focus on being at the forefront of the industry in terms of selling customer centric products, using latest technologies, evolving our collaborative workspace and continue to invest in our key strength – which is our people.        </div>
          </div>
          <br>
           <div>
            <h3 class="text-sm-left">What you need to know about the role?</h3>
            <div class="text-sm-left">We are looking to hire a senior engineer to join our Digital Transformation team here in Claims. Ideally we would want the person to join one of our feature teams which is focused on building business capabilities for IBM. The person should be a hands on full stack developer while at the same time able to provide technical guidance to the other engineers on the team and represent the team in various technical and product related forums with Claims.</div>
          </div>
          <br>
           <div>
            <h3 class="text-sm-left">Helpful tips to take the pre-assessment!</h3>
            <div class="text-sm-left">Once you select the ‘Start’ button below, you will be presented with a set of questions to answer based on the this specific role that you are applying for. The number of questions may vary typically from 30-40 questions. Please note that it’s a timed session and it typically would take 45 mins to complete the pre-assessment so please plan accordingly. You will also be able to view your progress in terms of the questions answered and the time left in the session. All the best! </div>
          </div>
          <br>
          <v-btn  color="error" v-on:click.native="startAssessment">Start Assessment</v-btn>

          
          
        

    v-flex(d-flex xs12 sm12 md6)
      v-card.my-dashboard__ijoin-status
        v-card-title
          .title Assessment Status
        v-card-text
          v-layout(row wrap)
            v-flex(xs4)
              .sub-title JavaScript
            v-flex(xs4)
              .sub-title Angular
            v-flex(xs4)
              .sub-title React
            v-flex(d-flex xs4)
              v-progress-circular.my-dashboard__order(
                :size="100"
                :width="15"
                :rotate="360"
                :value="45"
                color="accent"
              )
                | 45%

            v-flex(d-flex xs4)
              v-progress-circular(
                :size="100"
                :width="15"
                :rotate="360"
                :value="75"
                color="primary"
              )
                | 75%

            v-flex(d-flex xs4)
              v-progress-circular(
                :size="100"
                :width="15"
                :rotate="360"
                :value="15"
                color="secondary"
              )
                | 15%

                <br>
                <br>
           

    // Bottom Row
    v-flex(d-flex xs12 sm12 md6)
      v-card
        v-card-title
          .title(style="margin-bottom: 47px;") Calendar
        v-date-picker(
          v-model="date"
          min="2016-06-15"
          max="2018-03-20"
          full-width
          :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
          :events="functionEvents"
        )
    v-flex(d-flex xs12 sm12 md6)
      v-card
        v-card-media(src="static/images/logo.png" height="150px")
          v-layout.my-dashboard__media(column)
            v-card-title(class="Red--text pl-5 pt-5")
              .display-1.pl-5.pt-5  
        v-list(two-line)
          v-list-tile(@click="")
            v-list-tile-action
              v-icon phone
            v-list-tile-content
              v-list-tile-title (650) 555-1234
              v-list-tile-sub-title Recuiter's Contact

</template>

<script>
import store from './store' // eslint-disable-line no-unused-vars
import Chart from './components/chart'
import LineChart from './components/line-chart'

export default {
  name: 'Dashboard',

  components: {
    Chart,
    LineChart
  },

  data () {
    return {
      test: this.$store.state.dashboard.test,
      date: '2018-05-21'
    }
  },

  mounted () {
  },

  methods: {
    updateTest () {
      this.test++
      this.$store.dispatch('dashboard/updateTest', this.test)
    },
    startAssessment()
    {

        this.$router.push({ path: 'assessment'})
    },
    functionEvents (date) {
      const [,, day] = date.split('-')
      return parseInt(day, 10) % 3 === 0
    }
  }
}
</script>

<style lang="stylus">
.my-dashboard

  &__media
    height: 100%
    margin: 0

  .picker__title
    display: none !important

</style>
