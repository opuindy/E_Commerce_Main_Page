import styled from 'styled-components';

const White = 'hsl(0, 0%, 100%)';
const Black_lightbox = 'hsl(0, 0%, 0%)';
const Dark_grayish_blue = 'hsl(219, 9%, 45%)';
const Very_dark_blue = 'hsl(220, 13%, 13%)';
const mainTransition = `all 0.3s linear`;
const Orange = 'hsl(26, 100%, 55%)';

const bold = `700`;
const regular = `400`;

export const NavHead = styled.div`
  background: ${White};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  width: 100%;
  padding-left: 2em;
  padding-right: 2em;
`;

export const Nav = styled.nav`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    border-bottom: 0.5px solid grey;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: ${mainTransition};
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

export const NavLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  transition: ${mainTransition};
  .logo {
    margin-left: 1em;
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    width: 83%;
    height: 100%;
    .logo {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

export const MenuIcon = styled.img`
  z-index: 5;
  transition: ${mainTransition};

  &:hover {
    cursor: pointer;
    transform: scale(1.3);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavLinkContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background: rgba(0, 0, 0, 0.75);
  transition: ${mainTransition};
  height: ${(props) => (props.showLink ? '100%' : '0')};
  overflow: hidden;
  transform: translateX(-100%);
  transform: ${(props) =>
    props.showLink ? 'translateX(0%)' : 'translateX(-100%)'};
  z-index: 4;

  @media screen and (min-width: 768px) {
    width: 80%;
    position: static;
    background: none;
    height: auto !important;
    margin-left: 3em;
    transform: none;
  }
`;

export const NavLinks = styled.div`
  width: 68%;
  height: 100%;
  background: ${White};
  padding-top: 6rem;
  padding-left: 2em;
  opacity: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  a {
    display: inline-block;
    font-size: 1.1rem;
    padding: 1em;
    padding-top: 0;
    padding-left: 0;
    margin-bottom: 1em;
    position: relative;
    color: ${Dark_grayish_blue};
    transition: ${mainTransition};

    &:hover {
      cursor: pointer;
      padding-left: 1em;
      color: ${Very_dark_blue};
    }

    @media screen and (min-width: 768px) {
      margin: 0;
      padding: 0;
      width: 100%;
      min-height: 100%;

      &:hover {
        padding-left: 0;
      }
    }
  }

  @media screen and (max-width: 375px) {
    width: 58%;
  }

  @media screen and (min-width: 768px) {
    width: 80%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
    padding: 0;
  }
`;

export const LinkList = styled.li`
  @media screen and (min-width: 768px) {
    height: 100%;
    padding: 2.2em 0;
    transition: ${mainTransition};
    position: relative;
    &:hover {
      cursor: pointer;
      &::after {
        display: block;
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-bottom: 3px solid ${Orange};
        pointer-events: none;
      }
    }
  }
`;

export const CartAvartarContainer = styled(NavContainer)`
  width: 20%;
  @media screen and (max-width: 375px) {
    width: 25%;
  }
  @media screen and (min-width: 768px) {
    width: 17%;
  }
`;

export const CartContainer = styled.div`
  position: relative;
  height: 1.7rem;
  width: 1.7rem;
  transition: ${mainTransition};

  div {
    height: 0.7rem;
    width: max-content;
    padding: 0.25em;
    border-radius: 50px;
    background: ${Orange};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -30%;
    left: 20%;

    p {
      font-size: 0.8rem;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    margin-left: 3em;
  }
`;

export const Avartar = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
`;
