<template>
  <div class="mainframe">
    <Quiz id='q'/>
    <p/>
    <Notepad id='n' msg="Class Notes"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Notepad from '@/components/Notepad.vue';
import Quiz from '@/components/Quiz.vue';



export default {
  name: 'Mainframe',
  components: {
    Notepad,
    Quiz
    
  }
}
</script>


<style>
#q {
    justify-content: right;
}

#n {
    justify-content: left;
}
</style>