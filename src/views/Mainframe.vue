<template>
  <div class="mainframe">
    <Mainscreen/>
    <Quiz id='q'/>
    <p/>
    <!--Notepad id='n' msg="Class Notes" :style="{
        background: blue
      }"></Notepad-->
  </div>
</template>

<script>
// @ is an alias to /src
//import Notepad from '@/components/Notepad.vue';
import Quiz from '@/components/Quiz.vue';
import Mainscreen from '@/components/Mainscreen.vue'


export default {
  name: 'Mainframe',
  components: {
    Mainscreen,
    //Notepad,
    Quiz
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

/*END RESETS*/
</style>