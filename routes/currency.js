import CurrencyController from '../controllers/CurrencyController.js';
import currencySchemas from '../schemas/currencySchemas.js';

export default async function routes(fastify, opts, done) {
  fastify.register(import('../middlewares/authorize.js'));

  fastify.get(
    '/currencies',
    currencySchemas.getCurrenciesList,
    CurrencyController.getCurrenciesList,
  );

  fastify.get(
    '/currency/:id(\\d+)',
    // authorize,
    currencySchemas.getSingleCurrency,
    CurrencyController.getSingleCurrency,
  );

  done();
}
