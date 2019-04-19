import CustomerService from '../../services/CustomerService';

class CustomerController {
  static async signUp(req, res) {
    const { body } = req;
    const [user, created] = await CustomerService.findOrCreateUser(body);

    if (!created) {
      return res.status(409).send({
        error: {
          message: 'User already exists with this email address'
        }
      });
    }

    return res.status(201).send({
      user,
      created
    });
  }

  static async login(req, res) {
    const { body } = req;

    const user = await CustomerService.findUser(body);
    const isPasswordMatch = user ? user.checkPassword(body.password, user.password) : user;

    if (!isPasswordMatch) {
      return res.status(409).send({
        error: {
          message: 'Invalid credentials'
        }
      });
    }

    return res.status(200).send({
      customer: { ...user.toJSON() }
    });
  }

  static getCustomerInfo(req, res) {
    return { req, res };
  }
}

export default CustomerController;