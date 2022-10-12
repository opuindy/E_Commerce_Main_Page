import React from 'react';
import { useGlobalContext } from '../context';
import { image } from '../../utils/images';
import {
  ModalContainer,
  ImageContainer,
  ImageBox,
  PrevButton,
  NextButton,
  ImageBtnContainer,
  Container,
  CloseModalBtn,
} from './modalStyles';

const Modal = ({ modalItem }) => {
  const { toggleIndex, picIndex, closeModal } = useGlobalContext();
  const { productImage, thumbnailImages, id, indexNum } = modalItem[0];

  return (
    <ModalContainer>
      <Container>
        <ImageContainer>
          <CloseModalBtn type='button' onClick={closeModal}>
            <img src={image.close_icon} alt='close_icon' />
          </CloseModalBtn>
          <img
            src={productImage[indexNum]}
            alt='productimage'
            className='images
      '
          />

          <PrevButton
            type='button'
            onClick={() => {
              toggleIndex(id, 'prev');
            }}
          >
            {/* <img src={image.previous_icon} alt='' /> */}
            <svg width='12' height='18' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M11 1 3 9l8 8'
                stroke='#1D2026'
                stroke-width='3'
                fill='none'
                fill-rule='evenodd'
              />
            </svg>
          </PrevButton>
          <NextButton type='button' onClick={() => toggleIndex(id, 'next')}>
            {/* <img src={image.next_icon} alt='' /> */}
            <svg width='13' height='18' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='m2 1 8 8-8 8'
                stroke='#1D2026'
                stroke-width='3'
                fill='none'
                fill-rule='evenodd'
              />
            </svg>
          </NextButton>
        </ImageContainer>
        <ImageBtnContainer>
          {thumbnailImages.map((image, index) => {
            return (
              <ImageBox key={index} onClick={() => picIndex(index, id)}>
                <img src={image} alt='' />
              </ImageBox>
            );
          })}
        </ImageBtnContainer>
      </Container>
    </ModalContainer>
  );
};

export default Modal;
