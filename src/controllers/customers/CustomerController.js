import { validationResult } from 'express-validator/check';
import CustomerService from '../../services/CustomerService';
import JwtHelper from '../../helpers/JwtHelper';

class CustomerController {
  static async signUp(req, res) {
    const result = validationResult(req);

    console.log(result.mapped(), 'result');
    console.log(req.body);

    if (result.array()) {
      return res.send({
        // errors: result(req).array()
        errors: result.array()
      });
    }

    const { body } = req;
    const [user, created] = await CustomerService.findOrCreateUser(body);

    if (!created) {
      return res.status(409).send({
        error: {
          message: 'User already exists with this email address'
        }
      });
    }

    const customer = user.toJSONData();
    const expiresIn = '24h';
    const accessToken = JwtHelper.generateToken({ data: customer, expiresIn });

    return res.status(201).send({
      customer: user.toJSONData(),
      accessToken,
      expires_in: expiresIn
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

    const customer = user.toJSONData();
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
