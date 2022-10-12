import styled from 'styled-components';

const Black_lightbox = 'hsl(0, 0%, 10%)';
const White = 'hsl(0, 0%, 100%)';
const Orange = 'hsl(26, 100%, 55%)';
const mainTransition = `all 0.3s linear`;
const borderRadius = '15px';

export const ModalContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.section`
  width: 60%;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  opacity: none;
  padding: 0 2em;
  @media screen and (min-width: 768px) {
    display: flex;
    height: 90vh;
    margin: auto;
  }
`;

export const CloseModalBtn = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  padding: 1px 2px;
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: -5em;
  right: 2em;
  transition: ${mainTransition};
  img {
    display: block;
    height: 100%;
    width: 100%;
    filter: brightness(0) invert(1);

    &:hover {
      filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg)
        saturate(600%) contrast(0.8);
    }
  }

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 67%;
  margin-top: auto;
  position: relative;
  padding: 0 2em;
  border-radius: ${borderRadius};
  transition: ${mainTransition};

  .images {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${borderRadius};
    object-fit: cover;
    transition: ${mainTransition};
  }

  @media screen and (min-width: 768px) {
    padding: 0 2em;
  }
`;

export const PrevButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border: none;
  outline: none;
  border-radius: 50%;
  background: ${White};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${mainTransition};
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);

  svg {
    &:hover {
      filter: invert(0.9) sepia(70);
      fill: #ff7d1a;
    }
  }

  &:hover {
    cursor: pointer;
    background: hsl(0, 0%, 75%);
  }
`;

export const NextButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  border: none;
  outline: none;
  border-radius: 50%;
  background: ${White};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${mainTransition};
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);

  svg {
    &:hover {
      filter: invert(0.9) sepia(70);
      fill: #ff7d1a;
    }
  }

  &:hover {
    cursor: pointer;
    background: hsl(0, 0%, 75%);
  }
`;

export const ImageBtnContainer = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
  padding: 0 2em;
  transition: ${mainTransition};
  @media screen and (min-width: 1350px) {
    width: 55%;
    height: 20%;
  }
`;

export const ImageBox = styled.div`
  width: 24%;
  height: 60%;
  border-radius: 10px;
  transition: ${mainTransition};
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    transition: ${mainTransition};
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
      opacity: 70%;
      z-index: 1;
      position: absolute;
      top: 0;
      pointer-events: none;
      border: 3px solid ${Orange};
      transition: ${mainTransition};
    }
  }
`;
