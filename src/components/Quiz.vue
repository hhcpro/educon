<template>
  <form @submit.prevent="onSubmit">
      
      <table>
          <tr>
             <h2>Question: {{ quizes[0].Question }} ? </h2>
          </tr>
          <td>
         <tr>
            <input type="radio" id="1" value="1" v-model="checkedNames">
            <label for="Option #4">{{ quizes[0].QuizOptions.Opt1 }}</label>
        </tr>
        <tr>
            <input type="radio" id="2" value="2" v-model="checkedNames">
            <label for="Option #5">{{ quizes[0].QuizOptions.Opt2 }}</label>
        </tr>
        <tr>
            <input type="radio" id="3" value="3" v-model="checkedNames">
            <label for="Option #5">{{ quizes[0].QuizOptions.Opt3 }}</label>
        </tr>
        <tr>
            <input type="radio" id="4" value="4" v-model="checkedNames">
            <label for="Option #5">{{ quizes[0].QuizOptions.Opt4 }}</label>
        </tr>
        
        </td>
    </table>
    <button @click='verify'>Check</button><br>
    
  </form>
</template>


<script>
import { DataStore } from '@aws-amplify/datastore';
import { Quizes }  from '../models/';
export default {
  name: 'Quiz',
  
  data() {
      return {
          checkedNames: [],
          quizes: [],
          submitValue: ''
          
      }
  },
  
  created(){
      this.quizes = this.loadQuizes()
  },
  onsubmit(){
      console.log('checked')
  },
  methods: {
    async loadQuizes(){   
        console.log('Loading Quize list.....')
        try {
            const quizes = await DataStore.query(Quizes);
            this.quizes = quizes;
            console.log(this.quizes[0])
        }
        catch (error) {
            alert(error);
        }
    },
    verify: function(){
        console.log('VERIFY')
        console.log(this.checkedNames)
        this.submitValue = this.checkedNames
        
        if ((this.submitValue-1) === this.quizes[0].QuizOptions.Answer) {
            alert('BINGO')
        }
        else {
            alert('WRONG')
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

