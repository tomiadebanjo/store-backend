import models from '../database/models';
import HttpError from '../helpers/ErrorHandler';

const { customer } = models;

class CustomerService {
  static async findOrCreateUser({ name, email, password }) {
    const result = await customer.findOrCreate({ where: { email }, defaults: { name, password } });
    return result;
  }

  static async findUser({ email }) {
    const user = await customer.findOne({ where: { email } });
    return user;
  }

  static async updateUser(body) {
    const user = await CustomerService.findUser({ email: body.email });
    HttpError.throwErrorIfNullOrEmpty(user, 'User not found');

    const result = await user.update({ ...body }, { returning: true });
    return { ...result.toJSON() };
  }
}

export default CustomerService;
