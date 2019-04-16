class ProductHelpers {
  static formatData(data) {
    return data.map((product) => {
      const {
        product_id, name, description, price, discounted_price, thumbnail,
      } = product;
      return {
        product_id, name, description, price, discounted_price, thumbnail,
      };
    });
  }
}

export default ProductHelpers;
