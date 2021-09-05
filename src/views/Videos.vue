<template>
    <div class="container">
        <form @submit.prevent="videos">
            <button>Get List of Classes</button>
            <h1>Catalog</h1>
            <table class="table">
                    <thead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Name (Alias)</th>
                            <th scope='col'>Creation Date</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr v-for="(column, index) in myVideos" :key="column.id">   
                            <td>{{ index }} </td>
                            <td>{{ column.filename }}</td>
                            <td>{{ column.createdAt }}</td>
                        </tr>
                    </tbody>
                </table>
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
    color: green;
    background-image: radial-gradient();
}
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}

</style>