import React from 'react';
import Product from './Product';
import Info from './Info';
import Cart from './Cart';
import Modal from './Modal';
import { useGlobalContext } from '../components/context';
import { MainContainer } from './mainPageStyles';

const MainPage = () => {
  const { data, showModal, modalItem } = useGlobalContext();
  return (
    <>
      <Cart />
      {showModal && <Modal modalItem={modalItem} />}
      {data.map((product) => {
        return (
          <MainContainer key={product.id}>
            <Product product={product} />
            <Info product={product} />
          </MainContainer>
        );
      })}
    </>
  );
};

export default MainPage;
