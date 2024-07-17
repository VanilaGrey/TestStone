import Card from './components/card.vue'

<Card />

import { createApp } from 'vue';
import vueImport from 'vue-import';

const app = createApp();
app.component('my-component', await vueImport('myComp.vue'))

app.mount('#app');