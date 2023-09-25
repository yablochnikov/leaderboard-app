import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import bannerImg from '../../assets/images/banner.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { userSlice } from '../../store/slices/userSlice';
import { findHighest } from '../../utils/array';
import BannerListItem from '../bannerListItem';

import './banner.scss';
const Banner = () => {
  const dispatch = useAppDispatch();
  const { totalStats, topStats } = useAppSelector((state) => state.userReducer);
  const { setTopStats } = userSlice.actions;
  const res = [...topStats];

  const bannerStyles = {
    position: 'relative',
    marginTop: '25px',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(27, 33, 172, 0.96)',
    borderRadius: '10px',
    padding: '20px',
    color: '#efefef',
    minHeight: '180px',
  };

  useEffect(() => {
    dispatch(setTopStats(findHighest(totalStats)));
  }, [totalStats]);

  return (
    <Box className="banner" sx={bannerStyles}>
      <Box
        className="banner__content"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          className="banner__heading"
          sx={{ fontWeight: '600', fontSize: '22px', lineHeight: '27px' }}
        >
          All-time highest scorers
        </Typography>
        <Typography
          component="p"
          className="banner__description"
          sx={{
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '17px',
            marginTop: '10px',
          }}
        >
          You can be among the leaders already today
        </Typography>
        <Box
          className="banner__list"
          sx={{
            marginTop: '10px',
            display: 'flex',
          }}
        >
          {findHighest([res])
            .slice(0, 4)
            .map((user, i) => {
              return (
                <BannerListItem
                  name={user.name as string}
                  score={user.score as number}
                  src={`https://robohash.org/set_set4/${user.name}`}
                  key={i}
                />
              );
            })}
        </Box>
      </Box>
      <img src={bannerImg} alt="Highest scorers" className="banner__image" />
    </Box>
  );
};

export default Banner;
