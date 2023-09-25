import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import './header.scss';

const Header: FC = () => {
  const headerStyles = {
    fontWeight: '600',
    fontSize: '1.7rem',
    lineHeight: '27px',
    color: '#030327',
    padding: '0 20px',
    wordWrap: 'break-word',
  };

  return (
    <Box
      component="header"
      className="header"
      sx={{
        marginTop: '20px',
        width: '100%',
      }}
    >
      <Box className="header__inner">
        <Typography
          variant="h1"
          component="h1"
          className="header__heading"
          sx={headerStyles}
        >
          <Box
            component="span"
            sx={{
              color: '#f99746',
            }}
          >
            Five
          </Box>{' '}
          Leaderboard
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
