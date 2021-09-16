<template>
<div class="embed-responsive" :class="[css]" width="432" height="243">
    <video-embed src="https://www.youtube.com/watch?v=E4Yk0WIvHYM" width="432" height="243"></video-embed>
    
</div>
</template>


<script>
export default {
  name: 'Mainscreen',
  props:{
      css: {
                type: String,
                default: 'embed-responsive-21by9',
               
            },
  }
}
</script>

<style scoped>
.div {
    justify-content: left;
}
</style>

