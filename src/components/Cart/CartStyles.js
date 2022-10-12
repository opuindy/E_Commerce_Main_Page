import styled from 'styled-components';

const White = 'hsl(0, 0%, 100%)';
const Dark_grayish_blue = 'hsl(219, 9%, 45%)';
const Grayish_blue = 'hsl(220, 14%, 75%)';
const Very_dark_blue = 'hsl(220, 13%, 13%)';
const Orange = 'hsl(26, 100%, 55%)';
const borderRadius = `0.625rem`;
const mainTransition = `all 0.3s linear`;
const Paleorange = 'hsl(25, 100%, 75%)';
const bold = `700`;

export const CartContainer = styled.section`
  width: 95%;
  height: max-content;
  background: ${White};
  position: absolute;
  top: 12%;
  left: 50%;
  border-radius: ${borderRadius};
  z-index: 3;
  transform: ${(props) =>
    props.showCart ? 'translateX(-50%)' : 'translateX(200%)'};
  transition: ${mainTransition};
  box-shadow: 0px 7px 16px -4px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    max-width: 450px;
    left: 68%;
  }
`;

export const CartFooter = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  padding-bottom: 2em;
  transition: ${mainTransition};
`;

export const EmptyText = styled.p`
  width: 100%;
  min-height: 15vh;
  margin: auto;
  margin-top: 1.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;

export const CartHeader = styled.div`
  width: 100%;
  height: 20%;
  padding: 1.5em 2em;
  border-bottom: 1px solid ${Grayish_blue};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h2 {
    text-transform: capitalize;
    text-align: left;
    color: ${Very_dark_blue};
    font-weight: ${bold};
    font-size: 1.3rem;
    margin-right: auto;
  }
`;

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em 0;
  transition: ${mainTransition};

  img {
    height: 5rem;
    width: 5rem;
    border-radius: ${borderRadius};
  }
`;

export const PriceContainer = styled.div`
  width: 50%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: ${Dark_grayish_blue};

  h1 {
    font-size: 1.1rem;
    margin-right: auto;
    text-transform: capitalize;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const PriceTotal = styled.p`
  color: ${Very_dark_blue};
  font-weight: ${bold};
`;

export const DeleteBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${mainTransition};

  img {
    height: 1.6rem;
    width: 1.6rem;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

export const TotalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 0;
  border-top: 1px solid ${Grayish_blue};

  p {
    text-align: center;
    width: max-content;
    font-weight: ${bold};
    color: ${Orange};
    padding: 0.5em;
    border-radius: ${borderRadius};
    background: hsl(25, 100%, 96%);
  }
`;
export const ClearCartBtn = styled.button`
  width: 60%;
  margin: 0 auto;
  padding: 10px 30px;
  border: 1px solid ${Paleorange};
  outline: none;
  border-radius: ${borderRadius};
  background: ${White};
  transition: ${mainTransition};
  position: relative;
  margin-bottom: 1.3em;

  p {
    font-size: 1.05rem;
    color: ${Paleorange};
    font-weight: ${bold};

    &:hover {
      color: ${White};
    }
  }

  &:hover {
    cursor: pointer;
    background: ${Orange};

    &::after {
      display: block;
      content: '';
      height: 100%;
      width: 100%;
      background: ${White};
      opacity: 35%;
      border-radius: ${borderRadius};
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
    }
  }
`;
export const CheckOutBtn = styled.button`
  width: 100%;
  padding: 20px 30px;
  border: none;
  outline: none;
  border-radius: ${borderRadius};
  background: ${Orange};
  transition: ${mainTransition};
  position: relative;

  p {
    font-size: 1.05rem;
    color: ${White};
    font-weight: ${bold};
  }

  &:hover {
    cursor: pointer;

    &::after {
      display: block;
      content: '';
      height: 100%;
      width: 100%;
      background: ${White};
      opacity: 35%;
      border-radius: ${borderRadius};
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
    }
  }
`;
