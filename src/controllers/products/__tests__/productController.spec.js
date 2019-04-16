import request from 'supertest';
import server from '../../../server/app';

describe('Product Controller Test', () => {
  afterEach(() => {
    server.close();
  });

  describe('Get All Products', () => {
    it('should return all the products', async () => {
      const response = await request(server)
        .get('/products')
        .set('Content-Type', 'application/json')

      expect(response.status).toEqual(200);
      expect(response.body).toHaveProperty('count');
      expect(response.body).toHaveProperty('rows');
    });
  });
});
