import React from "react";
import styled from "styled-components";

import { BREAKPOINTS, QUERIES, WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";
import MobileBreadCrumbs from "../Breadcrumbs";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <TabletTitle>Running</TabletTitle>
          <DesktopTitle>Running</DesktopTitle>

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
        <MobileTitle>Running</MobileTitle>
        <MobileBreadCrumbs>
          <MobileBreadCrumbs.Crumb href="/">Home</MobileBreadCrumbs.Crumb>
        </MobileBreadCrumbs>
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;
  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const DesktopTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const TabletTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  @media (min-width: ${BREAKPOINTS.tablet}px) {
    display: none;
  }
  @media ${QUERIES.phones} {
    display: none;
  }
`;

const MobileTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  @media (min-width: ${BREAKPOINTS.phone}px) {
    display: none;
  }
`;

export default ShoeIndex;
