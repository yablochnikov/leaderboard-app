import { FC } from 'react';
import { Box } from '@mui/material';

import person from '../../assets/icons/person.svg';

interface Props {
  name: string;
  score: number;
}

const BannerListItem: FC<Props> = ({ name, score }) => {
  const itemStyles = {
    display: 'flex',
    width: '60px',
    flexDirection: 'column',
    marginRight: '10px',
    textAlign: 'center',
    '&:last-child': {
      marginRight: 0,
    },
  };

  const spanStyles = {
    marginTop: '5px',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '15px',
  };

  return (
    <Box className="banner__item" sx={itemStyles}>
      <img src={person} alt="person" />
      <Box component="span" sx={spanStyles}>
        {name} - {score}
      </Box>
    </Box>
  );
};

export default BannerListItem;
