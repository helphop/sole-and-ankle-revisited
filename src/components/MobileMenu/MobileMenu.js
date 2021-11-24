/* eslint-disable no-unused-vars */
import React from 'react';
import { X } from "react-feather";
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import VisuallyHidden from '../VisuallyHidden';


function MobileMenu ({
  isOpen,
  onDismiss
}) {
  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content>
        <CloseButton onClick={onDismiss}>
          <X />
            <VisuallyHidden>
              Dismiss modal
            </VisuallyHidden>
         </CloseButton>
        <Side />
        <nav>
          <a className="selected" href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </nav>
        <Side />
        <footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background: hsla(var(--color-gray-700) / 0.8);
  position: fixed;
   inset: 0;
   z-index: 9999;
`;

const Content = styled(DialogContent)`
  position: absolute;
  inset: 0;
  left: 75px;
  background: hsl(var(--color-white));
  padding: 32px;
  display: flex;
  flex-direction: column;
  nav {
    --padding-block: 11px;
    display: flex;
    flex-direction: column;
    margin-top: calc(-1 * var(--padding-block));
  }

  a {
    text-decoration: none;
    display: block;
  }

  nav a {
    text-transform: uppercase;
    color: currentColor;
    font-size: 1.125rem;
    font-weight: var(--font-weight-medium);
    padding-block: var(--padding-block);
    &.selected {
      color: hsl(var(--color-secondary));
    }
  }

  footer {
    --padding-block: 7px;
    color: currentColor;
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    margin-bottom: calc(-1 * var(--padding-block)); // we must move up to compensate for padding on links

    a {
      padding-block: var(--padding-block); // must increase the tap area
      color: hsl(var(--color-gray-700));
    }
  }
`;


const CloseButton = styled.button`
  position: absolute;
  right: 22px;
  background: transparent;
  border: none;
  width: 48px;
  height: 48px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Side = styled.div`
  flex: 1;
`;

export default MobileMenu;
