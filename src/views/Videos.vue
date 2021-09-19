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
                            <!--th scope="col">URL</th-->
                            <th scope="col"></th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr v-for="(column, index) in myVideos" :key="column.id">   
                            <td>{{ index }} </td>
                            <td>{{ column.category }}</td>
                            <td>{{ column.filename }}</td>
                            <td>{{ column.createdAt }}</td>
                            <!--td>{{ column.URL }}</td-->
                            <td>
                                <input type="radio" id=index :value=index v-model="playchoice"/>
                                <label for=index></label>
                            </td>      
                        </tr>
                    </tbody>
                </table>
                <button>Submit</button>
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
            <input class='input' v-model="in_category" placeholder="Specify Category">
            <table>
                <thead>
                    <tr>
                        <th scope="col">REST: Record Count</th>
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
import { Quizes, Videos } from '../models';
//import { Quizes } from '../models';
import { API } from 'aws-amplify';
//import { router } from '../router/index'


export default {
    name: 'Videos',
    data() {
        console.log("Calling data");
        return {
            myVideos: [],
            theQuiz: [],
            category: '',
            filename: '',
            urllink: '',
            rest_category: '',
            rest_url: '',
            in_category: '',
            playchoice: []
        }
    },

    created(){
        this.myVideos = this.videos();
        this.rest_category = this.getcatalog();
    },
    methods: {
        async videos() {
            console.log('Calling videos');
            
            // when enter method for the first time choise should be empty
            // so just skip quiz query and continue
            // for the second time we already know the choice 
            // we query for quiz content and switch to mainview 
            if(this.playchoice.length != 0){
               console.log('second time entry')
               
               
               const qres = (await DataStore.query(Quizes))
                    .filter( q => q.videosID === this.myVideos[this.playchoice].id)
               

               console.log('Dump response:')   
               console.log(qres);
               this.theQuiz = qres
               console.log(this.theQuiz);
               console.log('************************')
               console.log(this.myVideos[this.playchoice].id);
               console.log(this.theQuiz); 
               console.log('************************')
               this.$router.push({ name: 'Mainframe', 
               params: { 
                   frame: this.myVideos[this.playchoice].URL,
                   quiz: this.theQuiz
                   }
                });
                return;
            }
            else {
                console.log('First round, no choice made yet')
            }
            
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
            try {
            let myHeaders = {
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                }
            };
            const apiName = 'fcolcapapi';
            const path = '/colcap/math3'; 
            
                const apiData = await API.get(apiName, path, {});
                console.log('Data from lambda: ', apiData, myHeaders)
                this.rest_category = JSON.stringify(apiData)
            }
            catch(error) {
                alert(error);
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
    color: darkgreen;
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