<template>
<div class="embed-responsive" :class="[css]" 
        :style="{
        'width': '100%',
        'margin' :'0 auto'  
        }">
    <video-embed 
        :src="URL"
        autoplay=1
        :style="{
            
            
            'border-style': 'solid',
            'border-width': '2px',
            'border-radius': '4px',
            'padding': '15px',
            'width': '1400px',
            'height' : '600px',
            'margin': '0 auto'
        }">
    </video-embed>
</div>
</template>


<script>
export default {
  name: 'Mainscreen',
  props:{
      css: {
                type: String,
                default: 'embed-responsive-19by6', 
            },
      URL: String
  },
  created() {
      console.log('Calling created in SCreen')
      console.log(this.URL)
  }
}
</script>

<style scoped>


</style>

