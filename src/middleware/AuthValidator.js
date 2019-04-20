class AuthValidator {
  static validateToken(req, res, next) {
    const token = req.headers['user-key'];
    console.log(token, '+++++++++');
    return next();
  }
}

export default AuthValidator;
