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
			<transition-group name="tickets" tag="section"
			     enter-active-class="animate__animated animate__flipInX"
      			leave-active-class="animate__animated animate__flipOutX"
			>
				<template v-if="tickets.length">
					<ticket-card
						class="page__card"
						v-for="ticket in tickets"
						:key="ticket.flightNumber"
						v-bind="ticket"
						@choose="toCart(ticket)"
					></ticket-card>
				</template>
			</transition-group>
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
