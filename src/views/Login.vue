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
                const user = await Auth.signIn(this.email, this.password).then(user => {
                    alert(user)
                    if(user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                        //const { requiredAttributes } = user.challengeParam;
                        Auth.completeNewPassword(
                            user,
                            this.password,
                            {
                                email: this.email,
                                phone_number: '906430'
                            }
                        ).then(user => {
                            console.log(user);
                        }).catch(e => {
                            console.log(e);
                        });
                    } else {
                        console.log('Other situations')
                    }
                });
                console.log('the user', user);
                alert('Successfully logged in'); 
                this.$router.push({ name: 'Videos', 
                params: { 
                   username: this.email
                   }
                });
            } catch (error) {
                alert(error.message);
                //await Auth.res
            }
        },
    },
};
</script>