import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavItem from './navItem';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFdea8;
  padding: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 5px;
`;

const NavLinks = styled.div`
    color: #ff6a3d;
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
`;

const Name = styled.div`
    font-family: 'ConcertOne', sans-serif;
    font-size: 1.5rem;
    font-weight: bold; 
    color: #ff6a3d;

`;

const NavBarWrapper = () => {
    // const location = useLocation();
    const [activeLink, setActiveLink] = useState<string>('');

    useEffect(() => {
        setActiveLink(window.location.pathname)
        console.log('pathname', window.location.pathname)
        console.log('activeLink', activeLink)
    }, [])

    const handleNavItemClick = (link: string) => {
        setActiveLink(link)
    };

    return(
        <NavBarContainer>
            <Name>
                <p>PET VIBE</p>
            </Name>
            <NavLinks>
                <NavItem 
                    link='/qr-scanner' 
                    color='#ff6a3d'
                    isActive={activeLink === '/qr-scanner'}
                    onClick={() => handleNavItemClick('/qr-scanner')}
                >QR Scanning</NavItem>
                <NavItem 
                    link='/qr-create' 
                    color='#ff6a3d' 
                    isActive={activeLink === '/qr-create'}
                    onClick={() => handleNavItemClick('/qr-create')}
                >QR Creation
                </NavItem>
                <NavItem 
                    link='/profile' 
                    color='#ff6a3d'
                    isActive={activeLink === '/profile'}
                    onClick={() => handleNavItemClick('/profile')}
                >Profile</NavItem>
                <NavItem 
                    link='/' 
                    color='#ff6a3d'
                    isActive={activeLink === '/'}
                    onClick={() => handleNavItemClick('/')}
                >Home</NavItem>
                <NavItem 
                    link='/settings' 
                    color='#ff6a3d'
                    isActive={activeLink === '/settings'}
                    onClick={() => handleNavItemClick('/settings')}
                >Settings</NavItem>
            </NavLinks>
        </NavBarContainer>
    );
};

export default NavBarWrapper;