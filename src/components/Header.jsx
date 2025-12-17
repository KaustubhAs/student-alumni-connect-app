import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = [
    {
        name: 'Directory',
        path: '/directory'
    },
    {
        name: 'Resources',
        path: '/resources'
    },
    {
        name: 'Following',
        path: '/following'
    },
    // {
    //   name: 'FAQ',
    //   path: '/faq'
    // },
]
const settings = [
    {
        name: 'View Profile',
        path: '/view-profile'
    },
    {
        name: 'Account Setting',
        path: '/edit'
    },
    {
        name: 'Logout',
        path: '/'
    },
]

const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
}

/**

***Description**

This is a header component which holds navigation options.

***Props**

```None```

***Structure**

This component contains navigation buttons.

```jsx
<Toolbar>
    <Typography> PAPHYA </Typography>
    ...
    <Menu>
    <Button> Directory </Button>
    <Button> Resources </Button>
    <Button> Job Opportunities </Button>
    <Button> Directory </Button>
    </Menu>
    ...
    <Menu>
    <Button> Settings </Button>
    <Button> View Profile </Button>
    <Button> Account Setting </Button>
    <Button> Logout </Button>
    </Menu>
    ...
</Toolbar>
```

***States**

A useState hook for navigation bar menu.
```jsx
    const [anchorElNav, setAnchorElNav] = React.useState(null);
```

A useState hook for user dropdown menu.
```jsx
    const [anchorElUser, setAnchorElUser] = React.useState(null);
```

***Functions**

Multiple onClick event buttons functions for
interation with header's menus.
```jsx
const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
    setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
    setAnchorElUser(null);
};
```

*/

const Header = ({ userProfile }) => {
    const fullname = userProfile?.find(e => !!e)?.FullName;
    let navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (

        <AppBar position="static" style={{ background: "#FF7518" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 'bold' }}
                    >
                        CONNECT
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            data-testid="header-handleOpenNavMenu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            data-testid="header-handleCloseNavMenu"
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={() => { handleCloseNavMenu(); navigate(page.path); window.location.reload(true); }}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, fontWeight: 'bold' }}
                    >
                        CONNECT
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={() => { handleCloseNavMenu(); navigate(page.path); }}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                data-testid="header-handleCloseNavMenu"
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, m: 2 }}>
                        <Typography variant="body2" style={{ fontFamily: "sans-serif" }} textAlign="center">{fullname?.toUpperCase()}</Typography>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0 }}>
                                <Avatar
                                    onClick={handleOpenUserMenu}
                                    data-testid="header-handleOpenUserMenu"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}

                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting.name}
                                    onClick={() => { handleCloseUserMenu(); navigate(setting.path); if (setting.name === "Logout") { handleLogout(); } }}
                                    data-testid="header-handleCloseUserMenu"
                                >
                                    <Typography textAlign="center" data-testid="header-typography">{
                                        /* istanbul ignore next */
                                        (setting.name === "View Profile") ? (fullname !== "" ? fullname : "View Profile") : setting.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

Header.prototypes = {
    userProfile: PropTypes.object.isRequired,
}

export default Header;
