import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from '../utils/links';
import { image } from '../utils/images';
import { useGlobalContext } from './context';
import {
  NavHead,
  NavLogoContainer,
  NavContainer,
  CartAvartarContainer,
  Avartar,
  Nav,
  NavLinkContainer,
  NavLinks,
  MenuIcon,
  CartContainer,
  LinkList,
} from './navBarStyles';

const Navbar = () => {
  const { amount, toggleCart } = useGlobalContext();
  const [showLink, setShowLink] = useState(false);
  return (
    <NavHead>
      <Nav>
        <NavContainer>
          <NavLogoContainer>
            <MenuIcon
              src={showLink ? image.close_icon : image.menu_btn}
              alt='button_icon'
              onClick={() => setShowLink(!showLink)}
            />
            <img
              src={showLink ? null : image.logo}
              alt={showLink ? null : 'logo'}
              className='logo'
            />
            <NavLinkContainer showLink={showLink}>
              <NavLinks>
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <LinkList key={id}>
                      <Link to={url}>{text}</Link>
                    </LinkList>
                  );
                })}
              </NavLinks>
            </NavLinkContainer>
          </NavLogoContainer>
          <CartAvartarContainer>
            <CartContainer onClick={toggleCart}>
              {amount > 0 ? (
                <div className='number'>
                  <p>{amount}</p>
                </div>
              ) : null}

              <img src={image.cart_icon} alt='carton' />
            </CartContainer>
            <Avartar>
              <img src={image.avatar} alt='avartar' />
            </Avartar>
          </CartAvartarContainer>
        </NavContainer>
      </Nav>
    </NavHead>
  );
};

export default Navbar;
