import React from 'react';
import { Link, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const NavLink = ({ children, to }) => {
    return (
        <Link color="secondary" component={RouterLink} to={to}>
            {children}
        </Link>
    );
}

export default NavLink;