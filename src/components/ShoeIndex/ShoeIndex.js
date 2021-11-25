import React from 'react';
import styled from 'styled-components/macro';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';
import { QUERS } from '../../constants';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar/>
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
  aside {
    display: initial;
  }
  @media ${QUERS.tabletAndSmaller} {
    position: relative;
    aside {
      display: none;
    }
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  position: static;
  @media ${QUERS.tabletAndSmaller} {
    position: absolute;
    top: -10px;
    left: 0;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  label {
    display: flex;
  }
  @media ${QUERS.phoneAndSmaller} {
    label {
      display: none;
    }
  }

`;

const Title = styled.h2`
top: 0;
 @media ${QUERS.tabletAndSmaller} {
   position: relative;
   top: 10px;
  font-size: 1.5rem;
  font-weight: var(--font-weight-medium);
 }
`;

export default ShoeIndex;
