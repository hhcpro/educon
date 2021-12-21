<template>
<div>
    <iframe width="1400" height="600" :src="URL" title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
</div>
</template>


<script>

//import { Gapi } from '/vue-googleapis';

export default {
  name: 'Mainscreen',
  props:{
      css: {
                type: String,
                default: 'embed-responsive-19by6', 
            },
    URL: String
      
  },
  
  //data() {
    //  return { 
      //    playurl=String('https://www.youtube.com/embed/'+URL+'?autoplay=1')
     // }
  //},
  created() {
      console.log('Calling created in SCreen')
      console.log(this.URL)
      //this.clientId = Gapi.clientId()
  }
}
</script>

<style scoped>


</style>

