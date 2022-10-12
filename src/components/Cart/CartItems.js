import React from 'react';
import { image } from '../../utils/images';
import { useGlobalContext } from '../context';
import {
  CartItemContainer,
  PriceContainer,
  DeleteBtn,
  PriceTotal,
} from './CartStyles';

const CartItems = ({ id, thumbnailImages, productEdition, price, amount }) => {
  const { remove } = useGlobalContext();
  return (
    <>
      <CartItemContainer>
        <div className='cartImg'>
          <img src={thumbnailImages[0]} alt='Item_image' />
        </div>
        <PriceContainer>
          <h1>{productEdition.slice(5, 25)}...</h1>
          <div>
            <p>
              ${price} x {amount}
            </p>
            <PriceTotal>${amount * price}</PriceTotal>
          </div>
        </PriceContainer>
        <DeleteBtn type='button' onClick={() => remove(id)}>
          <img src={image.delete_icon} alt='delete_icon' />
        </DeleteBtn>
      </CartItemContainer>
    </>
  );
};

export default CartItems;
