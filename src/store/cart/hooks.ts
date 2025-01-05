import {useDispatch} from 'react-redux';
import {CartItem, addItemToCart, emptyCart, removeItemFromCart} from './cart';

function useCart() {
  const dispatch = useDispatch();

  function addToCart(item: CartItem) {
    dispatch(addItemToCart(item));
  }

  function clearCart() {
    dispatch(emptyCart());
  }

  function removeFromCart(itemId: string) {
    dispatch(removeItemFromCart(itemId));
  }

  return {addToCart, clearCart, removeFromCart};
}

export default useCart;
