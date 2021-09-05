<template>
    <div class="container">
        
        <form @submit.prevent="videos">
            <button>Get List of Classes</button>
            <h1>Catalog</h1>
            <div v-for="item in models" :key="item.id">
                <h3>{{ item.filename }}</h3>
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
            models: undefined,
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