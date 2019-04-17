import request from 'supertest';
import server from '../../../server/app';

describe('Product Controller Test', () => {
  afterAll(async () => {
    await server.close();
  });

  describe('Get All Products', () => {
    it('should return all the products', async () => {
      const response = await request(server)
        .get('/products')
        .set('Content-Type', 'application/json')
        .send();

      expect(response.status).toEqual(200);
      expect(response.body).toHaveProperty('count');
      expect(response.body).toHaveProperty('rows');
    });
  });

  describe('Get Products By Category', () => {
    it('Should return products in a category', async () => {
      const response = await request(server)
        .get('/products/inCategory/1')
        .set('Content-Type', 'application/json')
        .query({
          page: 1,
          limit: 10,
          description_length: 89
        });

      expect(response.status).toEqual(200);
      expect(response.body.count).toEqual(1);
      expect(response.body.rows[0]).toHaveProperty('description');
      expect(response.body.rows[0]).toHaveProperty('name');
    });
  });
});
