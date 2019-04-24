import CustomerService from '../../services/CustomerService';
import JwtHelper from '../../helpers/JwtHelper';
import { decode } from 'punycode';

class CustomerController {
  static async signUp(req, res, next) {
    try {
      const { body } = req;
      const [user, created] = await CustomerService.findOrCreateUser(body);

      if (!created) {
        return res.status(409).send({
          error: {
            code: 'USR_04',
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
    } catch (error) {
      return next(error);
    }
  }

  static async login(req, res, next) {
    try {
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
    } catch (error) {
      return next(error);
    }
  }

  static async updateCustomer(req, res, next) {
    try {
      const { body, decoded } = req;
      const email = body.email || decoded.email;
      const user = await CustomerService.updateUser({ ...body, email });

      res.status(200).send(user);
    } catch (error) {
      return next(error);
    }
  }
}

export default CustomerController;
