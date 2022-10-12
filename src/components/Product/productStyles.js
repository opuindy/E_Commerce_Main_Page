import styled from 'styled-components';

const White = 'hsl(0, 0%, 100%)';
const Orange = 'hsl(26, 100%, 55%)';
const mainTransition = `all 0.3s linear`;
const borderRadius = '15px';

export const Container = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 70vh;
    margin: auto;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  transition: ${mainTransition};

  .images {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: ${mainTransition};
  }

  @media screen and (min-width: 768px) {
    height: 75%;
    padding: 0 2em;
    &:hover {
      cursor: pointer;
      &::after {
        display: block;
        content: '';
        height: 100%;
        width: 100%;
        border-radius: 10px;
        background: ${White};
        opacity: 20%;
        z-index: 1;
        position: absolute;
        top: 0;
        pointer-events: none;
        border-radius: 3px solid ${Orange};
        transition: ${mainTransition};
      }
    }

    .images {
      border-radius: ${borderRadius};
    }
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
  left: 6%;
  transform: translateY(-50%);

  img {
    display: block;
    width: 40%;
    height: 40%;
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NextButton = styled(PrevButton)`
  left: 88%;
`;

export const ImageBtnContainer = styled.div`
  width: 100%;
  height: 25%;
  display: none;
  justify-content: space-between;
  align-items: center;
  margin-top: 0;
  padding: 0 2em;
  transition: ${mainTransition};
  @media screen and (min-width: 768px) {
    display: flex;
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
