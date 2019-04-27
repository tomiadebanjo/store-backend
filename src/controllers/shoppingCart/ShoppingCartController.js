import ShoppingCartService from '../../services/ShoppingCartService';
import ProductService from '../../services/ProductService';
import HttpError from '../../helpers/ErrorHandler';

class ShoppingController {
  static async addProductToCart(req, res, next) {
    try {
      const { body: { size, color, product_id }, session: { cartId } } = req;

      const [product, productSize, productColor] = await Promise.all([
        ProductService.fetchProductDetails(product_id),
        ProductService.fetchProductByIdAndAttributeValue(size),
        ProductService.fetchProductByIdAndAttributeValue(color),
      ]);

      HttpError.throwErrorIfNullOrEmpty(product, 'Provide a valid product_id');
      HttpError.throwErrorIfNullOrEmpty(productSize, `This product is currently not available in '${size}' size`);
      HttpError.throwErrorIfNullOrEmpty(productColor, `This product is currently not available in color '${color}'.`);

      const attributes = `${size}, ${color}`;
      const quantity = 1;
      const added_on = Date.now();
      const cart = await ShoppingCartService.addProductToCart({ cartId, product_id, attributes, quantity, added_on });

      return res.status(200).send(cart);
    } catch (error) {
      next(error);
    }
  }

  static async getShoppingCart(req, res, next) {
    try {
      const { session: { cartId } } = req;

      const shoppingCart = await ShoppingCartService.fetchShoppingCart(cartId);

      return res.status(200).send(shoppingCart);
    } catch (error) {
      next(error);
    }
  }

  static async emptyShoppingCart(req, res, next) {
    try {
      const { session: { cartId } } = req;

      await ShoppingCartService.emptyShoppingCartByCartId(cartId);

      return res.status(200).send([]);
    } catch (error) {
      next(error);
    }
  }
}

export default ShoppingController;
