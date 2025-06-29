import React from "react";
import styled from "styled-components";

import { BREAKPOINTS, COLORS, QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import { LuShoppingBag } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

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
        <TabletNav>
          <LuShoppingBag size={24} />
          <CiSearch size={24} strokeWidth={1.4} />
          <GiHamburgerMenu size={24} onClick={() => setShowMobileMenu(true)} />
        </TabletNav>
        <Side />
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
  @media ${QUERIES.tablet} {
    padding: 24px 30px;
    & > div:last-of-type {
      display: none;
    }
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, -4.4286rem + 9.1429vw, 3rem);
  overflow-x: auto;
  margin: 0px 48px;
  @media ${QUERIES.tablet} {
    display: none;
  }
`;

const TabletNav = styled.nav`
  display: flex;
  gap: 24px;
  margin-left: auto;
  @media (min-width: ${BREAKPOINTS.tablet}px) {
    display: none;
  }
  @media (max-width: ${BREAKPOINTS.phone}px) {
    gap: 16px;
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

export default Header;
