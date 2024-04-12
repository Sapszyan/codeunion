export default {
  getCurrenciesList: {
    schema: {
      query: {
        type: 'object',
        properties: {
          page: {
            type: 'integer',
            default: 1,
            minimum: 1,
            maximum: 100,
          },
          limit: {
            type: 'integer',
            default: 20,
            minimum: 1,
            maximum: 100,
          },
        },
      },

      response: {
        200: {
          type: 'object',
          properties: {
            list: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'number' },
                  name: { type: 'string' },
                  rate: { type: 'number', format: 'float' },
                  createdAt: { type: 'string' },
                  updatedAt: { type: 'string' },
                },
              },
            },
            status: { type: 'string' },
          },
        },
      },
    },
  },

  getSingleCurrency: {
    schema: {
      params: {
        type: 'object',
        required: ['id'],
        properties: {
          id: {
            type: 'integer',
            minimum: 1,
          },
        },
      },

      response: {
        200: {
          type: 'object',
          properties: {
            currency: {
              type: 'object',
              properties: {
                id: { type: 'number' },
                name: { type: 'string' },
                rate: { type: 'number', format: 'float' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
              },
            },
            status: { type: 'string' },
          },
        },
        404: {
          type: 'object',
          properties: {
            status: { type: 'string' },
            message: { type: 'string' },
          },
        },
      },
    },
  },
};
