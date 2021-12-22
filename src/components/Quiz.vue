<template>
  <form @submit.prevent="onSubmit">
<button @click='verify'>Check</button>      
      <table>
          <tr>
             <h2>Question # {{ qid+1 }}: {{ thequiz[qid].Question }} ? </h2>
          </tr>
          <td>
         <tr>
            <input type="radio" id="1" value="1" v-model="checkedNames">
            <label for="Option #1">{{ thequiz[qid].QuizOptions.Opt1 }}</label>
        </tr>
        <tr>
            <input type="radio" id="2" value="2" v-model="checkedNames">
            <label for="Option #2">{{ thequiz[qid].QuizOptions.Opt2 }}</label>
        </tr>
        <tr>
            <input type="radio" id="3" value="3" v-model="checkedNames">
            <label for="Option #3">{{ thequiz[qid].QuizOptions.Opt3 }}</label>
        </tr>
        <tr>
            <input type="radio" id="4" value="4" v-model="checkedNames">
            <label for="Option #4">{{ thequiz[qid].QuizOptions.Opt4 }}</label>
        </tr>
        </td>
        
    </table>
      
  </form>
</template>


<script>

import { API } from 'aws-amplify';
//import { Scorecard } from '../components/Scorecard.vue';

export default {
  
  name: 'Quiz',
  props: {
      thequiz: [],
      username: String
  },
  
  data() {
      console.log('Im inside Quiz compoment now.....')
      console.log(this.thequiz[0].QuizOptions)
      return {
          checkedNames: [],
          submitValue: '',
          qid: 0,
          nattempts: 0,
          lastscore: ''
          
      }
  },
  created(){
      this.qid = 0;
  },
  onSubmit(){
      console.log('checked')
  },
  
  methods: {
    
    verify: function(){
        console.log('in verify call........')
        
        this.submitValue = this.checkedNames

        if(this.submitValue === ''){
            alert('No selaction made. Please, choose one option')
            return;
        }
        
        if ((this.submitValue-1) ===   this.thequiz[this.qid].QuizOptions.Answer) {
            alert('Correct!!')
            this.nattempts+=1
            this.qid+=1;
            this.submitValue = '';
            this.checkedNames = [];
            this.update_score()
                       
        }
        else {
            this.nattempts+=1
            alert('Incorrect answer attempt #' + (this.nattempts))
            if((this.nattempts) >= 5) {
                // stop playing send report and move to another q if exists
                this.qid+=1;
                this.submitValue = '';
                this.checkedNames = [];
                console.log('Reset nattemaps to 0')
                this.nattempts=0
                this.update_score()
            }
        }
        
    },
    async update_score() {
      console.log('Notify backend.... attempts #' + this.nattempts)

      try {
        
        const apiName = 'qreport';
        const path = '/user/quiz/report'; 
        await API.post(apiName, path, {
          body: {
            userID: this.username,
            QuizID: this.thequiz[this.qid-1].id,
            attempts: String(this.nattempts)
          }
        }).then(
          result=> {
          //alert(result);
          this.lastscore = result
        });
        this.nattempts = 0;
         console.log('Check qid=' + this.qid + ', lan=' + this.thequiz.length)
         if((this.qid >= this.thequiz.length) || (this.nattempts >= 5)) {
              // switch to video screen here and show score for a user 
              
              this.$router.push({ name: 'Videos', 
               params: { 
                   username: this.username,
                   score: this.lastscore
                   }
                });
            }
      }
      catch(error) {
        alert(`ERROR: ${error}`);
      }
    }
  }
  
}
</script>

<style>

/* Customize the label (the wrapper) */
.wrapper {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 24px;
}

/* Hide the browser's default checkbox */
.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 21px;
  width: 21px;
  border-radius: 2px;
  background-color: #eee;
  border: 1px solid #ccc;
}

/* On mouse-over, add a grey background color */
.wrapper:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.wrapper input:checked ~ .checkmark {
  background-color: #1CD4A7;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.wrapper input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.wrapper .checkmark:after {
  left: 7px;
  top: 0px;
  width: 7px;
  height: 15px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
table{
    font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>

