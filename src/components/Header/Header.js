import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

import { QUERIES} from '../../constants';

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
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: none;
  @media ${ QUERIES.laptopAndUp } {
    display: flex;
    gap: clamp(
      1rem,
      4.5vw - 1.5rem,
      3rem
    );
    margin: 0px 48px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  justify-content: flex-end;
  gap: clamp(
    1.5rem,
    5.8vw + 0.5rem,
    3.2rem
  );
  @media ${ QUERIES.laptopAndUp } {
    display: none;
  }

`
export default Header;
