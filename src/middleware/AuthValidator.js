import JwtHelper from '../helpers/JwtHelper';

class AuthValidator {
  static validateToken(req, res, next) {
    try {
      const token = req.headers['user-key'];

      if (!token) {
        return res.status(401).send({
          code: 'AUT_O1',
          message: 'USER-KEY is required',
          field: 'USER_KEY'
        });
      }

      const authToken = token.split('Bearer ')[1];
      const decodedData = JwtHelper.decodeToken(authToken);
      req.decoded = decodedData;

      return next();
    } catch (error) {
      return res.status(400).send({
        code: 'AUT_02',
        message: 'The USER-KEY is invalid',
        field: 'USER-KEY'
      });
    }
  }
}

export default AuthValidator;
