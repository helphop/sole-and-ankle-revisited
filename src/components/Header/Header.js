import React from 'react';
import styled from 'styled-components/macro';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

import { QUERS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

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
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <Side />
        <Buttons>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2}  />
            <VisuallyHidden>Open Cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2}  />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2}  />
            <VisuallyHidden>Open Menu</VisuallyHidden>
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
  border-top 4px solid hsl(var(--color-gray-900));

  @media ${QUERS.tabletAndSmaller } {
    align-items: center;
  }

  @media ${QUERS.phoneAndSmaller } {
    padding-inline: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    4.5vw - 1.5rem,
    3rem
  );
  margin: 0px 48px;

  @media ${QUERS.tabletAndSmaller } {
     display: none;
  }
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
display: none;
 @media ${ QUERS.tabletAndSmaller } {
    display: flex;
    align-items: baseline;
    gap: clamp(
      1rem,
      4vw,
      3.2rem
    );
    > :first-child {
      transform: translateX(-2px);
    }
  }



`
export default Header;
