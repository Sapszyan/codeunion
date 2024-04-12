export default {
  login: {
    schema: {
      body: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string',
            format: 'email',
          },
          password: {
            type: 'string',
          },
        },
      },

      response: {
        200: {
          type: 'object',
          properties: {
            status: { type: 'string' },
            token: { type: 'string' },
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
