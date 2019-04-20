import jwt from 'jsonwebtoken';

class JwtHelper {
  static generateToken({ data, expiresIn }) {
    const secret = process.env.SECRET;
    const token = jwt.sign(data, secret, { expiresIn });
    return `Bearer ${token}`;
  }
}

export default JwtHelper;
