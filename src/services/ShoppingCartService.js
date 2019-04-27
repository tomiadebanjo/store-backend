import models from '../database/models';
import HttpError from '../helpers/ErrorHandler';

const { shopping_cart, product } = models;

class ShoppingCartService {
  static async addProductToCart({ cartId, product_id, attributes, quantity, added_on }) {
    const [cart] = await shopping_cart.findOrCreate({
      where: {
        cart_id: cartId,
        product_id
      },
      defaults: {
        attributes,
        quantity,
        added_on
      }
    });

    return cart;
  }

  static async fetchShoppingCart(cartId) {
    const cart = await shopping_cart.findAll({
      where: {
        cart_id: cartId
      },
      include: [{
        model: product
      }]
    });

    HttpError.throwErrorIfNullOrEmpty(cart, 'Your cart is currently empty', 200);
    return cart;
  }

  static async emptyShoppingCartByCartId(cart_id) {
    const cart = await shopping_cart.destroy({
      where: {
        cart_id
      },
      force: true
    });

    return cart;
  }
}

export default ShoppingCartService;
