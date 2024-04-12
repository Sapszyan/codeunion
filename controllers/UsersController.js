import crypto from 'crypto';
import Users from '../models/Users.js';

class UsersController {
  static login = async (request, reply) => {
    const { email, password } = request.body;

    const user = await Users.findOne({
      where: {
        email,
        password: crypto.createHash('md5').update(password).digest('hex'),
      },
    });

    if (!user) {
      reply.status(404).send({
        status: 'error',
        message: 'User not found',
      });
      return;
    }

    const token = await reply.jwtSign({ userId: user.id });

    reply.send({
      status: 'ok',
      token,
    });
  };
}

export default UsersController;
