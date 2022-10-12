import React from 'react';
import { image } from '../../utils/images';
import { useGlobalContext } from '../context';
import {
  ImageContainer,
  ImageBox,
  PrevButton,
  NextButton,
  ImageBtnContainer,
  Container,
} from './productStyles';

const Product = ({ product }) => {
  const { increaseIndex, decreaseIndex, changeIndex, loadModalItem } =
    useGlobalContext();
  return (
    <Container>
      <ImageContainer onClick={() => loadModalItem(product.id)}>
        <img
          src={product.productImage[product.indexNum]}
          alt='productimage'
          className='images
      '
        />
        <PrevButton
          type='button'
          onClick={() => {
            decreaseIndex(product.id);
          }}
        >
          <img src={image.previous_icon} alt='' />
        </PrevButton>
        <NextButton type='button' onClick={() => increaseIndex(product.id)}>
          <img src={image.next_icon} alt='' />
        </NextButton>
      </ImageContainer>
      <ImageBtnContainer>
        {product.thumbnailImages.map((image, index) => {
          return (
            <ImageBox
              key={index}
              onClick={() => changeIndex(index, product.id)}
            >
              <img src={image} alt='' />
            </ImageBox>
          );
        })}
      </ImageBtnContainer>
    </Container>
  );
};

export default Product;
