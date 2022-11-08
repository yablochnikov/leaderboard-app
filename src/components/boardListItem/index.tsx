import { FC } from 'react';
import { Box } from '@mui/material';

import edit from '../../assets/icons/edit.svg';
import person from '../../assets/icons/person.svg';
import { useAppDispatch } from '../../hooks';
import { userSlice } from '../../store/slices/userSlice';
import { toCapitalize } from '../../utils/string';
import CustomButton from '../customButton';

import './boardListItem.scss';

interface BoardListItemProps {
  name: string;
  score: number;
  position: number;
  places: number;
}

const BoardListItem: FC<BoardListItemProps> = ({
  name,
  score,
  position,
  places,
}) => {
  const dispatch = useAppDispatch();
  const { openEditModal, selectUser } = userSlice.actions;

  const handleOpen = (i: number) => {
    dispatch(openEditModal());
    dispatch(selectUser(i));
  };

  let place = '';

  switch (position + 1) {
    case 1:
      place = `${position + 1}st`;

      break;
    case 2:
      place = `${position + 1}nd`;

      break;
    case 3:
      place = `${position + 1}rd`;

      break;
    default:
      place = `${position + 1}th`;

      break;
  }

  let color = 'red';

  if (places === 0) {
    color = 'orange';
  } else if (places > 0) {
    color = 'green';
  }

  const itemStyles = {
    marginBottom: '20px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left',
    padding: '8px 20px',
    width: '100%',
    border: '1px solid #dbdbdb',
    borderRadius: '10px',
    color: '#000000',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '22px',
    span: {
      marginRight: '30px',
    },
  };

  const statsStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '15px',
    color: '#40a3c4',
  };

  return (
    <>
      <Box component="li" className="board__item" sx={itemStyles}>
        <Box
          className="board__info"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            component="span"
            className="board__place"
            sx={{
              width: '10px',
              color: '#808080',
            }}
          >
            {place}
          </Box>
          <Box
            component="img"
            className="board__avatar"
            src={person}
            alt="avatar"
            sx={{
              margin: '0 30px',
              width: '44px',
              height: '44px',
            }}
          />
          <Box component="span" className="board__score">
            {score ? score : 0}
          </Box>
          <Box
            component="span"
            className="board__name"
            sx={{
              fontSize: '12px',
              lineHeight: '15px',
            }}
          >
            {toCapitalize(name)}
          </Box>
        </Box>
        <Box className="board__stats" style={{ color: color }} sx={statsStyles}>
          <Box component="span">{places} places</Box>

          <CustomButton
            variant="text"
            text={
              <Box
                component="img"
                src={edit}
                alt="edit"
                sx={{
                  width: '25px',
                }}
              />
            }
            func={() => handleOpen(position)}
          />
        </Box>
      </Box>
    </>
  );
};

export default BoardListItem;
