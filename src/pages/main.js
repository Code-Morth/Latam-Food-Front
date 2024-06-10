import { createApp } from 'vue';
import '../styles/global.css';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css';   
import 'primeicons/primeicons.css'; 
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';



const app = createApp(App);

app.use(PrimeVue);
app.use(Button);
app.use(Sidebar);



app.use(router);


app.mount('#app');
