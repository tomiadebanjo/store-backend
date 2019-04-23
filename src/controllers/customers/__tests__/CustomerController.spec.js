import request from 'supertest';
import server from '../../../server/app';

describe('Customer controller test', () => {
  afterAll(async () => {
    await server.close();
  });

  describe('Sign Up Test', () => {
    it('should return an error when an email isn\'t provided', async () => {
      const res = await request(server)
        .post('/customers')
        .set('Content-Type', 'application/json')
        .send({
          name: 'Lee Tompkins',
          password: 'Tompkins'
        });

        console.log(res.body);
        expect(res.status).toEqual(400);
        expect(res.body.errors[0].msg).toEqual('email is required');
    });

    it('should sign-up successfully', async () => {
      const response = await request(server)
        .post('/customers')
        .set('Content-Type', 'application/json')
        .send({
          name: 'James Lee',
          email: 'james@lee.com',
          password: 'JamesLee'
        });

      expect(response.status).toEqual(201);
      expect(response.body.customer.name).toEqual('James Lee');
      expect(response.body.customer.email).toEqual('james@lee.com');
      expect(response.body).toHaveProperty('accessToken');
    });

    it('should return an error when user already exist', async () => {
      const response = await request(server)
        .post('/customers')
        .set('Content-Type', 'application/json')
        .send({
          name: 'James Lee',
          email: 'james@lee.com',
          password: 'JamesLee'
        });

      expect(response.status).toEqual(409);
      expect(response.body.error.message).toEqual('User already exists with this email address');
      expect(response.body).not.toHaveProperty('accessToken');
    });
  });

  describe('Login Test', () => {
    it('should login successfully', async () => {
      const res = await request(server)
        .post('/customers/login')
        .set('Content-Type', 'application/json')
        .send({
          email: 'james@lee.com',
          password: 'JamesLee'
        });

      expect(res.status).toEqual(200);
      expect(res.body.customer.name).toEqual('James Lee');
      expect(res.body.customer.email).toEqual('james@lee.com');
      expect(res.body).toHaveProperty('accessToken');
    });

    it('should return an error message when invalid credentials are provided', async () => {
      const res = await request(server)
        .post('/customers/login')
        .set('Content-Type', 'application/json')
        .send({
          email: 'james12345@lee.com',
          password: 'JamesLee'
        });

      expect(res.status).toEqual(409);
      expect(res.body.error.message).toEqual('Invalid credentials');
      expect(res.body).not.toHaveProperty('accessToken');
    });
  });
});
