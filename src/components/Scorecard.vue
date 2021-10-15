<template>
    <form @submit.prevent="getScore">
        <table>
            <tr><h1>Score Card</h1></tr>
            <td>
                <tr>
                    <h2>Latest Score for User: {{ userid }}</h2>
                    <h3 v-bind:class="score">{{ score }} </h3>
                </tr>
            </td>
        </table>
    </form>
</template>


<script>
import { DataStore } from '@aws-amplify/datastore';
import { UserProfile } from '../models';
import { API, graphqlOperation } from 'aws-amplify';
import { onUpdateUserProfile } from '../graphql/subscriptions';


export default {
    name: 'Scorecard',
    props: {
        userid: String
    },
    data() {
        return {
            score: '',
            profile: [],
            subscription: null
            
        }
    },
    created() {
        
        //this.sub()
        console.log('Subscribing for up changes')
        this.subscription = API.graphql(
          graphqlOperation(onUpdateUserProfile),
        ).subscribe({
          next: ({ provider, value }) => {
            console.log({provider, value})
            console.log(value.data.onUpdateUserProfile)
          },
        });
        this.getScore()
    },
    beforeDestroy() {
      console.log('unsubscribe up changes')
      if(this.subscription) {
        this.subscription.unsubscribe();
        this.subscription = null
      }
    },
    methods: {
        async getScore() {
            try{
                console.log('getting user profile data: user=' + this.userid)
                const qres = (await DataStore.query(UserProfile))
                    .filter( q => q.user_name === this.userid)
                console.log(qres)
                this.profile = qres                
                this.score = this.profile[0].top_score
                
            } 
            catch(error) {
                alert(error);
            }
        }
    }
    
}
</script>


<style>

/* Customize the label (the wrapper) */
.wrapper {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 24px;
}

/* Hide the browser's default checkbox */
.wrapper input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 21px;
  width: 21px;
  border-radius: 2px;
  background-color: #eee;
  border: 1px solid #ccc;
}

/* On mouse-over, add a grey background color */
.wrapper:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.wrapper input:checked ~ .checkmark {
  background-color: #1CD4A7;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.wrapper input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.wrapper .checkmark:after {
  left: 7px;
  top: 0px;
  width: 7px;
  height: 15px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
table{
    font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>

