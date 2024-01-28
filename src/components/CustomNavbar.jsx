/* eslint-disable no-template-curly-in-string */
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { doLogout, getCurrentUser, isLoggedIn } from '../auth';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from 'reactstrap';
const CustomNavbar = () => {


  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUser());
  }, [login]);

  const toggle = () => setIsOpen(!isOpen);
  const logout = () => {
    doLogout(() => {
      setLogin(false);
      navigate("/");
    });
  }
  return (
    <div>

      <Navbar
        expand="md"
        fixed="top"
        className="px-4 transparent-navbar"
        style={{
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(5px) brightness(1.5) hue-rotate(5deg) saturate(0.9)', // Adjusted blur and saturation
          border: '1px solid rgba(200, 200, 200, 0.3)', // Light border
          boxShadow: '0px 50% ${blur(normal)} ${inset}',
        }}
      >

        <NavbarBrand tag={ReactLink} to="/" style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#fff' }}>
          <img src="../image/logo2.png" style={{ height: '40px' }} alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/about" style={{ color: 'white' }}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/contact" style={{ color: 'white' }}>
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/dashboard" style={{ color: 'white' }}>
                Dashboard
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{ color: 'white' }}>
                More
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem tag={ReactLink} to="/services">Our Policies</DropdownItem>
                <DropdownItem>Licenses</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav navbar>
            {
              login && (
                <>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret style={{ color: 'white' }}>
                      Market Place
                    </DropdownToggle>
                    <DropdownMenu >
                      <DropdownItem tag={ReactLink} to="/user/buysell">Buy-Sell Section</DropdownItem>
                      <DropdownItem tag={ReactLink} to="/user/borrow">Borrow Section</DropdownItem>
                      <DropdownItem tag={ReactLink} to="/user/exchange">Exchange Section</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  {/* <NavItem>
                  <NavLink tag={ReactLink} to={`/user/profile/${user.id}`}>{user.name}</NavLink>
                </NavItem> */}
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret style={{ color: 'white' }}>
                      My Section
                    </DropdownToggle>
                    <DropdownMenu >
                      <DropdownItem tag={ReactLink} to={`/user/profile/${user.id}`}>My Profile</DropdownItem>
                      <DropdownItem tag={ReactLink} to="">My Books</DropdownItem>
                      <DropdownItem tag={ReactLink} to="">My Orders</DropdownItem>
                      <DropdownItem tag={ReactLink} to="/user/all-buy-sell-post">All Buy Sell Posts Records</DropdownItem>
                      <DropdownItem tag={ReactLink} to="/user/transaction-buy-sell">All Transaction for buy sell</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink onClick={logout} style={{ color: 'white' }}>Log out</NavLink>
                  </NavItem>
                </>
              )
            }
            {
              !login && (
                <>
                  <NavItem>
                    <NavLink tag={ReactLink} to="/signup" style={{ color: 'white' }}>Sign up</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={ReactLink} to="/signin" style={{ color: 'white' }}>Sign in</NavLink>
                  </NavItem>
                </>
              )
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default CustomNavbar;