export const getCards = async({
    search = '',
    oneWay = false,
    bestPrice = false,
  } = {}) => {
    const data = await fetch('src/data.json').then((res) => res.json());

    if (!search && !oneWay && !bestPrice) {
      return data;
    }

    return data.filter((item) => {
      const inSearch = !search || search === 'Все компании' || item.flightCompany === search;
      const inOneWay = !oneWay || item.arrival.date === item.departure.date;
      const inBestPrice = !bestPrice || item.isBestPrice;
      return inSearch && inOneWay && inBestPrice;
    });
  };