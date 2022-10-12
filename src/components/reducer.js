const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    let oldCart = state.cart.filter(
      (cartItem) => cartItem.id !== action.payload
    );
    let newItem = state.data.filter((product) => product.id === action.payload);
    delete newItem.amount;
    const cartItems = oldCart.concat(newItem[0]);
    return { ...state, cart: cartItems };
  }

  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }

  if (action.type === 'REMOVE') {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === 'INCREASE') {
    let newCart = state.data.map((product) => {
      if (product.id === action.payload) {
        return { ...product, amount: product.amount + 1 };
      }
      return product;
    });
    return { ...state, data: newCart };
  }

  if (action.type === 'DECREASE') {
    let newCart = state.data.map((product) => {
      if (product.id === action.payload) {
        let num = (num) => {
          if (num < 1) {
            return 1;
          }
          return num;
        };
        return { ...product, amount: num(product.amount - 1) };
      }
      return product;
    });
    return { ...state, data: newCart };
  }

  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { amount, price } = cartItem;
        let itemTotal = amount * price;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === 'INCREASE_INDEX') {
    let newCart = state.data.map((product) => {
      if (product.id === action.payload) {
        let highestIndex =
          state.data.filter((cartItem) => {
            if (cartItem.id === action.payload) return cartItem;
          })[0].productImage.length - 1;
        let num = (num) => {
          if (num > highestIndex) {
            return 0;
          } else if (num < 0) {
            return highestIndex;
          }
          return num;
        };
        return { ...product, indexNum: num(product.indexNum + 1) };
      }
      return product;
    });
    return {
      ...state,
      data: newCart,
    };
  }
  if (action.type === 'DECREASE_INDEX') {
    let newCart = state.data.map((product) => {
      if (product.id === action.payload) {
        let highestIndex =
          state.data.filter((cartItem) => {
            if (cartItem.id === action.payload) return cartItem;
          })[0].productImage.length - 1;
        let num = (num) => {
          if (num > highestIndex) {
            return 0;
          } else if (num < 0) {
            return highestIndex;
          }
          return num;
        };
        return { ...product, indexNum: num(product.indexNum - 1) };
      }
      return product;
    });

    return {
      ...state,
      data: newCart,
    };
  }

  if (action.type === 'TOGGLE_CART') {
    return { ...state, showCart: !state.showCart };
  }

  if (action.type === 'CHANGE_INDEX') {
    let newCart = state.data.map((cartItem) => {
      if (cartItem.id === action.payload.index) {
        return { ...cartItem, indexNum: action.payload.id };
      }
      return cartItem;
    });
    return {
      ...state,
      data: newCart,
    };
  }

  if (action.type === 'LOAD_MODAL_ITEM') {
    let newItem = state.data.filter(
      (cartItem) => cartItem.id === action.payload
    );
    return { ...state, modalItem: newItem, showModal: !state.showModal };
  }

  // if (action.type === 'SHOW_MODAL') {
  //   return { ...state, showModal: !state.showModal };
  // }

  if (action.type === 'CLOSE_MODAL') {
    return { ...state, showModal: !state.showModal };
  }

  if (action.type === 'TOGGLE_INDEX') {
    let newCart = state.modalItem.map((modalCart) => {
      if (modalCart.id === action.payload.id) {
        let highestIndex = modalCart.productImage.length - 1;
        let num = (num) => {
          if (num > highestIndex) {
            return 0;
          } else if (num < 0) {
            return highestIndex;
          }
          return num;
        };

        if (action.payload.type === 'prev') {
          return { ...modalCart, indexNum: num(modalCart.indexNum - 1) };
        }

        if (action.payload.type === 'next') {
          return { ...modalCart, indexNum: num(modalCart.indexNum + 1) };
        }
      }
      return modalCart;
    });
    return { ...state, modalItem: newCart };
  }

  if (action.type === 'PIC_INDEX') {
    let newItem = state.modalItem.map((modalCart) => {
      if (modalCart.id === action.payload.index) {
        return { ...modalCart, indexNum: action.payload.id };
      }
      return modalCart;
    });
    return { ...state, modalItem: newItem };
  }

  throw new Error('no matching action type');
};

export default reducer;
