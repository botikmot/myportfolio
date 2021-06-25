import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/tailwind.css"
import "tailwindcss/tailwind.css"
import { init } from 'emailjs-com'
init("user_6yePB65ZOL8IqLJRDTuZk")

createApp(App).use(store).use(router).mount('#app')
