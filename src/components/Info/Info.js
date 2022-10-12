import React from 'react';
import { useGlobalContext } from '../context';
import { image } from '../../utils/images';
import {
  CompanyName,
  InfoContainer,
  ProductEdition,
  ProductText,
  PriceContainer,
  CurrentPrice,
  PriceOff,
  OldPrice,
  AmountBtnContainer,
  AmountContainer,
  DecreaseBtn,
  IncreaseBtn,
  AddBtn,
  CartBtnImage,
} from './infoStyles';

const Info = ({ product }) => {
  const { addItem, increase, decrease } = useGlobalContext();
  return (
    <InfoContainer>
      <CompanyName>{product.companyName}</CompanyName>
      <ProductEdition>{product.productEdition}</ProductEdition>
      <ProductText>{product.productText}</ProductText>
      <PriceContainer>
        <div>
          <CurrentPrice>
            ${(product.oldPrice * product.priceOff) / 100}
          </CurrentPrice>
          <PriceOff>{product.priceOff}%</PriceOff>
        </div>
        <OldPrice>${product.oldPrice}</OldPrice>
      </PriceContainer>
      <AmountBtnContainer>
        <AmountContainer>
          <DecreaseBtn type='button' onClick={() => decrease(product.id)}>
            <img src={image.minus_icon} alt='minus_icon' />
          </DecreaseBtn>
          <p>{product.amount}</p>
          <IncreaseBtn type='button' onClick={() => increase(product.id)}>
            <img src={image.plus_icon} alt='plus_icon' />
          </IncreaseBtn>
        </AmountContainer>
        <AddBtn type='button' onClick={() => addItem(product.id)}>
          <div className='btnCart'>
            <CartBtnImage src={image.cart_icon} alt='cart_icon' />
          </div>
          <p className='text'>{product.addText}</p>
        </AddBtn>
      </AmountBtnContainer>
    </InfoContainer>
  );
};

export default Info;
