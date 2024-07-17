<script>
import defineProps from "vue";

defineProps({
  flightCompany: String,
  flightNumber: String,
  isBestPrice: Boolean,
  duration: String,
  departure: {
    code: String,
    time: String,
    date: String,
  },
  arrival: {
    code: String,
    time: String,
    date: String,
  },
  family: {
    luggage: String,
    baggage: String,
    giveAway: String,
  },
  price: Number,
});
</script>

<template>
  <section class="page__card card">
    <h3 class="visually-hidden">Карточка билета.</h3>
    <div class="card__inner information">
      <div class="information__header">
        <img src="airline-logo.png" alt="NordStar" class="card__logo" />
        <span class="card__company">{{ flightCompany }}</span>
        <span class="card__flight-number">{{ flightNumber }}</span>
        <span class="card__recommended">{{ isBestPrice }}</span>
      </div>
      <div class="information__body details">
        <div class="details__time details__time--departure">
          {{ departure.time }}
          {{ departure.date }}
        </div>
        <div class="details__path path">
          <div class="path__flight path__flight--from">
            {{ departure.code }}
          </div>
          <div class="path__time">{{ duration }}</div>
          <div class="path__flight path__flight--to">{{ arrival.code }}</div>
        </div>
        <div class="details__time details__time--arrival">
          {{ arrival.time }} {{ arrival.date }}
        </div>
      </div>
    </div>
    <div class="card__pay price">
      <button class="price__button">{{ price }}</button>
      <p class="price__description">Туда и обратно, 1 взрослый</p>
    </div>
  </section>
</template>
