import { FC } from 'react';
import { Box } from '@mui/material';

import { useAppSelector } from '../../hooks';
import { findDifference, findHighest } from '../../utils/array';
import BoardHeader from '../boardHeader';
import BoardListItem from '../boardListItem';
import EditModal from '../customModal/editModal';

import './board.scss';

const Board: FC = () => {
  const { usersView, totalStats, page } = useAppSelector(
    (state) => state.userReducer,
  );

  const res = findDifference(totalStats, page);

  const boardStyles = {
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#f6f6f6',
    borderRadius: '10px',
  };

  return (
    <Box component="main" className="board" sx={boardStyles}>
      <BoardHeader />
      <Box
        component="ul"
        className="board__list"
        sx={{
          width: '100%',
          padding: '20px',
        }}
      >
        {findHighest([usersView]).map((user, i) => {
          return (
            <BoardListItem
              key={i}
              name={user.name as string}
              score={user.score as number}
              position={i}
              places={res[i] ? res[i] : 0}
            />
          );
        })}
      </Box>
      <EditModal />
    </Box>
  );
};

export default Board;
