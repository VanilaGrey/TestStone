import { vueTemplate } from "./utils.js";

export default {
  template: vueTemplate`
    <section class="card">
      <h3 class="visually-hidden">Карточка билета.</h3>
      <div class="card__inner">
        <div class="card__header">
          <img src="./src/assets/img/logo.png" alt="NordStar" class="card__logo" />
          <span class="card__company">{{ flightCompany }}</span>
          <span class="card__number">{{ flightNumber }}</span>
          <span class="card__recommended" v-if="isBestPrice">Рекомендованный</span>
        </div>
        <div class="card__body">
          <div class="card__information">
            <span class="card__time" >{{ departure.time }}</span>
            <div>
              <span class="icon-date"></span>
              <span class="card__date">{{ departure.date }}</span>
            </div>
          </div>
          <div class="card__path">
            <div class="card__flight">
              {{ departure.code }}
            </div>
            <div class="card__duration">В пути {{ duration }}</div>
            <div class="card__flight">{{ arrival.code }}</div>
          </div>
          <div class="card__information">
            <span class="card__time" >{{ arrival.time }}</span>
          <div class="card__container">
            <span class="icon-date"></span>
            <span class="card__date">
            {{ arrival.date }}
          </span>
          </div>
          </div>
          <div class="card__baggage">
            <ul class="card__list">
              <li class="card__item card__item--luggage">
                <span class="icon-luggage"></span>Ручная кладь: {{ family.luggage }}</li>
              <li class="card__item card__item--baggage"><span class="icon-baggage"></span>Багаж: {{ family.baggage }}</li>
              <li class="card__item card__item--return"><span class="icon-return"></span>Возврат: {{ family.return }}</li>
            </ul>
        </div>
        </div>
      </div>
      <div class="card__pay">
        <button class="card__button">Выбрать за {{ Price }}P</button>
        <p class="card__description">Туда и обратно, 1 взрослый</p>
      </div>
    </section>
  `,
  props: {
    flightCompany: String,
    flightNumber: String,
    isBestPrice: Boolean,
    duration: String,
    departure: Object,
    arrival: Object,
    family: Object,
    Price: Number,
  },
};
