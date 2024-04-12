import fp from 'fastify-plugin';

function authorize(fastify, opts, done) {
  fastify.addHook('onRequest', async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (err) {
      reply.send(err);
    }
  });
  done();
}

export default fp(authorize);
