import React from 'react';
import CartItems from './CartItems';
import { useGlobalContext } from '../context';
import {
  CartContainer,
  CartHeader,
  CheckOutBtn,
  CartFooter,
  TotalContainer,
  ClearCartBtn,
  EmptyText,
} from './CartStyles';

const Cart = () => {
  const { cart, showCart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <CartContainer showCart={showCart}>
        <CartHeader>
          <h2>Cart</h2>
        </CartHeader>
        <CartFooter>
          <EmptyText>Cart is empty</EmptyText>
        </CartFooter>
      </CartContainer>
    );
  }
  return (
    <CartContainer showCart={showCart}>
      <CartHeader>
        <h2>Cart</h2>
      </CartHeader>
      <CartFooter>
        {cart.map((item) => {
          return <CartItems key={item.id} {...item} />;
        })}
        <TotalContainer>
          <h2>Total</h2>
          <p>${total}</p>
        </TotalContainer>
        <ClearCartBtn type='button' onClick={clearCart}>
          <p>Clear Cart</p>
        </ClearCartBtn>
        <CheckOutBtn type='button'>
          <p>Checkout</p>
        </CheckOutBtn>
      </CartFooter>
    </CartContainer>
  );
};

export default Cart;
