<template>
    <div class="container">
        <form @submit.prevent="videos">
            <button>Get List of Classes</button>
            <h1>Catalog</h1>
            <div v-for="video in myVideos" :key="video.id">
                <h3>{{ video.filename }}</h3>
            </div>
        </form>
    </div>
</template>


<script>

import { DataStore } from '@aws-amplify/datastore';
import { Videos } from '../models';


export default {
    name: 'Videos',
    data() {
        console.log("Calling data");
        return {
            myVideos: [],
        }
    },

    created(){
        this.myVideos = this.videos();
    },
    methods: {
        async videos() {
            console.log('Calling videos');
            try {
                let myVideos = await DataStore.query(Videos);
                console.log(myVideos);
                console.log('length is ',myVideos.length)
                this.myVideos = myVideos;
            }
            catch(error) {
                alert(error.message);
            }
        }
    }
}
</script>

<style  scope>
form {
    
    justify-content: left;
    align-items: left;
    align-self:baseline;
    margin-bottom: 20px;
    color: brown;
    background-image: radial-gradient();
}
</style>