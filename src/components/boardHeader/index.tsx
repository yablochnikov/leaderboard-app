import { FC, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

import { useAppDispatch } from '../../hooks';
import { fetchUsers } from '../../store/actionCreators';
import { userSlice } from '../../store/slices/userSlice';
import { User } from '../../types/User';
import CustomButton from '../customButton';
import AddModal from '../customModal/addModal';

import './boardHeader.scss';

const BoardHeader: FC = () => {
  const dispatch = useAppDispatch();
  const { openAddModal, setUsersView, setPage } = userSlice.actions;
  const [counter, setCounter] = useState(
    JSON.parse(localStorage.getItem('TotalStats') as string)?.length - 1,
  );

  const controlStyles = {
    display: 'flex',
    alignItems: 'center',
    div: {
      display: 'flex',
      marginRight: '8px',
      cursor: 'pointer',
    },
    button: {
      marginRight: '8px',
      '&:last-child': {
        marginRight: '0',
      },
    },
    '&-next, &-prev': {
      '&:hover': {
        'svg, path': {
          fill: '#000',
        },
      },
    },
  };

  const handleFetch = () => {
    dispatch(fetchUsers()).then((response) =>
      dispatch(setUsersView(response.payload as User[])),
    );
  };

  useEffect(() => {
    dispatch(setPage(counter));
  }, []);

  const handleOpen = () => {
    dispatch(openAddModal());
  };

  const handleNextDay = () => {
    if (
      counter !==
      JSON.parse(localStorage.getItem('TotalStats') as string)?.length - 1
    ) {
      const show = JSON.parse(localStorage.getItem('TotalStats') as string)[
        counter + 1
      ];
      dispatch(setUsersView(show));
      setCounter((counter) => counter + 1);
      dispatch(setPage(counter + 1));
    }
  };

  const handlePrevDay = () => {
    if (counter !== 0) {
      const show = JSON.parse(localStorage.getItem('TotalStats') as string)[
        counter - 1
      ];
      dispatch(setUsersView(show));
      setCounter((counter) => counter - 1);
      dispatch(setPage(counter - 1));
    }
  };

  return (
    <Box
      className="board__header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography
        component="h2"
        className="header__heading"
        sx={{
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '22px',
        }}
      >
        Leaders table for this period
      </Typography>
      <Box className="header__controls" sx={controlStyles}>
        <Box className="header__navigate">
          <Button
            className="header__controls-prev"
            onClick={() => handlePrevDay()}
            disabled={counter != 0 ? false : true}
          >
            <svg
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9142 0.112602C10.7792 -0.016776 10.533 -0.0377523 10.3642 0.0657502L5.14686 3.26574C5.05403 3.32267 5 3.40887 5 3.5C5 3.59114 5.05403 3.67733 5.14686 3.73426L10.3642 6.93425C10.533 7.03775 10.7792 7.01678 10.9142 6.8874C11.0492 6.75802 11.0219 6.56923 10.8531 6.46573L6.01769 3.5L10.8531 0.53427C11.0219 0.430768 11.0492 0.24198 10.9142 0.112602Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.91424 0.112602C5.77924 -0.016776 5.53299 -0.0377523 5.36424 0.0657502L0.146858 3.26574C0.0540347 3.32267 0 3.40887 0 3.5C0 3.59114 0.0540347 3.67733 0.146858 3.73426L2.23381 5.01426C2.40256 5.11776 2.64881 5.09678 2.78381 4.9674C2.91882 4.83803 2.89145 4.64924 2.7227 4.54574L1.01769 3.5L5.85313 0.53427C6.02188 0.430768 6.04924 0.24198 5.91424 0.112602ZM3.99878 5.71259C3.86378 5.84196 3.89114 6.03075 4.05989 6.13425L5.36424 6.93425C5.53299 7.03775 5.77924 7.01678 5.91424 6.8874C6.04924 6.75802 6.02188 6.56923 5.85313 6.46573L4.54878 5.66573C4.38003 5.56223 4.13378 5.58321 3.99878 5.71259Z"
                fill="black"
              />
            </svg>
          </Button>
          <Button
            className="header__controls-next"
            onClick={() => handleNextDay()}
            disabled={
              counter !==
              JSON.parse(localStorage.getItem('TotalStats') as string)?.length -
                1
                ? false
                : true
            }
          >
            <svg
              width="11"
              height="7"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.0857612 0.112602C0.220765 -0.016776 0.467009 -0.0377523 0.635763 0.0657502L5.85314 3.26574C5.94597 3.32267 6 3.40887 6 3.5C6 3.59114 5.94597 3.67733 5.85314 3.73426L0.635763 6.93425C0.467009 7.03775 0.220765 7.01678 0.0857612 6.8874C-0.0492422 6.75802 -0.0218817 6.56923 0.146873 6.46573L4.98231 3.5L0.146873 0.53427C-0.0218817 0.430768 -0.0492422 0.24198 0.0857612 0.112602Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.08576 0.112602C5.22076 -0.016776 5.46701 -0.0377523 5.63576 0.0657502L10.8531 3.26574C10.946 3.32267 11 3.40887 11 3.5C11 3.59114 10.946 3.67733 10.8531 3.73426L8.76619 5.01426C8.59744 5.11776 8.35119 5.09678 8.21619 4.9674C8.08118 4.83803 8.10855 4.64924 8.2773 4.54574L9.98231 3.5L5.14687 0.53427C4.97812 0.430768 4.95076 0.24198 5.08576 0.112602ZM7.00122 5.71259C7.13622 5.84196 7.10886 6.03075 6.94011 6.13425L5.63576 6.93425C5.46701 7.03775 5.22076 7.01678 5.08576 6.8874C4.95076 6.75802 4.97812 6.56923 5.14687 6.46573L6.45122 5.66573C6.61997 5.56223 6.86622 5.58321 7.00122 5.71259Z"
                fill="black"
              />
            </svg>
          </Button>
        </Box>
        <Box className="header__buttons">
          <CustomButton
            color="#fff"
            bgcolor="#F99746"
            text={'New day'}
            func={handleFetch}
          />
          <CustomButton
            color="#fff"
            bgcolor="#1E3CA9"
            text={'Add new User'}
            func={handleOpen}
          />
          <AddModal />
        </Box>
      </Box>
    </Box>
  );
};

export default BoardHeader;
