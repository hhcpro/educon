<template>
  <div class="mainframe">
    <h1>User: {{ username }} </h1>
    <Mainscreen :URL="frame"/>
    <Quiz :thequiz="quiz" :username="username"/>
    <!-- Scorecard :userid="username"/ -->
    <p/>
    <!--Notepad id='n' msg="Class Notes" :style="{
        background: blue
      }"></Notepad-->
  </div>
</template>

<script>
// @ is an alias to /src

import Quiz from '@/components/Quiz.vue';
import Mainscreen from '@/components/Mainscreen.vue';
//import Scorecard from '@/components/Scorecard.vue';


export default {
  name: 'Mainframe',
  props: {
    frame: String, 
    quiz: [],
    username: String
  },
  components: {
    Mainscreen,
    Quiz
    //Scorecard
  },
  
  created(){
    console.log("Calling created in mainframe")
    console.log(this.frame)
    console.log(this.quiz)
  }
}
</script>


<style>
iframe{
  size: initial;
  width: 1380px;
  height: 580px;
  justify-content: right;
  align-self: right;
}
.Notepad{
  justify-content: right;
  background-color: lightcoral;
}

table{
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

/*END RESETS*/
</style>