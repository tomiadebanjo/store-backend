import CustomerService from '../../services/CustomerService';
import JwtHelper from '../../helpers/JwtHelper';

class CustomerController {
  static async signUp(req, res) {
    const { body } = req;
    const [user, created] = await CustomerService.findOrCreateUser(body);
    // console.log(user);
    if (!created) {
      return res.status(409).send({
        error: {
          message: 'User already exists with this email address'
        }
      });
    }
    console.log(user.get({
      plain: true
    }));
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
    const customer = { ...user.toJSONData() };
    const expiresIn = '24h';
    const accessToken = JwtHelper.generateToken({ data: customer, expiresIn });
    return res.status(200).send({
      customer,
      accessToken,
      expires_in: expiresIn
    });
  }

  static getCustomerInfo(req, res) {
    return { req, res };
  }
}

export default CustomerController;