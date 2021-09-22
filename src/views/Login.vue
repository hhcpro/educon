<template>
    <div class="container">
        <form @submit.prevent="login">
            <h2>Login</h2>
            <input
                type="text"
                v-model="email"
                placeholder="Email address..."
            />
            <input
                type="password"
                v-model="password"
                placeholder="password..."
            />
            <button>Login</button>
        </form>
    </div>
</template>

<script>
import { Auth } from 'aws-amplify';
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                console.log('the user', this.email);
                const user = await Auth.signIn(this.email, this.password);
                console.log('the user', user);
                alert('Successfully logged in'); 
                this.$router.push({ name: 'Videos', 
                params: { 
                   username: this.email
                   }
                });
            } catch (error) {
                alert(error.message);
            }
        },
    },
};
</script>