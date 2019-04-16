class ProductHelpers {
  static trimDescriptionLength(description, length) {
    return `${description.substring(0, length)}...`;
  }

  static formatData(data, descriptionLength) {
    return data.map((product) => {
      const {
        product_id, name, description, price, discounted_price, thumbnail,
      } = product;

      return {
        product_id,
        name,
        description: ProductHelpers.trimDescriptionLength(description, descriptionLength),
        price,
        discounted_price,
        thumbnail,
      };
    });
  }
}

export default ProductHelpers;
