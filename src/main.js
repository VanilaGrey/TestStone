import { createApp } from 'vue';
import PageHeader from './components/PageHeader.js';
import TheFilters from './components/TheFilters.js';
import TheSearch from './components/TheSearch.js';
import TicketCard from './components/TicketCard.js';
import App from './App.js';

const app = createApp();
app.component('the-app', App);
app.component('page-header', PageHeader);
app.component('the-filters', TheFilters);
app.component('the-search', TheSearch);
app.component('ticket-card', TicketCard);

app.mount('#app');
