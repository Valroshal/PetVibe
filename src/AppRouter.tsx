import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import QRCreationPage from './pages/qrGenerator/QRCreationPage';
import Layout from './components/Layout';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/qr-scanner' element={<HomePage />} />
                    <Route path='/qr-create' element={<QRCreationPage />} />
                    <Route path='/profile' element={<HomePage />} />
                    <Route path='/settings' element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;