import { vueTemplate } from "./components/utils.js";
import { getCards } from "./services/card.js";

export default {
  template: vueTemplate`
		<div class="page">
			<page-header></page-header>

			<the-filters
				class="page__filters"
				@filter="getCards"
			></the-filters>
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
    };
  },
  methods: {
    async getCards(filter) {
      const data = await getCards(filter);
      this.tickets = data;
    },
  },
  mounted() {
    this.getCards();
  },
};
