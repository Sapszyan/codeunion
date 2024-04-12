import axios from 'axios';
import _ from 'lodash';
import Currencies from './models/Currencies.js';
import currencyList from './services/currencyList.js';

async function main() {
  const now = new Date();

  const { data } = await axios.get('https://mig.kz/api/v2/archive/nationalBank', {
    params: {
      effectiveFrom: now,
      effectiveTo: now,
      fields: currencyList.join(','),
    },
  });

  if (_.isEmpty(data?.items?.[0])) {
    console.log(data);
    process.exit(2);
  }
  const [rates] = data.items;
  rates.shift();

  const ratesData = _.zipObject(currencyList, rates);
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const currency in ratesData) {
    const rate = ratesData[currency];
    await Currencies.createOrUpdate({
      where: {
        name: currency,
      },
      defaults: {
        name: currency,
        rate,
      },
    });
  }
  process.exit(0);
}

main().catch(console.error);
