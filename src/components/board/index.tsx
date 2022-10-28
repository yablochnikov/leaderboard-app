import { FC } from 'react';

import BoardHeader from '../boardHeader';

import './board.scss';

const Board: FC = () => {
  return (
    <main className="board">
      <BoardHeader />
    </main>
  );
};

export default Board;
