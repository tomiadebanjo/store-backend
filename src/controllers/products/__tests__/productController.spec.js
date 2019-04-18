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

  describe('Get Products By Department', () => {
    it('Should return products in the department', async () => {
      const response = await request(server)
        .get('/products/inDepartment/2')
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

    it('Should return products in a category', async () => {
      const response = await request(server)
        .get('/products/inDepartment/9')
        .set('Content-Type', 'application/json')
        .query({
          page: 1,
          limit: 10,
          description_length: 89
        });

      expect(response.status).toEqual(200);
      expect(response.body.message).toEqual(
        'There are no products in this department'
      );
      expect(response.body.count).toEqual(0);
      expect(response.body.rows).toEqual([]);
    });
  });

  describe('Search Products By Keyword', () => {
    it('Should return products that match the keyword', async () => {
      const response = await request(server)
        .get('/products/search')
        .set('Content-Type', 'application/json')
        .query({
          page: 1,
          limit: 10,
          description_length: 89,
          query_string: 'beau'
        });

      expect(response.status).toEqual(200);
      expect(response.body.count).toEqual(3);
      expect(response.body.rows[0]).toHaveProperty('description');
      expect(response.body.rows[0]).toHaveProperty('name');
    });
  });

  describe('Get Product Details', () => {
    it('should return single product details', async () => {
      const response = await request(server)
        .get('/products/1')
        .set('Content-Type', 'application/json');

      expect(response.status).toEqual(200);
      expect(response.body).toHaveProperty('description');
      expect(response.body).toHaveProperty('name');
    });

    it('should not find a product and return an error message', async () => {
      const response = await request(server)
        .get('/products/200')
        .set('Content-Type', 'application/json');

      expect(response.status).toEqual(200);
      expect(response.body.message).toEqual('Product not found');
    });
  });
});
