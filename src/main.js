import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Amplify from 'aws-amplify'
import './assets/reset.css';
import awsconfig from './aws-exports';
import Gapi from 'vue-googleapis';

Amplify.configure(awsconfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


Vue.use(Gapi, {
  apiKey: 'AIzaSyBz0jeyQSoJKXGvpudQ4R4HpTu9-V1AVBM',
  clientId: '',
  disoveryDocs: [''],
  scope: ''
})