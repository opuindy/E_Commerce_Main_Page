import React, { useState, useEffect, useContext, useReducer } from 'react';
import { products } from '../utils/images';
import reducer from './reducer';

const AppContext = React.createContext();
const initialState = {
  cart: [],
  data: products,
  showCart: false,
  modalItem: [],
  showModal: false,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (id) => {
    dispatch({ type: 'ADD_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const increaseIndex = (id) => {
    dispatch({ type: 'INCREASE_INDEX', payload: id });
  };

  const decreaseIndex = (id) => {
    dispatch({ type: 'DECREASE_INDEX', payload: id });
  };

  const changeIndex = (id, index) => {
    dispatch({ type: 'CHANGE_INDEX', payload: { id, index } });
  };

  const loadModalItem = (id) => {
    dispatch({ type: 'LOAD_MODAL_ITEM', payload: id });
  };

  const closeModal = (id) => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const toggleIndex = (id, type) => {
    dispatch({ type: 'TOGGLE_INDEX', payload: { id, type } });
  };

  const picIndex = (id, index) => {
    dispatch({ type: 'PIC_INDEX', payload: { id, index } });
  };

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  // useEffect(() => {
  //   dispatch({ type: 'SHOW_MODAL' });
  // }, [state.modalItem]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        addItem,
        clearCart,
        remove,
        increase,
        decrease,
        toggleCart,
        increaseIndex,
        decreaseIndex,
        changeIndex,
        loadModalItem,
        closeModal,
        toggleIndex,
        picIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
