import { Router } from 'express';
import { BrowserRouter, Navigate, routes, route } from 'react-router-dom';
import HomePage from 'scenes/homePage';
import LoginPage from 'scenes/loginPage';
import ProfilePage from 'scenes/profilePage';
import { useMemo } from "react";
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from 'theme';

function App() {
    const mode = useSelector((state) => state.mode);

    return (
        <div className="app">
            <BrowserRouter>
                <Router>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/profile/:userId" element={<ProfilePage />} />
                </Router>
            </BrowserRouter>
        </div>
    )
}

export default App;
