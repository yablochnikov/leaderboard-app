import { FC } from 'react';
import { Box } from '@mui/material';

interface Props {
  name: string;
  score: number;
  src: string;
}

const BannerListItem: FC<Props> = ({ name, score, src }) => {
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
      <img src={src} alt="person" />
      <Box component="span" sx={spanStyles}>
        {name} - {score}
      </Box>
    </Box>
  );
};

export default BannerListItem;
