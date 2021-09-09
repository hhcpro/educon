<template>
    <div class="container">
        <form @submit.prevent="videos">
            <button>Get List of Classes</button>
            <h1>Catalog</h1>
            <table class="table">
                    <thead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope="col">Category</th>
                            <th scope='col'>Name (Alias)</th>
                            <th scope='col'>Creation Date</th>
                            <th scope="col">URL</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr v-for="(column, index) in myVideos" :key="column.id">   
                            <td>{{ index }} </td>
                            <td>{{ column.category }}</td>
                            <td>{{ column.filename }}</td>
                            <td>{{ column.createdAt }}</td>
                            <td>{{ column.URL }}</td>
                        </tr>
                    </tbody>
                </table>
        </form>
        <form @submit.prevent="updateList">
            <button>Add New record</button>
            <table>
                <thead>
                        <tr>
                            <th scope="col">Category</th>
                            <th scope='col'>Name (Alias)</th>
                            <th scope="col">URL</th>
                        </tr>
                </thead>
                <td><input class='input' v-model="category" placeholder="Add Catrgory"></td>
                <td><input class="input" v-model="filename" placeholder="Add filename"></td>
                <td><input class="input" v-model="urllink" placeholder="Add URL"></td>
            </table>
            <p>TEST INPUT: Categoty [{{ category }}], and URL: [{{ urllink }}]
            </p>
        </form>
        <form @submit.prevent="getcatalog">
            <button>Access REST</button>
            <h1>Get from REST API</h1>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Message from Python API</th>
                    </tr>
                </thead>
                    <tbody>
                        <p>{{ rest_category }}</p>
                    </tbody>
            </table>
        </form>
    </div>
</template>


<script>

import { DataStore } from '@aws-amplify/datastore';
import { Videos } from '../models';
import { API } from 'aws-amplify';


export default {
    name: 'Videos',
    data() {
        console.log("Calling data");
        return {
            myVideos: [],
            category: '',
            filename: '',
            urllink: '',
            rest_category: '',
            rest_url: ''
        }
    },

    created(){
        this.myVideos = this.videos();
        this.rest_category = this.getcatalog();
    },
    methods: {
        async videos() {
            console.log('Calling videos');
            try {
                const myVideos = await DataStore.query(Videos);
                console.log(myVideos);
                console.log('length is ',myVideos.length)
                this.myVideos = myVideos;
            }
            catch(error) {
                alert(error.message);
            }
        },
        updateList() {
            console.log('updating...');
            console.log('Category: ', this.category);
            console.log('Filename: ', this.filename)
            console.log('URL: ', this.urllink);

            if(this.filename === undefined) {
                this.filename = 'not used'
            }
            try {
            DataStore.save(
                new Videos({
                    "filename": this.filename,
                    "category" : this.category,
                    "URL": this.urllink
                })
            );
            this.videos()
            }
            catch(error) {
                alert(error.message);
            }
            
        },
        async getcatalog(){
            console.log('rest get catalog called')
            const apiName = 'fcolcapapi';
            const path = '/colcap'; 
            const apiData = await API.get(apiName, path);
            console.log('Data from lambda: ', apiData)
            this.rest_category = apiData
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