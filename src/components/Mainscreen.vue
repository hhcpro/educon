<template>
<div class="embed-responsive" :class="[css]" 
        :style="{
        'width': '100%',
        'margin' :'0 auto'  
        }">
    <video-embed 
        src="https://www.youtube.com/watch?v=E4Yk0WIvHYM" 
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
                default: 'embed-responsive-16by9', 
            },
  }
}
</script>

<style scoped>


</style>

