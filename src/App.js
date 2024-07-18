import { vueTemplate } from './components/utils.js';

export default {
  template: vueTemplate`
		<div class="page">
			<page-header></page-header>

			<the-filters class="page__filters"></the-filters>

			<template v-if="tickets.length">
				<ticket-card
					class="page__card"
					v-for="(ticket, i) in tickets"
					:key="i"
					v-bind="ticket"
				></ticket-card>
			</template>
		</div>
	`,
	data() {
		return {
			tickets: [],
		}
	},
	async mounted() {
		const data = await fetch('src/data.json').then((res) => res.json());
		this.tickets = data;
	},
};
