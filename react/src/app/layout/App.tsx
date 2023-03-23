import { useState } from 'react';
import './style.css';
import { Container, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const palleteType = darkMode ? 'dark' : 'light';
    const theme = createTheme({
        palette: {
            mode: palleteType,
            background: {
                default: palleteType === 'light' ? '#eaeaea' : '#121212'
            }
        }
    });
    function handleThemeChange() {
        setDarkMode(!darkMode);
    }

    return (
        <ThemeProvider theme={theme}>
            <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
            <CssBaseline />
            <Navbar darkMode={darkMode} handleThemeChange={handleThemeChange} />
            <Outlet />
        </ThemeProvider>
    )
}