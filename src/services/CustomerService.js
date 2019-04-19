import models from '../database/models';

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
}

export default CustomerService;
