import styled from 'styled-components';

// const Orange = 'hsl(26, 100%, 55%)';
const Paleorange = 'hsl(25, 100%, 75%)';
const Orange = 'hsl(26, 100%, 55%)';
const Very_dark_blue = 'hsl(220, 13%, 13%)';
const Dark_grayish_blue = 'hsl(219, 9%, 45%)';
const White = 'hsl(0, 0%, 100%)';
const Light_grayish_blue = 'hsl(223, 64%, 98%)';
const borderRadius = `0.625rem`;
const mainTransition = `all 0.3s linear`;
const lineHeigth = `1.5`;

/* font-weights:  */
const regular = `400`;
const bold = `700`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  text-align: left;
  margin: auto;
  @media screen and (min-width: 768px) {
    /* height: 65vh; */
  }
`;

export const CompanyName = styled.h3`
  font-weight: ${bold};
  font-size: 0.85rem;
  color: ${Paleorange};
  text-transform: uppercase;
  margin-right: auto;
`;

export const ProductEdition = styled.h1`
  font-size: 2rem;
  font-weight: ${bold};
  color: ${Very_dark_blue};
  margin-right: auto;

  @media screen and (max-width: 400px) {
    margin-top: 1em;
  }
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const ProductText = styled.p`
  color: ${Dark_grayish_blue};
  font-weight: ${regular};
  line-height: ${lineHeigth};

  @media screen and (max-width: 400px) {
    margin-top: 1.5em;
  }
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 400px) {
    margin-top: 1.5em;
  }
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CurrentPrice = styled.p`
  font-size: 2rem;
  color: ${Very_dark_blue};
  font-weight: ${bold};
`;

export const PriceOff = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: 2em;
  width: 3rem;
  font-weight: ${bold};
  color: ${Paleorange};
  padding: 0.2em;
  border-radius: ${borderRadius};
  background: hsl(25, 100%, 96%);
`;

export const OldPrice = styled.p`
  color: ${Dark_grayish_blue};
  text-decoration: line-through;
  font-weight: ${bold};

  @media screen and (min-width: 768px) {
    margin-top: 1.5em;
  }
`;

export const AmountBtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em;
  border-radius: ${borderRadius};
  background: ${Light_grayish_blue};
  margin-top: 1.5em;
  margin-bottom: 1.5em;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 35%;
    padding: 1em;
  }
`;

export const DecreaseBtn = styled.button`
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  transition: ${mainTransition};
  img {
    width: 190%;
    height: 100%;
    color: ${Orange};
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;

export const IncreaseBtn = styled(DecreaseBtn)``;

export const AddBtn = styled.button`
  width: 100%;
  height: 4rem;
  outline: none;
  border: none;
  padding: 10px 30px;
  border-radius: ${borderRadius};
  background: ${Orange};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 3px 19px 32px -15px ${Paleorange};
  -webkit-box-shadow: 3px 19px 32px -15px ${Paleorange};
  -moz-box-shadow: 3px 19px 32px -15px ${Paleorange};

  div {
    margin-right: 0.8em;
    img path {
      fill: white;
    }
  }

  p {
    color: ${White};
    font-weight: ${bold};
    margin-left: 0.8em;
  }

  &:hover {
    cursor: pointer;

    &::after {
      display: block;
      content: '';
      height: 100%;
      width: 100%;
      border-radius: 10px;
      background: ${White};
      opacity: 35%;
      z-index: 1;
      position: absolute;
      top: 0;
      pointer-events: none;
      border-radius: 3px solid ${Orange};
      transition: ${mainTransition};
    }
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

export const CartBtnImage = styled.img`
  filter: brightness(0) invert(1);
`;

// export const Text = styled.p`

// `
