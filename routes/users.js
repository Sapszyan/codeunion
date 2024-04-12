import UsersController from '../controllers/UsersController.js';
import userSchemas from '../schemas/userSchemas.js';

export default async function routes(fastify, opts, done) {
  fastify.post(
    '/user/login',
    userSchemas.login,
    UsersController.login,
  );

  done();
}
