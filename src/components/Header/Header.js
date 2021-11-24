import React from 'react';
import styled from 'styled-components/macro';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

import { QUERS } from '../../constants';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <Buttons className="buttons">
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2}  />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2}  />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2}  />
          </UnstyledButton>
        </Buttons>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};


const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid hsl(var(--color-gray-300));
  @media ${QUERS.tabletAndSmaller } {
    border-top 4px solid hsl(var(--color-gray-900));
  }
  @media ${QUERS.phoneAndSmaller } {
    padding-inline: 16px 19px;
  }
`;

const Nav = styled.nav`
  @media ${QUERS.tabletAndSmaller } {
     display: none;
  }

  display: flex;
  gap: clamp(
    1rem,
    4.5vw - 1.5rem,
    3rem
  );
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: hsl(var(--color-gray-900));
  font-weight: var(--font-weight-medium);
  &:first-of-type {
    color: hsl(var(--color-secondary));
  }
`;

const Buttons = styled.div`
 @media ${ QUERS.tabletAndSmaller } {
    display: flex;
    width: 100%;
    margin-left: auto;
    justify-content: flex-end;
    gap: clamp(
      1.5rem,
      5.8vw + 0.5rem,
      3.2rem
    );
  }
display: none;


`
export default Header;
