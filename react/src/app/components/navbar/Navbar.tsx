import { AppBar, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

interface Props {
    darkMode: boolean,
    handleThemeChange: () => void;
}

const midLinks = [
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    },
    textDecoration: 'none'
}

export default function Navbar({ darkMode, handleThemeChange }: Props) {

    return (
        <AppBar position='fixed' sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Box sx={{display: 'flex', alignItems: 'center'} }>
                    <Typography variant='h6' component={NavLink}
                        to='/'
                        sx={navStyles}>
                        NowEvent
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange} />
                </Box>

                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box>
                    <IconButton size='large' sx={{ color: 'inherit' }} component={Link} to='https://www.facebook.com' target="_blank">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton size='large' sx={{ color: 'inherit' }} component={Link} to='https://www.instagram.com' target="_blank">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton size='large' sx={{ color: 'inherit' }} component={Link} to='https://www.twitter.com' target="_blank">
                        <TwitterIcon />
                    </IconButton>
                </Box>
                <Box>
                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
  );
}