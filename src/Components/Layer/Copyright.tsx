import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    return (
      <Typography variant="body2" style={{color: '#000'}} align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://gabrielopeyemi.com/">
          Final Year Project | Tmt/14/9303
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }