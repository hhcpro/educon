<template>
    <div class="container">
        <form @submit.prevent="register">
            <h2>Register</h2>
            <p>Provide email address for code confimration</p>
            <input
                type="email"
                v-model="email"
                placeholder="Email for code...."
            />
            <!--input 
                type="text"
                v-model="username"
                placeholder="User Name"

            /-->
            <p></p>
            <input
                type="password"
                v-model="password"
                placeholder="new password here..."
            />
            <p></p>
            <button>Register</button>
        </form>
        <h3>Generated username: {{ username }}</h3>
        <form @submit.prevent="confirmCode">
            <input type="text" v-model="code" placeholder="Type code here...">
            <p></p>
            <button>Send Confirmation</button>
        </form>
    </div>
</template>

<script>
import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { UserProfile } from '../models';

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            password: '',
            username: '',
            code: ''
        };
    },
    methods: {

        
        async register() {
            
            try {
                let cuser = String(Date.now());
                this.username = cuser;
                await Auth.signUp({
                    username: this.username,
                    password: this.password,
                    attributes: { 
                        email: this.email, 
                        preferred_username: this.username
                    }
                });
                
                alert('User successfully registered. Please login');
                
                console.log('Save results for user: ' + this.username)
                await DataStore.save(
                    new UserProfile({
                        user_name: this.username,
                        user_email: this.email,
                        top_scope: '0',
                        last_class: ''
                    })
                );
            } catch (error) {
                alert('Error: ' + error.message);
            }
        },

        async confirmCode() {
            console.log(this.code)

            try {
                await Auth.confirmSignUp(this.username, this.code);
            }
            catch(error) {
                console.log(error.message);
            }
            alert('User ' + this.username + ' successfully confrmed. Processed to login screen')
            this.$router.push({ name: 'Login',
                params: {
                    defName: this.username
                }
            });
        }
    },
};
</script>

