<template>
    <div class="container">
        <form @submit.prevent="videos">
            <h1>Videos</h1>
            <div v-for="item in models" :key="item.id">
                <h3>{{ item.name }}</h3>
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
        this.videos();
        return {
            models: '',
        };
    },
    methods: {
        async videos() {
            console.log('Calling videos');
            try {
                const models = await DataStore.query(Videos);
                console.log(models);
            }
            catch(error) {
                alert(error.message);
            }
        }
    }
}
</script>