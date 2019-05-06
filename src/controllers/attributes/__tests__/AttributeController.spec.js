import request from 'supertest';
import server from '../../../server/app';

describe('Attribute Controller', () => {
  afterAll(async () => {
    await server.close();
  });

  describe('Get All Attributes', () => {
    it('should return all attributes', async () => {
      const res = await request(server)
        .get('/attributes')
        .set('Content-Type', 'application/json');

      expect(res.status).toEqual(200);
      expect(res.body[0]).toHaveProperty('attribute_id', 1);
    });
  });

  describe('Get Attribute Values By attribute_id', () => {
    it('should return all attribute values', async () => {
      const res = await request(server)
        .get('/attributes/values/1')
        .set('Content-Type', 'application/json');

      expect(res.status).toEqual(200);
      expect(res.body.attribute_id).toEqual(1);
      expect(res.body.attribute_values[0]).toHaveProperty('attribute_value_id', 1);
    });
  });

  describe('Get Attribute Values By product_id', () => {
    it('should return all attribute values', async () => {
      const res = await request(server)
        .get('/attributes/inProduct/1')
        .set('Content-Type', 'application/json');

      expect(res.status).toEqual(200);
      expect(res.body[0]).toHaveProperty('attribute_value_id', 1);
      expect(res.body[0]).toHaveProperty('attribute_value', 'S');
      expect(res.body[0]).toHaveProperty('attribute_name', 'Size');
    });
  });
});
