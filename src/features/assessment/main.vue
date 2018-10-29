<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Question {{ count + 1 }}/10</h3>
            <div>{{Questiondesc}}</div>
          </div>
        </v-card-title>
    <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="n in Answers"
        :key="n"
        :label="`${n.optionValue}`"
        :value="n.optionId"
      ></v-radio>
    </v-radio-group>

        <v-card-actions>
          <v-btn flat color="error" v-on:click.native="GetQuestion">{{ButtonText}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';
export default {

   data () {
    return {
      Questiondesc:'',
      QuestionId:'',
      Answers:[],
      count:0,
      ButtonText:'Next',

    }
  },

  mounted () {
     axios
      .get('https://api.myjson.com/bins/10v79o')
      .then( (data) => { console.log(data) , this.Questiondesc = data.data.questions[0].questionDesc, this.QuestionId = data.data.questions[0].questionId , this.Answers = data.data.questions[0].options , console.log(this.Answers) })
      .catch((err)=>{ console.log('i am in catch')  })  
  },

  methods: {

    GetQuestion()
    {
      //this.loading = true
      if(this.ButtonText ==="Submit")
      {
        this.$router.push({ path: 'feedback'})
       // this.loading = false
      }
      this.count = this.count + 1;
      axios
      .get('https://api.myjson.com/bins/10v79o')
      .then( (data) => { console.log(data) , this.Questiondesc = data.data.questions[this.count].questionDesc, this.QuestionId = data.data.questions[this.count].questionId , this.Answers = data.data.questions[this.count].options , console.log(this.Answers);
      console.log('this.count', this.count + 1);
      console.log('data.data.questions.count', data.data.questions.length);
      if (this.count + 1 === data.data.questions.length)
      {
        //alert('done')
         this.ButtonText ='Submit'
      }
      })
     // this.loading = false
    }

  }
  
}
</script>

