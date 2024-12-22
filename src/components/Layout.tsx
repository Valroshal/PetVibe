import React from 'react';

import { Outlet } from 'react-router-dom';
import NavBarWrapper from './navbar/navbarWrapper';

const Layout: React.FC = () => {
    return (
        <div>
            <NavBarWrapper />
            <main style={{ padding: '1rem' }}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;