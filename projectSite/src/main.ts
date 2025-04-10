import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import router from './router'
import { Amplify } from "aws-amplify";
// import outputs from "amplify_outputs.json";

const app = createApp(App)
Amplify.configure({})
app.use(createPinia())
app.use(router)
app.use(ui)

// Amplify.configure(outputs);

app.mount('#app')
