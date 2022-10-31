import { FC } from 'react';

import BoardHeader from '../boardHeader';
import BoardListItem from '../boardListItem';

import './board.scss';

const Board: FC = () => {
  return (
    <main className="board">
      <BoardHeader />
      <ul className="board__list">
        <BoardListItem />
      </ul>
    </main>
  );
};

export default Board;
