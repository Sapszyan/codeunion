import Fastify from 'fastify';
import './middlewares/authorize.js';

const { JWT_SECRET } = process.env;

const fastify = Fastify({
  logger: true,
});
fastify.register(import('@fastify/jwt'), {
  secret: JWT_SECRET,
});
fastify.register(import('./routes/currency.js'));
fastify.register(import('./routes/users.js'));

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
