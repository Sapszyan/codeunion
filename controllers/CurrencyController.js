import Currencies from '../models/Currencies.js';

class CurrencyController {
  static getCurrenciesList = async (request, reply) => {
    const { page, limit } = request.query;

    const list = await Currencies.findAll({
      where: {},
      limit,
      offset: (page - 1) * limit,
      order: [['id', 'asc']],
    });

    reply.send({
      status: 'ok',
      list,
    });
  };

  static getSingleCurrency = async (request, reply) => {
    const { id } = request.params;

    const currency = await Currencies.findByPk(id);

    if (!currency) {
      reply.status(404).send({
        status: 'error',
        message: 'Currency not found',
      });
      return;
    }

    reply.send({
      status: 'ok',
      currency,
    });
  };
}

export default CurrencyController;
