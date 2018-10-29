
<template>
      <v-layout align-center>
        <v-flex xs12 sm6 offset-sm3>
          <div class="display-1">Thank you for taking the Assessment</div>

          <span class="subheading">
If you can please take couple of minutes to provide your feedback about the assessment process, it will help us to make ENJOIN better!
<br>
 </span>
      <v-flex xs12 sm6 offset-sm3 >
        <v-textarea
          outline
          name="input-7-4"
          label="Please provide Feedback"
          value=""
        ></v-textarea>
      </v-flex>       


          <v-btn
            class="mx-0"
            color="error"
            large
            v-on:click.native="navigate"
          >
            Submit
          </v-btn>
        </v-flex>
      </v-layout>

</template>


<script>
import axios from 'axios';
export default {


  methods: {

    navigate()
    {

        this.$router.push({ path: 'dashboard'})
    }

  }
  
}
</script>

