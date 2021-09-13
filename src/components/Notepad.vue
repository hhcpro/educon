<template>
       <div id='mbox'>
       <h3>{{ msg }}</h3>
        <textarea name="pad" cols='260' rows='10' placeholder="Type note and press 'Save'"></textarea>
        <p/>
        <button>Save</button>    
       </div>
</template>


<script>
export default {
  name: 'Notepad',
  props: {
    msg: String
  }
}
</script>

<style scoped>

textarea {
    justify-self: center;
    justify-items: left;
    max-width: 220px;
}

#mbox {
    background-color: lightgray;
    justify-content: center;
}

button {
    text-align: left;
    background-color: green;
    border-block-style:inherit;
}

div {
    max-width: 280px;
    max-block-size: 3000px;
    justify-self: right;
    justify-content: right;
    justify-items: right;
}
</style>

