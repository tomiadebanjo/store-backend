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
    const { email } = body;
    const user = await CustomerService.findUser({ email });
    HttpError.throwErrorIfNullOrEmpty(user, 'User not found');

    const [result] = await customer.update({ ...body }, { where: { email } });
    if (result) {
      const updatedUser = await CustomerService.findUser({ email });
      return { ...updatedUser.toJSON() };
    }

    HttpError.throwErrorIfNullOrEmpty(result, 'Update Failed', 500);
  }
}

export default CustomerService;
